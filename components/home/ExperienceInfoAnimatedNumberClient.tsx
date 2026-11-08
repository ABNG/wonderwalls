"use client";
import {
  motion,
  useInView,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  count: number;
};

const format = (n: number) => Math.round(n).toLocaleString("en-US");

// The server renders the real figure, so crawlers and no-JS readers see
// "1,200" rather than "0". On the client it resets to 0 while off screen and
// counts up once, the first time it scrolls into view.
const ExperienceInfoAnimatedNumberClient = ({ count }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });
  const reduceMotion = useReducedMotion();
  const spring = useSpring(count, { bounce: 0, duration: 1200 });
  const display = useTransform(spring, format);

  useEffect(() => {
    if (reduceMotion) spring.jump(count);
    else if (isInView) spring.set(count);
    else spring.jump(0);
  }, [isInView, reduceMotion, count, spring]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {display}
    </motion.span>
  );
};

export default ExperienceInfoAnimatedNumberClient;
