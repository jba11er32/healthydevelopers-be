const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const requestLogger = require('./middleware/request_logger');
app.use(requestLogger);

const habitControllers = require('./controllers/habits.js');
app.use('/', habitControllers);

const userControllers = require('./controllers/users.js');
app.use('/users', userControllers);

const { handleErrors } = require('./middleware/custom_errors');
app.use(handleErrors);

app.listen(process.env.PORT || 4000, () => {
	console.log('App Launched');
});
