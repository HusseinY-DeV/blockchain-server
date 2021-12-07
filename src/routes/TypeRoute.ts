import * as express from "express";
import { getAllTypes, getOneType } from "../controllers/TypeController";

export const typeRoute: express.Router = express.Router();

// ? ROUTES & MIDDLEWARE
typeRoute.get("/types", getAllTypes);
typeRoute.get("/type/:id", getOneType);
