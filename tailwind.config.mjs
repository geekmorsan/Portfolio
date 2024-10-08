/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: [],
	theme: {
		extend: {
			colors: {
				bgbase: "rgba(var(--color-bgbase), 1)",
				accent: {
					1:{
						light: "rgba(var(--color-accent1light), 1)",
						DEFAULT: "rgba(var(--color-accent1), 1)",
						dark: "rgba(var(--color-accent1dark), 1)",
					},
					2: {
						light: "rgba(var(--color-accent2light), 1)",
						DEFAULT: "rgba(var(--color-accent2), 1)",
						dark: "rgba(var(--color-accent2dark), 1)",
					},
				},
				type: {
					1: "rgba(var(--color-type1), 1)",
					2: "rgba(var(--color-type2), 1)",
				},
				button: "rgba(var(--color-button),1)",
				outline: "rgba(var(--color-outline),1)",
			},
		},
	},

	plugins: [],
}
