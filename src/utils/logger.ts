import winston from 'winston';

const logger = winston.createLogger({
  level: 'debug', // default minimum log level
  format: winston.format.combine(
    winston.format.colorize(), // colorize output
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(
      ({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`
    )
  ),
  transports: [
    new winston.transports.Console(),
    // You can add file transports here if needed:
    // new winston.transports.File({ filename: 'error.log', level: 'error' }),
    // new winston.transports.File({ filename: 'combined.log' }),
  ],
});

export default logger;
