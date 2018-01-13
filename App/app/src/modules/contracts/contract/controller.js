///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
'use strict'

class BaseController {
    constructor($scope, $injector) {
        this.$scope = $scope;
        this.$dataProviderService = $injector.get('providerService');
        this.$dsService = $injector.get('dsService');
        this.$viewModels = {
            formModel: {},
            fkeyModels: {}
        }
        this.$ds = {};
        this.$primeDSName = '$primeDS';

        this.$pendingChangeMessage = 'There are unsaved changes. Do you want to complete the changes before continuing?';
        this.$window = $injector.get('$window');

        this.$ds[this.$primeDSName] = new kendo.data.DataSource({
            "transport": this.$dataProviderService.getTransport('ProjectData', {
                "jsdo": "beContract"
            }),

            "type": "jsdo",

            "pageSize": 20,

        });
        this.$ds[this.$primeDSName]
            .bind('sync', this._$syncHandler.bind(this))
            .bind('error', this._$errorHandler.bind(this))
            .bind('change', this._$changeHandler.bind(this))
            .bind('requestStart', this._$requestStartHandler.bind(this));

        var that = this;

        this.$viewModels.fkeyModels['$cachedbeCustomer.ttCustomerFK1DSModel'] = {};
        this.$ds['beCustomer.ttCustomerFK1DS'] = new kendo.data.DataSource({
            "transport": this.$dataProviderService.getTransport('ProjectData', {
                "jsdo": "beCustomer"
            }),

            "type": "jsdo",

            change: function(e) {
                var ds = e.sender;
                var view = ds.view();
                if (ds.filter() && ds.filter().filters.length > 0) {
                    if (view.length > 0) {
                        that.$viewModels.fkeyModels['$cachedbeCustomer.ttCustomerFK1DSModel'] = view[0];
                    } else {
                        that.$viewModels.fkeyModels['$cachedbeCustomer.ttCustomerFK1DSModel'] = {};
                    }
                } else {
                    that.$scope.$applyAsync(function() {
                        that.$viewModels.fkeyModels['beCustomer.ttCustomerFK1DSModel'] = that.$viewModels.fkeyModels['$cachedbeCustomer.ttCustomerFK1DSModel'];
                    });
                }
            }
        });
        this.$ds['beCustomer.ttCustomerFK1DS']
            .bind('error', this._$errorHandlerForeignKeys.bind(this));

        this._$createPristineModel('beCustomer.ttCustomerFK1DS');
        this._$watchForeignKeyModel('beCustomer.ttCustomerFK1DSModel', 'CustomerId', 'CustomerId');

        this.$model = {
            title: 'Add Contract',
            newTitle: 'New',
            editTitle: 'Edit',
            editMode: 'Read-Only to Edit',
            confirmRemove: true,
            formOptions: {
                dataSource: this.$ds[this.$primeDSName]
            },
            gridOptions: {
                pageable: {
                    pageSize: 20,
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
                        "field": "ContractStatus",
                        "filterable": true,
                        "format": "",
                        "sortable": true,
                        "title": "Contract Status"
                    }
                ],
                dataSource: this.$ds[this.$primeDSName]
            },
            customSections: {
                top: 'views.contracts.contract.topSection.html',
                middle: 'views.contracts.contract.middleSection.html',
                bottom: 'views.contracts.contract.bottomSection.html'
            },
            events: {
                onRowSelect: (e) => {

                    if (e.fromView) {
                        this['onRowSelect'](e);
                    }

                },
                onDataBound: (e) => {

                }
            }
        };
        this.$grid = null;
        this.$requestType = '';
        this.$components = {};

        this.$components['ctl3'] = {
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['ctl19'] = {
            widget: null,
            options: {
                dataSource: this.$ds['beCustomer.ttCustomerFK1DS'],
                dataTextField: "IdCode",
                dataValueField: "CustomerId",
                valuePrimitive: false,
                filter: "none"
            },
            events: {
                onChange: (e) => {

                },
                onSelect: (e) => {

                },
                onFilter: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['ctl7'] = {
            widget: null,
            options: {
                downArrowText: "",
                format: "c",
                placeholder: "Amount",

                upArrowText: "",
                spinners: false
            },
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
            }
        };

        this.$components['ctl13'] = {
            widget: null,
            options: {
                min: new Date("1899-12-31T22:00:00.000Z"),
                max: new Date("2099-12-30T22:00:00.000Z"),
                format: "{0:g}",
                interval: 30
            },
            events: {
                onChange: (e) => {

                }
            },
            validation: {
                required: false
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
                widget.one('dataBound', this._$dataBoundHandler.bind(this));
                widget.wrapper.on('click', '.k-grid-content tr[data-uid]', this._$onChangeEvent.bind(this));
            }
        });

        this.$scope.$on('$stateChangeStart', this._$routeChange.bind(this));

        angular.element(this.$window).on('beforeunload', this._$beforeunloadHandler.bind(this));

        this.$validatorOptions = {
            errorTemplate: '<p class="input__required">#=message#</p>'
        };

        this.$scope.$on('$destroy', this._$destroy.bind(this));
    }

    _$routeChange(event) {
        if (this.$ds[this.$primeDSName].hasChanges() && confirm(this.$pendingChangeMessage)) {
            event.preventDefault();
        }

        return;
    }

    _$beforeunloadHandler(e) {
        if (this.$ds[this.$primeDSName].hasChanges()) {
            return this.$pendingChangeMessage;
        }
    }

    _$createPristineModel(dsName) {
        this.$viewModels.fkeyModels[dsName + 'Model'] = this.$dsService.createPristineModel(this.$ds[dsName]);
    }

    _$watchForeignKeyModel(modelName, valueField, parentValueField) {
        var that = this;
        this.$scope.$watch(function() {
            return that.$viewModels.fkeyModels[modelName][parentValueField];
        }, function(newValue, oldValue) {
            var formModel = that.$viewModels.formModel;
            var fkeyModels = that.$viewModels.fkeyModels;

            if (newValue && formModel[valueField] !== fkeyModels[modelName][parentValueField]) {
                formModel[valueField] = fkeyModels[modelName][parentValueField];
            }
        });
    }

    _$restoreSelection() {
        let dataItem = this.$grid.dataSource.get(this.$selectedId);
        if (dataItem) {
            var row = angular.element("[data-uid='" + dataItem.uid + "']");
            if (row.length) {
                this.$grid.select(row);
            } else {
                this.$grid.select('tr[data-uid]:eq(0)');
            }
        } else {
            this.$grid.select('tr[data-uid]:eq(0)');
        }
    }

    _$createSelection() {
        this.$viewModels.formModel = kendo.proxyModelSetters(this.$grid.dataItem(this.$grid.select()));
        this.$selectedId = this.$viewModels.formModel.id;

        this._$createPristineModel('beCustomer.ttCustomerFK1DS');

        this.$ds['beCustomer.ttCustomerFK1DS'].query({
            filter: {
                field: 'CustomerId',
                operator: "eq",
                value: this.$viewModels.formModel['CustomerId']
            }
        }).then(() => {
            this.$ds['beCustomer.ttCustomerFK1DS'].filter({});
        });

    }

    _$restoreState() {
        this.$grid.cancelChanges();
        this._$restoreSelection();
        this._$createSelection();
    }

    _$errorHandler(e) {
        this._$showErrorMessage(e);

        if (!this.$insertInProcess) {
            if (this.$requestType != 'update') {
                this._$restoreState();
            }
        }
    }

    _$errorHandlerForeignKeys(e) {
        this._$showErrorMessage(e);
    }

    _$showErrorMessage(e) {
        const message = this.$dsService.extractErrorMessage(e);

        this.$scope.$emit('notification', {
            type: 'error',
            message: message
        });
    }

    _$syncHandler(e) {
        this.$scope.$evalAsync(() => {
            this._$restoreSelection();
            this._$createSelection();
            this.$updateInProcess = this.$insertInProcess = false;
        });
    }

    _$dataBoundHandler(e) {
        this.$scope.$evalAsync(() => {
            this.$grid.select('tr[data-uid]:eq(0)');
            this.$model.events.onRowSelect({
                sender: this.$grid,
                fromView: true
            });
            this._$createSelection();
        });
    }

    _$changeHandler(e) {
        if (e.action != 'add' && e.action != 'remove' && this.$grid) {
            this.$scope.$evalAsync(() => {
                this._$restoreSelection();
                this._$createSelection();
            });
        }
    }

    _$requestStartHandler(e) {
        this.$requestType = e.type;
    }

    _$onChangeEvent(e) {
        this.$scope.$evalAsync(() => {
            this._$createSelection();
        });

        this.$model.events.onRowSelect({
            sender: this.$grid,
            fromView: true
        });
    }

    _$edit(e) {
        this.$updateInProcess = true;
    }

    _$save(e) {
        if (this.$validator.validate()) {
            this.$grid.saveChanges();
        }
    }

    _$cancel(e) {
        this._$restoreState();
        this.$updateInProcess = this.$insertInProcess = false;
    }

    _$insert() {
        for (var property in this.$ds) {
            if (this.$ds.hasOwnProperty(property)) {
                if (property !== this.$primeDSName) {
                    this._$createPristineModel(property);
                    var cachedPropertyName = '$cached' + property + 'Model';
                    this.$viewModels.fkeyModels[cachedPropertyName] = {};
                }
            }
        }
        this.$grid.dataSource.add({});
        var data = this.$grid.dataSource.data();
        this.$viewModels.formModel = kendo.proxyModelSetters(data[data.length - 1]);
        this.$selectedId = null;
        this.$insertInProcess = true;
        this.$updateInProcess = false;
    }

    _$delete() {
        const removeRow = () => {
            this.$grid.removeRow(this.$grid.select().first());
            this.$grid.saveChanges();
        }

        if (this.$model.confirmRemove) {
            this.$scope.$emit('dialog', {
                title: 'Are you sure you want to delete this record?',
                hint: 'The record will be permanently removed.',
                okButton: {
                    handler: removeRow
                }
            });
        } else {
            removeRow();
        }
    }

    _$destroy() {
        for (var property in this.$ds) {
            if (this.$ds.hasOwnProperty(property)) {
                if (property === this.$primeDSName) {
                    this.$ds[property]
                        .unbind('sync', this._$syncHandler)
                        .unbind('error', this._$errorHandler)
                        .unbind('change', this._$changeHandler)
                        .unbind('requestStart', this._$requestStartHandler);
                } else {
                    this.$ds[property]
                        .unbind('error', this._$errorHandler);
                }
            }
        }

        this.$grid.wrapper.off('click', this._$onChangeEvent);

        angular.element(this.$window).off('beforeunload', this._$beforeunloadHandler);

    }
}

export default BaseController