module.exports = {
	mode: 'jit',
	purge: {
		content: [
			'./components/**/*.{vue,js}',
			'./layouts/**/*.vue',
			'./pages/**/*.vue',
			'./pages/*.vue',
			'./plugins/**/*.{js,ts}',
			'./nuxt.config.{js,ts}',
			'./*.{vue,js}'
		]
	},
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				dark: '#202124',
				'primary-dark': '#292C34',
				'highlight-dark': '#C9BBFF',
				'primary-text-dark': '#F8F7F7',
				'secondary-text-dark': '#B1A5A8',
				'link-dark': '#B7B7B7',
				'url-dark': '#63A7E5',
				aervyon: '#5BC7EA',
				accent: '#9DC4FF',
				'accent-secondary-dark': '#B1A5A8'
			},
			width: {
				112: '28rem'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
