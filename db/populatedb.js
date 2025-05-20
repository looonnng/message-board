const { Client } = require('pg');
require('dotenv').config();

const dbConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_HOST,
  database: process.env.DBNAME,
};

const SQL = `
  CREATE TABLE IF NOT EXISTS messages (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   text VARCHAR( 255 )
  );

  INSERT INTO messages (text)
  VALUES 
    ('hello world!'),
    ('bonjour!'),
    ('howdy!');
`;

async function main() {
  console.log('seeding...');
  const client = new Client({ connectionString: process.env.PG_LINK });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
