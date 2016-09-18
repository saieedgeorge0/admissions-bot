'use strict';

const WIT_TOKEN = "K7K2QDDM7PGT44JWELM6FIDEC62P7XIB"
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAYZBZAdMZAGp0BAKv25CbWJ8811r8s9XoZCFH8jZC5QAmfc3dEX7ZCZCvEsv3HEz3yFzxIM1a5gAJqqZBPav0zwL5Yrld57RGP89Cnn49AiRSZCF67bzBAu8ZCWTdKiNYxhNUZCZCM4PQcKt7ZBthS8qnnIcufBIZCAXCyyt1zUPLIGZBNigZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'i_love_the_admissions_bot'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}