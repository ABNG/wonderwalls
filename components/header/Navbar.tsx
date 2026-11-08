"use client";
import Logo from "./Logo";
import { Phone } from "lucide-react";
import NavMenu from "./NavMenu";
import NavPopupMenu from "./NavPopupMenu";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { phone } from "@/lib/content";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Sync initial scroll position on mount; window is unavailable during SSR.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsScrolled(window.scrollY > 50);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-[background-color,border-color,color] duration-200 ease-out",
        isScrolled
          ? "border-border bg-background/90 text-foreground backdrop-blur-md"
          : "text-white",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 md:px-8">
        <Logo isScrolled={isScrolled} />
        <nav className="flex items-center gap-2 text-sm font-medium md:gap-8">
          <NavMenu />
          <a
            href={`tel:${phone.english.tel}`}
            className="inline-flex h-9 items-center gap-2 rounded-[10px] bg-borderColor px-3 text-[#1f1b16] outline-none transition-[background-color,transform] duration-150 ease-out hover:bg-[#f5c022] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.97] md:px-4"
          >
            <Phone className="size-4" strokeWidth={1.75} />
            <span className="tabular-nums max-sm:sr-only">
              {phone.english.display}
            </span>
            <span className="sm:hidden">Call</span>
          </a>
          <NavPopupMenu />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
