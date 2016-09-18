'use strict'

var Config = require('./config')
var wit = require('./services/wit').getWit()

// LETS SAVE USER SESSIONS
var sessions = {}

var findOrCreateSession = function (fbid) {
  var sessionId

  // DOES USER SESSION ALREADY EXIST?
  Object.keys(sessions).forEach(k => {
    if (sessions[k].fbid === fbid) {
      // YUP
      sessionId = k
    }
  })

  // No session so we will create one
  if (!sessionId) {
    sessionId = new Date().toISOString()
    sessions[sessionId] = {
      fbid: fbid,
      context: {
        _fbid_: fbid
      }
    }
  }

  return sessionId
}

var request = require('request');

var read = function (sender, message, reply) {
    if((message.toLowerCase().indexOf('hello') > -1) || (message.toLowerCase().indexOf('hi') > -1) || (message.toLowerCase().indexOf('hey') > -1) || (message.toLowerCase().indexOf('yo') > -1) || (message.toLowerCase().indexOf('heyo') > -1)) {
		message += "Hi! I'm MIT's Admissions chatbot. You can ask me anything you'd like to know about MIT!"
		reply(sender, message)
	} 
    else if (message === "duh") {
        request('http://www.modulus.io', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body); // Show the HTML for the Modulus homepage.
                reply(sender, body.toString())
            }
        });
    }
    else {
		// Let's find the user
		var sessionId = findOrCreateSession(sender)
		// Let's forward the message to the Wit.ai bot engine
		// This will run all actions until there are no more actions left to do
		wit.runActions(
			sessionId, // the user's current session by id
			message,  // the user's message
			sessions[sessionId].context, // the user's session state
			function (error, context) { // callback
			if (error) {
				console.log('oops!', error)
			} else {
				// Wit.ai ran all the actions
				// Now it needs more messages
				console.log('Waiting for further messages')

				// Based on the session state, you might want to reset the session
				// Example:
				// if (context['done']) {
				// 	delete sessions[sessionId]
				// }

				// Updating the user's current session state
				sessions[sessionId].context = context
			}
		})
	}
}



module.exports = {
	findOrCreateSession: findOrCreateSession,
	read: read,
}