"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { ShoppingBag } from "lucide-react";
import {
  addProductToCart,
  checkIfProductExists,
} from "@/lib/actions/cart.action";
import { usePathname } from "next/navigation";

interface AddToCartQuantityProps {
  productId: string;
  userId: string;
  title: string;
  price: number;
  description: string;
  picture: string;
}

const AddToCartQuantity = ({
  productId,
  userId,
  title,
  price,
  description,
  picture,
}: AddToCartQuantityProps) => {
  const pathname = usePathname();

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex items-start justify-start gap-2.5 mt-1.5">
      <Button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={async () => {
          await addProductToCart({
            productId: productId,
            userId: userId ? JSON.parse(userId) : undefined,
            path: pathname,
          });
        }}
        className="bg-white text-dark font-medium text-base px-6 rounded-lg border border-dark hover:text-white hover:bg-dark gap-2">
        <ShoppingBag
          className={`w-5 h-5 ${
            isHovered ? "text-white" : "text-dark"
          } transition-all`}
        />
        Add To Cart
      </Button>
    </div>
  );
};

export default AddToCartQuantity;
