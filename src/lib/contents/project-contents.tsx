import type { IProject, IStack } from "@/lib/models/model";
import { DiPostgresql, DiReact } from "react-icons/di";
import { FaGolang  } from "react-icons/fa6";
import traveloHIThumbnail from "@/lib/images/traveloHI/unknown.png";
import easyWorkThumbnail from "@/lib/images/EasyWork/S__14262274.jpg"

export const stackContents: IStack[] = [
  {
    name: "React",
    icon: DiReact,
  },
  {
    name: "Go",
    icon: FaGolang,
  },
  {
    name: "Postgresql",
    icon: DiPostgresql,
  },
];

export const projectContents: IProject[] = [
  {
    name: "TraveloHI",
    role: "Fullstack",
    stacks: [stackContents[0], stackContents[1], stackContents[2]],
    thumbnail: traveloHIThumbnail,
  },
  {
    name: "TraveloHI",
    role: "Fullstack",
    stacks: [stackContents[0], stackContents[1], stackContents[2]],
    thumbnail: easyWorkThumbnail,
  },
  {
    name: "TraveloHI",
    role: "Fullstack",
    stacks: [stackContents[0], stackContents[1], stackContents[2]],
    thumbnail: traveloHIThumbnail,
  },
];
