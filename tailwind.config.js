const colors = require("tailwindcss/colors")

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			...colors,
			"cd-blue": "#0f4a7b",
			"cd-red": "#c22033",
			"cl-red": "#EA5566",
			"cl-blue": "#62becb",
			"cl-gray": "#F9FBFD",
			"cd-gray": "#3e3e40",
		},
		fontFamily: {
			"gil-bold": ["Gilroy-Bold ☞ ", "Helvetica Neue"],
			"gil-mid": ["Gilroy-Medium ☞", "Helvetica Neue"],
			"gil-reg": ["Gilroy-Regular ☞ ", "Helvetica Neue"],
		},
		extend: {},
	},
	plugins: [],
}
