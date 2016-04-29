'use strict'

var service = require('./service')

module.exports = stripeProvider

stripeProvider.$inject = ['Stripe']
function stripeProvider (Stripe) {
  if (Stripe) { 	
  	this.setPublishableKey = Stripe.setPublishableKey
  }
  this.$get = service
}
