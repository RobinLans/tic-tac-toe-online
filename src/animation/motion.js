export const containerVariants = {
    hidden: {
        x: "100vw",
        opacity: 0,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            delay: 0,
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        x: "-100vw",
        transition: {
            ease: "easeInOut",
            duration: 0.7,
        },
    },
};

export const nextVariants = {
    hidden: {
        x: "-100vw",
    },
    visible: {
        x: 0,
        transition: {
            type: "spring",
            stiffness: 120,
            duration: 1,
        },
    },
};

export const childVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

export const orderVariants = {
    hidden: {
        x: "100vw",
        opacity: 0,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",

            mass: 0.4,
            damping: 8,

            when: "beforeChildren",
            staggerChildren: 0.4,
        },
    },
};

export const buttonVariants = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            duration: 0.3,
            yoyo: Infinity,
        },
    },
};

export const linkVariant1 = {
    hidden: {
        opacity: 0,
        y: -20,
    },
    visible: {
        opacity: 0.9,
        y: 0,
        transition: {
            type: "spring",
            duration: "0.5",
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            type: "spring",
            duration: "0.5",
        },
    },
};

export const linkVariant2 = {
    hidden: {
        opacity: 0,
        y: -20,
    },
    visible: {
        opacity: 0.9,
        y: 0,
        transition: {
            type: "spring",
            duration: "0.5",
            delay: "0.1",
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            type: "spring",
            duration: "0.5",
            delay: "0.1",
        },
    },
};
