import {promises as fs} from 'fs';
import TodoList from './todo-list';

export async function get() {
	return new TodoList(JSON.parse(await fs.readFile('data/db.json')));
}

export async function save(todoList) {
	await fs.writeFile('data/db.json', JSON.stringify(todoList, null, 2));
}
