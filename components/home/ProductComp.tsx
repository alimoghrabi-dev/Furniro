import Image from "next/image";
import Link from "next/link";

interface ProductCompProps {
  title: string;
  imgSrc: string;
  alt: string;
  description: string;
  price: string;
  href: string;
  hasDiscount?: boolean;
  discount?: string;
}

const ProductComp = ({
  title,
  imgSrc,
  alt,
  description,
  price,
  href,
  hasDiscount,
  discount,
}: ProductCompProps) => {
  return (
    <div className="w-[220px] h-[310px] relative">
      <Link
        href={href}
        className={`w-full h-full flex flex-col items-center gap-5 justify-start shadow-lg hover:shadow-baseColor/40 border-gray-800 border border-opacity-10 cursor-pointer rounded-sm pb-5 transition-transform transform 
        hover:shadow-lg
        `}>
        <div className="w-full flex relative h-[65%]">
          <Image
            src={imgSrc}
            alt={alt}
            fill
            className="object-cover rounded-t-[2px]"
          />
        </div>

        <div className="w-full flex flex-col items-start justify-center gap-2.5">
          <span className="text-lg font-semibold text-dark px-2.5">
            {title}
          </span>
          <p className="text-[#898989] font-nomral text-sm px-2.5">
            {description}
          </p>
          <span className="text-lg font-medium text-dark px-2.5 flex gap-5">
            {price}
            {hasDiscount && (
              <p className="text-[#B0B0B0] text-[11px] font-normal line-through">
                {discount}
              </p>
            )}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProductComp;
