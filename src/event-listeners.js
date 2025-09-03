import { displayTodoItems } from "./dom-functions";
import { TodoList } from "./todo-lists";

export function addViewTodolistListener(todoListContainer, todoList) {
	todoListContainer.addEventListener("click", () => {
		displayTodoItems(todoList);
	});
}

export function addCollapsibleInfoListeners() {
	let collapsibles = document.getElementsByClassName("show-collapsible-info");
	for (let collapsible of collapsibles) {
		collapsible.addEventListener("click", function () {
			this.classList.toggle("active");
			this.parentElement.classList.toggle("active");
			let content =
				this.parentElement.nextElementSibling.nextElementSibling;
			if (content.style.visibility === "visible") {
				content.style.visibility = "hidden";
			} else {
				content.style.visibility = "visible";
			}
			if (content.style.maxHeight) {
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + "px";
			}
		});
	}
}

export function addTodoCheckListener(item, todoList, checkbox, topRow) {
	checkbox.addEventListener("click", () => {
		todoList.deleteTodoItem(item);
		checkbox.disabled = true;
		topRow.classList.add("completed-todo");
	});
}
