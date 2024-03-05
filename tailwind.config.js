const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            height: {
                header: '5rem',
                footer: '5rem',
            },
            backgroundColor: {
                'dark-primary': '#1e1e2e',
                'dark-sidebar': '#111c44',
            },
            colors: {
                primary: '#fd2658',
            },
            borderColor: {
                second: 'rgba(0,0,0,0.1)',
            },
            margin: {
                header: '5rem',
                footer: '5rem',
            },
            padding: {
                header: '5rem',
                footer: '5rem',
            },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
};
