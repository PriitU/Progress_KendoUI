///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.customer.viewCustomerHistory', {
            url: '/view-customer-history',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'CustomerViewCustomerHistoryCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["ProjectData"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.customer.view-customer-history'
                            });
                        })
                        .then((module) => $injector.get('customerViewCustomerHistory')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('customerViewCustomerHistory')['onHide'](stateData);
            }]
        });
}

export default routing;