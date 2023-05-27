module.exports = {
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
	],
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	settings: {
		react: { version: "18.2" },
		"import/resolver": {
			alias: {
				map: [["@", "./src"]],
				extensions: [".js", ".jsx"],
			},
		},
	},
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": "warn",
	},
};
