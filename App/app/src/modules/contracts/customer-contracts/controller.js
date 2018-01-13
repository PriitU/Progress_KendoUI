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

        this.$parentDs = new kendo.data.DataSource({
            transport: this.$dataProviderService.getTransport('ProjectData', {
                "jsdo": "beCustomerContracts",
                "tableRef": "ttCustomer"
            }),

            type: "jsdo",

            pageSize: 10,

        });

        if (this.$dataProviderService.dataProviders['ProjectData'].type === 'progress-data-provider') {
            this.$jsdoInstance = new progress.data.JSDO({
                name: 'beCustomerContracts'
            });
            this.$parentDs.transport.jsdo = this.$jsdoInstance;
        }

        this.$parentDs.bind('error', this._$errorHandler.bind(this));

        this.$childDs = new kendo.data.DataSource({

            transport: this.$dataProviderService.getTransport('ProjectData', {
                "jsdo": "beCustomerContracts",
                "tableRef": "ttContract",
                "readLocal": true
            }),

            type: "jsdo",

            pageSize: 10,

        });

        if (this.$dataProviderService.dataProviders['ProjectData'].type === 'progress-data-provider') {
            this.$childDs.transport.jsdo = this.$jsdoInstance;
        }

        this.$childDs.bind('error', this._$errorHandler.bind(this));
        this.$childDs.bind('change', this._$changeHandler.bind(this));

        this.$model = {
            parentField: "CustomerId",
            childField: "CustomerId",
            parentTitle: "Customers",
            childTitle: "Contracts",
            parentGridOptions: {
                pageable: {
                    pageSize: 10,
                    refresh: true
                },
                filterable: false,
                groupable: false,
                resizable: false,
                reorderable: false,
                sortable: false,
                selectable: true,
                columns: [{
                        "encoded": true,
                        "field": "FirstName",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "First Name"
                    },
                    {
                        "encoded": true,
                        "field": "LastName",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "Last Name"
                    },
                    {
                        "encoded": true,
                        "field": "IdCode",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "Id Code"
                    }
                ],
                dataSource: this.$parentDs
            },
            childGridOptions: {
                autoBind: false,
                pageable: {
                    pageSize: 10,
                    refresh: true
                },

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
                filterable: false,
                groupable: false,
                resizable: false,
                reorderable: false,
                sortable: false,
                columns: [{
                        "encoded": true,
                        "field": "ContractId",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "ContractId"
                    },
                    {
                        "encoded": true,
                        "field": "ContractNr",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "ContractNr"
                    },
                    {
                        "encoded": true,
                        "field": "CustomerId",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "CustomerId"
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
                        "title": "AmountLeft"
                    },
                    {
                        "encoded": true,
                        "field": "ContractStatus",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "ContractStatus"
                    },
                    {
                        "encoded": true,
                        "field": "TimeIn",
                        "filterable": true,
                        "format": "{0:g}",
                        "sortable": true,
                        "title": "TimeIn"
                    },
                    {
                        "encoded": true,
                        "field": "TimeEnded",
                        "filterable": true,
                        "format": "{0:g}",
                        "sortable": true,
                        "title": "TimeEnded"
                    },
                    {
                        "encoded": true,
                        "field": "PaymentDate",
                        "filterable": true,
                        "format": "{0:g}",
                        "sortable": true,
                        "title": "PaymentDate"
                    }
                ],
                dataSource: this.$childDs,

                selectable: "row"

            },
            customSections: {
                top: 'views.contracts.customer-contracts.topSection.html',
                topParent: 'views.contracts.customer-contracts.topParentSection.html',
                topChild: 'views.contracts.customer-contracts.topChildSection.html',
                middle: 'views.contracts.customer-contracts.middleSection.html',
                bottom: 'views.contracts.customer-contracts.bottomSection.html'
            },
            parentGridEvents: {
                onDataBound: (e) => {

                    this._$dataBoundHandler(e);
                },
                onRowSelect: (e) => {
                    this._$rowSelectHandler(e);

                    this['onParentRowSelect'](e);

                },
            },
            childGridEvents: {
                onRowSelect: (e) => {

                    this['onChildRowSelect'](e);

                },
                onDataBound: (e) => {

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
                this.includeContentError(e);
            }
        });

        this.$scope.$on('$destroy', this._$destroy.bind(this));
    }

    _$dataBoundHandler(e) {
        var that = this;
        this.$scope.$evalAsync(() => {
            this.$parentGrid.select('tr[data-uid]:eq(0)');
        });
    }

    _$rowSelectHandler(e) {
        var filter = this.$childDs.filter();
        var filters = [];
        var selectedItem = this.$parentGrid.dataItem(this.$parentGrid.select());
        var newFilter = this._$getChildFilter(selectedItem);
        var isNew = true;
        var index = 0;

        if (!filter) {
            filters.push(newFilter);
        } else {
            filters = filter.filters;

            for (index = 0; index < filters.length; index++) {
                if (filters[index].field == newFilter.field) {
                    isNew = false;
                    break;
                }
            }
            if (isNew) {
                filters.push(newFilter);
            } else {
                filters[index] = newFilter;
            }
        }

        //apply the filters
        this.$childDs.filter(filters);
    }

    _$getChildFilter(selectedItem) {
        return {
            field: 'CustomerId',
            operator: 'eq',
            value: selectedItem['CustomerId']
        };
    }

    _$errorHandler(e) {
        const message = this.$dsService.extractErrorMessage(e);

        this.$scope.$emit('notification', {
            type: 'error',
            message: message
        });
    }

    _$changeHandler(e) {
        if (e.action == 'add') {
            var value = e.sender.filter().filters.filter(f => {
                return f.field === this.$model.parentField
            })[0].value;

            e.items[0].set(this.$model.parentField, value);
        }
    }

    _$destroy() {
        this.$parentDs.unbind('error', this._$errorHandler);
        this.$childDs.unbind('error', this._$errorHandler);
        this.$childDs.unbind('change', this._$changeHandler);

    }
}

export default BaseController