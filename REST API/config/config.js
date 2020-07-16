require('dotenv').config()
const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-37hqh.mongodb.net/Origamis?retryWrites=true&w=majority`,
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];