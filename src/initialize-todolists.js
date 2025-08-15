import { createTodoItem, TodoList, createTodoList } from "./todo-lists";

export function initializeDefaultTodo() {
	let todoLists = [];
	todoLists.push(createTodoList("Default"));
	todoLists[0].addTodoItem(
		createTodoItem("Sample Task 1", "This is the first default todo", 25, 1)
	);
	todoLists[0].addTodoItem(
		createTodoItem(
			"Sample Task 2",
			"This is the second default todo",
			30,
			2
		)
	);
	todoLists[0].addTodoItem(
		createTodoItem("Sample Task 3", "This is the third default todo", 20, 1)
	);
	todoLists[0].addTodoItem(
		createTodoItem(
			"Sample Task 4",
			"This is the fourth default todo",
			27,
			2
		)
	);
	todoLists.push(createTodoList("Default 2"));
	todoLists[1].addTodoItem(
		createTodoItem("Sample Task 1", "This is the first default todo", 25, 1)
	);
	todoLists[1].addTodoItem(
		createTodoItem(
			"Sample Task 2",
			"This is the second default todo",
			30,
			2
		)
	);
	todoLists[1].addTodoItem(
		createTodoItem("Sample Task 3", "This is the third default todo", 20, 1)
	);
	todoLists[1].addTodoItem(
		createTodoItem(
			"Sample Task 4",
			"This is the fourth default todo",
			27,
			2
		)
	);
	return todoLists;
}
