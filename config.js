'use strict';

const WIT_TOKEN = "K7K2QDDM7PGT44JWELM6FIDEC62P7XIB"
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAANyY7x8zYwBAOZByQsHMGUEYfIZBficSkd6r550jo5kPoZAjhKaRxSYQV0VjZCvqboRrmTq5nLUHg2SKFREx7rU1XYHzUcvoXyGG6ZAMoJc6TtsZCwW45MZCmSSLfK9LHW3fzVcOywDsahYo4EYaBr8TaTlvhJwGZCdJZBaZBF6CmZCwZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'i_love_the_admissions_bot'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}