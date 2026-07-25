import { createFileRoute } from "@tanstack/react-router";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import Hero from "~/sections/Hero";
import About from "~/sections/About";
import Services from "~/sections/Services";
import WhyChooseUs from "~/sections/WhyChooseUs";
import Gallery from "~/sections/Gallery";
import Reviews from "~/sections/Reviews";
import Hours from "~/sections/Hours";
import Location from "~/sections/Location";
import FAQ from "~/sections/FAQ";
import CTA from "~/sections/CTA";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Reviews />
        <Hours />
        <Location />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
