import React from "react";

function Modal() {
    return (
        <div className="bg-white h-[60px] w-[300px] absolute rounded-md border-black border-4  border-primary flex items-center justify-center mt-[15rem] z-10">
            <p className="text-xl">Waiting for second player</p>
        </div>
    );
}

export default Modal;
