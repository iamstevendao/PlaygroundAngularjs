(function (angular) {
  'use strict'
  angular.module('invoice', ['finance'])
    .controller('InvoiceController', ['currencyConverter',
      function InvoiceController (currencyConverter) {
        this.qty = 1
        this.cost = 2
        this.inCurr = 'AUD'
        this.currencies = currencyConverter.currencies
        this.total = function (outCurr) {
          return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr)
        }
      }])
})(window.angular)
