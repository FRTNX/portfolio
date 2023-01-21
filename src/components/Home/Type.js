import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Machine Learning Engineer",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Bot Master",
          "Python Devoloper",
          "Linux Enthusiast",
          "Bayede",
          "Wena We Ndlovu"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
