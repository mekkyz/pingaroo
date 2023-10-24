module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'import'],
	settings: {
		'import/resolver': [
			{
				typescript: {
					project: ['.svelte-kit/tsconfig.json', './tsconfig.json']
				}
			}
		]
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2021,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			},
			rules: {
				'no-undef': 'off'
			}
		}
	],
	rules: {
		// Typescript
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
		'@typescript-eslint/consistent-type-assertions': [
			'error',
			{
				assertionStyle: 'as',
				objectLiteralTypeAssertions: 'allow-as-parameter'
			}
		],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^[_|$$]',
				caughtErrorsIgnorePattern: '^_'
			}
		],

		// import
		'import/order': [
			'error',
			{
				alphabetize: { order: 'asc' },
				pathGroups: [
					{
						pattern: '\\$app/**',
						group: 'external'
					}
				],
				groups: [
					'type',
					'external',
					['object', 'builtin', 'internal', 'parent', 'index', 'sibling', 'unknown']
				],
				'newlines-between': 'always'
			}
		],
		'import/newline-after-import': ['error', { count: 1 }],

		// svelte rules
		'mouse-events-have-key-events': 'off',
		// 'svelte/valid-compile': ['error', { ignoreWarnings: true }]

		// import
		'import/no-unresolved': [
			'error',
			{
				ignore: [
					'\\$app/stores',
					'\\$app/forms',
					'\\$app/navigation',
					'\\$app/environment',
					'\\$app/paths',
					'\\$env/*'
				]
			}
		]
	}
}
