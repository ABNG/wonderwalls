"use client";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { AnimatedNumber } from "../ui/AnimatedNumber";
type Props = {
  count: number;
};

const ExperienceInfoAnimatedNumberClient = ({ count }: Props) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (isInView && value === 0) {
    setValue(count);
  }
  return (
    <div ref={ref}>
      <AnimatedNumber
        springOptions={{
          bounce: 0,
          duration: 1000,
        }}
        value={value}
        className="text-3xl font-bold text-white sm:text-6xl"
      />
    </div>
  );
};

export default ExperienceInfoAnimatedNumberClient;
