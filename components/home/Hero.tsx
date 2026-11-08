import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "../Container";
import { heroImage } from "@/lib/content";

const Hero = () => {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-[#1f1b16] text-white">
      <Image
        src={heroImage}
        alt="Stone arch gateway built from dressed yellow limestone"
        priority
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      {/* Neutral scrims, darkest at the lower left where the text sits, so
          the words stay readable over the stone and the gateway sign */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/40 to-black/25"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/25 to-transparent"
      />
      <Container className="pb-16 pt-32 md:pb-24">
        <div className="flex max-w-2xl flex-col gap-6">
          <p
            className="rise-in text-sm font-medium text-borderColor"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            Kyrenia · Girne, Cyprus
          </p>
          <h1
            className="rise-in text-balance font-display text-[40px] font-normal leading-[1.05] tracking-[-0.03em] sm:text-6xl md:text-[72px]"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Painting, plastering and stone walls in Kyrenia
          </h1>
          <p
            className="rise-in max-w-xl text-pretty text-lg leading-[1.6] text-white/80 md:text-xl"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            18 years building and finishing homes across Girne, in black and
            yellow local stone
          </p>
          <div
            className="rise-in flex flex-wrap gap-3 pt-2"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            <Link
              href="/#contact"
              className="group inline-flex h-12 items-center gap-2 rounded-[10px] bg-borderColor px-5 font-medium text-[#1f1b16] outline-none transition-[background-color,transform] duration-150 ease-out hover:bg-[#f5c022] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-[0.97]"
            >
              Get a quote
              <ArrowRight
                className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </Link>
            <Link
              href="/#service"
              className="inline-flex h-12 items-center rounded-[10px] border border-white/25 px-5 font-medium text-white outline-none transition-[background-color,transform] duration-150 ease-out hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white active:scale-[0.97]"
            >
              See our services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
