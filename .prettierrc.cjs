module.exports = {
	useTabs: true,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: false,
	printWidth: 190,
	arrowParens: 'avoid',
	bracketSameLine: false,
	bracketSpacing: true,
	embeddedLanguageFormatting: 'auto',
	endOfLine: 'lf',
	htmlWhitespaceSensitivity: 'css',
	insertPragma: false,
	proseWrap: 'always',
	quoteProps: 'as-needed',
	requirePragma: false,
	singleAttributePerLine: false,
	tabWidth: 4,
	trailingComma: 'all',
	overrides: [
		{
			files: ['**/*.json'],
			options: {
				useTabs: false,
			},
		},
	],
	plugins: [require('prettier-plugin-tailwindcss')],
}
