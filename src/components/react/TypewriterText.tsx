import React from "react";
import Typewriter from "typewriter-effect";

interface ITypewriterText {
  className: string;
}

export default function TypewriterText({ className }: ITypewriterText) {
  return (
    <div className={className}>
      <Typewriter
        options={{
          strings: ["Hello", "你好", "おはよう", "Halo"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
