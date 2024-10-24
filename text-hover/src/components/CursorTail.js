import React, { useState } from "react";

function CursorTail() {
  const [cursorPos, setCursorPos] = useState({ x: 80, y: 120 });

  const animateCursor = () => {
    let x = cursorPos.x;
    let y = cursorPos.y;

    circles.forEach((circle, index) => {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";
      circle.style.scale = ((circles.length - index) / circles.length) * 0.8;
      circle.x = x;
      circle.y = y;

      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.3;
      y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(() => animateCursor());
  };

  const circles = document.querySelectorAll(".circle");
  circles.forEach((circle) => {
    circle.x = 100000;
    circle.y = -10000;
  });

  window.addEventListener("mousemove", (event) => {
    setCursorPos({ x: event.clientX, y: event.clientY });
  });
  animateCursor();

  return (
    <>
      <div
        className={`circle h-6 w-6 mix-blend-difference border-neutral-950 rounded-3xl bg-neutral-950 block absolute top-0 left-0 pointer-events-none`}
      />
      <div
        className={`circle h-6 w-6 mix-blend-difference border-neutral-950 rounded-3xl bg-neutral-950 block absolute top-0 left-0 pointer-events-none`}
      />
      <div
        className={`circle h-6 w-6 mix-blend-difference border-neutral-950 rounded-3xl bg-neutral-950 block absolute top-0 left-0 pointer-events-none`}
      />
      <div
        className={`circle h-6 w-6 mix-blend-difference border-neutral-950 rounded-3xl bg-neutral-950 block absolute top-0 left-0 pointer-events-none`}
      />
      <div
        className={`circle h-6 w-6 mix-blend-difference border-neutral-950 rounded-3xl bg-neutral-950 block absolute top-0 left-0 pointer-events-none`}
      />
      <div
        className={`circle h-6 w-6 mix-blend-difference border-neutral-950 rounded-3xl bg-neutral-950 block absolute top-0 left-0 pointer-events-none`}
      />
      <div
        className={`circle h-6 w-6 mix-blend-difference border-neutral-950 rounded-3xl bg-neutral-950 block absolute top-0 left-0 pointer-events-none`}
      />
      <div
        className={`circle h-6 w-6 mix-blend-difference border-neutral-950 rounded-3xl bg-neutral-950 block absolute top-0 left-0 pointer-events-none`}
      />
      <div
        className={`circle h-6 w-6 mix-blend-difference border-neutral-950 rounded-3xl bg-neutral-950 block absolute top-0 left-0 pointer-events-none`}
      />
      <div
        className={`circle h-6 w-6 mix-blend-difference border-neutral-950 rounded-3xl bg-neutral-950 block absolute top-0 left-0 pointer-events-none`}
      />
    </>
  );
}

export default CursorTail;
