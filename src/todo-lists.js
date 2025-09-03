import { displaySidebarTodoList } from "./dom-functions";
import { addViewTodolistListener } from "./event-listeners";

export class TodoList {
	static todoLists = [];
	constructor(title) {
		this.title = title;
		this.items = [];
		TodoList.todoLists.push(this);
	}
	addTodoItem(item) {
		this.items.push(item);
	}
	deleteTodoItem(item) {
		const index = this.items.findIndex((element) => element.id == item.id);
		this.items.splice(index, 1);
	}
}

export function createTodoList(title) {
	const todoList = new TodoList(title);
	const todoListContainer = displaySidebarTodoList(todoList);
	addViewTodolistListener(todoListContainer, todoList);
	return todoList;
}

export function createTodoItem(title, description, dueDate, priority) {
	let id = crypto.randomUUID();
	return { title, description, dueDate, priority, id };
}
