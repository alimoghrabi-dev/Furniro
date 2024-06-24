import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import NavLinkComp from "./NavLinkComp";
import RightNavSide from "./RightNavSide";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="w-full fixed h-[72px] shadow top-0 z-50 bg-white flex items-center justify-around">
      <div className="flex items-center justify-center gap-1 h-full">
        <Link href={"/"} className="flex items-center justify-center gap-1.5">
          <Image
            src={"/icons/logo.png"}
            width={36}
            height={36}
            alt="Furniro"
            className="object-contain"
          />
          <h1 className="text-2xl font-bold">Furniro</h1>
        </Link>
      </div>
      <div className="hidden h-full items-center justify-center gap-10 lg:gap-12 md:flex">
        {navLinks.map((link) => {
          return (
            <NavLinkComp href={link.href} key={link.id} title={link.title} />
          );
        })}
      </div>
      <div className="h-full hidden items-center justify-center gap-6 lg:gap-8 md:flex">
        <RightNavSide />
      </div>

      <MobileNav />
    </nav>
  );
};

export default Navbar;
