import View from './lib/view';
import Model from './lib/model';

var jack = new Model({
	name: 'jack'
});

var view = new View({
	model: jack,
	template: 'Hello, '
});

console.log(view.render());
