/** @type {import('tailwindcss').Config} */
module.exports = {
    content: 
    [
      "./src/**/*.{js,jsx,ts,tsx}", 
      "./src/**/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                "yaOrange": "#FF6200",
                "yaOrange-medium": "#ff8133",
                "yaOrange-light": "#ffa166",
                "yaPurple": "#4B3F72",
                "yaDark": "#1F2041",
                "yaDark-medium": "#2f3164",
                "yaDark-light": "#404286",
            },
        },
    },
    plugins: [],
};
