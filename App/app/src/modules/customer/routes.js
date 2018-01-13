///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import customerRoute from './customer/route.js';
import viewCustomerHistoryRoute from './view-customer-history/route.js';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('module.default.customer', {
            abstract: true,
            url: '/customer',
            views: {
                'content@module': {
                    template: '<div ui-view></div>',
                    controller: 'CustomerCtrl'
                }
            }
        });

    customerRoute($stateProvider);
    viewCustomerHistoryRoute($stateProvider);
}

export default routing;