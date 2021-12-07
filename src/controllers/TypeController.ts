import ConnectionHandler from "./ConnectionHandler";
import { ErrorHandler } from "./ErrorHandler";
import { Request, Response } from "express";
import { Connection, Repository } from "typeorm";
import { Type } from "../entity/Type";
import { AllTypesResponse, OneTypeResponse } from "../Types/TypeTypes";



export const getAllTypes = async (req: Request, res: Response) => {
    try {
        const connection: Connection = await ConnectionHandler();
        const TypeRepository: Repository<Type> = connection.getRepository(Type);
        const allTypes: AllTypesResponse = await TypeRepository.find();
        return res.status(200).json({
            data: allTypes
        });
    } catch (error) {
        return ErrorHandler(res, error.message);
    };
}

export const getOneType = async (req: Request, res: Response) => {
    try {
        const idParam = req.params.id;
        const connection: Connection = await ConnectionHandler();
        const TypeRepository: Repository<Type> = connection.getRepository(Type);
        const requestedType: OneTypeResponse = await TypeRepository.findOne({
            where: `id = ${idParam}`
        });
        return res.status(200).json({
            data: requestedType
        });
    } catch (error) {
        return ErrorHandler(res, error.message);
    };
}