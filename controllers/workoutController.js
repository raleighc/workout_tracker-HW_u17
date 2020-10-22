const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((foundWorkouts) => {
      res.json(foundWorkouts);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to retrieve workout."
      })
    });
});

router.get("/api/workouts/:id", (req, res) => {
  db.Workout.findById(req.params.id)
    .then((foundWorkout) => {
      res.json(foundWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: `Failed to retrieve workout with id: ${req.params.id}`,
      });
    });
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((newWorkouts) => {
      res.json(newWorkouts);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to create new workout."
      })
    });
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedWorkout) => {
      res.json(updatedWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to update workout.",
      });
    });
});


module.exports = router;
