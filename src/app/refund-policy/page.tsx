export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#07111F] text-white px-6 md:px-20 py-32">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">

          <span className="bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm">
            NeoStream Legal
          </span>

          <h1 className="text-5xl md:text-7xl font-black mt-6 mb-4">
            Refund & Cancellation Policy
          </h1>

          <p className="text-gray-400">
            Last Updated: 6 May 2026
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-black/30 p-6 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-3">
              Subscription Cancellation
            </h3>

            <p className="text-gray-300">
              Cancel anytime before the next billing cycle.
            </p>
          </div>

          <div className="bg-black/30 p-6 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-3">
              Refund Eligibility
            </h3>

            <p className="text-gray-300">
              Duplicate charges and unauthorized transactions.
            </p>
          </div>

          <div className="bg-black/30 p-6 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-3">
              Processing Time
            </h3>

            <p className="text-gray-300">
              Approved refunds are processed within 7-10 business days.
            </p>
          </div>

          <div className="bg-black/30 p-6 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-3">
              Contact Support
            </h3>

            <p className="text-gray-300">
              thebliss.healthandwellness@gmail.com
            </p>

            <p className="text-gray-300 mt-2">
              +91 9137345556
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}