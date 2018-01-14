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

        this.$window = $injector.get('$window');
        this.$pendingChangeMessage = 'There are unsaved changes. Do you want to complete the changes before continuing?';
        var that = this;

        this.$parentDs = new kendo.data.DataSource({
            transport: this.$dataProviderService.getTransport('ProjectData', {
                "jsdo": "beViewCustomerHistory",
                "tableRef": "ttCustomer"
            }),

            requestStart: function(e) {
                if (that._$childDataSourcesHasChanges() && confirm(that.$pendingChangeMessage)) {
                    e.preventDefault();
                }
            },

            type: "jsdo",

            pageSize: 10,

        });

        if (this.$dataProviderService.dataProviders['ProjectData'].type === 'progress-data-provider') {
            this.$jsdoInstance = new progress.data.JSDO({
                name: "beViewCustomerHistory"
            });
            this.$parentDs.transport.jsdo = this.$jsdoInstance;
        }

        this.$parentDs.bind('error', this._$errorHandler.bind(this));
        this.$model = {
            parentField: "CustomerId",
            childField: "CustomerId",
            parentTitle: "Customers",
            childTitle: "Customer History",
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
                        "field": "IdCode",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "IdCode"
                    },
                    {
                        "encoded": true,
                        "field": "FirstName",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "FirstName"
                    },
                    {
                        "encoded": true,
                        "field": "LastName",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "LastName"
                    }
                ],
                dataSource: this.$parentDs
            },
            childGridOptions: {
                pageable: {
                    pageSize: 5,
                    refresh: true
                },

                messages: {
                    commands: {
                        "cancel": "Cancel changes",
                        "create": "New",
                        "save": "Save changes",
                        "canceledit": "Cancel",
                        "destroy": "Delete",
                        "edit": "Edit",
                        "update": "Update"
                    }
                },

                editable: 'inline',
                filterable: true,
                groupable: false,
                resizable: false,
                reorderable: false,
                sortable: false,
                columns: [{
                        "encoded": true,
                        "field": "HistoryTime",
                        "filterable": true,
                        "format": "{0:g}",
                        "sortable": true,
                        "title": "HistoryTime"
                    },
                    {
                        "encoded": true,
                        "field": "CustomerHistoryId",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "CustomerHistoryId"
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
                        "field": "FirstName",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "FirstName"
                    },
                    {
                        "encoded": true,
                        "field": "LastName",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "LastName"
                    },
                    {
                        "encoded": true,
                        "field": "IdCode",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "IdCode"
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
                top: 'views.customer.view-customer-history.topSection.html',
                topParent: 'views.customer.view-customer-history.topParentSection.html',
                topChild: 'views.customer.view-customer-history.topChildSection.html',
                bottomChild: 'views.customer.view-customer-history.bottomChildSection.html',
                bottom: 'views.customer.view-customer-history.bottomSection.html'
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

                    this._$disableEditButtons(e);

                },
                onRowUpdate: (e) => {

                    this._$disableEditButtons(e);

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

                    widget.bind('dataBound', this._$enableEditButtons.bind(this));
                    widget.bind('cancel', this._$enableEditButtons.bind(this));

                }
            }
        });

        this.$scope.$on('$stateChangeStart', this._$routeChange.bind(this));

        angular.element(this.$window).on('beforeunload', this._$beforeunloadHandler.bind(this));

        this.$scope.$on('$destroy', this._$destroy.bind(this));
    }

    _$disableEditButtons(e) {
        e.sender.wrapper.find('.k-grid-add, .k-grid-edit, .k-grid-delete').addClass('kuib-disabled');
    }

    _$enableEditButtons(e) {
        e.sender.wrapper.find('.k-grid-add, .k-grid-edit, .k-grid-delete').removeClass('kuib-disabled');
    }

    _$routeChange(event) {
        if (this._$childDataSourcesHasChanges() && confirm(this.$pendingChangeMessage)) {
            event.preventDefault();
        }

        return;
    }

    _$beforeunloadHandler(e) {
        if (this._$childDataSourcesHasChanges()) {
            return this.$pendingChangeMessage;
        }
    }

    _$childDataSourcesHasChanges() {
        var hasChanges = false;

        this.$childDataSources.forEach(ds => {
            if (ds.hasChanges()) {
                hasChanges = true;
            }
        });

        return hasChanges;
    }

    _$createChildDs(item) {
        var that = this;
        var childDs = new kendo.data.DataSource({

            transport: this.$dataProviderService.getTransport('ProjectData', {
                "jsdo": "beViewCustomerHistory",
                "tableRef": "ttCustomerHistory",
                "readLocal": true
            }),

            requestStart: function(e) {
                if (e.type !== 'update' &&
                    e.type !== 'create' &&
                    e.type !== 'submit' &&
                    e.type !== 'destroy' &&
                    e.sender.hasChanges() &&
                    confirm(that.$pendingChangeMessage)) {
                    e.preventDefault();
                }
            },

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
            field: 'CustomerId',
            operator: "eq",
            value: dataItem['CustomerId']
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

        this.$childGrids.forEach((grid) => {
            grid.unbind('dataBound', this._$enableEditButtons);
            grid.unbind('cancel', this._$enableEditButtons);
        });

        angular.element(this.$window).off('beforeunload', this._$beforeunloadHandler);

    }
}

export default BaseController