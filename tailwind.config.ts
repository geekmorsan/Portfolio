import type { Config } from 'tailwindcss'


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],
	darkMode: ['selector', '[data-theme="dark"]'],
	theme: {
		extend: {
			colors: {
				bgbase: "rgb(var(--color-bgbase))",
				accent: {
					1:{
						head: "rgb(var(--color-accent1header))",
						hover: "rgb(var(--color-accent1hover))",
						light: "rgb(var(--color-accent1light))",
						DEFAULT: "rgb(var(--color-accent1))",
						dark: "rgb(var(--color-accent1dark))",
					},
					2: {
						head: "rgb(var(--color-accent2header))",
						hover: "rgb(var(--color-accent2hover))",
						light: "rgb(var(--color-accent2light))",
						DEFAULT: "rgb(var(--color-accent2))",
						dark: "rgb(var(--color-accent2dark))",
					},
				},
				type: {
					1: "rgb(var(--color-type1))",
					2: "rgb(var(--color-type2))",
				},
				button: {DEFAULT: "rgb(var(--color-button))",
					hue: "rgb(var(--color-buttonhighlight))",

				},
				outline: "rgb(var(--color-outline))",
			},
			gradientColorStops: theme => ({
				bgbase: "rgb(var(--color-bgbase))",
				accent: {
					1:{
						head: "rgb(var(--color-accent1header))",
						hover: "rgb(var(--color-accent1hover))",
						light: "rgb(var(--color-accent1light))",
						DEFAULT: "rgb(var(--color-accent1))",
						dark: "rgb(var(--color-accent1dark))",
					},
					2: {
						head: "rgb(var(--color-accent1header))",
						hover: "rgb(var(--color-accent1hover))",
						light: "rgb(var(--color-accent2light))",
						DEFAULT: "rgb(var(--color-accent2))",
						dark: "rgb(var(--color-accent2dark))",
					},
				},
				type: {
					1: "rgb(var(--color-type1))",
					2: "rgb(var(--color-type2))",
				},
				button: {DEFAULT: "rgb(var(--color-button))",
					hue: "rgb(var(--color-buttonhighlight))",

				},
				outline: "rgb(var(--color-outline))",
			}),
		},
	},

	plugins: [],
} satisfies Config
