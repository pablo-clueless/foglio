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
