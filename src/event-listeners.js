import { displayTodoItems } from "./dom-functions";

export function addViewTodolistListener(todoListContainer, todoList) {
	todoListContainer.addEventListener("click", () => {
		displayTodoItems(todoList);
	});
}
