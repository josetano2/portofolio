import {
  animatePageOut,
  buttonExitHoverEffect,
  buttonHoverEffect,
} from "@/lib/animation/animation";
import React from "react";

interface IButton {
  href: string;
  text: string;
  id: string;
}

export default function Button({ href, text, id }: IButton) {
  return (
    <button
      data-cursor-icon=" "
      className="border-black dark:border-white border-[1px] rounded-full px-4 py-1 text-black hover:text-white dark:text-white"
      id={id}
      onClick={() => animatePageOut(href)}
      onMouseEnter={() => buttonHoverEffect(id)}
      onMouseLeave={() => buttonExitHoverEffect(id)}
    >
      {text}
    </button>
  );
}
