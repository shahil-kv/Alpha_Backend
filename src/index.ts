import express from "express";
import { AUTH } from "routes/auth/auth";
import { createClient } from "@supabase/supabase-js";
import { PORT, SUPA_BASE_API_KEY, SUPA_BASE_URL } from "configs";

// Create express application.
const APP = express();
const SUPA_BASE = createClient(SUPA_BASE_URL, SUPA_BASE_API_KEY);

APP.use("/", AUTH);

// Server creation.
APP.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
