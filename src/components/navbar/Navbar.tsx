import React from "react";
import TransitionHref from "../transition-href/TransitionHref";
import { Routes } from "@/lib/routes/routes";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center gap-12 text-xl font-semibold bg-transparent">
      {Routes.map((r) => {
        return <TransitionHref href={r.path} label={r.name} />;
      })}
    </div>
  );
}
