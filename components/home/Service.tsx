import { BrickWall, HardHat, Layers, PaintRoller } from "lucide-react";
import Container from "../Container";
import Heading from "../Heading";
import ServiceInfo from "./ServiceInfo";
import { services } from "@/lib/content";

// Icons in the same order as `services` in lib/content.ts
const icons = [PaintRoller, Layers, BrickWall, HardHat];

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
            {services.map((service, i) => (
              <ServiceInfo
                key={service.name}
                icon={icons[i]}
                title={service.name}
                subtitle={service.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Service;
