"use client";

import { useParams } from "next/navigation";
import { Layout } from "@/components/layout/Layout";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceDetailContent } from "@/components/services/ServiceDetailContent";
import { DigitalMarketingSpecialContent } from "@/components/services/DigitalMarketingSpecialContent";
import { AISpecialContent } from "@/components/services/AISpecialContent";
import { FinanceSpecialContent } from "@/components/services/FinanceSpecialContent";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { servicesData } from "@/data/servicesData";

export default function ServiceDetail() {
    const params = useParams();
    const slug = params?.slug ? decodeURIComponent(params.slug) : "";
    const service = servicesData.find(s =>
        s.slug === slug ||
        s.slug === slug.replace(/\s+/g, '-') ||
        s.id === slug
    );
    const loading = false; // Static data is available immediately

    if (loading) {
        return (
            <Layout>
                <div className="min-h-[80vh] flex flex-col items-center justify-center p-20">
                    <div className="w-16 h-16 border-4 border-slate-100 border-t-secondary rounded-full animate-spin mb-6"></div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Assembling Strategy Layer...</p>
                </div>
            </Layout>
        );
    }

    if (!service) {
        return (
            <Layout>
                <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-20">
                    <h1 className="text-4xl font-bold mb-4 font-display">Service Specification Not Found</h1>
                    <p className="text-slate-500 mb-8">The service offering you're looking for could not be located in our production database.</p>
                    <a href="/services" className="px-6 py-3 bg-secondary text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#b04f30] transition-colors">
                        Return to All Services
                    </a>
                </div>
            </Layout>
        );
    }

    const isDigitalMarketing = service.slug === "digital-marketing";
    const isAIAutomation = service.slug === "ai-automation";
    const isFinance = service.slug === "accounting-finance";

    return (
        <Layout>
            <main className="bg-white">
                {!isDigitalMarketing && !isAIAutomation && !isFinance && (
                    <ServicesHero
                        title={service.title}
                        description={service.description}
                        ctaText={service.cta}
                    />
                )}
                {isDigitalMarketing ? (
                    <DigitalMarketingSpecialContent service={service} />
                ) : isAIAutomation ? (
                    <AISpecialContent service={service} />
                ) : isFinance ? (
                    <FinanceSpecialContent service={service} />
                ) : (
                    <ServiceDetailContent service={service} />
                )}
                {!isDigitalMarketing && !isAIAutomation && !isFinance && <ServiceFAQ faqs={service.faqs} />}
            </main>
        </Layout>
    );
}
