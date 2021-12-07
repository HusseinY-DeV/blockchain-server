import ConnectionHandler from "./ConnectionHandler";
import { ErrorHandler } from "./ErrorHandler";
import { Request, Response } from "express";
import { Connection, Repository } from "typeorm";
import { Cryptocurrency } from "../entity/Cryptocurrency";
import { AllCryptos } from "../Types/CryptoTypes";


export const getAllCryptos = async (req: Request, res: Response) => {

    try {
        const connection: Connection = await ConnectionHandler();
        const CryptoRepository: Repository<Cryptocurrency> = connection.getRepository(Cryptocurrency);
        const allCryptos: AllCryptos = await CryptoRepository.find();
        return res.status(200).json({
            data: allCryptos
        });
    } catch (error) {
        return ErrorHandler(res, error.message);
    }

}

export const getOneCrypto = async (req: Request, res: Response) => {

    try {
        const connection: Connection = await ConnectionHandler();
        const idParam: string = req.params.id;
        const CryptoRepository: Repository<Cryptocurrency> = connection.getRepository(Cryptocurrency);

        //   ! This is not the correct way to get one, where clause should be used and I have ambigious ids in the db so the where clause aint working

        const allCrypto: AllCryptos = await CryptoRepository.find(
            {
                relations: ['type']
            }
        );

        const oneCrypto = allCrypto.filter(item => {
            return item.id === Number(idParam);
        });

        return res.status(200).json({
            data: oneCrypto[0] || {}
        });
    } catch (error) {
        return ErrorHandler(res, error.message);
    }
}