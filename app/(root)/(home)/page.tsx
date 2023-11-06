import BrowseImages from "@/components/home/BrowseImages";
import Gallery from "@/components/home/Gallery";
import HeroSec from "@/components/home/HeroSec";
import InspirationComp from "@/components/home/InspirationComp";
import FetchLatestProducts from "@/components/shared/fetchLatestProducts";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/for_test/product";
import Link from "next/link";

export default async function Home() {
  const latestProducts = await getProducts();

  return (
    <main className="w-full flex flex-col">
      <div>
        <HeroSec />
      </div>

      <div className="w-full flex items-center justify-center py-12">
        <h3 className="text-dark font-bold text-3xl">Discover The Range</h3>
      </div>

      <div className="w-full flex items-center justify-center flex-wrap gap-5 pb-12">
        <BrowseImages
          href="/"
          ImageSrc="/images/dinning.png"
          altTag="dinning"
          title="Dinning"
        />
        <BrowseImages
          href="/"
          ImageSrc="/images/living-room.png"
          altTag="living"
          title="Living"
        />
        <BrowseImages
          href="/"
          ImageSrc="/images/bedroom.png"
          altTag="bedroom"
          title="Bedroom"
        />
      </div>

      <div className="w-full flex items-center justify-center py-10">
        <h3 className="text-dark font-bold text-3xl">Our Latest Products</h3>
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-7 pb-8">
        <FetchLatestProducts latestProducts={latestProducts} />

        <Link href={"/shop"}>
          <Button className="mt-3.5 rounded-sm p-2.5 px-5 bg-trasparent text-baseColor border border-baseColor hover:bg-baseColor hover:text-[#fff]">
            Discover More
          </Button>
        </Link>
      </div>

      <InspirationComp />

      <Gallery />
    </main>
  );
}
