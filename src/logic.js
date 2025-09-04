import {
	addViewTodolistListener,
	addTodoCheckListener,
	addCollapsibleInfoListeners,
} from "./event-listeners";
import { displayTodoItems, displaySidebarTodoList } from "./dom-functions";
import { TodoList } from "./todo-lists";
import { initializeEditItemModal } from "./modals";

export function displayList(todoList) {
	displayTodoItems(todoList);
	addCurrentListListeners(todoList);
}

export function createTodoList(title) {
	const todoList = new TodoList(title);
	const todoListContainer = displaySidebarTodoList(todoList);
	addViewTodolistListener(todoListContainer, todoList, displayList);
	return todoList;
}

function addCurrentListListeners(todoList) {
	const main = document.querySelector("main .todo-list");
	for (const item of todoList.items) {
		const checkbox = main.querySelector(
			`input.todo-check[data-id="${item.id}"]`
		);
		const topRow = main.querySelector(`.top-row[data-id="${item.id}"]`);
		const editIcon = main.querySelector(
			`img.edit-icon[data-id="${item.id}"]`
		);
		if (checkbox && topRow)
			addTodoCheckListener(item, todoList, checkbox, topRow);
		if (editIcon)
			initializeEditItemModal(item, editIcon, todoList, displayList);
	}
	addCollapsibleInfoListeners();
}
