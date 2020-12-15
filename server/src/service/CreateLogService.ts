import { getRepository } from 'typeorm';

import Log from '../model/Logs';

interface Request {
    name: string;
    email: string;
    image: string;
}

class CreateLogService {
    public async execute({ name, email, image }: Request): Promise<Log> {
        const logsRepository = getRepository(Log);

        const log = logsRepository.create({
            name,
            email,
            image,
        });

        await logsRepository.save(log);

        return log;
    }
}

export default CreateLogService;
