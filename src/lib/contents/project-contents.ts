import type { IExperience, IProject, IStack } from "@/lib/models/model";
import { DiPostgresql, DiReact, DiRedis } from "react-icons/di";
import { FaGolang, FaUnity, FaCss3 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import {
  RiTailwindCssFill,
  RiNextjsFill,
  RiFirebaseFill,
} from "react-icons/ri";
import { SiFlask, SiCsharp, SiElectron } from "react-icons/si";
import { TbBrandKotlin, TbBrandGolang, TbBrandCSharp } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoElectron } from "react-icons/io5";
import { RiFlutterFill } from "react-icons/ri";
import traveloHIThumbnail from "@/lib/images/TraveloHI/main.png";
import sunshineThumbnail from "@/lib/images/Sunshine/main.jpg";
import recallThumbnail from "@/lib/images/Recall/main.png";
import easyWorkThumbnail from "@/lib/images/EasyWork/main.png";
import linkasaThumbnail from "@/lib/images/LinKasa/main.png";
import janiDBThumbnail from "@/lib/images/JAniDB/main.png";
import theAdventureOfTPAThumbnail from "@/lib/images/The Adventure of TPA/main.png";
import tarzanThumbnail from "@/lib/images/TarZaN/main.png";
import sunshineFiThumbnail from "@/lib/images/SunshineFi/main.png";
import aniMobThumbnail from "@/lib/images/AniMob/main.jpg";

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
  // 12
  {
    name: "GraphQL",
    icon: GrGraphQl,
  },
  // 13
  {
    name: "Redis",
    icon: DiRedis,
  },
  // 14
  {
    name: "Electron",
    icon: IoLogoElectron,
  },
  // 15
  {
    name: "Flutter",
    icon: RiFlutterFill,
  },
];

export const projectContents: { [key: string]: IProject } = {
  travelohi: {
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
  easywork: {
    name: "EasyWork",
    description: "Web Application",
    stacks: [stackContents[3], stackContents[4]],
    thumbnail: easyWorkThumbnail,
  },
  sunshine: {
    name: "Sunshine",
    description: "Web3 Application",
    stacks: [stackContents[0], stackContents[4]],
    thumbnail: sunshineThumbnail,
  },
  recall: {
    name: "Recall",
    description: "Mobile Application",
    stacks: [stackContents[6], stackContents[7]],
    thumbnail: recallThumbnail,
  },
  "the-adventure-of-tpa": {
    name: "The Adventure of TPA",
    description: "Game",
    stacks: [stackContents[8], stackContents[9]],
    thumbnail: theAdventureOfTPAThumbnail,
  },
  linkasa: {
    name: "LinKasa",
    description: "Desktop Application",
    stacks: [stackContents[0], stackContents[7], stackContents[14]],
    thumbnail: linkasaThumbnail,
  },
  tarzan: {
    name: "TarZaN",
    description: "Game",
    stacks: [stackContents[8], stackContents[9]],
    thumbnail: tarzanThumbnail,
  },
  sunshinefi: {
    name: "SunshineFi",
    description: "Web3 Application",
    stacks: [stackContents[0], stackContents[4], stackContents[5]],
    thumbnail: sunshineFiThumbnail,
  },
  janidb: {
    name: "JAniDB",
    description: "Web Application",
    stacks: [stackContents[0], stackContents[10], stackContents[11]],
    thumbnail: janiDBThumbnail,
  },
  animob: {
    name: "AniMob",
    description: "Mobile Application",
    stacks: [stackContents[15]],
    thumbnail: aniMobThumbnail,
  },
};

export const myself = `Hello, my name is Jose Jonathan Tano, an undergratuate 
    computer science student with a passion for technologies and learning. 
    My focus right now to master my skills in web development, aiming
    to create user-friendly, efficient, and elegant softwares.`;

export const achievements: IExperience[] = [
  {
    name: "2nd Winner of CodeFest Hackathon 3.0",
    year: "2024",
  },
  {
    name: "2nd Winner of CodeFest Chain Fusion Hackathon",
    year: "2024",
  },
  {
    name: "Best Teaching Index",
    year: "2024",
  },
  {
    name: "Garudahacks Hackathon",
    year: "2024",
  },
];
export const experiences: IExperience[] = [
  {
    name: "Part-Time Laboratory Assistant@Binus",
    year: "2023",
  },
  {
    name: "Full-Time Laboratory Assistant@Binus",
    year: "2023 - 2025",
  },
];
