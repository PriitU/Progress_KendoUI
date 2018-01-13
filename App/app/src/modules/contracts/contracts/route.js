///////////////////
// Auto-generated
// Do not edit!!!
///////////////////

function routing($stateProvider) {
    $stateProvider
        .state('module.default.contracts.contracts', {
            url: '/contracts',
            templateProvider: [() => require.ensure([], (require) => require('./template.html'))],
            controller: 'ContractsContractsCtrl',
            controllerAs: 'vm',
            data: {
                providers: ["ProjectData"]
            },
            resolve: {
                stateData: ['$ocLazyLoad', '$injector', '$stateParams', ($ocLazyLoad, $injector, $stateParams) => {
                    return require.ensure([], (require) => {
                            let module = require('./index.js');

                            return $ocLazyLoad.load({
                                name: 'views.contracts.contracts'
                            });
                        })
                        .then((module) => $injector.get('contractsContracts')['onInit']($stateParams));
                }]
            },
            onExit: ['$injector', 'stateData', function($injector, stateData) {
                $injector.get('contractsContracts')['onHide'](stateData);
            }]
        });
}

export default routing;