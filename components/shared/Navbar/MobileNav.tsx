import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import NavLinkComp from "./NavLinkComp";
import { navLinks } from "@/constants";
import RightNavSide from "./RightNavSide";

const MobileNav = () => {
  return (
    <div className="flex md:hidden relative">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image
            src={"/icons/menu.svg"}
            alt={"Menu"}
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="shadow-md border-gray-300 border bg-gray-100">
          <DropdownMenuItem className="flex flex-col gap-3.5 py-3">
            {navLinks.map((link) => {
              return (
                <NavLinkComp
                  key={link.id}
                  href={link.href}
                  title={link.title}
                  customClassName
                />
              );
            })}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="w-full items-center justify-center gap-6 flex py-3.5">
            <RightNavSide customSize />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNav;
