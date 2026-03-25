import "./globals.css";

export const metadata = {
  title: "Noltven RPO - Strategic Recruitment Process Outsourcing",
  description: "Enterprise-grade Recruitment Process Outsourcing for USA and UK. Accelerate hiring with measurable outcomes.",
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
