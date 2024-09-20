import { animatePageOut } from "@/lib/animation/animation";
import React from "react";

interface ITransitionHref {
  label: string;
  href: string;
}

export default function TransitionHref({ label, href }: ITransitionHref) {
  return (
    <a
      className="cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        // window.location.href = href;
        animatePageOut(href);
      }}
    >
      {label}
    </a>
  );
}
