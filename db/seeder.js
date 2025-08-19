
// One-time script
require('dotenv').config();
const { Client } = require('pg');
const messages = require('./messages');

let dataString = ``;
messages.forEach(m => {
  dataString += `('${m.user}', '${m.text}', '${m.added.toISOString()}'),`;
});
dataString = dataString.slice(0, -1);

const sql = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text TEXT NOT NULL,
  added TIMESTAMPTZ NOT NULL
);

INSERT INTO messages (username, text, added) 
VALUES
  ${dataString}
  ;
`;

async function main() {
  console.log('Seeding...');
  console.log(sql);
  const client = new Client({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
  });

  await client.connect();
  try {
    await client.query(sql);
    console.log('Seeding completed.');
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
