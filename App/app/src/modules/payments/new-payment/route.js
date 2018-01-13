///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.payments.newPayment', {
            url: '/new-payment',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'PaymentsNewPaymentCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["ProjectData"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.payments.new-payment'
                            });
                        })
                        .then((module) => $injector.get('paymentsNewPayment')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('paymentsNewPayment')['onHide'](stateData);
            }]
        });
}

export default routing;