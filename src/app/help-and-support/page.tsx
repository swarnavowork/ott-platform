import LegalLayout from "@/src/components/legal/LegalLayout";

export default function HelpSupport() {
  return (
    <LegalLayout title="Help & Support">

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-black/30 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold mb-3">
            Account Support
          </h3>

          <p className="text-gray-400">
            Login issues, subscriptions and billing support.
          </p>
        </div>

        <div className="bg-black/30 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold mb-3">
            Technical Support
          </h3>

          <p className="text-gray-400">
            App crashes, performance issues and bug reports.
          </p>
        </div>

        <div className="bg-black/30 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold mb-3">
            Email Support
          </h3>

          <p className="text-gray-400">
            thebliss.healthandwellness@gmail.com
          </p>
        </div>

        <div className="bg-black/30 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold mb-3">
            Phone Support
          </h3>

          <p className="text-gray-400">
            +91 9137345556
          </p>
        </div>

      </div>

    </LegalLayout>
  );
}