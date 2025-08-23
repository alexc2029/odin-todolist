import { displayTodoItems } from "./dom-functions";
import { createTodoItem, createTodoList } from "./todo-lists";

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
		displayTodoItems(todoLists[listIndex]);
	});
}

export function initializeEditItemModal(item, editIcon) {
	const editItemButton = editIcon;
	const editItemModal = document.getElementById("edit-todoitem-modal");

	editItemButton.addEventListener("click", () => {
		const title = document.getElementById("edit-item-title");
		const description = document.getElementById("edit-item-description");
		const date = document.getElementById("edit-item-date");
		const priority = document.getElementById("edit-item-priority");

		title.value = item.title;
		description.value = item.description;
		date.valueAsDate = item.dueDate;
		priority.value = item.priority;
		console.log(date.value);
		console.log(priority.value);
		editItemModal.showModal();
	});
}
