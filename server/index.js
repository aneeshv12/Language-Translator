require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const { doSomeStuff } = require('./services/first');

//app.set('view engine', 'ejs');

app.listen(3000, function () {
  console.log(process.env.PORT);
  console.log('Example app listening on port 3000!');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', function (req, res) {
  const newText = doSomeStuff(req.body.text);
  console.log(req.body.translate)
  res.send({ text: newText });
});
