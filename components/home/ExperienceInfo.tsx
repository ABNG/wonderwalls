import ExperienceInfoAnimatedNumberClient from "./ExperienceInfoAnimatedNumberClient";

type Props = {
  value: number;
  suffix?: string;
  label: string;
};

// One row of the About figures card: the figure on the left, its label on
// the right, sharing a baseline like a ledger line. `flex-row-reverse` keeps
// the DOM order dt → dd for screen readers while the figure reads first.
const ExperienceInfo = ({ value, suffix, label }: Props) => {
  return (
    <div className="flex flex-row-reverse items-baseline justify-between gap-4 px-6 py-6 md:px-8 md:py-7">
      <dt className="text-right text-sm text-muted-foreground md:text-base">
        {label}
      </dt>
      <dd className="flex items-baseline font-display text-4xl font-normal leading-none tracking-[-0.03em] text-foreground md:text-[40px]">
        <ExperienceInfoAnimatedNumberClient count={value} />
        {suffix && <span className="text-stone-ink">{suffix}</span>}
      </dd>
    </div>
  );
};

export default ExperienceInfo;
