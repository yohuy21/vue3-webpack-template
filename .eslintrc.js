module.exports = {
	env: {
		browser: true,
		node: true
	},
	extends: [
		// vue
		// 'plugin:vue/vue3-essential', // Lv1
		'plugin:vue/vue3-strongly-recommended', // Lv2
		// 'plugin:vue/vue3-recommended' // Lv3
		// js
		'eslint:recommended'
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		"vue/html-closing-bracket-newline": ["error", {
			"singleline": "never",
			"multiline": "never"
		}],
		"vue/html-self-closing": ["error", {
			"html": {
				"void": "always",  // 빈 태그
				"normal": "never", // 일반 태그
				"component": "always"
			},
			"svg": "always",
			"math": "always"
		}]
	}

}