import "./styles.css";
import { createTodoItem, TodoList } from "./todo-lists";
import {
	initializeDefaultTodo,
	initializeNewListModal,
} from "./initializations";
import { displayTodoItems } from "./dom-functions";

let todoLists = initializeDefaultTodo();
initializeNewListModal();
displayTodoItems(todoLists[0]);
