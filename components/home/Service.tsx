import Container from "../Container";
import Heading from "../Heading";
import ServiceInfo from "./ServiceInfo";
import { GiCrane, GiStonePile, GiStoneWall, GiTrowel } from "react-icons/gi";

type Props = {};

const Service = (props: Props) => {
  return (
    <Container>
      <div className="flex flex-col items-center">
        <Heading title="Our Services" />
        <div className="h-20" />
        <div className="grid grid-cols-1 justify-evenly gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          <ServiceInfo
            icon={GiTrowel}
            title="Plastering"
            subtitle="Delivering flawless finishes with premium materials and advanced techniques"
          />
          <ServiceInfo
            icon={GiStoneWall}
            title="Stone Walls"
            subtitle="Crafting durable and aesthetically pleasing walls using stones for various clients"
          />
          <ServiceInfo
            icon={GiCrane}
            title="Construction"
            subtitle="Providing comprehensive building services with a focus on quality and efficiency"
          />
          <ServiceInfo
            icon={GiStonePile}
            title="Crush Stone"
            subtitle="Using high-quality crushed stone for construction projects, ensuring durability and optimal performance"
          />
        </div>
      </div>
    </Container>
  );
};

export default Service;
