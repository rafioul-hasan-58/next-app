import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="max-w-7xl lg:mx-auto mx-2">
        {/* your page content here */}
        <Hero />
      </main>
    </div>
  );
}