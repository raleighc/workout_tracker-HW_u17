const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
    required: "Day is required",
  },
  exercises: [
    {
      type: {
        type: String,
        trim: false,
        required: "Type is required",
      },
      name: {
        type: String,
        trim: false,
        required: "Name is required",
      },
      duration: {
        type: Number,
        required: "Duration length is required",
      },
      weight: {
        type: Number,
        required: false,
      },
      reps: {
        type: Number,
        required: false,
      },
      sets: {
        type: Number,
        required: false,
      },
      distance: {
        type: Number,
        required: false,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;

// {
// day: new Date().setDate(new Date().getDate()-10),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Bicep Curl",
//         duration: 20,
//         weight: 100,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   }

//     {
//       day: new Date().setDate(new Date().getDate()-7),
//       exercises: [
//         {
//           type: "cardio",
//           name: "Running",
//           duration: 25,
//           distance: 4
//         }
//       ]
//     }
