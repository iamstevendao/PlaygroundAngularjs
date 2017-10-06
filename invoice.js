(function (angular) {
  'use strict'
  angular.module('invoice', []).controller('InvoiceController', function InvoiceController () {
    this.qty = 1
    this.cost = 2
    this.inCurr = 'AUD'
    this.currencies = ['USD', 'EUR', 'AUD']
    this.usdToForeignRates = { USD: 10, EUR: 0.74, AUD: 1 }
    this.total = function (outCurr) {
      return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr)
    }
    this.convertCurrency = function (amount, inCurr, outCurr) {
      return amount * this.usdToForeignRates[inCurr] / this.usdToForeignRates[outCurr]
    }
  })
})(window.angular)
