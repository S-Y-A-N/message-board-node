const express = require('express');
const app = express();
const path = require('node:path');
const indexRouter = require('./routes/indexRouter');
const assetsPath = path.join(__dirname, 'public');
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }))
app.use('/', indexRouter);

app.listen(port, hostname, () => {
  console.log(`Listening on http://${hostname}:${port}`)
})
