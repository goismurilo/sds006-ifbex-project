import { Request, Response } from 'express';
import db from '../database/connection';


export default class LogController{
    async index(request: Request, response: Response) {
        const logs = await db('logs')
        .select(['logs.*']);
        return response.json(logs);
    }   

    async create(request: Request, response: Response) {
        
        const { name, email, image } = request.body;

        const trx = await db.transaction();
    
        try {
            const insertedLog = await trx('logs').insert({
                name,
                email,
                image,
            });
                
            await trx.commit();

            return response.status(201).send();
        } catch (err) {
            trx.rollback();
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }
    } 
}