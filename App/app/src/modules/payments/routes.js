///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import newPaymentRoute from './new-payment/route.js';

routing.$inject = ['$stateProvider'];

function routing($stateProvider) {
    $stateProvider
        .state('module.default.payments', {
            abstract: true,
            url: '/payments',
            views: {
                'content@module': {
                    template: '<div ui-view></div>',
                    controller: 'PaymentsCtrl'
                }
            }
        });

    newPaymentRoute($stateProvider);
}

export default routing;