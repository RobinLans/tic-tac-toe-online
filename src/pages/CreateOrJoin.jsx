import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import createRoomText from "../assets/createtest.png";
import joinRoomText from "../assets/join.png";
import next from "../assets/next.png";
import { context } from "../context/Context";

function CreateOrJoin() {
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
    return (
        <div className="w-full flex flex-col items-center mt-14">
            <img
                src={params === "create" ? createRoomText : joinRoomText}
                alt="text"
                className="h-12 mb-4"
            />
            <input
                value={roomName}
                type="text"
                onChange={handleInput}
                className="border-8 border-[#292929] h-24 w-[25rem] rounded-3xl mb-4 text-4xl px-6 font-bold text-[#292929]"
            />
            <button
                onClick={() => handleClick(roomName)}
                className="h-14 border-4 border-[#292929] rounded-2xl px-2 bg-white shadow-md active:shadow-none"
            >
                <img src={next} alt="next" className="h-8" />
            </button>
        </div>
    );
}

export default CreateOrJoin;
