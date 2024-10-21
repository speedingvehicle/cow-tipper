import { defineConfig } from "vite"

export default defineConfig({
	base: "/cow-tipper/",
	build: {
		rollupOptions: {
			input: {
				main: "index.html",
				oops: "oops.html",
			},
		},
	},
})
