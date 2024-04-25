import { NextFunction, Request, Response } from "express";

// Middleware to protect routes.
export const IS_LOGGED_IN = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};
