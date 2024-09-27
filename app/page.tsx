import Footer from "@/components/footer/Footer";
import AboutUs from "@/components/home/AboutUs";
import ContactUs from "@/components/home/ContactUs";
import Experience from "@/components/home/Experience";
import FeaturedWork from "@/components/home/FeaturedWork";
import Hero from "@/components/home/Hero";
import OurClient from "@/components/home/OurClient";
import Service from "@/components/home/Service";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="h-24" id="about" />
      <AboutUs />
      <Experience />
      <div className="h-24" id="service" />
      <Service />
      <div className="h-24" id="work" />
      <FeaturedWork />
      <div className="h-24" id="client" />
      <OurClient />
      <div className="h-24" id="contact" />
      <ContactUs />
      <div className="h-24" />
      <hr />
      <Footer />
    </main>
  );
}
