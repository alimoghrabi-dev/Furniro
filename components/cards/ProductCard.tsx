import Image from "next/image";
import AddToCartQuantity from "./AddToCartQuantity";
import { auth } from "@clerk/nextjs";
import { getUserById } from "@/lib/actions/user.actions";

interface ProductCardProps {
  productId: string;
  title: string;
  description: string;
  price: number;
  picture: string;
}

const rating = [
  {
    id: "1",
    image: "/icons/star-filled.svg",
  },
  {
    id: "2",
    image: "/icons/star-filled.svg",
  },
  {
    id: "3",
    image: "/icons/star-filled.svg",
  },
  {
    id: "4",
    image: "/icons/star-filled.svg",
  },
  {
    id: "5",
    image: "/icons/star-half.svg",
  },
];

const ProductCard = async ({
  productId,
  title,
  description,
  price,
  picture,
}: ProductCardProps) => {
  const { userId: clerkId } = auth();

  let mongoUser;

  if (clerkId) {
    mongoUser = await getUserById({ userId: clerkId });
  }

  return (
    <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center py-12 gap-4 md:gap-12">
      <div className="relative bg-[#F9F1E7] p-6 py-16 rounded-md flex items-center justify-center shadow-md">
        <Image
          src={picture}
          alt={title}
          width={1975}
          height={1975}
          className="object-cover w-[320px] h-[280px] rounded-sm bg-[#F9F1E7] shadow"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-4 mt-5">
        <h1 className="text-2xl font-medium text-dark">{title}</h1>
        <span className="text-gray-500 text-xl font-semibold">{price}$</span>
        <div className="flex gap-1">
          {rating.map((rate) => (
            <Image
              key={rate.id}
              src={rate.image}
              alt={rate.image}
              width={20}
              height={20}
            />
          ))}
        </div>
        <p className="text-base font-normal text-dark">{description}</p>

        <AddToCartQuantity
          productId={productId}
          userId={JSON.stringify(mongoUser._id)}
          title={title}
          price={price}
          picture={picture}
          description={description}
        />

        <div className="flex items-center justify-center gap-4 mt-2.5">
          <span className="text-dark/50 font-medium text-sm">Share</span>
          <a href="https://www.facebook.com/" className="rounded-full">
            <Image
              src={"/icons/icons8-facebook-30.png"}
              alt={"facebook"}
              width={25}
              height={25}
            />
          </a>
          <a href="https://www.facebook.com/" className="rounded-full">
            <Image
              src={"/icons/icons8-linkedin-30.png"}
              alt={"linkedin"}
              width={25}
              height={25}
            />
          </a>
          <a href="https://www.facebook.com/" className="rounded-full">
            <Image
              src={"/icons/icons8-instagram-30.png"}
              alt={"instagram"}
              width={25}
              height={25}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
