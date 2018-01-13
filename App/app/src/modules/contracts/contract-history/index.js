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

export default angular.module('views.contracts.contract-history', [])
    .controller('ContractsContractHistoryCtrl', Controller)
    .factory('contractsContractHistory', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.contracts.contract-history.bottomSection.html', bottomSection);
        $templateCache.put('views.contracts.contract-history.middleSection.html', middleSection);
        $templateCache.put('views.contracts.contract-history.topSection.html', topSection);
        $templateCache.put('views.contracts.contract-history.topChildSection.html', topChildSection);
        $templateCache.put('views.contracts.contract-history.topParentSection.html', topParentSection);
    }])
    .name;