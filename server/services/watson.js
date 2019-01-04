// Authentication of speech to text  object
const SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');

const speechToText = new SpeechToTextV1({
    iam_apikey: process.env.SPEECH_TO_TEXT_KEY,
    url: 'https://stream.watsonplatform.net/speech-to-text/api'
  });

