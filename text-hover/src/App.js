import React from "react";
import TextHover from "./components/TextHover";
import Hamburger from "./components/Hamburger";
import TypewriterText from "./components/TypewriterText";
function App() {
  return (
    <div className="App min-h-screen  flex-col justify-between ">
      <>
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

export default App;
