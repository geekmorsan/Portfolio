import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['selector', '[data-theme="dark"]'],
	theme: {
		extend: {
			colors: {
				bgbase: "rgb(var(--color-bgbase))",
				accent: {
					1:{
						light: "rgb(var(--color-accent1light))",
						DEFAULT: "rgb(var(--color-accent1))",
						dark: "rgb(var(--color-accent1dark))",
					},
					2: {
						light: "rgb(var(--color-accent2light))",
						DEFAULT: "rgb(var(--color-accent2))",
						dark: "rgb(var(--color-accent2dark))",
					},
				},
				type: {
					1: "rgb(var(--color-type1))",
					2: "rgb(var(--color-type2))",
				},
				button: "rgb(var(--color-button))",
				outline: "rgb(var(--color-outline))",
			},
		},
	},

	plugins: [],
} satisfies Config
