import { ArrowUpRight, type LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  detail: string;
  href?: string;
  external?: boolean;
};

const ContactUsInfo = ({ title, detail, href, external, icon: Icon }: Props) => {
  const body = (
    <>
      <span className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-raised text-foreground">
        <Icon className="size-5" strokeWidth={1.5} aria-hidden />
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-sm text-subtle">{title}</span>
        <span className="truncate font-medium tabular-nums text-foreground">
          {detail}
        </span>
      </span>
      {href && (
        <ArrowUpRight
          className="size-4 shrink-0 text-subtle transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={1.5}
          aria-hidden
        />
      )}
    </>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="group flex items-center gap-4 p-4 outline-none transition-colors duration-150 ease-out hover:bg-raised focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring md:px-6"
        >
          {body}
        </a>
      ) : (
        <div className="flex items-center gap-4 p-4 md:px-6">{body}</div>
      )}
    </li>
  );
};

export default ContactUsInfo;
