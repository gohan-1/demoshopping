const { Client } = require('pg');

module.exports = (app) =>{

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'olx',
    password: '123',
    port: 5432,
});

client.connect();

console.log("connection successfull")


}