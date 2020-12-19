const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Number,
        default:Date.now
        
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter exercise"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter your exercise name"
            },
            duration: {
                type: Number,
                required: "Enter your exercise duration in minutes"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
},
{
    toJSON: {
      virtuals: true
    }
  }
);

// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;