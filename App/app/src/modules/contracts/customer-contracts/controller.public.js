import BaseController from './controller.js'

class ContractsCustomerContractsCtrl extends BaseController {
    constructor($scope, $injector, stateData) {
        super($scope, $injector);
    }

    // Fired when custom html section is loaded
    includeContentLoaded() {

    }

    // Fired when custom html section loading failed
    includeContentError(e) {

    }

    // Fired when view content is loaded
    onShow($scope) {
        console.log('Show');
    }

    /* Kendo event object*/
    onParentRowSelect(e) {

    }

    /* Kendo event object*/
    onChildRowSelect(e) {

    }
}

ContractsCustomerContractsCtrl.$inject = ['$scope', '$injector', 'stateData'];

export default ContractsCustomerContractsCtrl