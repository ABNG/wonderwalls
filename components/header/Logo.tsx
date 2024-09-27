import Image from "next/image";
import logo from "@/public/logo/logo-dark.png";
import Link from "next/link";
type Props = {};

const Logo = (props: Props) => {
  return (
    <Link href="/">
      <Image src={logo} alt="logo" priority className="animate-pulse" />
    </Link>
  );
};

export default Logo;
