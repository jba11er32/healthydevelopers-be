const express = require('express');
const router = express.Router();
const { requireToken } = require('../middleware/auth');

const Habit = require('../models/habit');

router.get('/', requireToken, (req, res, next) => {
	Habit.find({})
		.then((habits) => res.json(habits))
		.catch(next);
});

router.get('/:id', requireToken, (req, res, next) => {
	const id = req.params.id;
	Habit.findById(id)
		.then((habit) => res.json(habit))
		.catch(next);
});

router.post('/', requireToken, (req, res, next) => {
	const owner = req.user._id;
	Habit.create({ ...req.body, owner })
		.then((habit) => res.json(habit))
		.catch(next);
});

router.put('/:id', requireToken, (req, res, next) => {
	const id = req.params.id;
	const updated = req.body;
	Habit.find;
});

router.delete('/:id', requireToken, (req, res, next) => {
	const id = req.params.id;
	Habit.findByIdAndDelete(id)
		.then(() => res.sendStatus(204))
		.catch(next);
});

module.exports = router;
