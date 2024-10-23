import type { ImageMetadata } from "astro";
import type { IconType } from "react-icons/lib";

export interface IProject {
  name: string;
  description: string;
  explanation: string;
  stacks: IStack[];
  thumbnail: ImageMetadata;
  imageDetails?: string;
  githubRepo: string;
  demo?: string;
}

export interface IStack {
  name: string;
  icon: IconType;
}

export interface IExperience {
  name: string;
  year: string;
}
export interface IAchievement extends IExperience {
  certifImage?: ImageMetadata;
}
