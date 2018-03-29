const bundlers = [
	{ run: '@brikcss/stakcss-bundler-sass', options: { sourceMap: false } },
	{
		run: '@brikcss/stakcss-bundler-postcss',
		options: {
			map: false
		},
		plugins: [
			require('autoprefixer')({ cascade: false }),
			require('postcss-reporter')({ clearReportedMessages: true })
		]
	}
];

if (process.env.NODE_ENV === 'production') {
	bundlers[1].plugins.push(require('cssnano'));
}

module.exports = {
	main: {
		source: './src/core.init.scss',
		output: './dist/core.init.css',
		bundlers
	},
	utilities: {
		source: './src/core.utilities.scss',
		output: './dist/core.utilities.css',
		bundlers
	}
};