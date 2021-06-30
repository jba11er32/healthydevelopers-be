const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const HabitSchema = new Schema(
    {
        date: { type: String, required: true },
        water: Number,
        pushups: Number,
        situps: Number,
        squats: Number,
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        }
    }
)