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
import bottomChildSection from './bottomChildSection.html';
import topSection from './topSection.html';
import topChildSection from './topChildSection.html';
import topParentSection from './topParentSection.html';

export default angular.module('views.customer.view-customer-history', [])
    .controller('CustomerViewCustomerHistoryCtrl', Controller)
    .factory('customerViewCustomerHistory', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.customer.view-customer-history.bottomSection.html', bottomSection);
        $templateCache.put('views.customer.view-customer-history.bottomChildSection.html', bottomChildSection);
        $templateCache.put('views.customer.view-customer-history.topSection.html', topSection);
        $templateCache.put('views.customer.view-customer-history.topChildSection.html', topChildSection);
        $templateCache.put('views.customer.view-customer-history.topParentSection.html', topParentSection);
    }])
    .name;