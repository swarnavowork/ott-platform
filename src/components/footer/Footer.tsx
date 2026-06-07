import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-24">

      {/* TOP GRADIENT */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent" />

      <div className="bg-black px-10 md:px-20 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* LOGO */}
          <div>
            <h1 className="text-5xl font-black tracking-wider text-red-600 mb-4">
              NEOSTREAM
            </h1>

            <p className="text-gray-400 leading-7">
              Premium OTT streaming platform for
              Wealth, Wellness, Success, Motivation
              and Exclusive Content.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 transition flex items-center justify-center"
              >
                <FaYoutube />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 transition flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>

          {/* COMPANY */}
         <div>
  <h2 className="text-xl font-bold mb-6">
    Company
  </h2>

  <ul className="space-y-4 text-gray-400">

    <li>
      <a
        href="/about-us"
        className="hover:text-white transition"
      >
        About Us
      </a>
    </li>

    <li>
      <a
        href="/help-and-support"
        className="hover:text-white transition"
      >
        Help & Support
      </a>
    </li>

  </ul>
</div>

          {/* SUPPORT */}
         <div>
  <h2 className="text-xl font-bold mb-6">
    Support
  </h2>

  <ul className="space-y-4 text-gray-400">

    <li>
      <a
        href="/privacy-policy"
        className="hover:text-white transition"
      >
        Privacy Policy
      </a>
    </li>

    <li>
      <a
        href="/terms-and-conditions"
        className="hover:text-white transition"
      >
        Terms & Conditions
      </a>
    </li>

    <li>
      <a
        href="/refund-policy"
        className="hover:text-white transition"
      >
        Refund Policy
      </a>
    </li>

  </ul>
</div>

          {/* APP INFO */}
          <div>
            <h2 className="text-xl font-bold mb-6">
              NeoStream
            </h2>

            <div className="space-y-4 text-gray-400">

              <p>Unlimited Streaming</p>

              <p>HD & 4K Quality</p>

              <p>Premium Membership</p>

              <p>Watch Anywhere</p>

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}

<div className="border-t border-white/10 mt-12 pt-8 text-center">

  <p className="text-gray-500 text-sm">
    © 2026 NeoStream. All Rights Reserved.
  </p>

</div>

        
</div>
    </footer>
  );
}