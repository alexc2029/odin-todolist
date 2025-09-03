import tagIcon from "./icons/tag.svg";
import editSvg from "./icons/edit.svg";
import { formatDate } from "./dates";

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
	for (let item of todoList.items) {
		const card = document.createElement("div");

		const topRow = document.createElement("div");
		topRow.className = "top-row";
		topRow.dataset.id = item.id;

		const title = document.createElement("h2");
		title.textContent = item.title;
		title.className = "show-collapsible-info";

		topRow.appendChild(title);

		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.className = "todo-check";
		checkbox.dataset.id = item.id;

		const editIcon = document.createElement("img");
		editIcon.src = editSvg;
		editIcon.className = "edit-icon";
		editIcon.dataset.id = item.id;
		topRow.appendChild(editIcon);

		const dueDate = document.createElement("div");
		dueDate.textContent = formatDate(item.dueDate);
		dueDate.className = "due-date";

		const collapsibleInfo = document.createElement("div");
		collapsibleInfo.className = "collapsible-info";

		const description = document.createElement("div");
		description.textContent = item.description;
		const priority = document.createElement("div");
		priority.textContent = item.priority;
		colorCodePriority(priority);

		collapsibleInfo.appendChild(description);
		collapsibleInfo.appendChild(priority);

		card.appendChild(checkbox);
		card.appendChild(topRow);
		card.appendChild(dueDate);
		card.append(collapsibleInfo);

		main.appendChild(card);
	}
}

function colorCodePriority(priorityElement) {
	if (priorityElement.textContent == "Urgent")
		priorityElement.classList.add("priority-urgent");
	else if (priorityElement.textContent == "Important")
		priorityElement.classList.add("priority-important");
	else if (priorityElement.textContent == "Low Priority")
		priorityElement.classList.add("priority-low");
}
