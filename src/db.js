const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    process.env.DB_NAME, //название БД
    process.env.DB_USER, //Пользователь
    process.env.DB_PASSWORD, //Пароль
    {
        dialect: 'postgres', //какая используется БД (postgresql)
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    }

)