const { user } = require("pg/lib/defaults");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Until everything burns to ashes!",
    user: "Firefly",
    added: new Date()
  },
  {
    text: "Welcome to my world!",
    user: "Robin",
    added: new Date()
  },
  {
    text: "My epic journey of going back to the sea after I got reincarnated as a string inside a db <><",
    user: "Fish",
    added: new Date()
  },
];

module.exports = messages;