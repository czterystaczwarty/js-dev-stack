class Model {
	constructor(properties) {
		this.properties = properties;
	}

	toObject() {
		return this.properties;
	}
}

module.exports = Model;
