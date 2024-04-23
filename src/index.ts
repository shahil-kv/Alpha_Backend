import path from "path";
import dotenv from "dotenv";
import express from "express";
import passport from "passport-google-oauth20";
import { createClient } from "@supabase/supabase-js";

// Configure dotenv path.
dotenv.config({
  path: path.resolve(__dirname, "../env/.env.development"),
});

// Create express application.
const APP = express();
const PORT = process.env.PORT || 4003;
// Supabase client configuration.
const SUPA_BASE_URL = String(process.env.SUPA_BASE_URL);
const SUPA_BASE_API_KEY = String(process.env.SUPA_API_KEY);
const SUPA_BASE = createClient(SUPA_BASE_URL, SUPA_BASE_API_KEY);

// Server creation.
APP.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
