import "./styles.css";
import { createTodoItem, TodoList } from "./todo-lists";
import {
	initializeDefaultTodo,
	initializeNewListModal,
	initializeNewItemModal,
} from "./initializations";
import { displayTodoItems } from "./dom-functions";

let todoLists = initializeDefaultTodo();
initializeNewListModal();
initializeNewItemModal(todoLists);
displayTodoItems(todoLists[0]);
