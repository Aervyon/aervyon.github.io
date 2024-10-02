import globals from "globals";
import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
	js.configs.recommendedConfig,
	eslintPluginPrettierRecommended,
	{
		ignores: ["_layouts/*", "_pages/*"],
		files: ["**/*.vue", "**/*.js", "**/*.ts"],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},

		rules: {
			"vue/multi-word-component-names": "off",
			"vue/html-indent": ["off", "tab"],
		},
	},
);
