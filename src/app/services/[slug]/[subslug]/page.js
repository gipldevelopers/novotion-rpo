import { Layout } from "@/components/layout/Layout";
import { ServiceSubDetailClient } from "@/components/services/ServiceSubDetailClient";
import { servicesData } from "@/data/servicesData";
import { Settings2 } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }) {
    const { slug, subslug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const decodedSubslug = decodeURIComponent(subslug);
    
    const service = servicesData.find(s => 
        s.slug === decodedSlug || 
        s.slug === decodedSlug.replace(/\s+/g, '-') ||
        s.id === decodedSlug
    );
    
    const subService = service?.whatYouGet?.find((ss) => 
        ss.slug === decodedSubslug || 
        ss.slug === decodedSubslug.replace(/\s+/g, '-') ||
        ss.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === decodedSubslug.replace(/\s+/g, '-')
    );

    if (!subService) return { title: "Section Not Found" };

    return {
        title: `${subService.title} | ${service?.shortTitle || 'Service'} Specialist`,
        description: subService.description || `Deep dive into ${subService.title} by Noltven.`,
    };
}

export default async function ServiceSubDetail({ params }) {
    const { slug, subslug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    const decodedSubslug = decodeURIComponent(subslug);
    
    const service = servicesData.find(s => 
        s.slug === decodedSlug || 
        s.slug === decodedSlug.replace(/\s+/g, '-') ||
        s.id === decodedSlug
    );
    
    const subService = service?.whatYouGet?.find((ss) => 
        ss.slug === decodedSubslug || 
        ss.slug === decodedSubslug.replace(/\s+/g, '-') ||
        ss.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === decodedSubslug.replace(/\s+/g, '-')
    );

    if (!service || !subService) {
        return (
            <Layout>
                <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-20">
                    <h1 className="text-4xl font-bold mb-4 font-display">Section Not Found</h1>
                    <p className="text-slate-500 mb-8">The detailed section you're looking for could not be located in our production architecture.</p>
                    <Link href={`/services/${slug}`} className="px-6 py-3 bg-secondary text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#b04f30] transition-colors">
                        Back to Service Overview
                    </Link>
                </div>
            </Layout>
        );
    }

    // SANITIZE DATA FOR CLIENT COMPONENT (REMOVE NON-SERIALIZABLE ICONS)
    const sanitizedService = { ...service };
    delete sanitizedService.icon;

    // Use a clean version of subService if it contains any non-serializable components
    const sanitizedSubService = JSON.parse(JSON.stringify(subService));

    return (
        <Layout>
            <ServiceSubDetailClient 
                service={sanitizedService} 
                subService={sanitizedSubService} 
                slug={slug} 
            />
        </Layout>
    );
}
