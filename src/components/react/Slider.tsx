import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import type { ImageMetadata } from "astro";
import type { IStack } from "@/lib/models/model";

interface ISlider {
  image: ImageMetadata[];
}

export default function Slider({ image }: ISlider) {
  return (
    <Carousel className="w-full flex flex-col gap-3">
      <CarouselContent>
        {image.map((i, idx) => (
          <CarouselItem key={idx}>
            <img src={i.src} className="object-cover border-2 border-black" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-between">
        <CarouselPrevious data-cursor-icon=" " />
        <CarouselNext data-cursor-icon=" " />
      </div>
    </Carousel>
  );
}
