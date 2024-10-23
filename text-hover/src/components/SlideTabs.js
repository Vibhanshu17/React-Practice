import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ left: ref.current.offsetLeft, width: width, opacity: 1 });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase
     text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

function SlideTabs({ menu }) {
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });

  return (
    <ul
      onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
      className="relative mx-auto flex w-fit border-2 border-black rounded-full b-white p-1"
    >
      {menu.map((item, index) => (
        <Tab key={index} setPosition={setPosition}>
          {item}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
}

export default SlideTabs;
