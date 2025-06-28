const { createLogger, format, transports } = require("winston");
const { printf, combine, label, timestamp } = format;

const customisedFormat = printf(({ timestamp, label, level, message }) => {
  return `${timestamp} : [${label}] : ${level} : ${message}`;
});

const logger = createLogger({
  format: combine(
    label({ label: process.env.LOG_LABEL }),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    customisedFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "combined.log" }),
  ],
});

module.exports = logger;
