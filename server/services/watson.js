require('dotenv').config();
// Authentication of speech to text object
const SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');

const speechToText = new SpeechToTextV1({
    iam_apikey: process.env.SPEECH_TO_TEXT_KEY,
    url: 'https://stream.watsonplatform.net/speech-to-text/api'
  });

const LanguageTranslatorV3 = require('watson-developer-cloud/language-translator/v3');

const languageTranslator = new LanguageTranslatorV3({
  version: '2018-05-01',
  iam_apikey: process.env.LANGUAGE_TRANSLATOR_KEY,
  url: 'https://gateway.watsonplatform.net/language-translator/api'
});


function translate(input){
  var parameters = {
    text: `${input}`,
    model_id: 'en-es'
  };
  languageTranslator.translate(
    parameters,
    function(error, response) {
      if (error)
        console.log(error)
      else
        console.log(JSON.stringify(response, null, 2));
    }
  );
}

module.exports = { translate }
