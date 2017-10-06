(function (angular) {
  'use strict'
  angular.module('finance', [])
    .factory('currencyConverter', function () {
      var currencies = ['USD', 'EUR', 'AUD']
      var usdToForeignRates = { USD: 10, EUR: 0.74, AUD: 1 }
      var convert = function (amount, inCurr, outCurr) {
        return amount * usdToForeignRates[inCurr] / usdToForeignRates[outCurr]
      }
      return {
        currencies: currencies,
        convert: convert
      }
    })
})(window.angular)
