import { createTodoItem } from "./todo-lists";
import { createTodoList } from ".";
import { createDate } from "./dates";

export function initializeDefaultTodo() {
	let todoLists = [];
	todoLists.push(createTodoList("Default"));
	todoLists[0].addTodoItem(
		createTodoItem(
			"Sample Task 1",
			"This is the first default todo",
			createDate(9, 25),
			"Urgent"
		)
	);
	todoLists[0].addTodoItem(
		createTodoItem(
			"Sample Task 2",
			"This is the second default todo",
			createDate(10, 30),
			"Important"
		)
	);
	todoLists[0].addTodoItem(
		createTodoItem(
			"Sample Task 3",
			"This is the third default todo",
			createDate(11, 19),
			"Low Priority"
		)
	);
	todoLists[0].addTodoItem(
		createTodoItem(
			"Sample Task 4",
			"This is the fourth default todo",
			createDate(12, 17),
			"Important"
		)
	);
	todoLists.push(createTodoList("Default 2"));
	todoLists[1].addTodoItem(
		createTodoItem(
			"Sample Task 1",
			"This is the first default todo",
			createDate(2, 6, 2026),
			"Urgent"
		)
	);
	todoLists[1].addTodoItem(
		createTodoItem(
			"Sample Task 2",
			"This is the second default todo",
			createDate(9, 25),
			"Important"
		)
	);
	todoLists[1].addTodoItem(
		createTodoItem(
			"Sample Task 3",
			"This is the third default todo",
			createDate(10, 30),
			"Low Priority"
		)
	);
	todoLists[1].addTodoItem(
		createTodoItem(
			"Sample Task 4",
			"This is the fourth default todo",
			createDate(11, 19),
			"Important"
		)
	);
	return todoLists;
}
