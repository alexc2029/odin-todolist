import tagIcon from "./icons/tag.svg";
export function displayTodoList(todoListTitle) {
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
