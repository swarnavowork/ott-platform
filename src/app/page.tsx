import Navbar from "@/src/components/navbar/Navbar";
import HeroCarousel from "@/src/components/home/HeroCarousel";
import CategoryRow from "@/src/components/home/CategoryRow";
import Footer from "@/src/components/footer/Footer";

export default function HomePage() {
  return (
    <main className="bg-[#07111F] text-white min-h-screen">

      <Navbar />

      <HeroCarousel />

      <CategoryRow title="Trending Now" />

      <CategoryRow title="Wealth & Wellness" />

      <CategoryRow title="Meditation Shows" />

      <CategoryRow title="Premium Shows" />

      <Footer />

    </main>
  );
}