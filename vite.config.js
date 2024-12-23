import { defineConfig } from "vite"

export default defineConfig({
	base: "/cow-tipper/",
	publicDir: "public",
	build: {
		rollupOptions: {
			input: {
				main: "index.html",
				oops: "oops.html",
			},
		},
	},
})
