///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.contracts.contract', {
            url: '/contract',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'ContractsContractCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["ProjectData"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.contracts.contract'
                            });
                        })
                        .then((module) => $injector.get('contractsContract')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('contractsContract')['onHide'](stateData);
            }]
        });
}

export default routing;