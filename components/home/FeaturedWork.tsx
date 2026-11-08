import Image from "next/image";
import Container from "../Container";
import Heading from "../Heading";
import { projects } from "@/lib/content";

// Hidden until real projects are added in lib/content.ts
const FeaturedWork = () => {
  if (projects.length === 0) return null;
  return (
    <section id="work" className="scroll-mt-16 py-12 md:py-16">
      <Container>
        <div className="flex flex-col gap-10">
          <Heading title="Featured work" />
          <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <li key={project.title} className="flex flex-col gap-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-raised">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-medium text-foreground">
                    {project.title}
                  </h3>
                  <span className="shrink-0 text-sm text-subtle">
                    {project.location}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedWork;
