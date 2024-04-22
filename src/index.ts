import express from "express";
import dotenv from "dotenv";
import path from "path";

// Configure dotenv path.
dotenv.config({
  path: path.resolve(__dirname, "../env/.env.development"),
});

// Create express application.
const APP = express();
const PORT = process.env.PORT || 4003;

// Server creation.
APP.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
