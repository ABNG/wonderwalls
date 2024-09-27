import Container from "../Container";
import Heading from "../Heading";
import ClientCarousal from "./ClientCarousal";

type Props = {};

const OurClient = (props: Props) => {
  return (
    <Container>
      <div className="flex flex-col items-center">
        <Heading title="Our Clients" />
        <div className="h-20" />
        <ClientCarousal />
      </div>
    </Container>
  );
};

export default OurClient;
