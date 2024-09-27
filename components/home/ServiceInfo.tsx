import { IconType } from "react-icons";
import { Card, CardContent } from "../ui/card";

type Props = {
  icon: IconType;
  title: string;
  subtitle: string;
};
const ServiceInfo = ({ title, subtitle, icon: Icon }: Props) => {
  return (
    <Card>
      <CardContent className="pt-4">
        <div className="flex flex-col items-center">
          <Icon className="text-borderColor size-20" />
          <div className="h-4" />
          <h1 className="text-lg font-normal text-black">{title}</h1>
          <div className="h-3" />
          <h3 className="text-pretty text-center text-sm font-normal text-[#737373]">
            {subtitle}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceInfo;
