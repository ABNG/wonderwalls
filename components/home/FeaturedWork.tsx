import Container from "../Container";
import Heading from "../Heading";
import FeatureCarousal from "./FeatureCarousal";

type Props = {};

const FeaturedWork = (props: Props) => {
  return (
    <Container>
      <div className="flex flex-col items-center">
        <Heading title="Featured Work" />
        <div className="h-20" />
        <FeatureCarousal />
      </div>
    </Container>
  );
};

export default FeaturedWork;
