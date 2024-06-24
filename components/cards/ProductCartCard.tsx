"use client";

import { IProduct } from "@/database/product.model";
import TotalFetch from "./TotalFetch";
import Link from "next/link";
import SingleCartItem from "./SingleCartItem";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  result: IProduct[];
  userId: string | undefined;
}

const ProductCartCard = ({ result, userId }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const [quantities, setQuantities] = useState<{ [key: string]: number }>(
    () => {
      const initialQuantities: { [key: string]: number } = {};
      result?.forEach((product) => {
        initialQuantities[product?._id] = 1;
      });
      return initialQuantities;
    }
  );

  useEffect(() => {
    const cleanUrl = pathname.split("?")[0];
    router.replace(cleanUrl);
  }, []);

  const updateQuantity = (productId: string, newQuantity: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  const total = result?.reduce((sum, product) => {
    return sum + product.price * (quantities[product._id] || 1);
  }, 0);

  return (
    <div className="flex flex-col md:flex-row w-full items-start justify-between px-9 lg:px-20">
      {!result && (
        <div className="w-full flex items-center justify-center flex-col py-16 gap-2">
          <p className="text-dark text-3xl sm:text-4xl font-semibold text-center">
            Your Cart Is Empty,
          </p>
          <Link
            href={`/shop`}
            className="text-lg sm:text-xl text-dark/70 underline underline-offset-2 hover:text-dark/90 transition-all"
          >
            Add Some Products.
          </Link>
        </div>
      )}
      <div className="flex flex-col py-12 gap-10">
        {result?.map((product, index) => (
          <SingleCartItem
            key={index}
            productId={product._id}
            productTitle={product.title}
            productPicture={product.picture}
            ProductPrice={product.price}
            index={index}
            resultLength={result.length}
            userId={userId}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>

      <TotalFetch noResult={!result} total={total || 0} />
    </div>
  );
};

export default ProductCartCard;
