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
        this.$compile = $injector.get('$compile');
        this.$childDataSources = [];
        this.$childGrids = [];

        this.$parentDs = new kendo.data.DataSource({
            transport: this.$dataProviderService.getTransport('ProjectData', {
                "jsdo": "beViewHistory",
                "tableRef": "ttContract"
            }),

            type: "jsdo",

            pageSize: 10,

        });

        if (this.$dataProviderService.dataProviders['ProjectData'].type === 'progress-data-provider') {
            this.$jsdoInstance = new progress.data.JSDO({
                name: "beViewHistory"
            });
            this.$parentDs.transport.jsdo = this.$jsdoInstance;
        }

        this.$parentDs.bind('error', this._$errorHandler.bind(this));
        this.$model = {
            parentField: "ContractId",
            childField: "ContractId",
            parentTitle: "Contracts",
            childTitle: "History",
            parentGridOptions: {
                detailInit: (e) => {
                    this.$model.parentGridEvents.onDetailInit(e);
                },
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
                        "field": "ContractNr",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "Contract Nr"
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
                    }
                ],
                dataSource: this.$parentDs
            },
            childGridOptions: {
                pageable: {
                    pageSize: 5,
                    refresh: true
                },

                editable: 'readonly',
                filterable: false,
                groupable: false,
                resizable: false,
                reorderable: false,
                sortable: false,
                columns: [{
                        "encoded": true,
                        "field": "ContractHistoryId",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "ContractHistoryId"
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
                        "field": "ContractNr",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "ContractNr"
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
                        "field": "ContractId",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "ContractId"
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
                        "format": "",
                        "sortable": true,
                        "title": "PaymentDate"
                    },
                    {
                        "encoded": true,
                        "field": "Edit",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "Edit"
                    }
                ],
                dataSource: null,

                selectable: "row"

            },
            customSections: {
                top: 'views.contracts.contracts-history.topSection.html',
                topParent: 'views.contracts.contracts-history.topParentSection.html',
                topChild: 'views.contracts.contracts-history.topChildSection.html',
                bottomChild: 'views.contracts.contracts-history.bottomChildSection.html',
                bottom: 'views.contracts.contracts-history.bottomSection.html'
            },
            parentGridEvents: {
                onDetailInit: (e) => {

                    this._$detailInitHandler(e);
                },
                onDetailExpand: (e) => {

                },
                onDetailCollapse: (e) => {

                },
                onDataBound: (e) => {

                    this._$dataBoundHandler(e);
                },
                onRowSelect: (e) => {

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

        this.$scope.$on("kendoWidgetCreated", (event, widget) => {
            if (widget instanceof kendo.ui.Grid) {
                if (this.$parentGrid) {
                    this.$childGrids.push(widget);

                }
            }
        });

        this.$scope.$on('$destroy', this._$destroy.bind(this));
    }

    _$createChildDs(item) {
        var that = this;
        var childDs = new kendo.data.DataSource({

            transport: this.$dataProviderService.getTransport('ProjectData', {
                "jsdo": "beViewHistory",
                "tableRef": "ttContractHistory",
                "readLocal": true
            }),

            filter: this._$getChildFilter(item),

            type: "jsdo",

            pageSize: 5,

        });

        if (this.$dataProviderService.dataProviders['ProjectData'].type === 'progress-data-provider') {
            childDs.transport.jsdo = this.$jsdoInstance;
        }

        childDs.bind('error', this._$errorHandler.bind(this));
        childDs.bind('change', this._$changeHandler.bind(this));

        this.$childDataSources.push(childDs);

        return childDs;
    }

    _$dataBoundHandler(e) {
        this.$scope.$evalAsync(() => {
            this.$parentGrid.select('tr[data-uid]:eq(0)');
        });
    }

    _$detailInitHandler(e) {
        var template = '<div class="row">' +
            '<div class="col-lg-12">' +
            '<h2 ng-bind-html="childTitle"></h2>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-lg-12" ng-include="customSections.topChild">' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-lg-12">' +
            '<grid data-options="childGridOptions" data-widget="childGridInstance" data-events="childGridEvents"></grid>' +
            '</div>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-lg-12" ng-include="customSections.bottomChild">' +
            '</div>' +
            '</div>';

        var el = angular.element(template).appendTo(e.detailCell);

        var sc = this.$scope.$new();
        this.$model.childGridOptions.dataSource = this._$createChildDs(e.data);
        angular.extend(sc, this.$model);
        this.$scope.$applyAsync(() => {
            this.$compile(el)(sc);
        });
    }

    _$getChildFilter(dataItem) {
        return {
            field: 'ContractId',
            operator: "eq",
            value: dataItem['ContractId']
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
        if (e.action == "add") {
            var value = e.sender.filter().filters.filter(f => {
                return f.field === this.$model.parentField
            })[0].value;

            e.items[0].set(this.$model.parentField, value);
        }
    }

    _$destroy() {
        this.$parentDs.unbind('error', this._$errorHandler);
        this.$childDataSources.forEach((ds) => {
            ds.unbind('error', this._$errorHandler);
            ds.unbind('change', this._$changeHandler);
        });

    }
}

export default BaseController