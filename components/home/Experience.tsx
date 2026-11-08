import Image from "next/image";
import ExperienceBG from "@/public/images/experience_bg.jpg";
import Container from "../Container";
import ExperienceInfo from "./ExperienceInfo";

const Experience = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#1f1b16] py-16 text-white md:py-20">
      <Image
        src={ExperienceBG}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/60" />
      <Container>
        <dl className="grid grid-cols-3 gap-4 md:gap-8">
          <ExperienceInfo value={1200} suffix="+" label="Projects completed" />
          <ExperienceInfo value={18} suffix="+" label="Years of experience" />
          <ExperienceInfo value={1200} suffix="+" label="Happy clients" />
        </dl>
      </Container>
    </section>
  );
};

export default Experience;
