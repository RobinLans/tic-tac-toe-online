import { useContext, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { context } from "./context/Context";
import io from "socket.io-client";
import { AnimatePresence } from "framer-motion";

//Pages and Components
import CreateOrJoin from "./pages/CreateOrJoin";
import MainMenu from "./pages/MainMenu";
import SinglePlayer from "./pages/SinglePlayer";
import MultiPlayer from "./pages/MultiPlayerGame";
import Modal from "./components/Modal";

//Image
import logo from "./assets/logo.png";

const socket = io.connect("https://ttt-dj-server.herokuapp.com/");

function App() {
    const location = useLocation();
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
            <img src={logo} alt="logo" className="h-28 2xl:h-40 mt-4 mb-4" />
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.key}>
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
            </AnimatePresence>
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
