"use client";

import { Layout } from "@/components/layout/Layout";
import { BlogsHero } from "@/components/blogs/BlogsHero";
import { BlogGrid } from "@/components/blogs/BlogGrid";
import { CTASectionV2 } from "@/components/home-v2/CTASectionV2";

export default function BlogsPage() {
    return (
        <Layout>
            <main className="bg-white min-h-screen">
                <BlogsHero />
                <BlogGrid />
                <CTASectionV2 />
            </main>
        </Layout>
    );
}
