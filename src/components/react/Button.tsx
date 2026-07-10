import { animatePageOut } from "@/lib/animation/animation";
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
      className="group relative overflow-hidden border-2 border-[color:var(--ink)] px-8 py-3 font-mono text-xs uppercase tracking-widest"
      id={id}
      onClick={() => animatePageOut(href)}
    >
      <span className="absolute inset-0 bg-[color:var(--ink)] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
      <span className="relative group-hover:text-[color:var(--paper)] transition-colors duration-300">
        {text}
      </span>
    </button>
  );
}
