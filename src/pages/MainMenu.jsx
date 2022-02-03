import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    containerVariants,
    linkVariant1,
    linkVariant2,
} from "../animation/motion";
import useSound from "use-sound";
import mouthClick from "../assets/mouthClick.wav";

//Images
import singleMenu from "../assets/singleUnder.png";
import multiMenu from "../assets/multiUnder.png";
import playText from "../assets/play.png";
import create from "../assets/createtest.png";
import join from "../assets/join.png";

function MainMenu() {
    const [play] = useSound(mouthClick);
    const [showSingleOption, setShowSingleOption] = useState(false);
    const [showMultiOptions, setShowMultiOptions] = useState(false);

    return (
        <motion.div
            className="w-[30rem] h-full flex justify-between mt-14"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="flex flex-col items-center">
                <button
                    onClick={() => {
                        play();
                        setShowSingleOption(!showSingleOption);
                        setShowMultiOptions(false);
                    }}
                >
                    <img
                        src={singleMenu}
                        alt="single-menu"
                        className="h-16 w-full"
                    />
                </button>
                <AnimatePresence>
                    {showSingleOption && (
                        <motion.button
                            variants={linkVariant1}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={play}
                        >
                            <Link to="/single-player">
                                <img
                                    src={playText}
                                    alt="play"
                                    className="h-14 w-full mt-2"
                                />
                            </Link>
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
            <div className="flex flex-col items-center">
                <button
                    onClick={() => {
                        play();
                        setShowMultiOptions(!showMultiOptions);
                        setShowSingleOption(false);
                    }}
                >
                    <img
                        src={multiMenu}
                        alt="multi-menu"
                        className="h-14 w-full mt-1"
                    />
                </button>
                <AnimatePresence>
                    {showMultiOptions && (
                        <>
                            <motion.button
                                variants={linkVariant1}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                onClick={play}
                            >
                                <Link to="/multi-player/create">
                                    <img
                                        src={create}
                                        alt="create"
                                        className="h-9 w-full mt-2"
                                    />
                                </Link>
                            </motion.button>
                            <motion.button
                                variants={linkVariant2}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                onClick={play}
                            >
                                <Link to="/multi-player/join">
                                    <img
                                        src={join}
                                        alt="join"
                                        className="h-9 mt-4"
                                    />
                                </Link>
                            </motion.button>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default MainMenu;
