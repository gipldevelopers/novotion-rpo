import { Layout } from "@/components/layout/Layout";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceDetailContent } from "@/components/services/ServiceDetailContent";
import { DigitalMarketingSpecialContent } from "@/components/services/DigitalMarketingSpecialContent";
import { AISpecialContent } from "@/components/services/AISpecialContent";
import { FinanceSpecialContent } from "@/components/services/FinanceSpecialContent";
import { RecruitmentSpecialContent } from "@/components/services/RecruitmentSpecialContent";
import { BusinessDevelopmentSpecialContent } from "@/components/services/BusinessDevelopmentSpecialContent";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { servicesData } from "@/data/servicesData";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const service = servicesData.find(s =>
        s.slug === decodedSlug ||
        s.slug === decodedSlug.replace(/\s+/g, '-') ||
        s.id === decodedSlug
    );

    if (!service) return { title: "Service Not Found" };

    return {
        title: `${service.title} | Strategic Business Solutions`,
        description: service.description || `Expert ${service.title} services by Noltven. Scale your business with our global expertise.`,
    };
}

export default async function ServiceDetail({ params }) {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const service = servicesData.find(s =>
        s.slug === decodedSlug ||
        s.slug === decodedSlug.replace(/\s+/g, '-') ||
        s.id === decodedSlug
    );

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

    // Sanitize service object: remove non-serializable icon component
    const { icon, ...serializableService } = service;

    const isDigitalMarketing = service.slug === "digital-marketing";
    const isAIAutomation = service.slug === "ai-automation";
    const isFinance = service.slug === "accounting-finance";
    const isRecruitment = service.slug === "recruitment-services";
    const isBizDev = service.slug === "business-development";

    return (
        <Layout>
            <main className="bg-white">
                {!isDigitalMarketing && !isAIAutomation && !isFinance && !isRecruitment && !isBizDev && (
                    <ServicesHero
                        title={service.title}
                        description={service.description}
                        ctaText={service.cta}
                    />
                )}
                {isDigitalMarketing ? (
                    <DigitalMarketingSpecialContent service={serializableService} />
                ) : isAIAutomation ? (
                    <AISpecialContent service={serializableService} />
                ) : isFinance ? (
                    <FinanceSpecialContent service={serializableService} />
                ) : isRecruitment ? (
                    <RecruitmentSpecialContent service={serializableService} />
                ) : isBizDev ? (
                    <BusinessDevelopmentSpecialContent service={serializableService} />
                ) : (
                    <ServiceDetailContent service={serializableService} />
                )}
                {!isDigitalMarketing && !isAIAutomation && !isFinance && !isRecruitment && !isBizDev && <ServiceFAQ faqs={service.faqs} />}
            </main>
        </Layout>
    );
}
