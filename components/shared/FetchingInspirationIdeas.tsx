"use client";

import { inspirations } from "@/constants";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import Carousel from "nuka-carousel";
import { useState } from "react";
import { Button } from "../ui/button";

const FetchingInspirationIdeas = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <div className="flex w-[80%] sm:w-[70%] md:w-[50%] lg:w-[30%] relative">
      <Carousel
        slideIndex={slideIndex}
        renderBottomCenterControls={null}
        afterSlide={handleSlideChange}
        renderCenterLeftControls={({ previousSlide }) => (
          <Button
            onClick={previousSlide}
            className={`absolute bottom-2 bg-baseColor rounded-sm hover:bg-baseColor/80 bg-opacity-90 left-2 ${
              slideIndex === 3 ? "hidden" : "block"
            } ${slideIndex === 0 ? "hidden" : "block"}`}>
            <MoveLeft />
          </Button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <Button
            onClick={nextSlide}
            className={`absolute bottom-2 rounded-sm bg-baseColor right-2 hover:bg-baseColor/80 bg-opacity-90 ${
              slideIndex === 2 ? "hidden" : "block"
            }`}>
            <MoveRight />
          </Button>
        )}>
        {inspirations.map((item, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center">
            <Image
              src={item.imgSrc}
              width={1950}
              height={1950}
              alt={item.id}
              className="object-cover w-[800px] lg:w-[500px] h-[450px] rounded-sm shadow border border-gray-500 border-opacity-25"
            />
            <div className="absolute bottom-2 rounded-sm mx-auto bg-white bg-opacity-80 flex flex-col gap-2 p-5">
              <span className="text-dark font-medium text-sm">
                {slideIndex === 0 && "01 - Bed Room"}
                {slideIndex === 1 && "02 - Kitchen"}
                {slideIndex === 2 && "03 - Living Room"}
              </span>
              <p className="text-lg text-dark font-bold">Inner Peace</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FetchingInspirationIdeas;
