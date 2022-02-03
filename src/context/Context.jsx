import { createContext, useState } from "react";

export const context = createContext(null);

function ContextProvider({ children }) {
    const [username, setUsername] = useState("");
    const [whichPlayer, setWhichPlayer] = useState("playerOne");
    const [winner, setWinner] = useState("");
    const [socketCtx, setSocketCtx] = useState({});
    const [createdRoom, setCreatedRoom] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <context.Provider
            value={{
                username,
                setUsername,
                whichPlayer,
                setWhichPlayer,
                winner,
                setWinner,
                socketCtx,
                setSocketCtx,
                createdRoom,
                setCreatedRoom,
                showModal,
                setShowModal,
            }}
        >
            {children}
        </context.Provider>
    );
}

export default ContextProvider;
