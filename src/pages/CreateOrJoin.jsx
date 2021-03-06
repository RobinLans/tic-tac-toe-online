import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { context } from "../context/Context";
import { motion } from "framer-motion";
import { containerVariants } from "../animation/motion";
import useSound from "use-sound";

//Sounds
import key1 from "../assets/key1.wav";
import key2 from "../assets/key2.wav";
import key3 from "../assets/key3.wav";
import click from "../assets/btnClick.wav";

//images
import createRoomText from "../assets/createtest.png";
import joinRoomText from "../assets/join.png";
import next from "../assets/next.png";

function CreateOrJoin() {
    const [playKey1] = useSound(key1);
    const [playKey2] = useSound(key2);
    const [playKey3] = useSound(key3);
    const [playClick] = useSound(click);
    const { params } = useParams();
    const [roomName, setRoomName] = useState("");
    const navigate = useNavigate();
    const { socketCtx, setSocketCtx, setCreatedRoom } = useContext(context);

    console.log(socketCtx.socket);

    function handleInput(e) {
        setRoomName(e.target.value);
    }

    function handleClick(room) {
        if (roomName.length > 0) {
            if (params === "join") {
                socketCtx.socket.emit("join_room", room);
                setSocketCtx((prev) => {
                    return { ...prev, roomName: room };
                });
            }
            if (params === "create") {
                socketCtx.socket.emit("create_room", room);
                setSocketCtx((prev) => {
                    return { ...prev, roomName: room };
                });
                setCreatedRoom(true);
            }
            navigate(`/multi-player/game/${room}`, true);
        }
    }

    function playKeySound(e) {
        const randomNr = Math.floor(Math.random() * 3 + 1);
        console.log(randomNr);
        if (randomNr === 1) playKey1();
        else if (randomNr === 2) playKey2();
        else if (randomNr === 3) playKey3();
        if (e.key === "Enter") {
            handleClick(roomName);
        }
    }

    return (
        <motion.div
            className="w-full flex flex-col items-center mt-14"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <img
                src={params === "create" ? createRoomText : joinRoomText}
                alt="text"
                className="h-12 mb-4"
            />
            <input
                value={roomName}
                type="text"
                onChange={handleInput}
                onKeyDown={playKeySound}
                className="border-8 border-[#292929] h-24 w-[25rem] rounded-3xl mb-4 text-4xl px-6 font-bold text-[#292929]"
            />
            <button
                onClick={() => {
                    handleClick(roomName);
                    playClick();
                }}
                className="h-14 border-4 border-[#292929] rounded-2xl px-2 bg-white shadow-md active:shadow-none"
            >
                <img src={next} alt="next" className="h-8" />
            </button>
        </motion.div>
    );
}

export default CreateOrJoin;
