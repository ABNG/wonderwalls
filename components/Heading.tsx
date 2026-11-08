import { cn } from "@/lib/utils";

type Props = {
  title: string;
  intro?: string;
  className?: string;
};

const Heading = ({ title, intro, className }: Props) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <span className="mortar-course" aria-hidden>
        <span />
        <span />
        <span />
      </span>
      <h2 className="font-display text-4xl font-normal leading-[1.1] tracking-[-0.02em] text-foreground md:text-[44px]">
        {title}
      </h2>
      {intro && (
        <p className="max-w-xl text-pretty text-base text-muted-foreground">
          {intro}
        </p>
      )}
    </div>
  );
};

export default Heading;
