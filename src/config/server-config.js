const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  LOG_LABEL: process.env.LOG_LABEL
};
