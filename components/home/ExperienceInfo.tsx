import { IconType } from "react-icons";
import ExperienceInfoAnimatedNumberClient from "./ExperienceInfoAnimatedNumberClient";

type Props = {
  icon: IconType;
  title: number;
  titleHelperText?: string;
  subtitle: string;
};
const ExperienceInfo = ({
  title,
  titleHelperText,
  subtitle,
  icon: Icon,
}: Props) => {
  return (
    <div className="flex flex-col items-center">
      <Icon className="size-14 text-white sm:size-20" />
      <div className="h-4" />
      <div className="flex">
        <ExperienceInfoAnimatedNumberClient count={title} />
        {titleHelperText && (
          <h1 className="text-3xl font-bold text-white sm:text-6xl">
            {titleHelperText}
          </h1>
        )}
      </div>
      <h3 className="text-center text-xs font-bold text-white sm:text-sm">
        {subtitle}
      </h3>
    </div>
  );
};

export default ExperienceInfo;
