import Image from "next/image";
import ExperienceBG from "@/public/images/experience_bg.jpg";
import Container from "../Container";
import ExperienceInfo from "./ExperienceInfo";
import { FaUsers } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="relative">
      <Image
        src={ExperienceBG}
        alt="experience"
        className="h-52 object-cover sm:h-64"
      />
      <div className="absolute inset-x-0 inset-y-10">
        <Container>
          <div className="flex justify-evenly gap-2">
            <ExperienceInfo
              icon={SlBadge}
              title={1200}
              titleHelperText="+"
              subtitle="Projects"
            />
            <ExperienceInfo
              icon={GiPodiumWinner}
              title={18}
              titleHelperText="+"
              subtitle="Years of Experience"
            />
            <ExperienceInfo
              icon={FaUsers}
              title={1200}
              titleHelperText="+"
              subtitle="Happy Clients"
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Experience;
