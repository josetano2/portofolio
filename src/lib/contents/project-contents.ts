import type { IProject, IStack } from "@/lib/models/model";
import { DiPostgresql, DiReact, DiRedis } from "react-icons/di";
import { FaGolang, FaUnity, FaCss3 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import {
  RiTailwindCssFill,
  RiNextjsFill,
  RiFirebaseFill,
} from "react-icons/ri";
import { SiFlask, SiCsharp } from "react-icons/si";
import { TbBrandKotlin, TbBrandGolang, TbBrandCSharp } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import traveloHIThumbnail from "@/lib/images/traveloHI/unknown.jpg";
import easyWorkThumbnail from "@/lib/images/EasyWork/unknown.jpg";

export const stackContents: IStack[] = [
  // 0
  {
    name: "React",
    icon: FaReact,
  },
  // 1
  {
    name: "Go",
    icon: TbBrandGolang,
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
  // 8
  {
    name: "Unity",
    icon: FaUnity,
  },
  // 9
  {
    name: "C#",
    icon: TbBrandCSharp,
  },
  // 10
  {
    name: "CSS",
    icon: FaCss3,
  },
  // 11
  {
    name: "GraphQL",
    icon: GrGraphQl,
  },
  // 11
  {
    name: "GraphQL",
    icon: GrGraphQl,
  },
  // 12
  {
    name: "Redis",
    icon: DiRedis,
  },
];

export const projectContents: IProject[] = [
  {
    name: "TraveloHI",
    description: "Web Application",
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
    description: "Web Application",
    stacks: [stackContents[3], stackContents[4]],
    thumbnail: easyWorkThumbnail,
  },
  {
    name: "Sunshine",
    description: "Web3 Application",
    stacks: [stackContents[0], stackContents[4]],
    thumbnail: traveloHIThumbnail,
  },
  {
    name: "Recall",
    description: "Mobile Application",
    stacks: [stackContents[6], stackContents[7]],
    thumbnail: traveloHIThumbnail,
  },
  {
    name: "The Adventure of TPA",
    description: "Game",
    stacks: [stackContents[8], stackContents[9]],
    thumbnail: traveloHIThumbnail,
  },
  {
    name: "LinKasa",
    description: "Desktop Application",
    stacks: [stackContents[0], stackContents[4]],
    thumbnail: traveloHIThumbnail,
  },
  {
    name: "SunshineFi",
    description: "Web3 Application",
    stacks: [stackContents[0], stackContents[4], stackContents[5]],
    thumbnail: traveloHIThumbnail,
  },
  {
    name: "TarZan",
    description: "Game",
    stacks: [stackContents[8], stackContents[9]],
    thumbnail: traveloHIThumbnail,
  },
  {
    name: "JAniDB",
    description: "Web Application",
    stacks: [stackContents[0], stackContents[10], stackContents[11]],
    thumbnail: traveloHIThumbnail,
  },
];
