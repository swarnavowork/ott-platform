import LegalLayout from "@/src/components/legal/LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">

      <p className="text-gray-400 mb-10">
        Last Updated: 6 May 2026
      </p>

      <section className="space-y-10 text-gray-300 leading-8">

        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            1. Introduction
          </h2>

          <p>
            The Bliss Health And Wellness ("Company", "we", "our", or "us")
            operates the Neopurush platform. This Privacy Policy explains
            how we collect, use, disclose, and protect your information
            when you access or use our services.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            2. Information We Collect
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Mobile Number</li>
            <li>Device Information</li>
            <li>IP Address</li>
            <li>Usage Analytics and Watch History</li>
            <li>Cookies and Tracking Technologies</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            3. How We Use Your Information
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Provide and maintain our services</li>
            <li>Manage user accounts</li>
            <li>Improve platform performance</li>
            <li>Personalize user experience</li>
            <li>Respond to customer support requests</li>
            <li>Send important notifications and updates</li>
            <li>Prevent fraud and unauthorized activity</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            4. Sharing of Information
          </h2>

          <p>
            We do not sell or rent your personal information.
            Information may be shared with trusted service providers,
            payment processors, analytics partners, or legal authorities
            when required by law.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            5. Third-Party Services
          </h2>

          <p>
            Our platform may use third-party services such as Firebase,
            Google Authentication, analytics providers, and payment
            gateways. These services maintain their own privacy policies.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            6. Data Retention
          </h2>

          <p>
            We retain user information only for as long as necessary
            to provide services, fulfill legal obligations, resolve
            disputes, and enforce agreements.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            7. Your Rights
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Access your personal information</li>
            <li>Update or correct information</li>
            <li>Request deletion of your account and data</li>
            <li>Withdraw consent where applicable</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            8. Children's Privacy
          </h2>

          <p>
            Neopurush is intended for users who are at least 18 years old.
            We do not knowingly collect personal information from children.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            9. Security
          </h2>

          <p>
            We implement reasonable administrative, technical, and
            organizational safeguards to protect your information.
            However, no online system can guarantee complete security.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            10. Changes to This Policy
          </h2>

          <p>
            We may update this Privacy Policy from time to time.
            Continued use of the platform after changes constitutes
            acceptance of the revised policy.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            11. Contact Us
          </h2>

          <div className="bg-black/30 border border-white/10 rounded-2xl p-6">
            <p className="mb-2">
              📧 thebliss.healthandwellness@gmail.com
            </p>

            <p>
              📞 +91 9137345556
            </p>
          </div>
        </div>

      </section>

    </LegalLayout>
  );
}