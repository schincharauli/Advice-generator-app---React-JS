import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-DarkBlue">
      <div
        className="bg-DarkGrayishBlue 
      h-315 w-343 md:h-332 md:w-540 md:left-0 md:top-0 md:rounded-lg"
        style={{ borderRadius: "10px" }}
      >
        <h3 className="text-lg font-bold text-NeonGreen">advice number</h3>
        <p>Advice</p>
        <div className="underline">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="button"></div>
      </div>
    </div>
  );
}

export default App;
