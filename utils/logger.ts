import {createLogger, transports} from 'winston';

const logger = createLogger({
  transports: [
    new transports.Console({
      level: process.env.NODE_ENV === 'prod' ? 'info' : 'silly',
    }),
  ],
});

export default logger;
