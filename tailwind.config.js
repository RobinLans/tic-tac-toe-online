module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                gloria: ["Gloria Hallelujah"],
            },
            backgroundImage: {
                bg: "url('/src/assets/bg.png')",
            },
        },
    },
    plugins: [],
};
