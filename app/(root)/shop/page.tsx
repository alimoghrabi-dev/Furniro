import ProductComp from "@/components/home/ProductComp";
import FeaturesAndInfo from "@/components/shared/FeaturesAndInfo";
import { ComboBox } from "@/components/shared/Filter";
import { getAllProducts } from "@/lib/actions/product.actions";
import { formatPrice } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const result = await getAllProducts();

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
          <h1 className="text-5xl font-bold text-dark">Shop</h1>
          <span className="flex gap-1 items-center mt-3.5">
            <Link href={"/"} className="font-semibold text-base">
              Home
            </Link>
            <ChevronRight className="text-dark w-[22px] h-[22px] mt-1" />
            <p className="text-base font-medium text-dark">Shop</p>
          </span>
        </div>
      </div>
      <ComboBox />

      <div className="max-w-7xl flex items-center justify-center flex-wrap gap-8 mt-12 pb-16">
        {result.map((product) => (
          <ProductComp
            key={product._id}
            title={product.title}
            imgSrc={product.picture}
            alt={product.title}
            description={product.description}
            href={`/shop/${product._id}`}
            price={`${formatPrice(product.price)}`}
          />
        ))}
      </div>

      <FeaturesAndInfo />
    </section>
  );
};

export default Page;
