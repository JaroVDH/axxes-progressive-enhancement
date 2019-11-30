import Todo from './todo';

export default class TodoList {
	constructor({title = '', todos = []}) {
		this.title = title;
		this.todos = todos.map((todo) => todo instanceof Todo ? todo : new Todo(todo));
	}
}
