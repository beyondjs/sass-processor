const ProcessorCompilerChildren = require('@beyond-js/bundles-sdk/processor/packager/compiler/children');

module.exports = class extends ProcessorCompilerChildren {
	dispose() {
		const { dependencies } = this.compiler.packager.processor;
		super.dispose(new Map([['dependencies.files', { child: dependencies.files }]]));
	}
};
