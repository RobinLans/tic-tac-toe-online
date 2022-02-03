import React, { useContext, useEffect, useState } from "react";
import board from "../assets/board.png";
import x1 from "../assets/x1.png";
import x2 from "../assets/x2.png";
import x3 from "../assets/x3.png";
import o1 from "../assets/o1.png";
import o2 from "../assets/o2.png";
import o3 from "../assets/o3.png";
import { context } from "../context/Context";
import { checkIfWin } from "../utils/checkForWinner";

function Board({ multiPlayer = false }) {
    const [playerOnePicks, setPlayerOnePicks] = useState([]);
    const [playerTwoPicks, setPlayerTwoPicks] = useState([]);
    const {
        whichPlayer,
        setWhichPlayer,
        winner,
        setWinner,
        socketCtx,
        setShowModal,
        createdRoom,
    } = useContext(context);
    const whichPlayerAmIOnline =
        multiPlayer && createdRoom ? "playerOne" : "playerTwo";
    const [isMyTurn, setIsMyTurn] = useState(() => {
        if (whichPlayerAmIOnline === "playerOne") return true;
        else return false;
    });

    console.log("is it mu turn " + isMyTurn);

    function makeAPick(e, player) {
        console.log("hora");
        if (winner.length > 0) return;

        if (multiPlayer) {
            sendPick(e.target.id, whichPlayerAmIOnline);
            if (whichPlayerAmIOnline === "playerOne") {
                setPlayerOnePicks((prev) => [...prev, e.target.id]);
                setWhichPlayer("playerTwo");
            } else if (whichPlayerAmIOnline === "playerTwo") {
                setPlayerTwoPicks((prev) => [...prev, e.target.id]);
                setWhichPlayer("playerOne");
            }
            setIsMyTurn(false);
        } else {
            if (player === "playerOne") {
                setPlayerOnePicks((prev) => [...prev, e.target.id]);
                setWhichPlayer("playerTwo");
            } else if (player === "playerTwo") {
                setPlayerTwoPicks((prev) => [...prev, e.target.id]);
                setWhichPlayer("playerOne");
            }
        }
    }

    async function sendPick(pick, player) {
        if (pick.length === 0) return;
        const pickData = {
            room: socketCtx.roomName,
            pick,
            player,
        };
        await socketCtx.socket.emit("send_picks", pickData);
    }

    useEffect(() => {
        const hasP1Won = checkIfWin(playerOnePicks);
        const hasP2Won = checkIfWin(playerTwoPicks);
        if (hasP1Won) {
            console.log("Player 1 won!");
            setWinner("playerOne");
        } else if (hasP2Won) {
            console.log("Player 2 won!");
            setWinner("playerTwo");
        } else if (playerOnePicks.length + playerTwoPicks.length === 9) {
            console.log("tie");
            setWinner("tie");
        }
    }, [playerOnePicks, playerTwoPicks]);

    useEffect(() => {
        console.log("joined");
        socketCtx.socket.on("joined_room", (user) => {
            console.log(`user ${user} has joined`);
            setShowModal(false);
        });

        socketCtx.socket.on("receive_pick", (pick) => {
            console.log(pick);
            if (pick.player === "playerOne") {
                setPlayerOnePicks((prev) => [...prev, pick.pick]);
                setWhichPlayer("playerTwo");
            } else if (pick.player === "playerTwo") {
                setPlayerTwoPicks((prev) => [...prev, pick.pick]);
                setWhichPlayer("playerOne");
            }
            setIsMyTurn(true);
        });
    }, [socketCtx.socket]);

    return (
        <div className=" w-[30rem] h-[28.5rem] relative">
            <img src={board} alt="board" className="w-full absolute" />
            <div
                id="1"
                className="w-24 h-24 absolute top-9 left-14"
                onClick={(e) => {
                    if (isMyTurn || !multiPlayer) makeAPick(e, whichPlayer);
                }}
            >
                {playerOnePicks.includes("1") && <img src={x1} alt="choice" />}
                {playerTwoPicks.includes("1") && <img src={o1} alt="choice" />}
            </div>
            <div
                id="2"
                className="w-24 h-24 absolute top-9 left-[200px]"
                onClick={(e) => {
                    if (isMyTurn || !multiPlayer) makeAPick(e, whichPlayer);
                }}
            >
                {playerOnePicks.includes("2") && <img src={x2} alt="choice" />}
                {playerTwoPicks.includes("2") && <img src={o2} alt="choice" />}
            </div>
            <div
                id="3"
                className="w-24 h-24 absolute top-9 left-[342px]"
                onClick={(e) => {
                    if (isMyTurn || !multiPlayer) makeAPick(e, whichPlayer);
                }}
            >
                {playerOnePicks.includes("3") && <img src={x3} alt="choice" />}
                {playerTwoPicks.includes("3") && <img src={o3} alt="choice" />}
            </div>
            <div
                id="4"
                className="w-24 h-24 absolute top-[175px] left-12"
                onClick={(e) => {
                    if (isMyTurn || !multiPlayer) makeAPick(e, whichPlayer);
                }}
            >
                {playerOnePicks.includes("4") && <img src={x2} alt="choice" />}
                {playerTwoPicks.includes("4") && <img src={o2} alt="choice" />}
            </div>
            <div
                id="5"
                className="w-24 h-24 absolute top-[175px] left-[198px]"
                onClick={(e) => {
                    if (isMyTurn || !multiPlayer) makeAPick(e, whichPlayer);
                }}
            >
                {playerOnePicks.includes("5") && <img src={x3} alt="choice" />}
                {playerTwoPicks.includes("5") && <img src={o3} alt="choice" />}
            </div>
            <div
                id="6"
                className="w-24 h-24 absolute top-[170px] left-[340px]"
                onClick={(e) => {
                    if (isMyTurn || !multiPlayer) makeAPick(e, whichPlayer);
                }}
            >
                {playerOnePicks.includes("6") && <img src={x1} alt="choice" />}
                {playerTwoPicks.includes("6") && <img src={o1} alt="choice" />}
            </div>
            <div
                id="7"
                className="w-24 h-24 absolute top-[310px] left-10"
                onClick={(e) => {
                    if (isMyTurn || !multiPlayer) makeAPick(e, whichPlayer);
                }}
            >
                {playerOnePicks.includes("7") && <img src={x3} alt="choice" />}
                {playerTwoPicks.includes("7") && <img src={o1} alt="choice" />}
            </div>
            <div
                id="8"
                className="w-24 h-20 absolute top-[310px] left-[190px]"
                onClick={(e) => {
                    if (isMyTurn || !multiPlayer) makeAPick(e, whichPlayer);
                }}
            >
                {playerOnePicks.includes("8") && <img src={x1} alt="choice" />}
                {playerTwoPicks.includes("8") && <img src={o3} alt="choice" />}
            </div>
            <div
                id="9"
                className="w-24 h-[90px] absolute top-[300px] left-[340px]"
                onClick={(e) => {
                    if (isMyTurn || !multiPlayer) makeAPick(e, whichPlayer);
                }}
            >
                {playerOnePicks.includes("9") && <img src={x3} alt="choice" />}
                {playerTwoPicks.includes("9") && <img src={o2} alt="choice" />}
            </div>
        </div>
    );
}

export default Board;
