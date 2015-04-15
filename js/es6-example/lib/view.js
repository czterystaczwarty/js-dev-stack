class View {
	constructor(options) {
		this.model = options.model;
		this.template = options.template;
	}

	render() {
		var temp = this.model.toObject();
		return this.template + temp.name;
	}
}

module.exports = View;
