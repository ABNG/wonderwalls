import Image from "next/image";
import logoLight from "@/public/logo/logo-light.svg";
import logoDark from "@/public/logo/logo-dark.svg";
import Link from "next/link";
type Props = {
  isScrolled: boolean;
};

const Logo = ({ isScrolled }: Props) => {
  return (
    <Link
      href="/"
      aria-label="WonderWalls home"
      className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Image
        src={isScrolled ? logoDark : logoLight}
        alt="WonderWalls"
        priority
        className="h-10 w-auto"
      />
    </Link>
  );
};

export default Logo;
