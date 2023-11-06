"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkCompProps {
  href: string;
  title: string;
  customClassName?: boolean;
}

const NavLinkComp = ({ href, title, customClassName }: NavLinkCompProps) => {
  const pathname = usePathname();
  const isActive =
    (pathname.includes(href) && href.length > 1) || pathname === href;

  return (
    <Link
      href={`/${href}`}
      className={`capitalize ${
        customClassName ? "text-sm font-medium" : "text-base font-medium"
      }  transition-colors ${
        isActive ? "text-baseColor" : "text-black hover:text-gray-700"
      }`}>
      {title}
    </Link>
  );
};

export default NavLinkComp;
