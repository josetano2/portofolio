import { animatePageOut } from "@/lib/animation/animation";
import React from "react";

interface IButton {
  href: string;
  text: string;
}

export default function Button({ href, text }: IButton) {
  return (
    <button
      data-cursor-text=" "
      className="border-black border-[1px] rounded-full px-4 py-1"
      onClick={() => animatePageOut(href)}
    >
      {text}
    </button>
  );
}
