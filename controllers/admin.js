const { Client } = require('pg');
exports.addData = async (type,productname,description,location,cost,seller)=>{
    return new Promise((resolve, reject) => {

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'olx',
    password: '123',
    port: 5432,
});

client.connect();

console.log("connection successfull")
     
        const query = `
INSERT INTO products (type,productname,description,location,cost,seller)
VALUES ('${type}','${productname}','${description}', '${location}', ${cost},'${seller}')
`;


client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data insert successful');
    client.end();
});

resolve(true);
    })

}

exports.update = async (type,productname,description,location,cost,seller)=>{
    return new Promise((resolve, reject) => {

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'olx',
    password: '123',
    port: 5432,
});

client.connect();

console.log("connection successfull "+productname)
     
        const query = `
UPDATE  products SET type = '${type}',description = '${description}' ,location = '${location}',cost =  '${cost}',seller = '${seller}'
WHERE productname = '${productname}'
`;


client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data updated successful');
    client.end();
});

resolve(true);
    })

}