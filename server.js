const express = require("express");
const app = express();
const port = 80; // You can choose any available port

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, Express running with elastic beanstalk!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
