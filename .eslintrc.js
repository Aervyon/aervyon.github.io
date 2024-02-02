module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	ignorePatterns: ["_layouts/*", "_pages/*"],
	extends: ["@nuxt/eslint-config", "plugin:prettier/recommended"],
	rules: {
		"vue/multi-word-component-names": "off",
		indent: ["warn", "tab"],
		"vue/html-indent": ["off", "tab"],
	},
};
