import "./globals.css";

export const metadata = {
  title: {
    default: "Noltven | Strategic Recruitment, Digital Marketing & AI Solutions",
    template: "%s | Noltven"
  },
  description: "Accelerate your business growth with Noltven. We offer premium Recruitment Process Outsourcing, performance-driven Digital Marketing, and intelligent AI Automation across the USA and UK.",
  keywords: ["RPO", "Strategic Recruitment", "Digital Marketing", "AI Automation", "Business Growth", "Hiring Solutions", "UK RPO", "USA RPO"],
  authors: [{ name: "Noltven Team" }],
  creator: "Noltven",
  publisher: "Noltven",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Noltven | Strategic Recruitment & Digital Solutions",
    description: "Enterprise-grade hiring and digital strategy for modern businesses. Scale with measurable outcomes.",
    url: "https://noltven.com",
    siteName: "Noltven",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noltven | Strategic Recruitment & Digital Solutions",
    description: "Enterprise-grade hiring and digital strategy for modern businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
