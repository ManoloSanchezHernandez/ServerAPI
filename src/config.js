require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 5000
    },
    mysql: {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSWL_PW,
        database: process.env.MYSQL_DB
    }
}