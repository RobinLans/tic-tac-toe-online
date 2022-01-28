module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                nunito: ["Nunito"],
            },
            backgroundImage: {
                bg: "url('/src/assets/bg.png')",
            },
        },
    },
    plugins: [],
};
