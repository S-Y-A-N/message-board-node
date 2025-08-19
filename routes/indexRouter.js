const { Router } = require('express');
const indexRouter = Router();
const messagesController = require('../controllers/messagesController');

indexRouter.get('/', messagesController.getMessages);

indexRouter.get('/new', messagesController.createMessageGet);

indexRouter.post('/new', messagesController.createMessagePost);

module.exports = indexRouter;