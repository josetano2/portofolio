import type { ImageMetadata } from "astro";
import type { IconType } from "react-icons/lib";

export interface IProject {
  name: string;
  role: string;
  stacks: IStack[];
  thumbnail: ImageMetadata;
  imageDetails?: ImageMetadata;
}

export interface IStack {
  name: string;
  icon: IconType;
}
