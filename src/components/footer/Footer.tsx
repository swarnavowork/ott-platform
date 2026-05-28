export default function Footer() {
  return (
    <footer className="bg-black mt-20 px-10 py-20">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <h1 className="text-3xl font-bold text-red-500 mb-5">
            NeoStream
          </h1>

          <p className="text-gray-400">
            Modern OTT Streaming Platform
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-4">
            Company
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-4">
            Support
          </h2>

          <ul className="space-y-3 text-gray-400">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-4">
            Follow Us
          </h2>

          <div className="flex gap-5">
            <div>FB</div>
            <div>IG</div>
            <div>YT</div>
          </div>
        </div>
      </div>
    </footer>
  );
}