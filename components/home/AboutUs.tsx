import Image from "next/image";
import Container from "../Container";
import About from "@/public/images/about.jpg";
import Heading from "../Heading";

const AboutUs = () => {
  return (
    <section id="about" className="scroll-mt-16 py-12 md:py-16">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div className="flex flex-col gap-6">
            <Heading title="About us" />
            <div className="flex max-w-xl flex-col gap-4 text-pretty text-base text-muted-foreground">
              <p>
                WonderWalls is a building and finishing team based in Kyrenia.
                For over 18 years we have painted, plastered and built homes
                across the north coast of Cyprus.
              </p>
              <p>
                We do painting and decorating, plastering, stone houses and
                general construction. Every job, large or small, gets the same
                care and the same finish.
              </p>
            </div>
          </div>
          {/* Replace with a photo of the team on site, ideally 1200×1100 */}
          <div className="relative aspect-[11/10] overflow-hidden rounded-2xl bg-white ring-1 ring-border">
            <Image
              src={About}
              alt="The WonderWalls team"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-contain p-6"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
