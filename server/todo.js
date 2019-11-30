export default class Todo {
	constructor({text = '', isDone = false}) {
		this.text = text;
		this.isDone = isDone;
	}
}
