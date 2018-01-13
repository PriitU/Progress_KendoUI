///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.payments.addPayment', {
            url: '/add-payment',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'PaymentsAddPaymentCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["ProjectData"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.payments.add-payment'
                            });
                        })
                        .then((module) => $injector.get('paymentsAddPayment')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('paymentsAddPayment')['onHide'](stateData);
            }]
        });
}

export default routing;