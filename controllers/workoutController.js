const express = require("express");
const router = express.Router();

const db = require("../models");

// GET Routes
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

router.get("/api/exercises/", (req, res) => {
  db.Exercise.find({})
    .then((foundExercises) => {
      res.json(foundExercises);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to retrieve exercises."
      })
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .limit(7)
    .then((foundWorkout) => {
      res.json(foundWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to retrieve workout range."
      })
    });
});

// POST Routes
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

// UPDATE Routes
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } }, 
     { new: true })
    .then((updatedExcercise) => {
      res.json(updatedExcercise);
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

// DELETE Routes
router.delete("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndDelete(req.params.id)
    .then((deletedWorkout) => {
      res.json(deletedWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        error: true,
        data: null,
        message: "Failed to delete workout.",
      });
    });
});

module.exports = router;
