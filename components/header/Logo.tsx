import Image from "next/image";
import logoLight from "@/public/logo/logo-light.svg";
import logoDark from "@/public/logo/logo-dark.svg";
import Link from "next/link";
type Props = {
  isScrolled: boolean;
};

const Logo = ({ isScrolled }: Props) => {
  return (
    <Link href="/">
      <Image
        src={isScrolled ? logoDark : logoLight}
        alt="logo"
        priority
        className="h-[51px] w-[136px] animate-pulse"
      />
    </Link>
  );
};

export default Logo;
