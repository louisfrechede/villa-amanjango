import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Amenities } from "@/components/Amenities";
import { Testimonials } from "@/components/Testimonials";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1">
        <Hero />
        <About />
        <Gallery />
        <Amenities />
        <Testimonials />
        <Location />
      </main>
      <Footer />
    </>
  );
}
