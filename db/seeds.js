const mongoose = require('./connection');

const Habit = require('../models/habit');
const habitseeds = require('./seeds.json');

Habit.deleteMany({})
	.then(() => Habit.insertMany(habitseeds))
	.then(console.log)
	.catch(console.error)
	.finally(() => {
		process.exit();
	});