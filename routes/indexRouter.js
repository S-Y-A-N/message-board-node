const { Router } = require('express');
const indexRouter = Router();
const messages = require('./../messages');



indexRouter.get('/', (req, res) => {
  res.render('index', { messages: messages })
});

indexRouter.get('/new', (req, res) => {
  res.render('form');
});

indexRouter.post('/new', (req, res) => {
  const user = req.body.user;
  const text = req.body.msg;

  messages.push({
    text: text,
    user: user,
    added: new Date()
  });

  res.redirect('/');
});

module.exports = indexRouter;