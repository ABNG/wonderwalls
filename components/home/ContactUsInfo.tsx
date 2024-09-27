import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  title: string;
  subtitle: string[];
};
const ContactUsInfo = ({ title, subtitle, icon: Icon }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <Icon className="size-20 text-borderColor" />
      <div className="h-4" />
      <h1 className="text-lg font-normal text-black">{title}</h1>
      <div className="h-3" />
      <div className="text-pretty text-center text-sm font-normal text-[#737373]">
        {subtitle.map((text, index) => (
          <h3 key={index}>{text}</h3>
        ))}
      </div>
    </div>
  );
};

export default ContactUsInfo;
