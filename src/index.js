import "./styles.css";
import { initializeDefaultTodo } from "./initializations";

import { initializeNewItemModal, initializeNewListModal } from "./modals";

import { displayTodoItems } from "./dom-functions";

import { loadFromLocalStorage } from "./local-storage";

let todoLists = loadFromLocalStorage();
console.log(todoLists);
if (!todoLists) {
	todoLists = initializeDefaultTodo();
}

initializeNewListModal();
initializeNewItemModal(todoLists);
displayTodoItems(todoLists[0]);
