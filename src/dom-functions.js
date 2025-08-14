import tagIcon from "./icons/tag.svg";
import pinIcon from "./icons/pin.svg";

export function displaySidebarTodoList(todoListTitle) {
	const sidebar = document.getElementById("sidebar");

	const todoListContainer = document.createElement("div");
	const todoListIcon = document.createElement("img");
	todoListIcon.src = tagIcon;
	todoListContainer.appendChild(todoListIcon);
	const todoListName = document.createElement("div");
	todoListName.textContent = todoListTitle;
	todoListContainer.appendChild(todoListName);

	sidebar.appendChild(todoListContainer);
}

export function displayTodoItems(todoList) {
	const todoListTitle = document.querySelector("main h1");
	todoListTitle.textContent = todoList.title;
	const main = document.querySelector("main");
	console.log(todoList.items);
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
