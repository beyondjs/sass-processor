const ProcessorCompilerChildren = require('@beyond-js/bundles-sdk/processor/packager/compiler/children');

module.exports = class extends ProcessorCompilerChildren {
	dispose(check) {
		const { processor } = this.compiler.packager;
		const { dependencies } = processor;

		//        const children = new Map([['dependencies', {child: dependencies.declarations}]]);
		const children = new Map();
		super.dispose(check, children);
	}
};
