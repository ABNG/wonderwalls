import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  link: string;
  selected: boolean;
  isMobile?: boolean;
  onClick: () => void;
};

const MenuItem = ({ text, link, selected, isMobile, onClick }: Props) => {
  return (
    <li>
      <Link
        href={link}
        onClick={onClick}
        aria-current={selected ? "page" : undefined}
        className={cn(
          "relative inline-flex items-center rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring",
          // Underline drawn with a transform so it never shifts layout
          "after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-borderColor after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100",
          { "after:scale-x-100": selected },
          { "h-11 text-lg after:hidden": isMobile },
          { "text-stone-ink": isMobile && selected },
        )}
      >
        {text}
      </Link>
    </li>
  );
};

export default MenuItem;
