import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Container from "../Container";
import Heading from "../Heading";
import ContactUsInfo from "./ContactUsInfo";
import { address, email, phone, whatsappUrl } from "@/lib/content";

const ContactUs = () => {
  return (
    <section id="contact" className="scroll-mt-16 py-12 md:py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <Heading
            title="Contact"
            intro="Tell us about the wall, room or house you have in mind and we will get back to you"
          />
          <ul className="flex flex-col divide-y divide-border overflow-hidden rounded-2xl bg-card ring-1 ring-border">
            <ContactUsInfo
              icon={MessageCircle}
              title="WhatsApp"
              detail={phone.english.display}
              href={whatsappUrl}
              external
            />
            <ContactUsInfo
              icon={Phone}
              title={`English · ${phone.english.name}`}
              detail={phone.english.display}
              href={`tel:${phone.english.tel}`}
            />
            <ContactUsInfo
              icon={Phone}
              title={`Turkish · ${phone.turkish.name}`}
              detail={phone.turkish.display}
              href={`tel:${phone.turkish.tel}`}
            />
            <ContactUsInfo
              icon={Mail}
              title="Email"
              detail={email}
              href={`mailto:${email}`}
            />
            <ContactUsInfo icon={MapPin} title="Based in" detail={address} />
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
