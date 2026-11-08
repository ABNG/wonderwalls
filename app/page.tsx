import Footer from "@/components/footer/Footer";
import StructuredData from "@/components/StructuredData";
import AboutUs from "@/components/home/AboutUs";
import ContactUs from "@/components/home/ContactUs";
import Experience from "@/components/home/Experience";
import FeaturedWork from "@/components/home/FeaturedWork";
import Hero from "@/components/home/Hero";
import OurClient from "@/components/home/OurClient";
import Service from "@/components/home/Service";

// Each section owns its anchor id (about, service, work, client, contact).
// FeaturedWork and OurClient render nothing until lib/content.ts has entries.
export default function Home() {
  return (
    <>
      <StructuredData />
      <main>
        <Hero />
        <AboutUs />
        <Experience />
        <Service />
        <FeaturedWork />
        <OurClient />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
