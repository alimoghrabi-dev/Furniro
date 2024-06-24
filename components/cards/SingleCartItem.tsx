import { Trash } from "lucide-react";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { deleteProductFromCart } from "@/lib/actions/cart.action";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface SingleCartItemProps {
  productId: string;
  productPicture: string;
  productTitle: string;
  ProductPrice: number;
  index: number;
  resultLength: number;
  userId: string | undefined;
  updateQuantity: any;
}

const SingleCartItem = ({
  productId,
  productPicture,
  productTitle,
  ProductPrice,
  index,
  resultLength,
  userId,
  updateQuantity,
}: SingleCartItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [quantity, setQuantity] = useState<number>(() => {
    const params = new URLSearchParams(searchParams.toString());
    return Number(params.get(productId)) || 1;
  });

  useEffect(() => {
    setQuantity(1);
  }, []);

  const quantityOptions: JSX.Element[] = [];
  for (let i = 1; i <= 10; i++) {
    quantityOptions.push(
      <option key={i} value={i} className="text-dark font-medium">
        {i}
      </option>
    );
  }

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    updateQuantity(productId, newQuantity);

    const params = new URLSearchParams(searchParams.toString());
    params.set(productId, newQuantity.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className="flex-1 flex flex-wrap items-center justify-start gap-6 lg:gap-16 xl:gap-20 py-2">
        <Image
          src={productPicture}
          alt={productTitle}
          width={800}
          height={800}
          className="bg-[#F9F1E7] w-24 h-24 rounded-sm object-contain"
        />

        <p className="text-dark/50 font-medium -ml-2 lg:-ml-12">
          {productTitle}
        </p>
        <p className="text-dark/50 font-medium">${ProductPrice}</p>
        <select
          id={`numberSelect-${productId}`}
          onChange={(e) => handleQuantityChange(Number(e.target.value))}
          value={quantity}
          className="text-dark text-sm font-semibold bg-transparent border border-dark/90 rounded-md px-2 py-1"
        >
          {quantityOptions}
        </select>
        <span>{formatPrice(ProductPrice * quantity)}</span>
        <Trash
          onClick={() => {
            deleteProductFromCart(productId, userId, pathname);
            const cleanUrl = pathname.split("?")[0];
            router.replace(cleanUrl);
          }}
          className="text-baseColor cursor-pointer"
        />
      </div>
      {index !== resultLength - 1 && (
        <div className="bg-dark/20 w-[65%] h-px" />
      )}
    </>
  );
};

export default SingleCartItem;
