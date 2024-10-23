import { motion, useAnimationControls } from "framer-motion";
import "../App.css";
import React, { useState } from "react";

function TextSpan({ letter }) {
  //   const rubberBand = () => {
  //     return {
  //       transform: [
  //         "scale3d(1, 1, 1)",
  //         "scale3d(1.4, 0.55, 1)",
  //         "scale3d(0.75, 1.25, 1)",
  //         "scale3d(1.25, 0.85, 1)",
  //         "scale3d(0.9, 1.05, 1)",
  //         "scale3d(1, 1, 1)",
  //       ],
  //     };
  //   };
  //   return <motion.span whileHover={rubberBand}> {letter} </motion.span>;

  const [isPlaying, setIsPlaying] = useState(false);
  const controls = useAnimationControls();
  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.25, 0.75, 1)",
        "scale3d(0.75, 1.25, 1)",
        "scale3d(1.15, 0.85, 1)",
        "scale3d(0.9, 1.1, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition: { times: [0, 0.45, 0.6, 0.7, 0.9, 1] },
    });
    setIsPlaying(true);
  };
  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) rubberBand();
      }}
      onAnimationComplete={() => setIsPlaying(false)}
      className="text-hover-span"
    >
      {letter}
    </motion.span>
  );
}

export default TextSpan;
