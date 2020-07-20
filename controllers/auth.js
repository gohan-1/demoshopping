const { Client } = require('pg');
exports.verify = async (username, password)=>{
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
SELECT name From auth where username = '${username}' AND password ='${password}'
`;


client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        reject(err)
        return;
    }
    console.log('Search Complted');
    console.log(res.rows);
    client.end();
    if(res.rows){
        resolve(res.rows);
    }else{
        reject(err)
    }
});

    })

}
