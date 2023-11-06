import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import FeaturesAndInfo from "@/components/shared/FeaturesAndInfo";
import { auth } from "@clerk/nextjs";
import { getCartItems, setProductQuantity } from "@/lib/actions/cart.action";
import { URLProps } from "@/types";
import ProductCartCard from "@/components/cards/ProductCartCard";
import { ComboBox } from "@/components/home/CartFilter";

const Page = async ({ params }: URLProps) => {
  const { userId: clerkId } = auth();

  const result = await getCartItems({
    clerkId,
    userId: params.id,
  });

  return (
    <section className="w-full flex flex-col mt-[4.51rem] items-center justify-center">
      <div className="w-full h-[300px] relative flex items-center justify-center">
        <Image
          src={"/images/shop-layout.jpg"}
          alt="shop"
          fill
          className="object-cover blur-[1px]"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white z-40 bg-opacity-40" />

        <div className="z-[45]">
          <h1 className="text-5xl font-bold text-dark">Cart</h1>
          <span className="flex gap-1 items-center mt-3.5">
            <Link href={"/"} className="font-semibold text-base">
              Home
            </Link>
            <ChevronRight className="text-dark w-[22px] h-[22px] mt-1" />
            <p className="text-base font-medium text-dark">Cart</p>
          </span>
        </div>
      </div>

      <div className="w-full">
        <ComboBox />
        <ProductCartCard
          result={result}
          userId={params.id}
          setProductQuantity={setProductQuantity}
        />
      </div>

      <FeaturesAndInfo />
    </section>
  );
};

export default Page;
