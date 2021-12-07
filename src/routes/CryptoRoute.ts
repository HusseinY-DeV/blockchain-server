import * as express from "express";
import { getAllCryptos, getOneCrypto } from "../controllers/CryptoController";

export const cryptoRoute: express.Router = express.Router();


// ? ROUTES & MIDDLEWARE
cryptoRoute.get("/cryptos", getAllCryptos);
cryptoRoute.get("/crypto/:id", getOneCrypto);