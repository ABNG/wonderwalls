import { cn } from "@/lib/utils";
import MenuItem from "./MenuItem";
import useHashLocation from "@/hooks/useHashLocation";
import { hasProjects, hasTestimonials } from "@/lib/content";

type Props = {
  isMobile?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
};

// [label, link, shown]. Featured Work and Clients appear once they have content.
const navBarOptions: [string, string, boolean][] = [
  ["Home", "/", true],
  ["About", "/#about", true],
  ["Services", "/#service", true],
  ["Work", "/#work", hasProjects],
  ["Clients", "/#client", hasTestimonials],
  ["Contact", "/#contact", true],
];

const NavMenu = ({ isMobile, setIsOpen }: Props) => {
  const hash = useHashLocation();
  return (
    <ul
      className={cn("hidden items-center gap-6 md:flex", {
        "flex flex-col items-start gap-1 text-foreground": isMobile,
      })}
    >
      {navBarOptions
        .filter(([, , shown]) => shown)
        .map(([text, link]) => (
          <MenuItem
            key={link}
            text={text}
            link={link}
            isMobile={isMobile}
            selected={link === `/${hash}`}
            onClick={() => {
              if (isMobile) {
                setIsOpen?.(false);
              }
            }}
          />
        ))}
    </ul>
  );
};

export default NavMenu;
