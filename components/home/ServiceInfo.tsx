import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
};

const ServiceInfo = ({ title, subtitle, icon: Icon }: Props) => {
  return (
    <article className="flex flex-col gap-4 rounded-2xl bg-card p-6 ring-1 ring-border">
      <span className="grid size-10 place-items-center rounded-[10px] bg-raised text-foreground">
        <Icon className="size-5" strokeWidth={1.5} aria-hidden />
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium leading-snug text-foreground">
          {title}
        </h3>
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      </div>
    </article>
  );
};

export default ServiceInfo;
