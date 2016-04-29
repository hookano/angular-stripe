'use strict'

var service = require('./service')

module.exports = stripeProvider

stripeProvider.$inject = ['Stripe']
function stripeProvider (Stripe) {
  if (Stripe) { 	
  	this.setPublishableKey = Stripe.setPublishableKey
  }
  else {
    this.setPublishableKey = function() {
      console.log("Stripe.js is required, and has not been loaded.");
    }
  }
  this.$get = service
}
