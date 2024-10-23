import React from "react";
import TextHover from "./components/TextHover";
import SlideTabs from "./components/SlideTabs";
import Hamburger from "./components/Hamburger";

function App() {
  const menu = ["Home", "Projects", "Resume", "Cool Websites", "Contact Me"];

  return (
    <div className="App">
      <div className="grid h-1/3 p-2 place-content-end bg-neutral-100">
        <SlideTabs menu={menu} />
      </div>
      <div className="grid mx-auto place-content-center bg-gradient-to-br from-violet-500 to-indigo-500">
        <Hamburger />
      </div>
      <hr />
      <TextHover sentence="Hi," />
      <TextHover sentence="I'm Vibhanshu" />
    </div>
  );
}

export default App;
