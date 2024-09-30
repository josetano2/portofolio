import React from "react";
import { Routes } from "@/lib/routes/routes";
import {
  animatePageOut,
  exitHoverEffect,
  hoverEffect,
} from "@/lib/animation/animation";
import { renderSplittedSentence, splitText } from "@/lib/util/split";
import { cursor } from "@/lib/util/cursor";

export default function Navbar() {
  return (
    <div className="flex items-center gap-[5vw] sm:text-lg xl:text-xl mt-4 z-30 font-semibold font-mono bg-transparent">
      {Routes.map((r, idx) => {
        const charClass = `char-navbar-${idx}`,
          charClassBottom = `char-navbar-${idx + 4}`,
          parentClass = `parent-${idx}`,
          invisClass = `invis-${idx}`;

        return (
          <div
            className={`cursor-pointer flex flex-col relative h-8 ${parentClass}`}
            style={{ clipPath: "inset(0% 0 20% 0)" }}
            data-cursor-icon=" "
            onClick={(e) => {
              e.preventDefault();
              animatePageOut(r.path);
            }}
            onMouseEnter={() => {
              hoverEffect("." + charClass, "." + charClassBottom);
            }}
            onMouseLeave={() => {
              exitHoverEffect("." + charClass, "." + charClassBottom);
            }}
            key={idx}
          >
            <div className="flex">
              {splitText(r.name).map((char, i) => {
                return (
                  <p className={charClass} key={i}>
                    {renderSplittedSentence(char)}
                  </p>
                );
              })}
            </div>

            <div className="flex">
              {splitText(r.name).map((char, i) => {
                return (
                  <p className={charClassBottom} key={i}>
                    {renderSplittedSentence(char)}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
