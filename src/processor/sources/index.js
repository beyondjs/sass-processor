const ProcessorSources = require('@beyond-js/bundles-sdk/processor/base/sources');

module.exports = class extends ProcessorSources {
	get template() {
		const { processor } = this;
		if (processor.specs.bundle.type === 'template/application') return;

		const { application, distribution } = processor.specs;
		return application.template.application.processors.get(distribution);
	}
};
