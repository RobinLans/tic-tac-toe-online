import React from "react";
import { useContext } from "react";
import { context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import text from "../assets/gime-me.png";
import next from "../assets/next.png";

function NameInput() {
  const { username, setUsername } = useContext(context);
  const navigate = useNavigate();

  function handleInput(e) {
    setUsername(e.target.value);
  }

  function handleClick() {
    if (username.length > 0) {
      navigate("/menu", true);
    }
  }
  return (
    <div className="w-full flex flex-col items-center">
      <img src={text} alt="text" className="h-12 mb-4" />
      <input
        value={username}
        type="text"
        onChange={handleInput}
        className="border-8 border-[#292929] h-24 w-[25rem] rounded-3xl mb-4 text-4xl px-6 font-bold text-[#292929]"
      />
      <button
        onClick={handleClick}
        className="h-14 border-4 border-[#292929] rounded-2xl px-2 bg-white shadow-md active:shadow-none"
      >
        <img src={next} alt="next" className="h-8" />
      </button>
    </div>
  );
}

export default NameInput;
