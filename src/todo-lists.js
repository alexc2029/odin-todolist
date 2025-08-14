import { displayTodoList } from "./dom-functions";

export class TodoList {
	constructor(title) {
		this.title = title;
		this.items = [];
		displayTodoList(this.title);
	}
	addTodoItem(item) {
		this.items.push(item);
	}
	deleteTodoItem(item) {
		const index = this.items.findIndex((element) => element.id == item.id);
		this.items.splice(index, 1);
	}
}

export function createTodoItem(title, description, dueDate, priority) {
	let id = crypto.randomUUID();
	return { title, description, dueDate, priority, id };
}
