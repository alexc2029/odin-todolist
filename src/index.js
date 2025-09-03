import "./styles.css";
import { initializeDefaultTodo } from "./initializations";
import { TodoList } from "./todo-lists";
import {
	initializeNewItemModal,
	initializeNewListModal,
	initializeEditItemModal,
} from "./modals";
import { displayTodoItems, displaySidebarTodoList } from "./dom-functions";
import { loadFromLocalStorage } from "./local-storage";
import {
	addTodoCheckListener,
	addCollapsibleInfoListeners,
	addViewTodolistListener,
} from "./event-listeners";

let todoLists = loadFromLocalStorage();
if (!todoLists) {
	todoLists = initializeDefaultTodo();
}

initializeNewListModal();
initializeNewItemModal(todoLists);
displayList(todoLists[0]);

function addCurrentListListeners(list) {
	const main = document.querySelector("main .todo-list");
	for (const item of list.items) {
		const checkbox = main.querySelector(
			`input.todo-check[data-id="${item.id}"]`
		);
		const topRow = main.querySelector(`.top-row[data-id="${item.id}"]`);
		const editIcon = main.querySelector(
			`img.edit-icon[data-id="${item.id}"]`
		);
		if (checkbox && topRow)
			addTodoCheckListener(item, list, checkbox, topRow);
		if (editIcon)
			initializeEditItemModal(item, editIcon, list, displayList);
	}
	addCollapsibleInfoListeners();
}

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
