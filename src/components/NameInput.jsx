import React from "react";
import text from "../assets/gime-me.png";
import next from "../assets/next.png";

function NameInput() {
    return (
        <div className=" w-full flex flex-col items-center">
            <img src={text} alt="text" className="h-12 mb-4" />
            <input
                type="text"
                className="border-8 border-[#292929] h-24 w-[25rem] rounded-3xl mb-4 text-4xl px-6 font-bold text-[#292929]"
            />
            <button className="h-14 border-4 border-[#292929] rounded-2xl px-2 bg-white shadow-md active:shadow-none">
                <img src={next} alt="next" className="h-8" />
            </button>
        </div>
    );
}

export default NameInput;
