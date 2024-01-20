/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{ts,tsx}", "./index.html"],
	darkMode: "class",
	theme: {
		extend: {
			animation: {
				flip: "flip 16s steps(2) infinite",
				rotate: "rotate 8s linear infinite both",
			},
			backgroundImage: {
				"grid-background": "url(/grid-background.png)",
			},
			boxShadow: {
				glow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
				"glow-md": "0px 0px 12px rgba(255, 255, 255, 0.8)",
				"glow-lg": "0px 0px 14px rgba(255, 255, 255, 0.8)",
				"glow-xl": "0px 0px 16px rgba(255, 255, 255, 0.8)",
				"glow-2xl": "0px 0px 18px rgba(255, 255, 255, 0.8)",
				"glow-3xl": "0px 0px 20px rgba(255, 255, 255, 0.8)",
			},
			colors: {
				main: "#6f42f2",
				accent: "#56db9c",
				light: "#fbfbfb",
				dark: {
					400: "#151419",
					300: "#1b1b1e",
					200: "#262626",
					100: "#878787",
				},
			},
			keyframes: {
				flip: {
					"100%": { transform: "rotate(1turn)" },
				},
				rotate: {
					"100%": { content: "var(--tw-content)", transform: "rotate(90deg)" },
				},
			},
		},
	},
	plugins: [],
}
