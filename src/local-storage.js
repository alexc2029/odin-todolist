export function saveToLocalStorage(todoLists) {
	localStorage.setItem("todoLists", JSON.stringify(todoLists));
}

export function loadFromLocalStorage(onCreateTodoList) {
	let todoListsWithoutMethods = JSON.parse(localStorage.getItem("todoLists"));
	if (!todoListsWithoutMethods) return null;

	let todoLists = [];

	for (let todolist of todoListsWithoutMethods) {
		let items = todolist.items;
		todolist = onCreateTodoList(todolist.title);
		for (let todoitem of items) {
			todoitem.dueDate = new Date(todoitem.dueDate);
			todolist.addTodoItem(todoitem);
		}
		todoLists.push(todolist);
	}

	return todoLists;
}
