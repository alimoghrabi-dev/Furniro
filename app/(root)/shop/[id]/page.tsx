import ProductCard from "@/components/cards/ProductCard";
import { getProductById } from "@/lib/actions/product.actions";
import { URLProps } from "@/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = async ({ params }: URLProps) => {
  const result = await getProductById({
    productId: params.id,
  });

  return (
    <section className="mt-[4.51rem]">
      <div className="w-full bg-[#F9F1E7] flex items-center justify-start px-12 py-6 gap-2">
        <Link href={"/"} className="font-semibold text-base text-dark/80">
          Home
        </Link>
        <ChevronRight className="text-dark w-[22px] h-[22px] mt-0.5" />
        <Link href={"/shop"} className="font-semibold text-base text-dark/80">
          Shop
        </Link>
        <ChevronRight className="text-dark w-[22px] h-[22px] mt-0.5" />
        <div className="h-[34px] bg-gray-400 w-[2px] mt-0.5 mx-2" />
        <p className="font-semibold text-base text-dark">{result.title}</p>
      </div>

      <ProductCard
        productId={params.id}
        title={result.title}
        description={result.description}
        price={result.price}
        picture={result.picture}
      />
    </section>
  );
};

export default Page;
