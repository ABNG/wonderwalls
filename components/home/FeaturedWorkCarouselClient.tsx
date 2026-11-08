"use client";

import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { Carousel, type CarouselApi } from "@/components/ui/carousel";

type Props = {
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
};

// Client boundary for the Featured Work carousel: owns the autoplay plugin,
// which can't be passed from a server component. Slides arrive as children
// and stay server-rendered.
const FeaturedWorkCarouselClient = ({ children, ...props }: Props) => {
  const [autoplay] = useState(() =>
    Autoplay({
      delay: 4500,
      // Pause while the pointer is over the photos or a slide is dragged,
      // then carry on. Focus inside a slide pauses it too (plugin default).
      stopOnMouseEnter: true,
      stopOnInteraction: false,
      // No auto-advance for people who ask for reduced motion.
      breakpoints: { "(prefers-reduced-motion: reduce)": { active: false } },
    }),
  );
  const [api, setApi] = useState<CarouselApi>();

  // Any slide change (prev/next buttons, arrow keys, a swipe) restarts the
  // countdown, so the carousel never jumps right after someone moves it.
  useEffect(() => {
    if (!api) return;
    const restart = () => autoplay.reset();
    api.on("select", restart);
    return () => {
      api.off("select", restart);
    };
  }, [api, autoplay]);

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[autoplay]}
      setApi={setApi}
      {...props}
    >
      {children}
    </Carousel>
  );
};

export default FeaturedWorkCarouselClient;
