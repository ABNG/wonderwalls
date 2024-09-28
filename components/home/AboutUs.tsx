import Image from "next/image";
import Container from "../Container";
import About from "@/public/images/about.jpg";
import Heading from "../Heading";
type Props = {};

const AboutUs = (props: Props) => {
  return (
    <Container>
      <div className="flex items-center max-sm:flex-col">
        <div className="order-1 flex-[1.5]">
          <Heading title="About Us" />
          <div className="h-5" />
          <p className="text-pretty text-[#737373]">
            At <strong className="text-borderColor">WonderWalls</strong>, we are
            passionate about transforming spaces through expert craftsmanship
            and innovative construction solutions. With over 18 years of
            experience, our team has successfully completed more than 1200
            projects, earning the trust of 1200+ satisfied clients.
          </p>
          <div className="h-5" />
          <p className="text-pretty text-[#737373]">
            We specialize in painting and decorating, plastering, stone houses
            construction, general construction services. In every project we
            undertake, we always strive for excellence, ensuring that our
            clients receive the highest quality workmanship and results.
          </p>
        </div>
        <div className="order-2 flex-1">
          <Image src={About} alt="about us" className="object-cover" />
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
