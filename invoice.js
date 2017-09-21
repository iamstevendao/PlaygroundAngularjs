(function (angular) {
  'use strict';
  angular.module('invoice', []).controller('InvoiceController', function InvoiceController() {
    this.qty = 1;
    this.cost = 2;
    this.inCurr = 'AUD';
    this.currencies = ['USD', 'EUR', 'AUD'];

    this.total = function total() {
      return this.qty * this.cost;
    }

  });
})(window.angular);
