import Container from "../Container";
import Heading from "../Heading";
import ExperienceInfo from "./ExperienceInfo";

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
          {/* The company's figures, moved here from the old stats band */}
          <dl className="flex flex-col divide-y divide-border rounded-2xl bg-card ring-1 ring-border">
            <ExperienceInfo
              value={1200}
              suffix="+"
              label="Projects completed"
            />
            <ExperienceInfo value={18} suffix="+" label="Years of experience" />
            <ExperienceInfo value={1200} suffix="+" label="Happy clients" />
          </dl>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
