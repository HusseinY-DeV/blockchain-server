import * as express from "express";
import cors = require("cors");
import { HOST, PORT } from "./globals";
import { router } from "./routes/Route";

export default () => {
    const app = express();
    app.use(cors());

    app.use(router);

    app.listen(PORT, HOST, () => {
        console.log(`Server started on ${HOST}:${PORT} worker = ${process.pid}`);
    });
}