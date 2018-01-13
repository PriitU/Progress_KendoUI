///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.contracts.contractsHistory', {
            url: '/contracts-history',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'ContractsContractsHistoryCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["ProjectData"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.contracts.contracts-history'
                            });
                        })
                        .then((module) => $injector.get('contractsContractsHistory')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('contractsContractsHistory')['onHide'](stateData);
            }]
        });
}

export default routing;