const express = require("express");
const app = express();

// Create a new router
const router = express.Router();

// Define a route to get the JSON file
router.get("/", async (req, res) => {
  // Read the JSON file asynchronously
  const data = await require("./arts.json");

  // Send the JSON file to the user
  res.status(200).json({
    status: "success",
    message: "Data retrieved successfully",
    data: data,
  });
});

// Define a route to post data
router.post("/data", async (req, res) => {
  // Get the data from the request
  const data = req.body;

  // Display the data to the user
  res.status(201).json({
    status: "success",
    message: "Data posted successfully",
    data: data,
  });
});

// Mount the router
app.use("/", router);

// Listen on port 3000
app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
