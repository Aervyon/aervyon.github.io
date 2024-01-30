module.exports = {
	root: true,
	extends: [
		'@nuxt/eslint-config'
	],
	rules: {
		'vue/multi-word-component-names': 'off',
		'indent': ['warn', 'tab'],
		'vue/html-indent': ['warn', 'tab']
	}
}
