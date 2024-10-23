import React from "react";
import TextHover from "./components/TextHover";
import SlideTabs from "./components/SlideTabs";

function App() {
  const menu = ["Home", "Projects", "Resume", "Cool Websites", "Contact Me"];

  return (
    <div className="App">
      <div className="grid h-1/3 m-2 place-content-end bg-neutral-100">
        <SlideTabs menu={menu} />
      </div>
      <hr />
      <TextHover sentence="Hi," />
      <TextHover sentence="I'm Vibhanshu" />
    </div>
  );
}

export default App;
