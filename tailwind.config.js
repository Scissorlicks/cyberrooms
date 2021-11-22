module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#16101f",
				secondary: "#2d1d45",
			},
			screens: {
				"3xl": "1920px",
			},
			animation: {
				"bounce-low": "bounce-low 8s linear infinite alternate",
				glow: "glow 1.5s ease-in-out infinite alternate",
			},
			keyframes: {
				"bounce-low": {
					"0%": { transform: "translateY(0)" },
					"100%": { transform: "translateY(3rem)" },
				},
				glow: {
					"0%": { "box-shadow": "none" },
					"100%": { "box-shadow": "0px 0px 35px 1px rgba(163, 71, 255, 0.7)" },
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/aspect-ratio")],
};
