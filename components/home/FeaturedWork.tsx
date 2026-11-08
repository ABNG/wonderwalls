import Image from "next/image";
import Container from "../Container";
import Heading from "../Heading";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects } from "@/lib/content";
import FeaturedWorkCarouselClient from "./FeaturedWorkCarouselClient";

// Carousel controls sit in the heading row instead of floating over the photos.
// `static` and `translate-y-0` cancel the default absolute side placement.
const controlClass =
  "static size-10 translate-y-0 transition-[color,background-color,border-color,transform] duration-150 ease-out active:scale-[0.97]";

// Hidden until real projects are added in lib/content.ts.
// Still a server component: FeaturedWorkCarouselClient is the client boundary
// (autoplay lives there) and the slides, images and heading passed into it
// render on the server. Auto-slides every 4.5s, loops, and keeps the
// prev/next buttons.
const FeaturedWork = () => {
  if (projects.length === 0) return null;
  return (
    <section id="work" className="scroll-mt-16 py-12 md:py-16">
      <Container>
        <FeaturedWorkCarouselClient
          aria-label="Featured projects"
          className="flex flex-col gap-10"
        >
          <div className="flex items-end justify-between gap-6">
            <Heading title="Featured work" />
            {projects.length > 1 && (
              <div className="flex shrink-0 gap-2">
                <CarouselPrevious className={controlClass} />
                <CarouselNext className={controlClass} />
              </div>
            )}
          </div>
          <CarouselContent className="-ml-6">
            {projects.map((project, i) => (
              <CarouselItem
                key={project.title}
                aria-label={`${i + 1} of ${projects.length}`}
                className="basis-[85%] pl-6 sm:basis-1/2 lg:basis-1/3"
              >
                <figure className="flex flex-col gap-3">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-raised">
                    <Image
                      src={project.src}
                      alt={project.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw"
                      className="pointer-events-none select-none object-cover"
                      draggable={false}
                    />
                  </div>
                  <figcaption className="flex items-baseline justify-between gap-4">
                    <h3 className="font-medium text-foreground">
                      {project.title}
                    </h3>
                    <span className="shrink-0 text-sm text-subtle">
                      {project.location}
                    </span>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </FeaturedWorkCarouselClient>
      </Container>
    </section>
  );
};

export default FeaturedWork;
