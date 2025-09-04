export function initializeDefaultTodo(
	onCreateTodoItem,
	onCreateTodoList,
	onCreateDate
) {
	let todoLists = [];
	todoLists.push(onCreateTodoList("Default"));
	todoLists[0].addTodoItem(
		onCreateTodoItem(
			"Sample Task 1",
			"This is the first default todo",
			onCreateDate(9, 25),
			"Urgent"
		)
	);
	todoLists[0].addTodoItem(
		onCreateTodoItem(
			"Sample Task 2",
			"This is the second default todo",
			onCreateDate(10, 30),
			"Important"
		)
	);
	todoLists[0].addTodoItem(
		onCreateTodoItem(
			"Sample Task 3",
			"This is the third default todo",
			onCreateDate(11, 19),
			"Low Priority"
		)
	);
	todoLists[0].addTodoItem(
		onCreateTodoItem(
			"Sample Task 4",
			"This is the fourth default todo",
			onCreateDate(12, 17),
			"Important"
		)
	);
	todoLists.push(onCreateTodoList("Default 2"));
	todoLists[1].addTodoItem(
		onCreateTodoItem(
			"Sample Task 1",
			"This is the first default todo",
			onCreateDate(2, 6, 2026),
			"Urgent"
		)
	);
	todoLists[1].addTodoItem(
		onCreateTodoItem(
			"Sample Task 2",
			"This is the second default todo",
			onCreateDate(9, 25),
			"Important"
		)
	);
	todoLists[1].addTodoItem(
		onCreateTodoItem(
			"Sample Task 3",
			"This is the third default todo",
			onCreateDate(10, 30),
			"Low Priority"
		)
	);
	todoLists[1].addTodoItem(
		onCreateTodoItem(
			"Sample Task 4",
			"This is the fourth default todo",
			onCreateDate(11, 19),
			"Important"
		)
	);
	return todoLists;
}
