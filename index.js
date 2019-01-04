require('dotenv').config();

const express = require('express')
const app = express()
// Authentication of speech to text  object
var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
  res.render('index')
})

var speechToText = new SpeechToTextV1({
    iam_apikey: process.env.SPEECH_TO_TEXT_KEY,
    url: 'https://stream.watsonplatform.net/speech-to-text/api'
  });

  app.listen(3000, function () {
    console.log(process.env.PORT)
    console.log('Node app is running at localhost:' + 3000);

  })