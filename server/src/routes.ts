import express, { response } from 'express';
import { getRepository } from 'typeorm';

import SearchCEPController from './controllers/SearchCEPController';
import CreateLogService from './service/CreateLogService';

import Log from './model/Logs';

const routes = express.Router();

const searchCEPController = new SearchCEPController();


routes.get('/logs', async (request, response) => {
        const logsRepository = getRepository(Log);
        const logs = await logsRepository.find();
    
        return response.json(logs);
});

routes.post('/logs', async(request, response) =>{
        try {
                const { name, email, image } = request.body;
                console.log(name);
        
                const createLogService = new CreateLogService();
        
                const log = await createLogService.execute({
                        name,
                        email,
                        image,
                });
                return response.json(log);
        } catch (err) {
                return response.status(400).json({ error: err.message });
        }


});

routes.get('/search', searchCEPController.index);

export default routes;

