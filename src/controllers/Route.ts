import { Cryptocurrency } from "../entity/Cryptocurrency";
import { ErrorHandler } from "./ErrorHandler";
import { Request, Response } from "express";
import ConnectionHandler from "./ConnectionHandler";

export const getAllKrypto = async (req: Request, res: Response) => {

    try {
        const connection = await ConnectionHandler();
        const cryptoRepository = connection.getRepository(Cryptocurrency);
        const data = await cryptoRepository.find({
            relations: ["cryptoIndustry"]
        });

        return res.status(200).json({
            data
        });
    } catch (error) {
        return ErrorHandler(res, error.message);
    }

}