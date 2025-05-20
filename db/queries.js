const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function deleteAllMessages() {
  await pool.query('TRUNCATE TABLE messages');
}

async function insertNewMessage(messageText) {
  await pool.query('INSERT INTO messages (text) VALUES ($1)', [
    messageText,
  ])
}

module.exports = {
  getAllMessages,
  deleteAllMessages,
  insertNewMessage,
};
