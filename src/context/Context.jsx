import { createContext, useState } from "react";

export const context = createContext(null);

function ContextProvider({ children }) {
    const [username, setUsername] = useState("");
    const [whichPlayer, setWhichPlayer] = useState("playerOne");
    const [winner, setWinner] = useState("");

    return (
        <context.Provider
            value={{
                username,
                setUsername,
                whichPlayer,
                setWhichPlayer,
                winner,
                setWinner,
            }}
        >
            {children}
        </context.Provider>
    );
}

export default ContextProvider;
