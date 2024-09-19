import React from "react";

interface ITransitionHref {
  label: string;
  href: string;
}

export default function TransitionHref({ label, href }: ITransitionHref) {
  return <a className="cursor-pointer" href={href}>{label}</a>;
}
