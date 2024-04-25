import express, { Request } from "express";
import passport, { Profile } from "passport";
import session from "express-session";
import { IS_LOGGED_IN } from "middlewares";
import googleStrategy from "passport-google-oauth20";
import { OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET } from "configs";

const ROUTER = express.Router();
const OAUTH = googleStrategy.Strategy;
passport.use(
  new OAUTH(
    {
      clientID: String(OAUTH_CLIENT_ID),
      clientSecret: String(OAUTH_CLIENT_SECRET),
      callbackURL: "http://localhost:4002/google/callback",
      passReqToCallback: true,
    },
    (
      request: Request,
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: any
    ) => {
      return done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user: Express.User, done) {
  done(null, user);
});

ROUTER.use(session({ secret: "Akshay" }));
ROUTER.use(passport.initialize());
ROUTER.use(passport.session());

ROUTER.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

ROUTER.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failed",
    successRedirect: "/success",
  })
);

ROUTER.get("/failed", (req, res) => {
  console.log(res);
  res.send("Failed");
});

ROUTER.get("/success", IS_LOGGED_IN, (req, res) => {
  console.log(req.user);
  res.send(`Welcome ${req.user}`);
});

ROUTER.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error(err);
    }
    res.redirect("/");
  });
});

ROUTER.get("/", (req, res) => {
  res.send('<a href="/google">Auth</a>');
});

export const AUTH = ROUTER;
