import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComponent = ({ strings = ["Cybersecurity", "Frontend", "Backend", "Fullstack"] }) => {
  return (
    <div className="notranslate mt-5 text-3xl font-bold">
      <Typewriter
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
