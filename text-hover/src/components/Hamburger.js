import React, { useState } from "react";
import { motion, MotionConfig } from "framer-motion";

function Hamburger() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
      <motion.button
        onClick={() => setHamburgerOpen((prev) => !prev)}
        initial={false}
        animate={hamburgerOpen ? "open" : "closed"}
        className="relative h-20 w-20 rounded-full bg-white/0
       transition-colors hover:bg-white/20"
      >
        <motion.span
          style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
          className="absolute h-1 w-10 bg-white"
        ></motion.span>
        <motion.span
          style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
          className="absolute h-1 w-10 bg-white"
        ></motion.span>
        <motion.span
          style={{
            left: "calc(50%+10px)", // right: "0%", x: "-100%"
            bottom: "35%",
            x: "-50%",
            y: "+50%",
          }} // left: "calc(50% + 10px)"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
              bottom: ["35%", "50%", "50%"],
              left: "50%",
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
              bottom: ["50%", "50%", "35%"],
              left: "calc(50% + 10px)",
            },
          }}
          className="absolute h-1 w-5 bg-white"
        ></motion.span>
      </motion.button>
    </MotionConfig>
  );
}

export default Hamburger;
