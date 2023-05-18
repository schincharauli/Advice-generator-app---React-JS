import { useState, useEffect, useRef } from "react";
import axios from "axios";
import iconMobile from "../public/images/pattern-divider-mobile.svg";
import dice from "../public/images/icon-dice.svg";

function App() {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");
  const getAdviceRef = useRef(getAdvice);

  async function getAdvice() {
    try {
      const res = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(res.data.slip.advice);
      setAdviceId(res.data.slip.id);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAdviceRef.current();
  }, []);

  return (
    <div className="bg-DarkBlue flex items-center justify-center min-h-screen pl-3 pr-3">
      <div
        className="bg-DarkGrayishBlue sm:h-auto sm:w-343px md:h-332px md:w-540px md:rounded-lg sm:rounded-lg relative pl-3 pr-3"
        style={{ borderRadius: "10px" }}
      >
        <h3 className="text-sm font-light text-NeonGreen pt-12 flex items-center justify-center">
          A D V I C E # {adviceId}
        </h3>
        <p className="text-lg font-bold text-LightCyan flex  text-center items-center justify-center pt-3 pl-3 pr-3 min-w-full max-w-xl">
          {advice}
        </p>
        <div className="flex items-center justify-center pt-6 pb-20">
          <img src={iconMobile} alt="icon" />
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 -mb-8 hover:cursor-pointer">
          <div
            onClick={getAdvice}
            className="dice bg-NeonGreen w-16 h-16 rounded-full flex items-center justify-center"
          >
            <img className="p-5" src={dice} alt="dice" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
