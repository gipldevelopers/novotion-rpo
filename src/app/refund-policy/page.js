import { Layout } from "@/components/layout/Layout";

export const metadata = {
  title: "Cancellation & Refund Policy | Novotion",
  description: "Read the cancellation and refund policy for Novotion services.",
};

export default function RefundPolicy() {
  return (
    <Layout>
      <main className="bg-white py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-4xl mx-auto mt-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cancellation & Refund Policy</h1>

          <div className="space-y-8 text-gray-700 text-lg">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. No Refund Policy</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>All fees paid to Novotion are non-refundable once services have been initiated.</li>
                <li>The Client acknowledges that there is no refund or reimbursement under any circumstances, regardless of employment status, after services have commenced.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Employment Guarantee Disclaimer</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Novotion does not guarantee job placement or employment.</li>
                <li>Success depends on the Client's effort, commitment, and third-party hiring decisions, which are beyond Novotion's control.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Service Interruption & Reinstatement</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>If employment is interrupted due to unforeseen circumstances, Novotion will reinstate services without charging the remaining service fees.</li>
                <li>Once the Client secures new employment, full fees as per the Agreement will become due.</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
