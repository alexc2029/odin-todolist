import tagIcon from "./icons/tag.svg";
import pinIcon from "./icons/pin.svg";

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

		const titleContainer = document.createElement("div");

		const title = document.createElement("h2");
		title.textContent = item.title;

		const pin = document.createElement("img");
		pin.src = pinIcon;

		titleContainer.appendChild(title);
		titleContainer.appendChild(pin);

		const dueDate = document.createElement("div");
		dueDate.textContent = item.dueDate;

		card.appendChild(titleContainer);
		card.appendChild(dueDate);

		main.appendChild(card);
	}
}
