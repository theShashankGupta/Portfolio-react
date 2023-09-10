import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Backend Engineering Intern at TickerTape(SmallCase)",
              "Competitive Programmer",
              "ACM ICPC Regionalist 2022",
              "Expert at Codeforces",
              "5⭐ at Codechef",
              "Knight at Leetcode",
              "MERN Stack Developer",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type
