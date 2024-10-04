import type { IExperience, IProject, IStack } from "@/lib/models/model";
import { DiPostgresql, DiRedis } from "react-icons/di";
import { FaUnity, FaCss3 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import {
  RiTailwindCssFill,
  RiNextjsFill,
  RiFirebaseFill,
} from "react-icons/ri";
import { SiFlask } from "react-icons/si";
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
    explanation: `
      TraveloHI is a fullstack web application that offer users to book flights and reserve hotel rooms online, similar to many other e-commerce platforms. 
      TraveloHI is a project to replicate the famous Traveloka.com. User could use promo, view their transaction history, view their current active ticket, 
      view bookings, search & filter multiple hotels and flights, and much more! A cool feature on this web is user could upload a specific scenery photo,
      and an AI could predict the image that is given by the user.#

      The frontend of this website is created by utilizing React and SCSS. Meanwhile the backend part it created by using Go and Flask. The web application
      utilizes REST API powered by PostgreSQL for database management. Lastly, it utilizes JWT authentication for user access and storing cookies.
    `,
    thumbnail: traveloHIThumbnail,
    githubRepo: "https://github.com/josetano2/TraveloHI",
    imageDetails: [
      traveloHIThumbnail,
      traveloHIThumbnail,
      traveloHIThumbnail,
      traveloHIThumbnail,
      traveloHIThumbnail,
    ],
  },
  easywork: {
    name: "EasyWork",
    description: "Web Application",
    explanation: `
      EasyWork is an AI-powered application designed to reduce unemployment and address the wage gap in Indonesia. In recent years, unemployment has become a growing issue, 
      exacerbated by a lack of financial literacy, formal education, and accessible skill development resources. This challenge affects not only individuals with limited 
      skills but also those who are qualified yet struggle to find employment. Recognizing this, our team was inspired to create a platform that connects people with job 
      opportunities, helping them secure meaningful employment.#

      EasyWork is designed to be user-friendly. Users can input their educational background, work experience, and other relevant details, and the app determines their suitability 
      for various job opportunities. Our web application leverages Large Language Models, vector databases, and Pinecone AI to automate the job search process, delivering personalized 
      job matches efficiently. The frontend is built using Next.js and Tailwind. EasyWork is created over the course of 36 hours for the Garudahacks Hackathon, created
      by a group of 4 people which are Christopher Alden, Darryl Christopher, and Theo Justin.
    `,
    stacks: [stackContents[3], stackContents[4]],
    thumbnail: easyWorkThumbnail,
    githubRepo: "https://github.com/josetano2/easy-work",
    imageDetails: [easyWorkThumbnail, easyWorkThumbnail, easyWorkThumbnail],
  },
  sunshine: {
    name: "Sunshine",
    description: "Web3 Application",
    explanation: `
      TraveloHI is a fullstack web application that offer users to book flights and reserve hotel rooms online, similar to many other e-commerce platforms. 
      TraveloHI is a project to replicate the famous Traveloka.com. User could use promo, view their transaction history, view their current active ticket, 
      view bookings, search & filter multiple hotels and flights, and much more! A cool feature on this web is user could upload a specific scenery photo,
      and an AI could predict the image that is given by the user.#

      The frontend of this website is created by utilizing React and SCSS. Meanwhile the backend part it created by using Go and Flask. The web application
      utilizes REST API powered by PostgreSQL for database management. Lastly, it utilizes JWT authentication for user access and storing cookies.
    `,
    stacks: [stackContents[0], stackContents[4]],
    thumbnail: sunshineThumbnail,
    githubRepo: "https://github.com/josetano2/sunshine",
    imageDetails: [easyWorkThumbnail],
  },
  recall: {
    name: "Recall",
    description: "Mobile Application",
    explanation: `
      TraveloHI is a fullstack web application that offer users to book flights and reserve hotel rooms online, similar to many other e-commerce platforms. 
      TraveloHI is a project to replicate the famous Traveloka.com. User could use promo, view their transaction history, view their current active ticket, 
      view bookings, search & filter multiple hotels and flights, and much more! A cool feature on this web is user could upload a specific scenery photo,
      and an AI could predict the image that is given by the user.#

      The frontend of this website is created by utilizing React and SCSS. Meanwhile the backend part it created by using Go and Flask. The web application
      utilizes REST API powered by PostgreSQL for database management. Lastly, it utilizes JWT authentication for user access and storing cookies.
    `,
    stacks: [stackContents[6], stackContents[7]],
    thumbnail: recallThumbnail,
    githubRepo: "https://github.com/josetano2/recall",
    imageDetails: [easyWorkThumbnail],
  },
  "the-adventure-of-tpa": {
    name: "The Adventure of TPA",
    description: "Game",
    explanation: `
      TraveloHI is a fullstack web application that offer users to book flights and reserve hotel rooms online, similar to many other e-commerce platforms. 
      TraveloHI is a project to replicate the famous Traveloka.com. User could use promo, view their transaction history, view their current active ticket, 
      view bookings, search & filter multiple hotels and flights, and much more! A cool feature on this web is user could upload a specific scenery photo,
      and an AI could predict the image that is given by the user.#

      The frontend of this website is created by utilizing React and SCSS. Meanwhile the backend part it created by using Go and Flask. The web application
      utilizes REST API powered by PostgreSQL for database management. Lastly, it utilizes JWT authentication for user access and storing cookies.
    `,
    stacks: [stackContents[8], stackContents[9]],
    thumbnail: theAdventureOfTPAThumbnail,
    githubRepo: "https://github.com/josetano2/The-Adventure-of-TPA",
    imageDetails: [easyWorkThumbnail],
  },
  linkasa: {
    name: "LinKasa",
    description: "Desktop Application",
    explanation: `
      TraveloHI is a fullstack web application that offer users to book flights and reserve hotel rooms online, similar to many other e-commerce platforms. 
      TraveloHI is a project to replicate the famous Traveloka.com. User could use promo, view their transaction history, view their current active ticket, 
      view bookings, search & filter multiple hotels and flights, and much more! A cool feature on this web is user could upload a specific scenery photo,
      and an AI could predict the image that is given by the user.#

      The frontend of this website is created by utilizing React and SCSS. Meanwhile the backend part it created by using Go and Flask. The web application
      utilizes REST API powered by PostgreSQL for database management. Lastly, it utilizes JWT authentication for user access and storing cookies.
    `,
    stacks: [stackContents[0], stackContents[7], stackContents[14]],
    thumbnail: linkasaThumbnail,
    githubRepo: "https://github.com/josetano2/LinKasa",
    imageDetails: [easyWorkThumbnail],
  },
  tarzan: {
    name: "TarZaN",
    description: "Game",
    explanation: `
      TraveloHI is a fullstack web application that offer users to book flights and reserve hotel rooms online, similar to many other e-commerce platforms. 
      TraveloHI is a project to replicate the famous Traveloka.com. User could use promo, view their transaction history, view their current active ticket, 
      view bookings, search & filter multiple hotels and flights, and much more! A cool feature on this web is user could upload a specific scenery photo,
      and an AI could predict the image that is given by the user.#

      The frontend of this website is created by utilizing React and SCSS. Meanwhile the backend part it created by using Go and Flask. The web application
      utilizes REST API powered by PostgreSQL for database management. Lastly, it utilizes JWT authentication for user access and storing cookies.
    `,
    stacks: [stackContents[8], stackContents[9]],
    thumbnail: tarzanThumbnail,
    githubRepo: "https://github.com/josetano2/tarzan",
    imageDetails: [easyWorkThumbnail],
  },
  sunshinefi: {
    name: "SunshineFi",
    explanation: `
      TraveloHI is a fullstack web application that offer users to book flights and reserve hotel rooms online, similar to many other e-commerce platforms. 
      TraveloHI is a project to replicate the famous Traveloka.com. User could use promo, view their transaction history, view their current active ticket, 
      view bookings, search & filter multiple hotels and flights, and much more! A cool feature on this web is user could upload a specific scenery photo,
      and an AI could predict the image that is given by the user.#

      The frontend of this website is created by utilizing React and SCSS. Meanwhile the backend part it created by using Go and Flask. The web application
      utilizes REST API powered by PostgreSQL for database management. Lastly, it utilizes JWT authentication for user access and storing cookies.
    `,
    description: "Web3 Application",
    stacks: [stackContents[0], stackContents[4], stackContents[5]],
    thumbnail: sunshineFiThumbnail,
    githubRepo: "https://github.com/josetano2/sunshine-socialfi",
    imageDetails: [easyWorkThumbnail],
  },
  janidb: {
    name: "JAniDB",
    explanation: `
      TraveloHI is a fullstack web application that offer users to book flights and reserve hotel rooms online, similar to many other e-commerce platforms. 
      TraveloHI is a project to replicate the famous Traveloka.com. User could use promo, view their transaction history, view their current active ticket, 
      view bookings, search & filter multiple hotels and flights, and much more! A cool feature on this web is user could upload a specific scenery photo,
      and an AI could predict the image that is given by the user.#

      The frontend of this website is created by utilizing React and SCSS. Meanwhile the backend part it created by using Go and Flask. The web application
      utilizes REST API powered by PostgreSQL for database management. Lastly, it utilizes JWT authentication for user access and storing cookies.
    `,
    description: "Web Application",
    stacks: [stackContents[0], stackContents[10], stackContents[11]],
    thumbnail: janiDBThumbnail,
    githubRepo: "https://github.com/josetano2/JAniDB",
    imageDetails: [easyWorkThumbnail],
  },
  animob: {
    name: "AniMob",
    explanation: `
      TraveloHI is a fullstack web application that offer users to book flights and reserve hotel rooms online, similar to many other e-commerce platforms. 
      TraveloHI is a project to replicate the famous Traveloka.com. User could use promo, view their transaction history, view their current active ticket, 
      view bookings, search & filter multiple hotels and flights, and much more! A cool feature on this web is user could upload a specific scenery photo,
      and an AI could predict the image that is given by the user.#

      The frontend of this website is created by utilizing React and SCSS. Meanwhile the backend part it created by using Go and Flask. The web application
      utilizes REST API powered by PostgreSQL for database management. Lastly, it utilizes JWT authentication for user access and storing cookies.
    `,
    description: "Mobile Application",
    stacks: [stackContents[15]],
    thumbnail: aniMobThumbnail,
    githubRepo: "https://github.com/josetano2/AniMob",
    imageDetails: [easyWorkThumbnail],
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
