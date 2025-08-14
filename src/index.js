import "./styles.css";
import { createTodoItem, TodoList } from "./todo-lists";
import { initializeDefaultTodo } from "./initialize-todolists";
import { displayTodoItems } from "./dom-functions";

let todoLists = initializeDefaultTodo();
console.log(todoLists);
displayTodoItems(todoLists[0]);
