export default function SubscriptionPage() {
  return (
    <main className="bg-[#07111F] min-h-screen text-white flex items-center justify-center">
      <div className="grid md:grid-cols-2 gap-10">

        <div className="bg-[#0F172A] p-10 rounded-3xl">
          <h1 className="text-4xl font-bold mb-4">
            Monthly
          </h1>

          <h2 className="text-6xl font-bold mb-8">
            ₹99
          </h2>

          <button className="w-full h-14 bg-red-500 rounded-xl">
            Subscribe
          </button>
        </div>

        <div className="bg-[#0F172A] p-10 rounded-3xl">
          <h1 className="text-4xl font-bold mb-4">
            Yearly
          </h1>

          <h2 className="text-6xl font-bold mb-8">
            ₹499
          </h2>

          <button className="w-full h-14 bg-red-500 rounded-xl">
            Subscribe
          </button>
        </div>

      </div>
    </main>
  );
}