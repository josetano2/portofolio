import React from "react";
import Typewriter from "typewriter-effect";

export default function TypewriterText() {
  return (
    <div className="font-mono text-4xl">
      <Typewriter
        options={{
          strings: ["Hello", "你好", "おはよう"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
