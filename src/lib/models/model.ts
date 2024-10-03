import type { ImageMetadata } from "astro";
import type { IconType } from "react-icons/lib";

export interface IProject {
  name: string;
  description: string;
  explanation: string;
  stacks: IStack[];
  thumbnail: ImageMetadata;
  imageDetails: ImageMetadata[];
  githubRepo: string;
}

export interface IStack {
  name: string;
  icon: IconType;
}

export interface IExperience {
  name: string;
  year: string;
}
