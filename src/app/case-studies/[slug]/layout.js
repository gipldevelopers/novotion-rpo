import { servicesData } from "@/data/servicesData";

// For case studies, since it's dynamic from DB, we'll try to fetch for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/case-studies?slug=${slug}`);
    if (res.ok) {
      const study = await res.json();
      return {
        title: `${study.title} | Case Study Performance Report`,
        description: study.overview || `detailed performance analysis for ${study.title} by Noltven.`,
      };
    }
  } catch (err) {
    // fallback
  }

  return {
    title: "Detailed Strategic Case Study | Noltven Success Stories",
    description: "In-depth analysis of how Noltven solves complex business challenges and drives growth through strategic execution.",
  };
}

export default function CaseStudyLayout({ children }) {
  return children;
}
