'use strict';

const WIT_TOKEN = "K7K2QDDM7PGT44JWELM6FIDEC62P7XIB"
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAEXfWaX8U8BAE25FNR8RTFXyMfzshSO4BZCjN6bd7PH4GHZB0VCYYZAZBRKB7rup4td9uwjdhwUAwyT7YZAiQ0NnZB7appJoRTblUFJ2Vp7r3lI08Idcz0MeZC105HLjoj7yWh1uYBjZB8jiTYwZA4Xe8sYxiH9W8HIjWDm7AeZB17gZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'i_love_the_admissions_bot'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}