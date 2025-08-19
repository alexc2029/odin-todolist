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

export function initializeNewListModal() {
	const addListButton = document.getElementById("new-todolist");
	const addListModal = document.getElementById("new-todolist-modal");

	addListButton.addEventListener("click", () => {
		addListModal.showModal();
	});

	const submitListFormButton = document.getElementById("submit-new-todolist");

	submitListFormButton.addEventListener("click", (e) => {
		e.preventDefault();
		const title = document.getElementById("title");
		createTodoList(title.value);
		addListModal.close();
	});
}

export function initializeNewItemModal(todoLists) {
	const addItemButton = document.getElementById("new-todoitem-button");
	const addItemModal = document.getElementById("new-todoitem-modal");

	const list = document.getElementById("list");

	for (let listElement of todoLists) {
		const listOption = document.createElement("option");
		listOption.value = listElement.title;
		listOption.textContent = listElement.title;
		list.appendChild(listOption);
	}

	addItemButton.addEventListener("click", () => {
		addItemModal.showModal();
	});

	const submitItemFormButton = document.getElementById("submit-new-todoitem");

	submitItemFormButton.addEventListener("click", (e) => {
		e.preventDefault();
		const listSubmitted = document.getElementById("list");
		const title = document.getElementById("item-title");
		const description = document.getElementById("item-description");
		const date = document.getElementById("item-date");
		const priority = document.getElementById("item-priority");

		const todoitem = createTodoItem(
			title.value,
			description.value,
			date.value,
			priority.value
		);
		const listIndex = todoLists.findIndex(
			(todolist) => todolist.title == listSubmitted.value
		);
		todoLists[listIndex].addTodoItem(todoitem);
		addItemModal.close();
	});
}
