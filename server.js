const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Get Route to test Connection
app.get("/api/config", (req, res) => {
    res.json({
      success: true,
    });
  });

  // Server Listener
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  