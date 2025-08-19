import tagIcon from "./icons/tag.svg";
import pinIcon from "./icons/pin.svg";
import checkCircleEmptyIcon from "./icons/check-circle-empty.svg";
import {
	addCollapsibleInfoListeners,
	addTodoCheckListener,
} from "./event-listeners";

export function displaySidebarTodoList(todoList) {
	const sidebar = document.getElementById("sidebar-todolists");

	const todoListContainer = document.createElement("div");
	const todoListIcon = document.createElement("img");
	todoListIcon.src = tagIcon;
	todoListContainer.appendChild(todoListIcon);
	const todoListName = document.createElement("div");
	todoListName.textContent = todoList.title;
	todoListContainer.appendChild(todoListName);

	sidebar.appendChild(todoListContainer);

	return todoListContainer;
}

export function displayTodoItems(todoList) {
	const todoListTitle = document.querySelector("main h1");
	todoListTitle.textContent = todoList.title;
	const main = document.querySelector("main .todo-list");
	main.textContent = "";
	for (const item of todoList.items) {
		const card = document.createElement("div");

		const topRow = document.createElement("h2");
		topRow.textContent = item.title;
		topRow.className = "show-collapsible-info";

		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.className = "todo-check";

		/// should find a way to call this from somewhere else
		addTodoCheckListener(item, todoList, checkbox);

		const dueDate = document.createElement("div");
		dueDate.textContent = item.dueDate;
		dueDate.className = "due-date";

		const collapsibleInfo = document.createElement("div");
		collapsibleInfo.className = "collapsible-info";

		const description = document.createElement("div");
		description.textContent = item.description;
		const priority = document.createElement("div");
		priority.textContent = item.priority;

		collapsibleInfo.appendChild(description);
		collapsibleInfo.appendChild(priority);

		card.appendChild(checkbox);
		card.appendChild(topRow);
		card.appendChild(dueDate);
		card.append(collapsibleInfo);

		main.appendChild(card);
	}
	/// should find a way to call this from somewhere else
	addCollapsibleInfoListeners();
}
