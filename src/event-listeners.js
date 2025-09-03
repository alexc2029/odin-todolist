import { TodoList } from "./todo-lists";
import { saveToLocalStorage } from "./local-storage";

export function addViewTodolistListener(todoListContainer, todoList, onSwitch) {
	todoListContainer.addEventListener("click", () => {
		onSwitch(todoList);
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
		saveToLocalStorage(TodoList.todoLists);
		checkbox.disabled = true;
		topRow.classList.add("completed-todo");
	});
}
