import express from 'express';
import hbs from 'express-handlebars';

function addMiddleware(app) {
	app.use(express.urlencoded());
	app.set('view engine', '.hbs');
	app.set('views', 'client/views');
	app.engine('.hbs', hbs({
		extname: '.hbs',
		layoutDir: 'client/views/layouts',
		partialsDir: 'client/views/partials',
		helpers: {
			'toJSON': JSON.stringify
		}
	}));

	app.use('/static', express.static('static'));
}

export default addMiddleware;
