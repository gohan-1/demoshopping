const query = `
CREATE TABLE users (
    type varchar,
    image varchar,
    productName varchar,
    price int,
    color varchar
);
`;

client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Table is successfully created');
    client.end();
});