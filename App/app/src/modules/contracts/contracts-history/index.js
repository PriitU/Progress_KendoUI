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

export default angular.module('views.contracts.contracts-history', [])
    .controller('ContractsContractsHistoryCtrl', Controller)
    .factory('contractsContractsHistory', routerEvents)
    .run(['$templateCache', ($templateCache) => {
        $templateCache.put('views.contracts.contracts-history.bottomSection.html', bottomSection);
        $templateCache.put('views.contracts.contracts-history.bottomChildSection.html', bottomChildSection);
        $templateCache.put('views.contracts.contracts-history.topSection.html', topSection);
        $templateCache.put('views.contracts.contracts-history.topChildSection.html', topChildSection);
        $templateCache.put('views.contracts.contracts-history.topParentSection.html', topParentSection);
    }])
    .name;