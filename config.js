'use strict';

const WIT_TOKEN = "PJ5N7WTF4HYOBMZC2L3P2QBFT5BL3KPE"
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAEXfWaX8U8BAB6bmc2ZBaaAjeHunWMRFa4jZB5T3vhpZCgYg1KpKLjn3BLpAPpf4ZAsdKu7K3UnyZCGMxZBpKlrbMLrvNiRMRDGs74MfcHB1w9LZANGp0USTc5OYTzrdGlbRfxh5i22ZBj5ZBH1WLu4VaBkm3s7JdpHuPZAVLZAjxP1wZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'i_love_the_admissions_bot'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}