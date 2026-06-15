import { Layout } from "@/components/layout/Layout";

export const metadata = {
  title: "Privacy Policy | Novotion",
  description: "Learn how Novotion collects, uses, and protects your information.",
};

export default function PrivacyPolicy() {
  return (
    <Layout>
      <main className="bg-white py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-4xl mx-auto mt-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>

          <div className="space-y-8 text-gray-700 text-lg">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Personal details provided during enrollment (name, contact info, payment details).</li>
                <li>Employment-related information (salary, job offer details) necessary to calculate service fees.</li>
                <li>Data voluntarily shared during training and support interactions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To provide career training, coaching, and support services.</li>
                <li>To manage billing, invoicing, and service fee collection.</li>
                <li>To improve our services and offer relevant content.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Confidentiality</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>All proprietary and personal information shared by the Client will be treated as confidential.</li>
                <li>Information will not be disclosed to third parties without consent, except as required by law or for payment collection purposes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Protection</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Payments are processed securely via ACH or Stripe.</li>
                <li>Novotion takes reasonable measures to protect personal data from unauthorized access or misuse.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Client Rights</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Clients may request clarification on how their data is used.</li>
                <li>By using our services, Clients consent to the terms outlined in this Privacy Policy.</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
