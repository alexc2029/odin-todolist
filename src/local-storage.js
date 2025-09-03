import { createTodoList, createTodoItem } from "./todo-lists";

export function saveToLocalStorage(todoLists) {
	console.log(todoLists);
	console.log(JSON.stringify(todoLists));
	localStorage.setItem("todoLists", JSON.stringify(todoLists));
	///console.log(localStorage.getItem("todoLists"));
}

///need to figure out how to deal with methods

export function loadFromLocalStorage() {
	let todoListsWithoutMethods = JSON.parse(localStorage.getItem("todoLists"));
	if (!todoListsWithoutMethods) return null;

	console.log(todoListsWithoutMethods);

	let todoLists = [];

	for (let todolist of todoListsWithoutMethods) {
		let items = todolist.items;
		todolist = createTodoList(todolist.title);
		console.log(todolist);
		for (let todoitem of items) {
			console.log(todoitem);
			todoitem.dueDate = new Date(todoitem.dueDate);
			todolist.addTodoItem(todoitem);
			console.log(todolist);
		}
		todoLists.push(todolist);
	}

	return todoLists;
}
