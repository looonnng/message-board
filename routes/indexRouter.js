const { Router } = require('express');
const indexRouter = Router();
const db = require('../db/queries');

/* 
const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
]; */

indexRouter.get('/', async (req, res) => {
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render('index', { title: 'Mini message board', messages: messages });
});

indexRouter.get('/new', (req, res) => {
  res.render('form', { title: 'New Message' });
});

indexRouter.post('/new', async (req, res) => {
  const { messageText } = req.body;
  await db.insertNewMessage(messageText);
  // messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect('/');
});

indexRouter.get('/delete', async (req, res) => {
  await db.deleteAllMessages();
  res.redirect('/');
});

module.exports = indexRouter;
