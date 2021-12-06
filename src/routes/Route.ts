import * as express from "express";
import { getAllKrypto } from "../controllers/Route";

export const router = express.Router();
router.get("/cryptocurrencies", getAllKrypto);



