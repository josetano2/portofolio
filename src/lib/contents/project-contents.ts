import type {
  IAchievement,
  IExperience,
  IProject,
  IStack,
} from "@/lib/models/model";
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
import codefestCertif from "@/lib/images/Certificates/Codefest.png";

import { importImageDetails } from "../utils/import";

const traveloHIDetails = importImageDetails(
  import.meta.glob("@/lib/images/TraveloHI/Details/*.png", { eager: true }),
);

import travelohi1 from "@/lib/images/TraveloHI/Details/1.png";
import travelohi2 from "@/lib/images/TraveloHI/Details/2.png";
import travelohi3 from "@/lib/images/TraveloHI/Details/3.png";
import travelohi4 from "@/lib/images/TraveloHI/Details/4.png";
import travelohi5 from "@/lib/images/TraveloHI/Details/5.png";
import travelohi6 from "@/lib/images/TraveloHI/Details/6.png";
import travelohi7 from "@/lib/images/TraveloHI/Details/7.png";
import travelohi8 from "@/lib/images/TraveloHI/Details/8.png";
import travelohi9 from "@/lib/images/TraveloHI/Details/9.png";
import travelohi10 from "@/lib/images/TraveloHI/Details/10.png";
import travelohi11 from "@/lib/images/TraveloHI/Details/11.png";
import travelohi12 from "@/lib/images/TraveloHI/Details/12.png";
import travelohi13 from "@/lib/images/TraveloHI/Details/13.png";

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
      and an AI could predict the image that is given by the user.~

      The frontend of this website is created by utilizing React and SCSS. Meanwhile the backend part it created by using Go and Flask. The web application
      utilizes REST API powered by PostgreSQL for database management. For the model itself, it utilizes the AlexNet Model. Lastly, it utilizes JWT authentication 
      for user access and storing cookies.
    `,
    thumbnail: traveloHIThumbnail,
    githubRepo: "https://github.com/josetano2/TraveloHI",
    imageDetails: [
      travelohi1,
      travelohi2,
      travelohi3,
      travelohi4,
      travelohi5,
      travelohi6,
      travelohi7,
      travelohi8,
      travelohi9,
      travelohi10,
      travelohi11,
      travelohi12,
      travelohi13,
    ],
  },
  easywork: {
    name: "EasyWork",
    description: "Web Application",
    explanation: `
      EasyWork is an AI-powered application designed to reduce unemployment and address the wage gap in Indonesia. In recent years, unemployment has become a growing issue, 
      exacerbated by a lack of financial literacy, formal education, and accessible skill development resources. This challenge affects not only individuals with limited 
      skills but also those who are qualified yet struggle to find employment. Recognizing this, our team was inspired to create a platform that connects people with job 
      opportunities, helping them secure meaningful employment.~

      EasyWork is designed to be user-friendly. Users can input their educational background, work experience, and other relevant details, and the app determines their suitability 
      for various job opportunities. Our web application leverages Large Language Models, vector databases, and Pinecone AI to automate the job search process, delivering personalized 
      job matches efficiently. The frontend is built using Next.js and Tailwind. EasyWork is created over the course of 36 hours for the Garudahacks Hackathon, created
      by a group of 4 people which are Christopher Alden, Darryl Christopher, and Theo Justin.
    `,
    stacks: [stackContents[3], stackContents[4]],
    thumbnail: easyWorkThumbnail,
    githubRepo: "https://github.com/josetano2/easy-work",
    demo: "https://devpost.com/software/easywork?ref_content=my-projects-tab&ref_feature=my_projects",
  },
  sunshine: {
    name: "Sunshine 🌞",
    description: "Web3 Application",
    explanation: `
     Sunshine is a real-time chat application developed on the Internet Computer using the Motoko programming language. It enables user interactions through integrated Internet Identity 
     verification and supports cryptocurrency transactions. Additionally, Sunshine offers interactive gaming features to enhance user engagement and fun. Sunshine also utilizes Internet 
     Identity for authentication. With Internet Identity, users do not need to rely on traditional usernames and passwords; instead, they can authenticate their identity using biometric data.~

    The frontend of the application is built using React and Tailwind, while the backend, which handles all incoming messages, is powered by Motoko, a language specifically designed 
    for the Internet Computer. Sunshine is created by a group of 3 people which are Theo Justin, and Ryan Wantouw.
     `,
    stacks: [stackContents[0], stackContents[4]],
    thumbnail: sunshineThumbnail,
    githubRepo: "https://github.com/josetano2/sunshine",
    demo: "https://youtu.be/5CAqpu-hQPc",
  },
  recall: {
    name: "Recall",
    description: "Mobile Application",
    explanation: `
      Recall is a mobile app for sharing and optimizing flashcards online, utilizing the Supermemo2 Algorithm to boost learning efficiency. Recall is created
      to enables people who wanted to learn new things quickly and efficiently. Recall is efficient since it utilizes Spaced Repetition System (SRS) algorithm 
      to determine what the user should review now. User could create a deck for their studying purposes, or they could view all of the available decks online
      created by other users. Users could review their card and see the summary of their review, which utilizes SM2 algorithm at the backend.~

      Recall created in Android and uses Kotlin, we also utilize the Jetpack Compose Framework on creating the layout of the application. Meanwhile the backend
      is created by using Firebase and Java Spring. Recall is created by a group of 2 people, myself and Darren Maverick.
    `,
    stacks: [stackContents[6], stackContents[7]],
    thumbnail: recallThumbnail,
    githubRepo: "https://github.com/josetano2/recall",
  },
  "the-adventure-of-tpa": {
    name: "The Adventure of TPA",
    description: "Game",
    explanation: `
      The Adventure of Tim, Patrick, and Araszkiewicz (TPA) is a quest based RPG developed in Unity, featuring a dynamic battle system and immersive environment.
      The game follows the journey of three charactes: Tim, a brave knight; Patrick, a dog knight; and Araszkiewicz, a wizard. Player can explore the town to accept
      quest, or to buy potions to enhance their character. One of the available quest is to defend crystals from the upcoming enemies. The goal is to kill the enemy
      as many as possible to earn points. The game will end when either the crystal is destroyed, or all three character dies. After a game ends, the player could earn
      in-game money based on their perfomance.~

      The Adventure of TPA is created by using Unity and C#. The uses multiple algorithms for world design and pathfindings. The game uses Binary Space Partitioning (BSP),
      and Prim to generate random obstacles on the map, and A* algorithm for the enemies' pathfinding.
    `,
    stacks: [stackContents[8], stackContents[9]],
    thumbnail: theAdventureOfTPAThumbnail,
    githubRepo: "https://github.com/josetano2/The-Adventure-of-TPA",
  },
  linkasa: {
    name: "LinKasa",
    description: "Desktop Application",
    explanation: `
      LinKasa is a desktop application designed to manage and optimize airport management operations. LinKasa aims to facilitate complex task associated with
      managing flight operations, ground support, and other logistical challenges. This application integrates real-time monitoring, task management, and communication 
      features between departments, allowing airport staff to efficiently handle everything from baggage tracking to security operations.  LinKasa is designed to be 
      user-friendly and customizable, providing the tools that airport operators need to ensure safety and efficiency.~

      Given Linkasa's extensive range of roles and functionalities, the first step is to thoroughly analyze the business requirements for this application, by mapping them
      into an UML Model. For this project, I have made the use case diagram, use case description, and the other diagrams needed. For the application itself, it is created
      by using Next.js and electron, and Firebase to store all of the data.
    `,
    stacks: [stackContents[0], stackContents[7], stackContents[14]],
    thumbnail: linkasaThumbnail,
    githubRepo: "https://github.com/josetano2/LinKasa",
  },
  tarzan: {
    name: "TarZaN",
    description: "Game",
    explanation: `
     TarZan is an RPG and tower defense game developed in Unity. Player can explore diverse biomes, tame wild animals,
     and mainly, engage in tower defense scenarios where waves of enemies challenge their defenses. Overtime, player would
     get XP from the tower defense game mode. The player's objective is to defend the treehouse from these enemis.
     Once they are ready, tehy can challenge the final boss to conclude the game. Aside from the tower defense mode, player 
     could explore the biomes by walking, running, climbing, and even grappling. Player could tame pets to help them throught the gameplay.~

     TarZan is created by using Unity and C#. It also utilizes various algorithms throughout the game, which are Wave Function Collapse
     (WFC) to generate the obstacles, and A* for the optimizing the enemies' pathfinding towards the treehouse. Lastly, the game uses NavMesh
     for the wild animal's movement and pathfinding.
    `,
    stacks: [stackContents[8], stackContents[9]],
    thumbnail: tarzanThumbnail,
    githubRepo: "https://github.com/josetano2/tarzan",
  },
  sunshinefi: {
    name: "SunshineFi",
    explanation: `
      SunshineFi is a SocialFi and Crowdfunding platform that revolutionizes how projects are funded and managed on the blockchain. Our platform offers 
      seamless project prototype submission while integrating AI-driven sentiment analysis (NLP) to monitor and evaluate community feedback. By detecting 
      negative comments, such as those related to disturbing content or potential scams, SunshineFi automatically manages these flagged posts through a DAO system, 
      ensuring that only trustworthy projects are promoted. Once a project is validated and stored in our dApp, users can crowdfund it, driving innovation 
      and growth in the Web3 space.~

      The frontend of the application is built using React and Tailwind, while the backend, which handles all the posts available, is powered by Motoko, a language 
      specifically designed for the Internet Computer. Just like Sunshine, SunshineFi also utilizes Internet Identity to identify and authenticate users that uses
      our web. SunshineFi is created over the course of 36 hours for the Chain Fusion HackerHouse Hackatahon at Bali, build by a group of 3 people, Theo Justin and
      Ryan Wantouw.
    `,
    description: "Web3 Application",
    stacks: [stackContents[0], stackContents[4], stackContents[5]],
    thumbnail: sunshineFiThumbnail,
    githubRepo: "https://github.com/josetano2/sunshine-socialfi",
  },
  janidb: {
    name: "JAniDB",
    explanation: `
      JaniDB is a web application that showcases a vast collection of information from the world of anime. The site features top-rated shows across various genres like 
      RomCom, Drama, Action, and Music. When a user clicks on an anime card, they are directed to a detailed page containing comprehensive information, including total episodes, 
      characters, genres, synopsis, and more. Users can also search for specific anime titles and save their favorites for easy access.~

      JaniDB is created with React, and it utlizies GraphQL from the AniList API. JaniDB is my first project that uses React and utilizes API to display real-time dynamic information on the website.
    `,
    description: "Web Application",
    stacks: [stackContents[0], stackContents[10], stackContents[11]],
    thumbnail: janiDBThumbnail,
    githubRepo: "https://github.com/josetano2/JAniDB",
    demo: "https://janidb.vercel.app/",
  },
  animob: {
    name: "AniMob",
    explanation: `
      AniMob is a mobile application that showcases a vast collection of information from the world of anime. Similar to JaniDB, it recommends multiple animes from various of genres.
      User could comment their opinion on each of the anime, and they could mark their favorites for easy access. The app also features a search function, allowing users to 
      browse various anime, view brief synopses, and explore genres.~

      AniMob is created with Flutter, and it does not have a backend. So everything within the application is hard coded information. Although the application is not dynamic, it gave
      me a new approach on building application on Flutter, since this is my first project by using Flutter.
    `,
    description: "Mobile Application",
    stacks: [stackContents[15]],
    thumbnail: aniMobThumbnail,
    githubRepo: "https://github.com/josetano2/AniMob",
  },
};

export const myself = `Hello, my name is Jose Jonathan Tano, an undergratuate 
    computer science student with a passion for technologies and learning. 
    My focus right now to master my skills in web development, aiming
    to create user-friendly, efficient, and elegant softwares.`;

export const achievements: IAchievement[] = [
  {
    name: "2nd Winner of CodeFest Hackathon 3.0",
    year: "2024",
    certifImage: codefestCertif,
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
