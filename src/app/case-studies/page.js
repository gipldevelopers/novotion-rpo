import { Layout } from "@/components/layout/Layout";
import { CaseStudiesHero } from "@/components/case-studies/CaseStudiesHero";
import { CaseStudiesGrid } from "@/components/case-studies/CaseStudiesGrid";
import { CTASectionV2 } from "@/components/home-v2/CTASectionV2";

export const metadata = {
    title: "Success Stories & Case Studies | Noltven Results",
    description: "Read how Noltven helps businesses scale and solve complex operational challenges. Our success stories are built on data and strategic execution.",
};

export default function CaseStudiesPage() {
    return (
        <Layout>
            <main className="bg-white min-h-screen">
                <CaseStudiesHero />
                <CaseStudiesGrid />
                <CTASectionV2 />
            </main>
        </Layout>
    );
}
