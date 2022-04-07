const dotenv = require('dotenv');

dotenv.config();

module.exports = (on, config) => {
    config.env.NODE_ENV = process.env.NODE_ENV;
    return config;
};
