// Import required modules
require('dotenv').config();

const express = require('express');
const cors = require('cors')
const connectDB = require('./config/db')

// Initialize Express app
const app = express();
app.use(express.json())

app.use("/api/auth", require("./routes/authRoutes"))
app.use("/api/tasks", require('./routes/taskRoutes'))


const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for testing purposes
module.exports = app; 