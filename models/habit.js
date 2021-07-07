const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const HabitSchema = new Schema(
	{
		water: Number,
		pushups: Number,
		situps: Number,
		squats: Number,
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Habit = mongoose.model('Habit', HabitSchema);

module.exports = Habit;
