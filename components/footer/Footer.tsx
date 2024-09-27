import Container from "../Container";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Container>
      <div className="flex justify-center py-8">
        <p className="text-center text-sm font-normal text-[#737373]">
          © WonderWalls 2024, All Rights Reserved.
        </p>
      </div>
    </Container>
  );
};

export default Footer;
