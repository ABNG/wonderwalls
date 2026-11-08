import Container from "../Container";
import Heading from "../Heading";
import { testimonials } from "@/lib/content";

// Hidden until real testimonials are added in lib/content.ts
const OurClient = () => {
  if (testimonials.length === 0) return null;
  return (
    <section id="client" className="scroll-mt-16 py-12 md:py-16">
      <Container>
        <div className="flex flex-col gap-10">
          <Heading title="What clients say" />
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <li
                key={t.name}
                className="flex flex-col justify-between gap-6 rounded-2xl bg-card p-6 ring-1 ring-border"
              >
                <blockquote className="text-pretty font-display text-xl leading-snug text-foreground">
                  “{t.quote}”
                </blockquote>
                <p className="text-sm">
                  <span className="font-medium text-foreground">{t.name}</span>
                  {t.place && (
                    <span className="text-subtle"> · {t.place}</span>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default OurClient;
