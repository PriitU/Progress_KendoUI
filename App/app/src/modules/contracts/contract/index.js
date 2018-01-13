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

export default angular.module('views.contracts.contract', [])
    .controller('ContractsContractCtrl', Controller)
    .factory('contractsContract', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.contracts.contract.bottomSection.html', bottomSection);
        $templateCache.put('views.contracts.contract.middleSection.html', middleSection);
        $templateCache.put('views.contracts.contract.topSection.html', topSection);
    }])
    .name;