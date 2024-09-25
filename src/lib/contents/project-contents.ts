import type { IProject, IStack } from "@/lib/models/model";
import { DiPostgresql, DiReact } from "react-icons/di";
import { FaGolang } from "react-icons/fa6";
import {
  RiTailwindCssFill,
  RiNextjsFill,
  RiFirebaseFill,
} from "react-icons/ri";
import { SiFlask } from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";
import traveloHIThumbnail from "@/lib/images/traveloHI/unknown.jpg";
import easyWorkThumbnail from "@/lib/images/EasyWork/unknown.jpg";

export const stackContents: IStack[] = [
  // 0
  {
    name: "React",
    icon: DiReact,
  },
  // 1
  {
    name: "Go",
    icon: FaGolang,
  },
  // 2
  {
    name: "Postgresql",
    icon: DiPostgresql,
  },
  // 3
  {
    name: "Next",
    icon: RiNextjsFill,
  },
  // 4
  {
    name: "Tailwind",
    icon: RiTailwindCssFill,
  },
  // 5
  {
    name: "Flask",
    icon: SiFlask,
  },
  // 6
  {
    name: "Kotlin",
    icon: TbBrandKotlin,
  },
  // 7
  {
    name: "Firebase",
    icon: RiFirebaseFill,
  },
];

export const projectContents: IProject[] = [
  {
    name: "TraveloHI",
    role: "Frontend + Backend + AI",
    stacks: [
      stackContents[0],
      stackContents[1],
      stackContents[2],
      stackContents[5],
    ],
    thumbnail: traveloHIThumbnail,
  },
  {
    name: "EasyWork",
    role: "Frontend",
    stacks: [stackContents[3], stackContents[4]],
    thumbnail: easyWorkThumbnail,
  },
  {
    name: "Sunshine",
    role: "Frontend",
    stacks: [stackContents[0], stackContents[4]],
    thumbnail: traveloHIThumbnail,
  },
  {
    name: "Recall",
    role: "Mobile",
    stacks: [stackContents[6], stackContents[7]],
    thumbnail: traveloHIThumbnail,
  },
  {
    name: "LinKasa",
    role: "Diagrams + Frontend + Backend",
    stacks: [stackContents[0], stackContents[4]],
    thumbnail: traveloHIThumbnail,
  },
  {
    name: "SunshineFi",
    role: "Frontend + Backend",
    stacks: [stackContents[0], stackContents[4], stackContents[5]],
    thumbnail: traveloHIThumbnail,
  },
];
