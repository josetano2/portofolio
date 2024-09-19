import React from "react";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center p-5 gap-12 text-xl font-semibold">
      <p className="cursor-pointer">Home</p>
      <p className="cursor-pointer">Projects</p>
      <p className="cursor-pointer">About Me</p>
    </div>
  );
}
