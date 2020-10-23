const express = require("express");
const mongoose = require("mongoose");
// const logger = require("morgan")
const app = express();

const PORT = process.env.PORT || 3000;

const workoutController = require("./controllers/workoutController.js")
const htmlController = require("./controllers/htmlController.js")

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// app.use(logger("dev"));

// Establish Mongoose Connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout-tracker",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// Naming connection and logging when it is connected or not
const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});
connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

// Get Route to test Connection
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.use(htmlController);
app.use(workoutController);

// Server Listener
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
