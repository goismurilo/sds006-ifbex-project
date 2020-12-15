import express from 'express';

import LogController from './controllers/LogController';
import SearchCEPController from './controllers/SearchCEPController';

const routes = express.Router();

const logController = new LogController();
const searchCEPController = new SearchCEPController();

routes.get('/logs', logController.index);
routes.post('/logs', logController.create);

routes.get('/search', searchCEPController.index);

export default routes;

