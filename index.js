require('dotenv').config();

const opn = require('opn')
const express = require('express')
const app = express()

var api_key = process.env.SPEECH_TO_TEXT_KEY
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(process.env.PORT,3000, function () {
  console.log('Example app listening on port 3000!')
  opn('localhost:3000')
})