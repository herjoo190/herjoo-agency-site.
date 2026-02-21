/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./main.js"],
    theme: {
        extend: {
            colors: {
                'choc-dark': '#1A0F0A',
                'choc-rich': '#2C1810',
                'bronze': '#C5A059',
                'cream': '#FDF5E6',
                'mocha': '#E8D3C3',
                'sandy-orange': '#E67E22',
            },
            fontFamily: {
                heading: ['Cormorant Garamond', 'serif'],
                body: ['Outfit', 'sans-serif'],
            }
        }
    },
    plugins: [],
}
