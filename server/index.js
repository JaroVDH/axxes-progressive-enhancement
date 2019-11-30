import express from 'express';
import middleware from './middleware';
import routes from './routes';

const port = parseInt(process.env.PORT, 10) || 3000,
	app = express();

middleware(app);
routes(app);

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
