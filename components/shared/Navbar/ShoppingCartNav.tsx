import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const ShoppingCartNav = async ({
  customSize,
  userId,
  productCount,
}: {
  customSize?: boolean;
  userId: string | undefined;
  productCount: number;
}) => {
  return (
    <>
      <div className="relative">
        <Link href={`/shop/cart/${userId}`}>
          <ShoppingCart
            className={`${
              customSize ? "w-[21px] h-[21px]" : "w-[23px] h-[23px]"
            } cursor-pointer`}
          />
        </Link>
        <span
          className={`${
            productCount > 0 ? "block" : "hidden"
          } absolute -top-2.5 -right-3.5 bg-baseColor w-5 h-5 flex justify-center items-center text-[12px] rounded-full text-white`}>
          {productCount}
        </span>
      </div>
    </>
  );
};

export default ShoppingCartNav;
