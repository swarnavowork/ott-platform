export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#07111F] text-white px-6 md:px-20 py-32">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">

          <span className="bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm">
            NeoStream Legal
          </span>

          <h1 className="text-5xl md:text-7xl font-black mt-6 mb-4">
            Terms & Conditions
          </h1>

          <p className="text-gray-400">
            Last Updated: 6 May 2026
          </p>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Acceptance of Terms
            </h2>

            <p className="text-gray-300 leading-8">
              By accessing NeoStream you agree to these Terms &
              Conditions. If you do not agree, please discontinue
              using the platform.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Eligibility
            </h2>

            <p className="text-gray-300 leading-8">
              You must be at least 18 years old to use the
              platform.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4">
              User Accounts
            </h2>

            <ul className="list-disc pl-6 text-gray-300 space-y-3">
              <li>Provide accurate information</li>
              <li>Keep login credentials secure</li>
              <li>Responsible for account activity</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Subscriptions & Payments
            </h2>

            <p className="text-gray-300 leading-8">
              Some NeoStream services require paid subscriptions.
              Payments are securely processed through trusted
              payment providers.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">
              Contact Us
            </h2>

            <div className="bg-black/30 rounded-2xl p-6 border border-white/10">

              <p className="mb-2">
                📧 thebliss.healthandwellness@gmail.com
              </p>

              <p>
                📞 +91 9137345556
              </p>

            </div>
          </section>

        </div>

      </div>

    </main>
  );
}