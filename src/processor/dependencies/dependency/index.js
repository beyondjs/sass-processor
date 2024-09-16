const Dependency = require('@beyond-js/bundles-sdk/dependencies/dependency');

module.exports = class extends Dependency {
	get dp() {
		return 'sass.dependency';
	}

	#files;
	get files() {
		return this.#files;
	}

	constructor(resource, processor) {
		super(resource, processor);
		resource !== '@beyond-js/kernel/styles' && (this.#files = new (require('./files'))(this));
	}
};
