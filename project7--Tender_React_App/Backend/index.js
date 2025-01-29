const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const homeRoutes = require("./routes/home");
const applyRoutes = require("./routes/apply");
const loginRoutes = require("./routes/login");
const registrationsRoutes = require("./routes/registrations");

const app = express();
const PORT = process.env.PORT || 3001; // Use Render's assigned port or default to 3001

const multer = require("multer");
const upload = multer();
app.use(upload.any());

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.use("/login", loginRoutes);
app.use("/apply", applyRoutes);
app.use("/home", homeRoutes);
app.use("/registrations", registrationsRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).send("Server error occurred");
});

// Start server
// app.listen(PORT, "0.0.0.0", () => {
//   console.log(`Backend server running at `);
// });


app.listen(PORT, () => {
  const serverURL = process.env.NODE_ENV === 'production' 
    ? 'https://tenders-server.onrender.com' 
    : `http://localhost:${PORT}`;   
    
    console.log(`Server is running on ${serverURL}`);
});