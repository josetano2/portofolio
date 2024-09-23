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
    <div className="flex items-center gap-16 text-2xl font-semibold bg-transparent fixed">
      {Routes.map((r, idx) => {
        const charClass = `char-navbar-${idx}`,
          charClassBottom = `char-navbar-${idx + 3}`,
          parentClass = `parent-${idx}`,
          invisClass = `invis-${idx}`;

        return (
          <div
            className={`cursor-pointer flex flex-col gap-2 ${parentClass}`}
            style={{ clipPath: "inset(0% 0 40% 0)" }}
            
            onClick={(e) => {
              e.preventDefault();
              animatePageOut(r.path);
            }}
            onMouseEnter={() => {
              hoverEffect("." + charClass, "." + charClassBottom);
              cursor.setText(" ");
            }}
            onMouseLeave={() => {
              exitHoverEffect("." + charClass, "." + charClassBottom);
              cursor.removeText();
            }}
          >
            <div className="flex">
              {splitText(r.name).map((char) => {
                return (
                  <p className={charClass}>{renderSplittedSentence(char)}</p>
                );
              })}
            </div>

            <div className="flex">
              {splitText(r.name).map((char) => {
                return (
                  <p className={charClassBottom}>
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
