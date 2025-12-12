import {
  SiC,
  SiCplusplus,
  SiCsharp,
  SiJavascript,
  SiOpenjdk,
  SiTypescript,
  SiKotlin,
  SiGo,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiFirebase,
  SiElasticsearch,
  SiReact,
  SiNextdotjs,
  SiSpringboot,
  SiVuedotjs,
  SiFlask,
} from "react-icons/si";
import { LiaJava } from "react-icons/lia";

import type { ITechStacks } from "../models/model";

export const techStacks: ITechStacks[] = [
  {
    title: "Programming Languages",
    stacks: [
      {
        name: "C",
        icon: SiC,
        color: "#A8B9CC",
      },
      {
        name: "C++",
        icon: SiCplusplus,
        color: "#00599C",
      },
      {
        name: "C#",
        icon: SiCsharp,
        color: "#239120",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "Java",
        icon: LiaJava,
        color: "#f89820",
      },
      {
        name: "Kotlin",
        icon: SiKotlin,
        color: "#7F52FF",
      },
      {
        name: "Go",
        icon: SiGo,
        color: "#00ADD8",
      },
      {
        name: "Python",
        icon: SiPython,
        color: "#3776AB",
      },
    ],
  },
  {
    title: "Database",
    stacks: [
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#4169E1",
      },
      {
        name: "T-SQL",
        icon: SiMicrosoftsqlserver,
        color: "#CC2927",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "#FFCA28",
      },
      {
        name: "Elasticsearch",
        icon: SiElasticsearch,
        color: "#005571",
      },
    ],
  },
  {
    title: "Frameworks",
    stacks: [
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "Next",
        icon: SiNextdotjs,
        color: "#000000",
      },
      {
        name: "Spring Boot",
        icon: SiSpringboot,
        color: "#6DB33F",
      },
      {
        name: "Vue",
        icon: SiVuedotjs,
        color: "#4FC08D",
      },
      {
        name: "Flask",
        icon: SiFlask,
        color: "#000000",
      },
      {
        name: "GoFiber",
        icon: SiGo,
        color: "#00ADD8",
      },
    ],
  },
];