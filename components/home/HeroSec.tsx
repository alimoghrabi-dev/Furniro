"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

const images = ["hero-bg.jpg", "hero-bg-2.jpg", "hero-bg-3.jpg"];

const HeroSec = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[92.5vh] w-full flex justify-end items-center">
      <div className="absolute inset-0 w-full h-full transition-opacity">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity shadow-md ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(/images/${image})`,
            }}
          />
        ))}
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
          <Button className="bg-baseColor uppercase text-sm font-medium p-1 px-4 sm:px-5 py-5 sm:py-6 mt-7 rounded-md hover:bg-baseColor/90">
            but now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
