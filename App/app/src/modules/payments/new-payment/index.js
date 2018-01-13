///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

import angular from 'angular';

import BaseController from './controller';
import Controller from './controller.public';
import routerEvents from './router-events';

import bottomSection from './bottomSection.html';
import middleSection from './middleSection.html';
import topSection from './topSection.html';

export default angular.module('views.payments.new-payment', [])
    .controller('PaymentsNewPaymentCtrl', Controller)
    .factory('paymentsNewPayment', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.payments.new-payment.bottomSection.html', bottomSection);
        $templateCache.put('views.payments.new-payment.middleSection.html', middleSection);
        $templateCache.put('views.payments.new-payment.topSection.html', topSection);
    }])
    .name;