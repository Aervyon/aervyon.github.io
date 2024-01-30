import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
	modules: [
		'@nuxtjs/eslint-module',
		'@nuxtjs/tailwindcss',
		'nuxt-icon-tw'
	],
	eslint: {

	},
	devtools: {
		enabled: true,

		timeline: {
			enabled: true,
		},
	},
	app: {
		head: {
			title: 'Aervyon - # whoami',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'description', name: 'description', content: '$ aervyon info\nprogrammer, gamer, student, more...' },
				{ name: 'og:image', content: '/Aervy_Icon.png' },
				{ name: 'theme-color', content: '#66C8FF' }
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{ rel: 'apple-touch-icon', href: '/Aervy_Icon.png' }
			]
		}
	}
})

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
