const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(user, text, added) {
  await pool.query("INSERT INTO messages (username, text, added) VALUES ($1, $2, $3)", [user, text, added]);
}

module.exports = {
  getAllMessages,
  insertMessage
}