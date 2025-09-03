import { displaySidebarTodoList } from "./dom-functions";
import { addViewTodolistListener } from "./event-listeners";
import { saveToLocalStorage } from "./local-storage";

export class TodoList {
	static todoLists = [];
	constructor(title) {
		this.title = title;
		this.items = [];
		TodoList.todoLists.push(this);
	}
	addTodoItem(item) {
		this.items.push(item);
		saveToLocalStorage(TodoList.todoLists);
	}
	deleteTodoItem(item) {
		const index = this.items.findIndex((element) => element.id == item.id);
		this.items.splice(index, 1);
		saveToLocalStorage(TodoList.todoLists);
	}
}

export function createTodoList(title) {
	const todoList = new TodoList(title);
	const todoListContainer = displaySidebarTodoList(todoList);
	addViewTodolistListener(todoListContainer, todoList);
	saveToLocalStorage(TodoList.todoLists);
	return todoList;
}

export function createTodoItem(title, description, dueDate, priority) {
	let id = crypto.randomUUID();
	return { title, description, dueDate, priority, id };
}
