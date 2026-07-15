import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComponent = ({ strings = ["Cybersecurity", "Frontend", "Backend", "Fullstack"] }) => {
  return (
    <div className="notranslate mt-2 font-mono text-xl sm:text-2xl font-bold text-brand-cyan tracking-wider drop-shadow-[0_0_8px_var(--color-brand-cyan)]">
      <Typewriter
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
          cursor: "█",
          cursorClassName: "animate-pulse text-brand-cyan opacity-80",
          delay: 60,
          deleteSpeed: 30,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
