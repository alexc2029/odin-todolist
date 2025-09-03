import { displayTodoItems } from "./dom-functions";
import { createTodoItem, createTodoList, TodoList } from "./todo-lists";
import { saveToLocalStorage } from "./local-storage";

export function initializeNewListModal() {
	const addListButton = document.getElementById("new-todolist-button");
	const addListModal = document.getElementById("new-todolist-modal");

	const title = document.getElementById("title");

	addListButton.addEventListener("click", () => {
		title.value = "";
		addListModal.showModal();
	});

	const submitListFormButton = document.getElementById("submit-new-todolist");

	submitListFormButton.addEventListener("click", (e) => {
		e.preventDefault();
		createTodoList(title.value);
		saveToLocalStorage(TodoList.todoLists);
		addListModal.close();
		location.reload();
	});
}

export function initializeNewItemModal(todoLists) {
	const addItemButton = document.getElementById("new-todoitem-button");
	const addItemModal = document.getElementById("new-todoitem-modal");

	const list = document.getElementById("list");

	addItemButton.addEventListener("click", () => {
		list.innerHTML = "";
		for (let listElement of todoLists) {
			const listOption = document.createElement("option");
			listOption.value = listElement.title;
			listOption.textContent = listElement.title;
			list.appendChild(listOption);
		}
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
			new Date(date.value),
			priority.value
		);
		const listIndex = todoLists.findIndex(
			(todolist) => todolist.title == listSubmitted.value
		);
		todoLists[listIndex].addTodoItem(todoitem);
		saveToLocalStorage(TodoList.todoLists);
		title.value = "";
		description.value = "";
		date.value = "";
		priority.value = "Important";
		addItemModal.close();
		displayTodoItems(todoLists[listIndex]);
	});
}

export function initializeEditItemModal(item, editIcon, todoList) {
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
		editItemModal.showModal();

		const submitEditItemButton = document.getElementById(
			"submit-edit-todoitem"
		);

		function handleEditItemForm(e) {
			{
				e.preventDefault();
				const title = document.getElementById("edit-item-title");
				const description = document.getElementById(
					"edit-item-description"
				);
				const date = document.getElementById("edit-item-date");
				const priority = document.getElementById("edit-item-priority");

				item.title = title.value;
				item.description = description.value;
				item.dueDate = new Date(date.value);
				item.priority = priority.value;

				saveToLocalStorage(TodoList.todoLists);
				displayTodoItems(todoList);

				editItemModal.close();
				submitEditItemButton.removeEventListener(
					"click",
					handleEditItemForm
				);
			}
		}

		submitEditItemButton.addEventListener("click", handleEditItemForm);
	});
}
