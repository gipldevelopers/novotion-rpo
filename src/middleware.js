import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "supersecret123");

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Protect /admin routes (except Setup Utility for emergency maintenance)
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin-login') && !pathname.startsWith('/admin/setup-db')) {
    const token = (await request.cookies).get('admin_token')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/admin-login', request.url));
    }

    try {
      await jwtVerify(token, JWT_SECRET);
      return NextResponse.next();
    } catch (error) {
      console.error('JWT Verification failed:', error);
      return NextResponse.redirect(new URL('/admin-login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
