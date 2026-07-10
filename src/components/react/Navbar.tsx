import React from "react";
import { Routes } from "@/lib/routes/routes";
import { animatePageOut } from "@/lib/animation/animation";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-6 lg:gap-10 font-mono text-xs lg:text-sm uppercase tracking-widest z-30">
      {Routes.map((r, idx) => {
        return (
          <a
            href={r.path}
            key={idx}
            data-cursor-icon=" "
            className="group relative flex items-center gap-2 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              animatePageOut(r.path);
            }}
          >
            <span className="opacity-40">{String(idx + 1).padStart(2, "0")}</span>
            <span className="relative overflow-hidden inline-block">
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                {r.name}
              </span>
              <span className="absolute left-0 top-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 text-[#ff3d1a]">
                {r.name}
              </span>
            </span>
          </a>
        );
      })}
    </nav>
  );
}
