import React from "react";
import Hamburger from "../components/Hamburger";
import TextHover from "../components/TextHover";
import TypewriterText from "../components/TypewriterText";
import CursorTail from "../components/CursorTail";

function Home() {
  return (
    <div className="min-h-screen flex-col justify-between">
      <>
        <CursorTail />
        <div>
          {/* <div className="grid relative bg-gradient-to-br from-violet-400 to-indigo-900"> */}
          <Hamburger />
          {/* </div> */}
          <hr />
        </div>
        <div className="mx-4">
          <TextHover sentence="Hi," />
          <TextHover sentence="I'm Vibhanshu" />
          <p>#TODO: add onClick() in SlideTabs | Add Routing</p>
        </div>

        <TypewriterText />
      </>
    </div>
  );
}

export default Home;
