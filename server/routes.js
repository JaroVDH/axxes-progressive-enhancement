import TodoList from './todo-list';
import * as todoService from './todo-service';

function addRoutes(app) {
	app.post('/save', async (req, res) => {
		try {
			await todoService.save(new TodoList(req.body));
			res.redirect('/');
		} catch(e) {
			console.error('Something went wrong saving Todo\'s:', e);
			res.sendStatus(500);
		}
	});

	app.get('/save', async function(req, res) {
		res.redirect('/');
	});

	app.get('/', async function(req, res) {
		res.render('todo-list', {
			todoList: await todoService.get()
		});
	});

	app.all('*', function(req, res) {
		res.sendStatus(404);
	});
}

export default addRoutes;
