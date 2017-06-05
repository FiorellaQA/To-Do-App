'use strict';

function render(root){
	root.empty();
	var wrapper = $('<div class="wrapper"></div>');

	wrapper.append(Header());
	wrapper.append(Todo());

	root.append(wrapper);
}

var state = {
	todos: []
};

$(function() {
	var root = $('.root');
	render(root);
});