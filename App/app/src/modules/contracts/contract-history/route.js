///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.contracts.contractHistory', {
            url: '/contract-history',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'ContractsContractHistoryCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["DataProvider1"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.contracts.contract-history'
                            });
                        })
                        .then((module) => $injector.get('contractsContractHistory')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('contractsContractHistory')['onHide'](stateData);
            }]
        });
}

export default routing;