(function (angular) {
  'use strict'
  angular.module('finance', [])
    .factory('currencyConverter', ['$http', function ($http) {
      var currencies = ['USD', 'EUR', 'AUD']
      var usdToForeignRates = { USD: 10, EUR: 0.74, AUD: 1 }
      var convert = function (amount, inCurr, outCurr) {
        return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr]
      }
      var refresh = function () {
        var url = 'https://api.fixer.io/latest?base=AUD&symbols=' + currencies.join(',')
        return $http.get(url).then(function (response) {
          usdToForeignRates = response.data.rates
          usdToForeignRates['AUD'] = 1
        })
      }
      refresh()
      return {
        currencies: currencies,
        convert: convert
      }
    }])
})(window.angular)
