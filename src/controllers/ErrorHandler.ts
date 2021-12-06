import { Response } from "express";

export const ErrorHandler = (res: Response, message: string) => {
    return res.status(400).json({
        error: message
    });
}
