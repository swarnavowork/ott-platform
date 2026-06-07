export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#020817] via-[#03132d] to-black text-white">

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-28">

        <div className="text-center mb-16">

          <div className="inline-block px-4 py-2 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-sm mb-5">
            NeoStream Legal Information
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-4">
            {title}
          </h1>

          <p className="text-gray-400 text-lg">
            The Bliss Health And Wellness
          </p>

        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">

          {children}

        </div>

      </div>

    </main>
  );
}