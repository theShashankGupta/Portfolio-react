import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "MERN Stack Developer",
              "Competitive Programmer",
              "Effective Problem Solver",
              "ACM ICPC Regionalist 2022",
              "Expert at Codeforces",
              "5⭐ at Codechef",
              "Knight at Leetcode",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type