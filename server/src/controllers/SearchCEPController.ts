import { Request, Response } from 'express';
import cep from 'cep-promise';

export default class SearchCEPController{
    async index(request: Request, response: Response) {
        const cepQuery = request.query;
        const cepS = cepQuery.cep as string;
        
        cep(cepS)
        .then((result) => {
            return response.json(result);
        })
        .catch((error) => {
            return response.status(400).json(error);
        });
    }     
}