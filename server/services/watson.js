require('dotenv').config();

const LanguageTranslatorV3 = require('watson-developer-cloud/language-translator/v3');

const languageTranslator = new LanguageTranslatorV3({
  version: '2018-05-01',
  iam_apikey: process.env.LANGUAGE_TRANSLATOR_KEY,
  url: 'https://gateway.watsonplatform.net/language-translator/api'
});

function translate(input) {
  const parameters = {
    text: input,
    model_id: 'en-es'
  };

  const translatePromise = new Promise((resolve, reject) => {
    languageTranslator.translate(
      parameters,
      function(error, response) {
        if (error)
          reject(error);
        else
          resolve(response);
      }
    );
  });

  return translatePromise;
}

module.exports = { translate };
