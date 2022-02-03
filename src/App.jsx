import { Routes, Route } from "react-router-dom";
import logo from "./assets/logo.png";
import io from "socket.io-client";
import NameInput from "./components/NameInput";
import CreateOrJoin from "./pages/CreateOrJoin";
import MainMenu from "./pages/MainMenu";
import SinglePlayer from "./pages/SinglePlayer";
import { useContext, useEffect } from "react";
import { context } from "./context/Context";
import MultiPlayer from "./pages/MultiPlayerGame";
import Modal from "./components/Modal";

const socket = io.connect(
    // "https://ttt-dj-server.herokuapp.com/"
    "http://localhost:8000/"
);

function App() {
    const {
        setSocketCtx,
        createdRoom,
        setCreatedRoom,
        showModal,
        setShowModal,
    } = useContext(context);

    useEffect(() => {
        setSocketCtx({
            socket,
        });
        setShowModal(false);
        if (createdRoom) setCreatedRoom(false);
    }, []);

    return (
        <div className="bg-bg bg-cover font-gloria w-screen h-screen flex flex-col items-center">
            <img src={logo} alt="logo" className="h-40 mt-4 mb-16" />
            <Routes>
                {/* <Route path="/" element={<NameInput />} /> */}
                <Route path="/" element={<MainMenu />} />
                <Route path="/:single-player" element={<SinglePlayer />} />
                <Route
                    path="/multi-player/:params"
                    element={<CreateOrJoin />}
                />

                <Route
                    path="/multi-player/game/:id"
                    element={<MultiPlayer />}
                />
            </Routes>
            {showModal && (
                <>
                    <Modal />
                    <div className="absolute w-full h-full bg-black bg-opacity-25"></div>
                </>
            )}
        </div>
    );
}

export default App;
