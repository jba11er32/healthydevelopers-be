const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const HabitSchema = new Schema(
	{
		water: String,
		pushups: String,
		situps: String,
		squats: String,
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
