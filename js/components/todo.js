'use strict';

function TodoItem(data,update){
	var todo = $('<div class="todo">');
	var checkbox = $('<input type="checkbox">');
	var span = $('<span>' +data.text+'</span>');
	var remove = $('<button>Remove</button>');

	todo.append(checkbox);
	todo.append(span);
	todo.append(remove);

	checkbox.on('change',function(e){
		data.completed = !data.completed;
		update();
	});

	remove.on('click',function(e){
		var idx = state.todos.map(function(x){
			x.text
		}).indexOf(data.text);
		state.todos.splice(idx,1);
		update();
	});
	return todo;
}

function reRender(todoList,completedList){
	todoList.empty();
	completedList.empty();
	state.todos.forEach(function(todo){
		if(!todo.completed){
			todoList.append(TodoItem(todo,_ => {
				reRender(todoList,completedList);
			})); 
		}else{
			completedList.append(TodoItem(todo,_ => {
				reRender(todoList,completedList);
			})); 
		}
	});
}

function Todo(){
	var parent = $('<div class="white-card"></div>');
	var input = $('<input id="input-item" type="text" placeholder="Ingresa la tarea">');
	var todoTitle = $('<p>To Do Items</p>');
	var list = $('<div class="list"></div>');
	var hr = $('<hr>');
	var completedTitle = $('<p>Completed Items</p>');
	var completedList = $('<div class="completed"></div>');

	parent.append(input);
	parent.append(todoTitle);
	parent.append(list);
	parent.append(hr);
	parent.append(completedTitle);
	parent.append(completedList);

	input.on('keypress',function(e){
		if(e.which === 13){
			if(input.val() != ""){
				state.todos.push({
					text: input.val(),
					completed: false
				});
				input.val('');
				reRender(list,completedList);
			}
		}
	});

	return parent;
}