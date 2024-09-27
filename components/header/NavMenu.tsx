import { cn } from "@/lib/utils";
import MenuItem from "./MenuItem";
import useHashLocation from "@/hooks/useHashLocation";

type Props = {
  isMobile?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
};

//Touple Array
const navBarOptions: [string, string][] = [
  ["Home", "/"],
  ["About", "/#about"],
  ["Services", "/#service"],
  ["Work", "/#work"],
  ["Client", "/#client"],
  ["Contact Us", "/#contact"],
];

const NavMenu = ({ isMobile, setIsOpen }: Props) => {
  const selected = useHashLocation();
  return (
    <ul
      className={cn("hidden items-center gap-4 md:flex", {
        "flex flex-col text-black": isMobile,
      })}
    >
      {navBarOptions.map(([text, link], index) => (
        <MenuItem
          key={index}
          text={text}
          link={link}
          selected={selected === index}
          onClick={() => {
            if (isMobile) {
              setIsOpen!(false);
            }
          }}
        />
      ))}
    </ul>
  );
};

export default NavMenu;
