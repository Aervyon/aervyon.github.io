import plugin from "tailwindcss/plugin";

module.exports = {
	mode: "jit",
	content: [
		"./components/**/*.{vue,js}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./pages/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./*.{vue,js}",
	],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		extend: {
			textShadow: {
				sm: "0 1px 2px var(--tw-shadow-color)",
				DEFAULT: "0 2px 4px var(--tw-shadow-color)",
				lg: "0 8px 16px var(--tw-shadow-color)",
			},
			colors: {
				dark: "#202124",
				"primary-dark": "#292C34",
				"highlight-dark": "#C9BBFF",
				"primary-text-dark": "#F8F7F7",
				"secondary-text-dark": "#B1A5A8",
				"link-dark": "#B7B7B7",
				"url-dark": "#63A7E5",
				aervyon: "#5BC7EA",
				accent: "#9DC4FF",
				"accent-secondary-dark": "#B1A5A8",
			},
			width: {
				112: "28rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"text-shadow": (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme("textShadow") },
			);
		}),
	],
};
