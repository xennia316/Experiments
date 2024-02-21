/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native");

module.exports = {
	content: ["./app/**/*.{js}", "./index.js", "./App.tsx"],
	theme: {
		extend: {},
	},
	plugins: [nativewind()],
};
