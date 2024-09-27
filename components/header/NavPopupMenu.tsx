import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavMenu from "./NavMenu";
type Props = {};

const NavPopupMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="block rounded-md border-2 border-borderColor p-2 hover:cursor-pointer md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <div>
            <RxHamburgerMenu className="size-4" />
          </div>
        </SheetTrigger>
        <SheetContent side={"top"}>
          <SheetHeader className="sr-only">
            <SheetTitle>Popup Menu</SheetTitle>
            <SheetDescription>Popup Menu for Mobile</SheetDescription>
          </SheetHeader>
          <NavMenu isMobile setIsOpen={setIsOpen} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavPopupMenu;

// TODO: try to use shadcn sheet from top
// <div className="fixed inset-0 min-h-screen bg-neutral-800/70">
//   <div
//     className="animate__animated animate__fadeIn absolute left-0 right-0 top-20 bg-white p-8 shadow-md"
//     onClick={() => {
//       setTimeout(() => setIsOpen(false), 150);
//     }}
//   >
//     <div className="flex flex-col">
//       <IoMdClose
//         size={34}
//         onClick={() => setIsOpen(false)}
//         className="self-end rounded-full bg-transparent p-2 text-black transition-colors hover:bg-zinc-300"
//       />
//       <NavMenu isMobile />
//     </div>
//   </div>
// </div>
