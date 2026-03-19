import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import pool from "@/lib/db";

const ADMIN_USER = process.env.ADMIN_USER || "admin";
const ADMIN_PASS = process.env.ADMIN_PASS || "admin123";
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "supersecret123");

export async function POST(req) {
    try {
        const { username, password } = await req.json();

        // Check DB for User
        const [rows] = await pool.execute("SELECT * FROM users WHERE username = ?", [username]);
        let isValid = false;

        if (rows.length > 0) {
            const user = rows[0];
            isValid = (password === user.password); // Plain text check
        } else if (username === ADMIN_USER && password === ADMIN_PASS) {
            // Fallback to Env for demo
            isValid = true;
        }

        if (isValid) {
            const token = await new SignJWT({ username, role: "admin" })
                .setProtectedHeader({ alg: "HS256" })
                .setExpirationTime("24h")
                .sign(JWT_SECRET);

            (await cookies()).set("admin_token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                path: "/",
                maxAge: 60 * 60 * 24, // 1 day
                sameSite: "strict",
            });

            return NextResponse.json({ success: true, message: "Logged in successfully" });
        } else {
            return NextResponse.json({ success: false, message: "Invalid username or password" }, { status: 401 });
        }
    } catch (error) {
        console.error("Login API Error:", error);
        return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
    }
}
