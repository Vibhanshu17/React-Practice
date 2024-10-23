import React from "react";
import TextSpan from "./TextSpan";

function TextHover({ sentence }) {
  const letterList = sentence.split("");
  return (
    <div className="flex ml-10 mt-5">
      {letterList.map((letter, index) => {
        return (
          <TextSpan key={index} letter={letter === " " ? "\u00A0" : letter} />
        );
      })}
    </div>
  );
}

export default TextHover;
