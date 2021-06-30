const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const requestLogger = require('./middleware/request_logger');
app.use(requestLogger);

const habitsControllers = require('./controllers/habits.js');
app.use('/api/habits', habitsControllers);

const { handleErrors } = require('./middleware/custom_errors');
app.use(handleErrors);

app.listen(4000, () => {
	console.log('app listening on port 4000');
});
