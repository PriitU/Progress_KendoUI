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

        this.$ds = new kendo.data.DataSource({

            transport: this.$dataProviderService.getTransport('ProjectData', {
                "jsdo": "bePayments"
            }),

            type: "jsdo",

            pageSize: 10,

        });
        this.$ds.bind('error', this._$errorHandler.bind(this));

        this.$model = {
            title: 'Add Payments',
            options: {
                pageable: {
                    pageSize: 10,
                    refresh: true
                },

                toolbar: ["create"],

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

                editable: 'popup',
                selectable: true,
                filterable: false,
                groupable: false,
                resizable: false,
                reorderable: false,
                sortable: false,
                columns: [{
                        "encoded": true,
                        "field": "PaymentAmount",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "Amount"
                    },
                    {
                        "encoded": true,
                        "field": "PaymentTime",
                        "filterable": true,
                        "format": "{0:g}",
                        "sortable": true,
                        "title": "Payment Time"
                    },
                    {
                        "encoded": true,
                        "field": "ContractNr",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "Contract Nr"
                    }
                ],
                dataSource: this.$ds
            },
            customSections: {
                top: 'views.payments.add-payment.topSection.html',
                middle: 'views.payments.add-payment.middleSection.html',
                bottom: 'views.payments.add-payment.bottomSection.html'
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

        this.$scope.$on('$destroy', this._$destroy.bind(this));
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

    }
}

export default BaseController