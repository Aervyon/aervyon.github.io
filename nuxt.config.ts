import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
	compatibilityDate: "2024-10-01",
	modules: [
		"@nuxt/eslint",
		"@vueuse/nuxt",
		"@nuxtjs/tailwindcss",
		"nuxt-icon-tw",
	],
	devtools: {
		enabled: true,
		timeline: {
			enabled: true,
		},
	},
	app: {
		head: {
			title: "Aervyon - # portfolio",
			meta: [
				{ charset: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					name: "description",
					content:
						"$ Aervyon. A programmer with 6 years of experience, someone who cares about security and privacy, and has experience in managing Linux servers.",
				},
				{ property: "og:image", content: "/OpenGraph_Hex_Glitch.png" },
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "theme-color", content: "#5BC7EA" },
				{ property: "og:title", content: "Aervyon - # portfolio" },
				{ property: "og:site_name", content: "Aervyon's Portfolio" },
				{ property: "og:url", content: "https://aervyon.com" },
				{
					property: "og:description",
					content:
						"$ Aervyon. A programmer with 6 years of experience, someone who cares about security and privacy, and has experience in managing Linux servers.",
				},
			],
			link: [
				{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
				{ rel: "apple-touch-icon", href: "/Aervy_Icon.png" },
			],
		},
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
});

/* export const secondary = {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Aervyon - $ whoami',
		htmlAttrs: {
			lang: 'en'
		},
		bodyAttrs: {
			class: ['bg-dark']
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '$ aervyon info\nprogrammer, gamer, Maybe more...' },
			{ name: 'og:image', content: '/Aervy_Icon.png' },
			{ name: 'theme-color', content: '#66C8FF' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'apple-touch-icon', href: '/Aervy_Icon.png' }
		],
		metaInfo: {
			noscript: {
				innerHTML: 'This site requires JavaScript to be enabled to load properly.'
			}
		}
	},

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		'@nuxtjs/tailwindcss'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}*/
