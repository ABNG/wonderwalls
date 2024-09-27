import { TfiEmail, TfiHome } from "react-icons/tfi";
import Container from "../Container";
import Heading from "../Heading";
import ContactUsInfo from "./ContactUsInfo";
import { CiMobile3 } from "react-icons/ci";
type Props = {};

const ContactUs = (props: Props) => {
  return (
    <Container>
      <div className="flex flex-col items-center">
        <Heading title="Contact Us" />
        <div className="h-20" />
        <div className="flex w-full justify-between gap-6 max-sm:flex-col">
          <ContactUsInfo
            icon={TfiHome}
            title="Address"
            subtitle={["Kyrenia / Girne, Cyprus"]}
          />
          <ContactUsInfo
            icon={CiMobile3}
            title="Phone"
            subtitle={["Phone: (0090) 54 28744 872"]}
          />
          <ContactUsInfo
            icon={TfiEmail}
            title="Email"
            subtitle={["shabighumman@yahoo.com"]}
          />
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
