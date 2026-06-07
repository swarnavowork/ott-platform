import LegalLayout from "@/src/components/legal/LegalLayout";

export default function AboutUs() {
  return (
    <LegalLayout title="About NeoStream">

      <p className="text-gray-300 leading-8 mb-10">
        NeoStream is a premium OTT streaming platform focused on
        Wealth, Wellness, Success, Motivation and Educational Content.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-black/30 rounded-2xl p-6">
          <h3 className="text-2xl font-bold mb-3">
            Our Mission
          </h3>

          <p className="text-gray-400">
            Deliver quality educational and motivational content.
          </p>
        </div>

        <div className="bg-black/30 rounded-2xl p-6">
          <h3 className="text-2xl font-bold mb-3">
            Our Vision
          </h3>

          <p className="text-gray-400">
            Become India's leading wellness OTT platform.
          </p>
        </div>

        <div className="bg-black/30 rounded-2xl p-6">
          <h3 className="text-2xl font-bold mb-3">
            Security
          </h3>

          <p className="text-gray-400">
            Privacy-first and secure user experience.
          </p>
        </div>

      </div>

    </LegalLayout>
  );
}