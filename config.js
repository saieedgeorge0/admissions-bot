'use strict';

const WIT_TOKEN = "K7K2QDDM7PGT44JWELM6FIDEC62P7XIB"
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAARPYS5g9iwBANWZCg8Guga9pJdeCIx74WB4OqR1xxq5zgH7xJZBdH13dib1mwq49smuKEGgnQQqGQzH3o9VAC1GF4ZAqwoggyHlYfn2D9DxHMfWzdR3HoOTtNiy1hBBcBZB8eMMgda7dGOzUsT1zL0uPXOFXs7G7sydR6vvXQZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'i_love_the_admissions_bot'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}