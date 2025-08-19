const { body, validationResult } = require("express-validator");
const db = require('../db/queries');

// GET /
async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render('index', {
    messages: messages
  });
}

// GET /new
async function createMessageGet(req, res) {
  res.render('form')
}

// POST /new
const createMessagePost = [
  // 1. validation rules
  body("user").trim()
    .notEmpty().withMessage("Name cannot be empty")
    .isLength({ max: 20 }).withMessage("Name cannot exceed 20 characters"),
  body("msg").trim()
    .notEmpty().withMessage("Message cannot be empty")
    .isLength({ max: 300 }).withMessage("Message cannot exceed 300 characters"),
  async (req, res) => {
    // 2. check validation result
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render('form', { errors: errors.array() })
    }

    // 3. insert into db
    const user = req.body.user;
    const text = req.body.msg;
    await db.insertMessage(user, text, new Date());

    res.redirect('/');
  }
];

module.exports = {
  getMessages,
  createMessageGet,
  createMessagePost
}