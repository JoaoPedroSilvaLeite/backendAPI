const dotenv = require('dotenv');

dotenv.config(); //se exite .env

const {
    PORT,
    pgConnection
} = process.env;

module.exports = {
    port: PORT,
    urlConnection: pgConnection
}
