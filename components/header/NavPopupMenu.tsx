import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavMenu from "./NavMenu";

const NavPopupMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            aria-label="Open menu"
            className="grid size-10 place-items-center rounded-lg outline-none transition-[background-color,transform] duration-150 ease-out hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.97]"
          >
            <Menu className="size-5" strokeWidth={1.5} />
          </button>
        </SheetTrigger>
        <SheetContent side={"top"} className="px-4 pb-6 pt-12">
          <SheetHeader className="sr-only">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Site sections</SheetDescription>
          </SheetHeader>
          <NavMenu isMobile setIsOpen={setIsOpen} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavPopupMenu;
