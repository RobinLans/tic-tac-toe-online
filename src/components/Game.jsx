import React, { useContext, useState } from "react";
import player1 from "../assets/player1.png";
import player2 from "../assets/player2.png";
import winnerText from "../assets/winner.png";
import again from "../assets/again.png";
import Board from "./Board";
import { context } from "../context/Context";

function Game() {
    const { winner, setWinner } = useContext(context);
    const [renderBoard, setRenderBoard] = useState(true);

    function resetGame() {
        setRenderBoard(false);
        setTimeout(() => {
            setRenderBoard(true);
            setWinner("");
            console.log("reset game");
        }, 500);
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex h-auto w-[55rem] justify-between">
                <div className="w-44 flex flex-col items-center">
                    <img src={player1} alt="player1" className="w-24" />
                    {winner === "playerOne" ? (
                        <img src={winnerText} alt="" className="w-32 mt-4" />
                    ) : (
                        <></>
                    )}
                </div>
                {renderBoard && <Board />}
                <div className="w-44 flex flex-col items-center">
                    <img src={player2} alt="player2" className="w-24" />
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
        </div>
    );
}

export default Game;
