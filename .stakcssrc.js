/** Setup.
 ============================================================================================= */

const env = process.env.NODE_ENV;
const isProd = ['production', 'prod', 'test'].includes(env);
const loadPostcssPlugins = require('./.postcssrc.js');
const basePostcssPlugins = [
	'postcss-import',
	'postcss-mixins',
	'postcss-font-magician',
	'postcss-apply',
	'postcss-pxtorem',
	'autoprefixer'
];

/** Config export object.
 ============================================================================================= */

let config = {
	css: {
		source: 'src/core.css',
		output: './dist/core.css',
		bundlers: [
			{
				run: '@brikcss/stakcss-bundler-postcss',
				options: { skipConfig: true },
				plugins: loadPostcssPlugins(...basePostcssPlugins.concat(['postcss-reporter']))
			}
		]
	}
};

if (isProd) {
	config.css_min = Object.assign({}, config.css, {
		output: 'dist/core.min.css',
		bundlers: [
			{
				run: '@brikcss/stakcss-bundler-postcss',
				options: { skipConfig: true },
				plugins: loadPostcssPlugins(...basePostcssPlugins.concat(['postcss-csso']))
			}
		]
	});
}

module.exports = config;
