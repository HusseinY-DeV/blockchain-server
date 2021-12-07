import { Request, Response } from "express";

export const fallBackResponse = async (req: Request, res: Response) => res.status(404).json({
    message: "Endpoint not found"
});