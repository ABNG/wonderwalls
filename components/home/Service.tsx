import Container from "../Container";
import Heading from "../Heading";
import ServiceInfo from "./ServiceInfo";
import { GiCrane, GiPaintRoller, GiStoneWall, GiTrowel } from "react-icons/gi";

type Props = {};

const Service = (props: Props) => {
  return (
    <Container>
      <div className="flex flex-col items-center">
        <Heading title="Our Services" />
        <div className="h-20" />
        <div className="grid grid-cols-1 justify-evenly gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          <ServiceInfo
            icon={GiPaintRoller}
            title="Painting & Decorating"
            subtitle="Bring your space to life with beautiful finishes, tailored from classic to modern aesthetics"
          />
          <ServiceInfo
            icon={GiTrowel}
            title="Plastering"
            subtitle="Delivering flawless finishes with premium materials and advanced techniques"
          />
          <ServiceInfo
            icon={GiStoneWall}
            title="Stone Walls"
            subtitle="we use black or yellow stone to make wall and houses."
          />
          <ServiceInfo
            icon={GiCrane}
            title="Construction"
            subtitle="Providing comprehensive building services with a focus on quality and efficiency"
          />
        </div>
      </div>
    </Container>
  );
};

export default Service;
