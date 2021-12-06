import dotenv = require("dotenv");
dotenv.config();

export const HOST = process.env.HOST;
export const PORT = Number(process.env.PORT);
