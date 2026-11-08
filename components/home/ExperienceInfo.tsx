import ExperienceInfoAnimatedNumberClient from "./ExperienceInfoAnimatedNumberClient";

type Props = {
  value: number;
  suffix?: string;
  label: string;
};

const ExperienceInfo = ({ value, suffix, label }: Props) => {
  return (
    <div className="flex flex-col-reverse items-center justify-end gap-2 text-center md:items-start md:border-l md:border-white/15 md:pl-8 md:text-left">
      <dt className="text-sm text-white/70">{label}</dt>
      <dd className="flex items-baseline font-display text-4xl font-normal leading-none tracking-[-0.03em] sm:text-6xl md:text-7xl">
        <ExperienceInfoAnimatedNumberClient count={value} />
        {suffix && <span className="text-borderColor">{suffix}</span>}
      </dd>
    </div>
  );
};

export default ExperienceInfo;
