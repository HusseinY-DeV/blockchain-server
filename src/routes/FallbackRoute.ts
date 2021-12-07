import * as express from "express";
import { fallBackResponse } from "../controllers/FallbackController";

export const fallbackRoute: express.Router = express.Router();
fallbackRoute.all("*", fallBackResponse);