import Navbar from "@/src/components/navbar/Navbar";
import Hero from "@/src/components/home/Hero";
import CategoryRow from "@/src/components/home/CategoryRow";
import Footer from "@/src/components/footer/Footer";

export default function HomePage() {
  return (
    <main className="bg-[#07111F] text-white min-h-screen">
      <Navbar />

      <Hero />

      <CategoryRow title="Trending Now" />

      <CategoryRow title="Health & Wellness" />

      <CategoryRow title="Meditation Shows" />

      <CategoryRow title="Motivational Content" />

      <CategoryRow title="Premium Shows" />

      <Footer />
    </main>
  )
};