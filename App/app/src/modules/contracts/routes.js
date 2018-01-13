///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import contractsRoute from './contracts/route.js';
import contractRoute from './contract/route.js';
import customerContractsRoute from './customer-contracts/route.js';
import contractsHistoryRoute from './contracts-history/route.js';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('module.default.contracts', {
            abstract: true,
            url: '/contracts',
            views: {
                'content@module': {
                    template: '<div ui-view></div>',
                    controller: 'ContractsCtrl'
                }
            }
        });

    contractsRoute($stateProvider);
    contractRoute($stateProvider);
    customerContractsRoute($stateProvider);
    contractsHistoryRoute($stateProvider);
}

export default routing;