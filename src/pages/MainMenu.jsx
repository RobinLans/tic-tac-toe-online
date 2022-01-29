import { useState } from "react";
import { Link } from "react-router-dom";
import singleMenu from "../assets/singleUnder.png";
import multiMenu from "../assets/multiUnder.png";
import play from "../assets/play.png";
import create from "../assets/createtest.png";
import join from "../assets/join.png";

function MainMenu() {
  const [showSingleOption, setShowSingleOption] = useState(false);
  const [showMultiOptions, setShowMultiOptions] = useState(false);

  return (
    <div className="w-[30rem] h-full flex justify-between  ">
      <div className="flex flex-col items-center">
        <button
          onClick={() => {
            setShowSingleOption(!showSingleOption);
          }}
        >
          <img src={singleMenu} alt="single-menu" className="h-16 w-full" />
        </button>
        {showSingleOption && (
          <button>
            <Link to="/single-player">
              <img src={play} alt="play" className="h-14 w-full mt-2" />
            </Link>
          </button>
        )}
      </div>
      <div className="flex flex-col items-center">
        <button
          onClick={() => {
            setShowMultiOptions(!showMultiOptions);
          }}
        >
          <img src={multiMenu} alt="multi-menu" className="h-14 w-full mt-1" />
        </button>
        {showMultiOptions && (
          <>
            <button>
              <Link to="/create-room">
                <img src={create} alt="create" className="h-9 w-full mt-2" />
              </Link>
            </button>
            <button>
              <Link to="/join">
                <img src={join} alt="join" className="h-9 mt-4" />
              </Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default MainMenu;
