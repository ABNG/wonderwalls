import { BrickWall, HardHat, Layers, PaintRoller } from "lucide-react";
import Container from "../Container";
import Heading from "../Heading";
import ServiceInfo from "./ServiceInfo";

const Service = () => {
  return (
    <section id="service" className="scroll-mt-16 py-12 md:py-16">
      <Container>
        <div className="flex flex-col gap-10">
          <Heading
            title="What we do"
            intro="Four trades, one team, from the first stone to the last coat of paint"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceInfo
              icon={PaintRoller}
              title="Painting and decorating"
              subtitle="Interior and exterior finishes, from classic to modern, prepared properly so they last"
            />
            <ServiceInfo
              icon={Layers}
              title="Plastering"
              subtitle="Smooth, even walls and render, ready for paint or left as a finish"
            />
            <ServiceInfo
              icon={BrickWall}
              title="Stone walls"
              subtitle="Walls and houses built in local black or yellow stone"
            />
            <ServiceInfo
              icon={HardHat}
              title="Construction"
              subtitle="General building work, managed from start to finish"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Service;
