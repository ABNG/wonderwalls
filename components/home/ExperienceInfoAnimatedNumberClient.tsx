"use client";
import { useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { AnimatedNumber } from "../ui/AnimatedNumber";

type Props = {
  count: number;
};

// Counts up once, the first time the figure scrolls into view.
const ExperienceInfoAnimatedNumberClient = ({ count }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <span ref={ref} className="tabular-nums">
        {count.toLocaleString("en-US")}
      </span>
    );
  }

  return (
    <span ref={ref}>
      <AnimatedNumber
        springOptions={{ bounce: 0, duration: 1200 }}
        value={isInView ? count : 0}
      />
    </span>
  );
};

export default ExperienceInfoAnimatedNumberClient;
