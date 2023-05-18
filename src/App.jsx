import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import iconMobile from "../public/images/pattern-divider-mobile.svg";
import iconDesktop from "../public/images/pattern-divider-desktop.svg";
import dice from "../public/images/icon-dice.svg";

function App() {
  return (
    <div className="bg-DarkBlue  flex items-center justify-center min-h-screen">
      <div
        className="bg-DarkGrayishBlue sm:h-315px sm:w-343px md:h-332px md:w-540px md:rounded-lg"
        style={{ borderRadius: "10px" }}
      >
        <h3 className="text-lg font-bold text-NeonGreen pt-12 flex items-center justify-center">
          advice number #
        </h3>
        <p className="text-lg font-bold text-LightCyan flex items-center justify-center pt-3 pl-3 pr-3 min-w-full max-w-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus adipisci reprehenderit beatae optio possimus magni
          cupiditate debitis, sit ad distinctio quae facilis vero ducimus
          obcaecati vel. Dicta perferendis accusamus nostrum. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Nam doloribus ipsum officia
          praesentium provident veritatis nesciunt totam eius placeat tempore
          libero aperiam rerum beatae, id quis magni dolore debitis voluptates?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          natus ipsum vitae quidem quibusdam veritatis id deserunt, eaque
          consequuntur. Repudiandae iure placeat voluptatibus consectetur
          quibusdam cum dignissimos, praesentium soluta quae!
        </p>
        <div className="flex items-center justify-center pt-6 pb-20">
          <img src={iconMobile} alt="icon" />
        </div>
        <div
          className="bg-NeonGreen w-16 h-16 "
          style={{ borderRadius: "50%" }}
        >
          <img className=" m-auto flex p-5" src={dice} alt="dice" />
        </div>
      </div>
    </div>
  );
}

export default App;
