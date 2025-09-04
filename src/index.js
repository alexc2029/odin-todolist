import "./styles.css";
import { initializeDefaultTodo } from "./initializations";
import { initializeNewItemModal, initializeNewListModal } from "./modals";
import { loadFromLocalStorage } from "./local-storage";
import { displayList, createTodoList } from "./logic";
import { createTodoItem, TodoList } from "./todo-lists";
import { createDate } from "./dates";

let todoLists = loadFromLocalStorage((title) => new TodoList(title));
if (!todoLists) {
	todoLists = initializeDefaultTodo(
		createTodoItem,
		createTodoList,
		createDate
	);
}

initializeNewListModal(createTodoList);
initializeNewItemModal(todoLists, createTodoItem, displayList);
displayList(todoLists[0]);
