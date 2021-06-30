const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const habitsControllers = require('./controllers/habits.js');
app.use('/api/habits', habitsControllers);

app.listen(4000, () => {
	console.log('app listening on port 4000');
});
