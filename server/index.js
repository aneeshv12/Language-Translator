require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const { doSomeStuff } = require('./services/first');
const { translate }= require('./services/watson');

//app.set('view engine', 'ejs');

app.listen(3000, function () {
  console.log(process.env.PORT);
  console.log('Example app listening on port 3000!');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/translate', function (req, res) {
  translate(req.body.name)
    .then(function(response) {
      const data = response.translations[0].translation;
      console.log(data);
      res.send({ value: data });
    })
    .catch(function(error) {
      console.log(`oops, error in translate: ${error}`);
    });
});
