'use strict';

const WIT_TOKEN = "K7K2QDDM7PGT44JWELM6FIDEC62P7XIB"
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAACAOZBwhLYkBAH9NfgSJkyO6Sm2PHRXv1hXLt1jZABk5rk1wEjlgBYZBFnDsh1xoyqhZBaPp5wNHgyBIHxjZCfgzMZBZAZA7LoeuAxvuEi0vfuPvpimtUkneWGciFezYQval7FSRqwTlFfQ9PrZCACZBS8oZCXnkbH5c1XaQZA6HnM2ZCQZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'i_love_the_admissions_bot'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}