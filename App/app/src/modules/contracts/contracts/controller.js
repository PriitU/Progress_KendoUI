///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict';

class BaseController {
    constructor($scope, $injector) {
        this.$scope = $scope;
        this.$dataProviderService = $injector.get('providerService');
        this.$dsService = $injector.get('dsService');

        this.$window = $injector.get('$window');
        this.$pendingChangeMessage = 'There are unsaved changes. Do you want to complete the changes before continuing?';
        var that = this;

        this.$ds = new kendo.data.DataSource({

            batch: true,

            transport: this.$dataProviderService.getTransport('ProjectData', {
                "jsdo": "beContract"
            }),

            type: "jsdo",

            pageSize: 10,

        });
        this.$ds.bind('error', this._$errorHandler.bind(this));

        this.$model = {
            title: 'View/Edit Contracts',
            options: {
                pageable: {
                    pageSize: 10,
                    refresh: true
                },

                toolbar: ["save", "cancel"],

                messages: {
                    commands: {
                        "cancel": "Cancel",
                        "create": "New",
                        "save": "Save",
                        "canceledit": "Cancel",
                        "destroy": "Delete",
                        "edit": "Edit",
                        "update": "Update"
                    }
                },

                editable: 'incell',
                selectable: true,
                filterable: true,
                groupable: true,
                resizable: true,
                reorderable: true,
                sortable: true,
                columns: [{
                        "encoded": true,
                        "field": "ContractNr",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "Contract Nr"
                    },
                    {
                        "encoded": true,
                        "field": "CustomerId",
                        "filterable": true,
                        "sortable": true,
                        "title": "Customer"
                    },
                    {
                        "encoded": true,
                        "field": "Amount",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "Amount"
                    },
                    {
                        "encoded": true,
                        "field": "AmountLeft",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "Amount Left"
                    },
                    {
                        "encoded": true,
                        "field": "ContractStatus",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "Contract Status"
                    },
                    {
                        "encoded": true,
                        "field": "TimeIn",
                        "filterable": true,
                        "format": "{0:g}",
                        "sortable": true,
                        "title": "Time In"
                    },
                    {
                        "encoded": true,
                        "field": "TimeEnded",
                        "filterable": true,
                        "format": "{0:g}",
                        "sortable": true,
                        "title": "Time Ended"
                    },
                    {
                        "encoded": true,
                        "field": "PaymentDate",
                        "filterable": true,
                        "format": "{0:g}",
                        "sortable": true,
                        "title": "Payment Date"
                    },
                    {
                        "command": [
                            "destroy"
                        ],
                        "title": "&nbsp;",
                        "width": 250
                    }
                ],
                dataSource: this.$ds
            },
            customSections: {
                top: 'views.contracts.contracts.topSection.html',
                middle: 'views.contracts.contracts.middleSection.html',
                bottom: 'views.contracts.contracts.bottomSection.html'
            },
            events: {
                onRowSelect: (e) => {

                    this['onRowSelect'](e);

                },
                onRowCreate: (e) => {

                },
                onRowUpdate: (e) => {

                },
                onRowDelete: (e) => {

                }
            }
        };
    }

    $onInit() {
        this.$scope.$on('$includeContentLoaded', () => {
            if (this.includeContentLoaded) {
                this.includeContentLoaded();
            }
        });

        this.$scope.$on('$viewContentLoaded', (e) => {
            if (this['onShow']) {
                this['onShow'](e.currentScope);
            }
        });

        this.$scope.$on('$includeContentError', (e) => {
            if (this.includeContentError) {
                this.includeContentError();
            }
        });

        this.$scope.$on('$stateChangeStart', this._$routeChange.bind(this));

        angular.element(this.$window).on('beforeunload', this._$beforeunloadHandler.bind(this));

        this.$scope.$on('$destroy', this._$destroy.bind(this));
    }

    _$routeChange(event) {
        if (this.$ds.hasChanges() && confirm(this.$pendingChangeMessage)) {
            event.preventDefault();
        }

        return;
    }

    _$beforeunloadHandler(e) {
        if (this.$ds.hasChanges()) {
            return this.$pendingChangeMessage;
        }
    }

    _$errorHandler(e) {
        const message = this.$dsService.extractErrorMessage(e);

        this.$scope.$emit('notification', {
            type: 'error',
            message: message
        });
    }

    _$destroy() {
        this.$ds.unbind('error', this._$errorHandler);

        angular.element(this.$window).off('beforeunload', this._$beforeunloadHandler);

    }
}

export default BaseController