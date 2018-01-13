///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.contracts.customerContracts', {
            url: '/customer-contracts',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'ContractsCustomerContractsCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["ProjectData"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.contracts.customer-contracts'
                            });
                        })
                        .then((module) => $injector.get('contractsCustomerContracts')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('contractsCustomerContracts')['onHide'](stateData);
            }]
        });
}

export default routing;