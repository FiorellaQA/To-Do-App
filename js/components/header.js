'use strict';

function Header(update){
	var header = $('<header></header>');
	var container = $('<div class="container"></div>');
	var h1 = $('<h1>To Do App</h1>');

	container.append(h1);
	header.append(container);

	return header;
}