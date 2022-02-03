import React, { useContext, useEffect, useState } from "react";
import { context } from "../context/Context";
import { motion } from "framer-motion";
import { containerVariants } from "../animation/motion";

//Images
import player1 from "../assets/player1.png";
import player2 from "../assets/player2.png";
import winnerText from "../assets/winner.png";
import again from "../assets/again.png";

//Components
import Board from "./Board";

function Game({ multiPlayer = false }) {
    const { winner, setWinner, setShowModal, createdRoom, whichPlayer } =
        useContext(context);
    const [renderBoard, setRenderBoard] = useState(true);

    useEffect(() => {
        if (createdRoom && multiPlayer) setShowModal(true);
    }, []);

    function resetGame() {
        setRenderBoard(false);
        setTimeout(() => {
            setRenderBoard(true);
            setWinner("");
            console.log("reset game");
        }, 500);
    }

    return (
        <motion.div
            className="flex flex-col items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="flex h-auto w-[55rem] justify-between">
                <div className="w-44 flex flex-col items-center">
                    <img
                        src={player1}
                        alt="player1"
                        className={`${
                            whichPlayer === "playerOne" && winner === ""
                                ? "w-32 animate-bounce"
                                : "w-24"
                        }`}
                    />
                    {winner === "playerOne" ? (
                        <img src={winnerText} alt="" className="w-32 mt-4" />
                    ) : (
                        <></>
                    )}
                </div>
                {renderBoard && <Board multiPlayer={multiPlayer} />}
                <div className="w-44 flex flex-col items-center">
                    <img
                        src={player2}
                        alt="player2"
                        className={`${
                            whichPlayer === "playerTwo" && winner === ""
                                ? "w-32 animate-bounce"
                                : "w-24"
                        }`}
                    />
                    {winner === "playerTwo" ? (
                        <img src={winnerText} alt="" className="w-32 mt-4" />
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            {winner.length > 0 && (
                <button onClick={resetGame}>
                    <img src={again} alt="again" className="h-12" />
                </button>
            )}
        </motion.div>
    );
}

export default Game;
