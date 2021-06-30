const express = require('express');
const router = express.Router();

const Habit = require('../models/habit');

router.get('/', (req, res, next) => {
    Habit.find({})
        .then((habits) => res.json(habits))
        .catch(next);
});
