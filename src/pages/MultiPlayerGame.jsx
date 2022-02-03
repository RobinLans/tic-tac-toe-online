import React from "react";
import { useParams } from "react-router-dom";
import Game from "../components/Game";

function MultiPlayerGame() {
    const { id } = useParams();
    return (
        <div>
            <Game multiPlayer={true} />
        </div>
    );
}

export default MultiPlayerGame;
