const Hashes = require('@beyond-js/sass-bundle/processor/hashes');
const Sources = require('@beyond-js/sass-bundle/processor/sources');
const Analyzer = require('@beyond-js/sass-bundle/processor/analyzer');
const Dependencies = require('@beyond-js/sass-bundle/processor/dependencies');
const compiler = require('@beyond-js/sass-bundle/packager/compiler');
const Css = require('@beyond-js/sass-bundle/packager/code/css');
const Js = require('@beyond-js/sass-bundle/packager/code/js');

module.exports = {
	name: 'scss',
	Hashes,
	sources: {
		overwrites: true,
		Sources,
		Hashes,
		extname: '.scss',
	},
	Analyzer,
	Dependencies,
	packager: {
		compiler: () => compiler,
		Css,
		Js,
	},
};
