"use client";
import Logo from "./Logo";
import { FaPhoneAlt } from "react-icons/fa";
import NavMenu from "./NavMenu";
import NavPopupMenu from "./NavPopupMenu";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {};

const Navbar = (props: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(window.scrollY > 50);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={cn(
        "fixed left-0 right-0 top-0 z-50 flex items-center justify-between gap-2 bg-transparent px-4 py-4 transition-all",
        {
          "animate__animated animate__slideInDown bg-white shadow-[0_10px_33px_rgba(0,0,0,.1)]":
            isScrolled,
        },
      )}
    >
      <Logo isScrolled={isScrolled} />
      <div
        className={`flex items-center gap-4 text-sm font-medium ${isScrolled ? "text-black" : "text-white"}`}
      >
        {/* Mobile */}
        <NavPopupMenu />
        {/* Desktop */}
        <NavMenu />
        <div className="h-10 border-r border-borderColor" />
        <span
          className={`flex items-center gap-1 text-xs md:text-base ${isScrolled && "text-borderColor"}`}
        >
          <FaPhoneAlt />
          00905428744872
        </span>
      </div>
    </div>
  );
};

export default Navbar;
