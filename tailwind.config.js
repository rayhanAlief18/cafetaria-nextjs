/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        screens: {
            'sm': '375px',
            // => @media (min-width: 375px) { ... }
            'md': '640px',
            // => @media (min-width: 640px) { ... }1
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
        },

        extend: {
            keyframes: {
                btnAnimate: {
                    "0%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.25)" },
                    "100%": { transform: "scale(1)" },
                }
            },
            fontFamily: {
                poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
                roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
                montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
                rubbik: ["Rubik", ...defaultTheme.fontFamily.sans],
                fredoka: ["Fredoka", ...defaultTheme.fontFamily.sans],

            }
        },
    },
    plugins: [
        function({ addUtilities }) {
            addUtilities({
                '.no-scrollbar': {
                    /* For most modern browsers */
                    'scrollbar-width': 'none',
                    /* Firefox */
                    '-ms-overflow-style': 'none',
                    /* Internet Explorer 10+ */
                    '&::-webkit-scrollbar': {
                        display: 'none',
                        /* Safari and Chrome */
                    },
                },
            });
        },
    ],
}