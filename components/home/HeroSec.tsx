"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button } from "../ui/button";
import Image from "next/image";

const images = [
  {
    id: "1",
    imgUrl: "/images/hero-bg.jpg",
  },
  {
    id: "2",
    imgUrl: "/images/hero-bg-2.jpg",
  },
  {
    id: "3",
    imgUrl: "/images/hero-bg-3.jpg",
  },
];

const HeroSec = () => {
  return (
    <div className="relative h-[92.5vh] w-full flex justify-end items-center">
      <div className="absolute inset-0 w-full h-[590px] transition-opacity">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={8000}
          showArrows={false}
          showStatus={false}
          showIndicators={false}>
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.imgUrl}
              alt={image.id}
              width={1800}
              height={1800}
              className={`shadow-lg w-full h-[590px] object-cover`}
            />
          ))}
        </Carousel>
        <div className="absolute bottom-0 left-0 w-full h-[225px] bg-gradient-to-b opacity-50 from-transparent to-black shadow-xl" />
      </div>

      <div className="z-40 px-8 md:px-16 lg:px-24">
        <div className="bg-[#FFF3E3] flex items-start justify-center flex-col px-6 w-[250px] sm:w-[400px] shadow rounded-sm pb-6">
          <p className="text-sm font-normal pt-7 pb-1.5 text-dark">
            New Arrival
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-baseColor">
            Discover Our <br /> New Collection
          </h2>
          <p className="pt-1.5 text-[12px] sm:text-sm font-normal text-dark">
            It reveals its elegance, the pleasure of the work itself.
          </p>
          <Button className="bg-baseColor border border-baseColor uppercase text-sm font-semibold p-1 px-4 sm:px-5 py-5 sm:py-6 mt-7 rounded-sm hover:bg-transparent hover:text-baseColor">
            buy now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
