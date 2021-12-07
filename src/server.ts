import * as express from "express";
import cors = require("cors");
import { HOST, PORT } from "./globals";
import { typeRoute } from "./routes/TypeRoute";
import { cryptoRoute } from "./routes/CryptoRoute";
import { fallbackRoute } from "./routes/FallbackRoute";

export default () => {
    const app = express();

    app.use(cors());
    app.use(typeRoute);
    app.use(cryptoRoute);
    // * Fallback route
    app.use(fallbackRoute);

    app.listen(PORT, HOST, () => {
        console.log(`Server started on ${HOST}:${PORT} worker = ${process.pid}`);
    });
}