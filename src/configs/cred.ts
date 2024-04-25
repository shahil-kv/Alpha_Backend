import dotenv from "dotenv";
import path from "path";
dotenv.config({
  path: path.resolve(__dirname, "../../env/.env.development"),
});

// PassportJS credentials
export const OAUTH_CLIENT_ID = process.env.OAUTH_CLIENT_ID;
export const OAUTH_CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;
// Port
export const PORT = process.env.PORT || 4003;
// Supabase client configuration.
export const SUPA_BASE_URL = String(process.env.SUPA_BASE_URL);
export const SUPA_BASE_API_KEY = String(process.env.SUPA_API_KEY);
