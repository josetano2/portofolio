import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import type { ImageMetadata } from "astro";

interface ISlider {
  image: ImageMetadata[];
}

export default function Slider({ image }: ISlider) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {image.map((i, idx) => (
          <CarouselItem key={idx} className="basis-1/2">
            <img src={i.src} className="object-cover border-2 border-black" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
