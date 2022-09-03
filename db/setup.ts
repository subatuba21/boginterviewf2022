import {connect} from 'mongoose';
import logger from '../utils/logger';

export const connectFunc = async () => {
    logger.info('Connecting to MongoDB...');
    await connect(process.env.MONGO_URL as string);
    logger.info('Connected to MongoDB!');
};



