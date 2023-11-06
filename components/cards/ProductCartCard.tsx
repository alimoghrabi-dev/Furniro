"use client";

import { IProduct } from "@/database/product.model";
import { Trash } from "lucide-react";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TotalFetch from "./TotalFetch";
import { formatPrice } from "@/lib/utils";
import { deleteProductFromCart } from "@/lib/actions/cart.action";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  result: IProduct[];
  setProductQuantity: (
    productId: string,
    quantity: number
  ) => Promise<null | undefined>;
  userId: string | undefined;
}

const ProductCartCard = ({ result, setProductQuantity, userId }: Props) => {
  const pathname = usePathname();

  const [quantity, setQuantity] = useState<number>(1);
  const [isPending, setTransition] = useTransition();

  const quantityOptions: JSX.Element[] = [];
  for (let i = 1; i <= 10; i++) {
    quantityOptions.push(
      <option key={i} value={i} className="text-dark font-medium">
        {i}
      </option>
    );
  }

  return (
    <div className="flex flex-col md:flex-row w-full items-start justify-between px-9 lg:px-20">
      {!result && (
        <div className="w-full flex items-center justify-center flex-col py-16 gap-2">
          <p className="text-dark text-3xl sm:text-4xl font-semibold text-center">
            Your Cart Is Empty,
          </p>
          <Link
            href={`/shop`}
            className="text-lg sm:text-xl text-dark/70 underline underline-offset-2 hover:text-dark/90 transition-all">
            Add Some Products.
          </Link>
        </div>
      )}
      <div className="flex flex-col py-12 gap-10">
        {result?.map((product, index) => (
          <>
            <div
              key={product.id}
              className="flex-1 flex flex-wrap items-center justify-start gap-6 lg:gap-16 xl:gap-20 py-2">
              <Image
                src={product.picture}
                alt={product.title}
                width={800}
                height={800}
                className="bg-[#F9F1E7] w-24 h-24 rounded-sm object-contain"
              />

              <p className="text-dark/50 font-medium -ml-2 lg:-ml-12">
                {product.title}
              </p>
              <p className="text-dark/50 font-medium">${product.price}</p>
              <select
                id={`numberSelect-${product._id}`}
                onChange={(e) => {
                  const newQuantity = setQuantity(Number(e.target.value));
                  setTransition(async () => {
                    await setProductQuantity(product.id, newQuantity!);
                  });
                }}
                value={quantity}
                className="text-dark text-sm font-semibold bg-transparent border border-dark/90 rounded-md px-2 py-1">
                {quantityOptions}
              </select>
              <span>{formatPrice(product.price * quantity)}</span>
              <Trash
                onClick={() =>
                  deleteProductFromCart(product.id, userId, pathname)
                }
                className="text-baseColor cursor-pointer"
              />
            </div>
            {index !== result?.length - 1 && (
              <div className="bg-dark/20 w-[65%] h-px" />
            )}
          </>
        ))}
      </div>

      <TotalFetch
        noResult={!result}
        total={result?.reduce((a, b) => a + b.price * quantity, 0) || 0}
      />
    </div>
  );
};

export default ProductCartCard;
