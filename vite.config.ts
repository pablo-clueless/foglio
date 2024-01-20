import tsconfigpaths from "vite-tsconfig-paths"
import { VitePWA } from "vite-plugin-pwa"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr(),
		tsconfigpaths(),
		VitePWA({
			includeAssets: ["favicon.ico", "safari-pinned-tab.svg"],
			manifest: {
				name: "Foglio",
				short_name: "Foglio",
				description: "Build amazing portfolios!",
				theme_color: "#151419",
				icons: [{ src: "/vite.svg", sizes: "192x192", type: "image/svg+xml" }],
			},
		}),
	],
	server: {
		hmr: { overlay: false },
	},
})
