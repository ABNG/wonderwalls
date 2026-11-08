import type { StaticImageData } from "next/image";
import HeroImage from "@/public/images/khyber.jpeg";
import MockArch from "@/public/images/mock/arch.jpg";
import MockGarden from "@/public/images/mock/garden.jpg";
import MockGateway from "@/public/images/mock/gateway.jpg";
import MockLimestone from "@/public/images/mock/limestone.jpg";
import MockRubble from "@/public/images/mock/rubble-wall.jpg";
import MockVilla from "@/public/images/mock/villa.jpg";

// Site content in one place. Swap images and fill the arrays below as real
// material arrives; empty sections hide themselves and drop out of the nav.

// Hero photo: use one of WonderWalls' own projects, ideally 2400×1600 or larger,
// with a calm area (sky, plain wall) in the lower left for the headline.
export const heroImage: StaticImageData = HeroImage;

export const phone = {
  english: { display: "+90 542 874 48 72", tel: "+905428744872", name: "Shabi" },
  turkish: { display: "+90 542 873 20 76", tel: "+905428732076", name: "Yasher Sari" },
};
export const whatsappUrl = `https://wa.me/${phone.english.tel.replace("+", "")}`;
export const email = "shabighumman@yahoo.com";
export const address = "Kyrenia / Girne, Cyprus";

export type Project = {
  src: StaticImageData; // import from @/public/images/..., 1600×1200 works best
  alt: string;
  title: string; // e.g. "Yellow stone boundary wall"
  location: string; // e.g. "Alsancak"
};

export type Testimonial = {
  quote: string;
  name: string;
  place?: string; // e.g. "Villa owner, Karmi"
};

// ---------------------------------------------------------------------------
// MOCK CONTENT: placeholder projects and testimonials so the sections render.
// Images are crops of the hero photo; quotes and names are invented.
// Replace with real projects and real client quotes before going live.
// Empty an array to hide its section and nav link again.
// ---------------------------------------------------------------------------

// Featured Work: hidden while empty.
export const projects: Project[] = [
  {
    src: MockGateway,
    alt: "Entrance gateway with twin stone arches",
    title: "Twin-arch entrance gateway",
    location: "Kyrenia",
  },
  {
    src: MockRubble,
    alt: "Close-up of a rubble stone boundary wall",
    title: "Black stone boundary wall",
    location: "Alsancak",
  },
  {
    src: MockLimestone,
    alt: "Dressed yellow limestone blocks",
    title: "Yellow limestone cladding",
    location: "Lapta",
  },
  {
    src: MockVilla,
    alt: "Rendered and painted villa facade",
    title: "Villa render and exterior paint",
    location: "Karaoğlanoğlu",
  },
  {
    src: MockArch,
    alt: "Stone arch with rubble infill",
    title: "Arched stone feature wall",
    location: "Çatalköy",
  },
  {
    src: MockGarden,
    alt: "Garden with low stone wall and rock border",
    title: "Garden walls and planters",
    location: "Ozanköy",
  },
];

// What clients say: hidden while empty. Only real quotes from real clients.
export const testimonials: Testimonial[] = [
  {
    quote:
      "They rebuilt our garden wall in yellow stone and it looks like it has always been there. Clean site every evening.",
    name: "Sarah M.",
    place: "Villa owner, Alsancak",
  },
  {
    quote:
      "Plastered and painted the whole house inside in under three weeks. Straight walls, no fuss.",
    name: "Mehmet K.",
    place: "Homeowner, Kyrenia",
  },
  {
    quote:
      "We use WonderWalls on every stone job now. They turn up when they say they will.",
    name: "Daniel R.",
    place: "Developer, Lapta",
  },
];

export const hasProjects = projects.length > 0;
export const hasTestimonials = testimonials.length > 0;
