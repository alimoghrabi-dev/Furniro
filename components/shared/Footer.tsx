import { navLinks } from "@/constants";
import Link from "next/link";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="w-full h-[450px] sm:h-[425px] flex flex-col gap-12 lg:gap-0 lg:flex-row items-start justify-evenly border-t py-16 sm:py-12 border-[#9F9F9F] border-opacity-40">
      <div className="h-auto lg:h-full w-[90%] lg:w-auto flex flex-row lg:flex-col justify-between items-center lg:items-start ml-10 lg:ml-0">
        <div className="flex flex-col items-start justify-center gap-4 lg:gap-8">
          <h2 className="text-dark text-xl font-semibold">Funiro.</h2>
          <p className="text-[#9F9F9F] font-normal text-sm">
            400 University Drive Suite <br /> 200 Coral Gables, <br /> FL 33134
            USA
          </p>
        </div>

        <span className="text-dark font-medium text-sm md:text-base">
          2023 furino. <br className="block sm:hidden" /> All rights reverved
        </span>
      </div>

      <div className="flex flex-row lg:flex-col gap-8 sm:gap-12 ml-10 lg:ml-0">
        <p className="text-[#9F9F9F] font-normal text-sm">Links</p>
        <div className="flex flex-row lg:flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              className="text-[15px] sm:text-base text-dark font-semibold capitalize">
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-row lg:flex-col gap-8 sm:gap-12 ml-10 lg:ml-0">
        <p className="text-[#9F9F9F] font-normal text-sm">Links</p>
        <div className="flex flex-row lg:flex-col gap-5">
          <span className="text-[15px] sm:text-base text-dark font-semibold capitalize cursor-pointer">
            Payment Options
          </span>
          <span className="text-[15px] sm:text-base text-dark font-semibold capitalize cursor-pointer">
            Returns
          </span>
          <span className="text-[15px] sm:text-base text-dark font-semibold capitalize cursor-pointer">
            Privacy Policies
          </span>
        </div>
      </div>

      <div className="flex flex-row lg:flex-col gap-7 sm:gap-12 ml-10 lg:ml-0">
        <p className="text-[#9F9F9F] font-normal text-sm">Newsletter</p>
        <div className="flex justify-center flex-wrap gap-2.5">
          <input
            type="text"
            placeholder="Enter Your Email Address"
            className="bg-transparent border-b border-dark outline-none focus:ring-2 focus:ring-offset-2 transition-all focus:rounded-md ring-dark px-2 pr-10 py-2 placeholder:text-gray-400 placeholder:text-sm text-sm text-dark"
          />
          <Button className="bg-transparent border-b rounded-none border-dark text-dark font-semibold text-[16px] px-1 uppercase hover:bg-transparent active:scale-[1.03] transition-all duration-0">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
