import "./styles.css";
import { createTodoItem, TodoList } from "./todo-lists";
import { initializeDefaultTodo } from "./initializations";

import { initializeNewItemModal, initializeNewListModal } from "./modals";

import { displayTodoItems } from "./dom-functions";

let todoLists = initializeDefaultTodo();
initializeNewListModal();
initializeNewItemModal(todoLists);
displayTodoItems(todoLists[0]);
