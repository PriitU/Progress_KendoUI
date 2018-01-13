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
import topChildSection from './topChildSection.html';
import topParentSection from './topParentSection.html';

export default angular.module('views.contracts.customer-contracts', [])
    .controller('ContractsCustomerContractsCtrl', Controller)
    .factory('contractsCustomerContracts', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.contracts.customer-contracts.bottomSection.html', bottomSection);
        $templateCache.put('views.contracts.customer-contracts.middleSection.html', middleSection);
        $templateCache.put('views.contracts.customer-contracts.topSection.html', topSection);
        $templateCache.put('views.contracts.customer-contracts.topChildSection.html', topChildSection);
        $templateCache.put('views.contracts.customer-contracts.topParentSection.html', topParentSection);
    }])
    .name;