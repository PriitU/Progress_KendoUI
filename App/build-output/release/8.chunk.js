webpackJsonp([8],{395:function(n,t){n.exports='\x3c!--\r\nAuto-generated\r\nDo not edit!!!\r\n--\x3e\r\n<div class="data-grid-form">\r\n    <div class="row">\r\n        <div class="col-lg-12" ng-include="vm.$model.customSections.top">\r\n        </div>\r\n    </div>\r\n    <div class="row data-grid-form-header">\r\n        <div class="col-xs-8">\r\n            <h2 ng-if="!vm.$updateInProcess && !vm.$insertInProcess" ng-bind-html="vm.$model.title"></h2>\r\n            <h2 ng-if="vm.$updateInProcess" ng-bind-html="vm.$model.editTitle"></h2>\r\n            <h2 ng-if="vm.$insertInProcess" ng-bind-html="vm.$model.newTitle"></h2>\r\n        </div>\r\n        <div class="col-xs-4 text-right" ng-if="vm.$model.editMode === \'Read-Only to Edit\'">\r\n            <a ng-click="vm._$insert()" ng-if="!vm.$insertInProcess && !vm.$updateInProcess" class="k-button k-button-icontext">\r\n                <span class="k-icon k-i-plus"></span> New\r\n            </a>\r\n            <a ng-click="vm._$edit()" ng-if="!vm.$insertInProcess && !vm.$updateInProcess" class="k-button k-button-icontext" ng-class="{\'kuib-disabled\': !vm.$selectedId }">\r\n                <span class="k-icon k-i-edit"></span> Edit\r\n            </a>\r\n            <a ng-click="vm._$save()" ng-if="vm.$insertInProcess || vm.$updateInProcess" class="k-button k-button-icontext k-primary k-grid-update" ng-class="{\'kuib-disabled\': !vm.$viewModels.formModel.dirty }">\r\n                <span class="k-icon k-i-save"></span> Save\r\n            </a>\r\n            <a ng-click="vm._$cancel()" ng-if="vm.$insertInProcess || vm.$updateInProcess" class="k-button k-button-icontext k-grid-cancel">\r\n                <span class="k-icon k-i-cancel"></span> Cancel\r\n            </a>\r\n            <a ng-click="vm._$delete()" ng-if="vm.$updateInProcess" class="k-button k-button-icontext k-grid-delete">\r\n                <span class="k-icon k-i-delete"></span> Delete\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class="row">\r\n        <div class="col-lg-12" ng-include="vm.$model.customSections.middle">\r\n        </div>\r\n    </div>\r\n    <hr class="k-separator">\r\n    <div class="row">\r\n        <div class="col-md-4">\r\n            <div class="overlay k-overlay ng-scope" ng-if="vm.$updateInProcess || vm.$insertInProcess"></div>\r\n            <grid data-options="vm.$model.gridOptions" data-model="vm.$gridModel" data-widget="vm.$grid" data-events="vm.$model.events"></grid>\r\n        </div>\r\n        <div class="col-md-8">\r\n            <div class="data-form-wrapper k-widget">\r\n                <data-data-form data-model="vm.$model.formOptions" data-validator="vm.$validator" data-update-in-process="vm.$updateInProcess" data-insert-in-process="vm.$insertInProcess" data-selected="vm.$viewModels.formModel">\r\n                    <div class="row">\r\n\r\n                        <div class="col-md-6">\r\n\r\n\r\n                            <div class="row" ng-if="!vm.$updateInProcess && !vm.$insertInProcess">\r\n                                <div class="col-md-5"> PaymentAmount </div>\r\n\r\n                                <div class="col-md-7"> {{vm.$viewModels.formModel.PaymentAmount | formatValue: \'\' }}</div>\r\n\r\n                            </div>\r\n                            <div class="row" ng-if="vm.$updateInProcess || vm.$insertInProcess">\r\n                                <div class="col-md-5">\r\n                                    <label for="ctl22">PaymentAmount</label>\r\n                                </div>\r\n                                <div class="col-md-7">\r\n                                    <integer-text-box data-id="ctl23" data-widget="vm.$components.ctl23.widget" data-title="PaymentAmount" data-options="vm.$components.ctl23.options" data-model="vm.$viewModels.formModel.PaymentAmount" data-events="vm.$components.ctl23.events" data-validation="vm.$components.ctl23.validation">\r\n                                    </integer-text-box>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class="row" ng-if="!vm.$updateInProcess && !vm.$insertInProcess">\r\n                                <div class="col-md-5"> PaymentTime </div>\r\n\r\n                                <div class="col-md-7"> {{vm.$viewModels.formModel.PaymentTime | formatValue: \'{0:g}\' }}</div>\r\n\r\n                            </div>\r\n                            <div class="row" ng-if="vm.$updateInProcess || vm.$insertInProcess">\r\n                                <div class="col-md-5">\r\n                                    <label for="ctl24">PaymentTime</label>\r\n                                </div>\r\n                                <div class="col-md-7">\r\n                                    <date-time-picker data-id="ctl25" data-widget="vm.$components.ctl25.widget" data-title="PaymentTime" data-model="vm.$viewModels.formModel.PaymentTime" data-options="vm.$components.ctl25.options" data-events="vm.$components.ctl25.events" data-validation="vm.$components.ctl25.validation">\r\n                                    </date-time-picker>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class="col-md-6">\r\n\r\n                            <div class="row" ng-if="!vm.$updateInProcess && !vm.$insertInProcess">\r\n                                <div class="col-md-5"> Contract Nr </div>\r\n\r\n                                <div class="col-md-7"> {{vm.$viewModels.fkeyModels[\'beContract.ttContractFK1DSModel\'].ContractNr | formatValue: \'\' }}</div>\r\n\r\n                            </div>\r\n                            <div class="row" ng-if="vm.$updateInProcess || vm.$insertInProcess">\r\n                                <div class="col-md-5">\r\n                                    <label for="ctl28"> Contract Nr</label>\r\n                                </div>\r\n                                <div class="col-md-7">\r\n                                    <combo-box data-id="ctl29" data-widget="vm.$components.ctl29.widget" data-title="beContract.ttContractFK1" data-model="vm.$viewModels.fkeyModels[\'beContract.ttContractFK1DSModel\']" data-options="vm.$components.ctl29.options" data-events="vm.$components.ctl29.events"\r\n                                        data-validation="vm.$components.ctl29.validation">\r\n                                        </combo-box>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n                </data-data-form>\r\n\r\n                <div class="row" ng-if="vm.$model.editMode === \'Read-Only to Edit\'">\r\n                    <div class="col-xs-12 data-form-commands">\r\n                        <hr class="k-separator">\r\n                        <a ng-click="vm._$edit()" ng-if="!vm.$updateInProcess && !vm.$insertInProcess" class="k-button k-button-icontext" ng-class="{\'kuib-disabled\': !vm.$selectedId }">\r\n                            <span class="k-icon k-i-edit"></span> Edit\r\n                        </a>\r\n                        <a ng-click="vm._$save()" ng-if="vm.$updateInProcess || vm.$insertInProcess" class="k-button k-button-icontext k-primary k-grid-update" ng-class="{\'kuib-disabled\': !vm.$viewModels.formModel.dirty }">\r\n                            <span class="k-icon k-i-save"></span> Save\r\n                        </a>\r\n                        <a ng-click="vm._$cancel()" ng-if="vm.$updateInProcess || vm.$insertInProcess" class="k-button k-button-icontext k-grid-cancel">\r\n                            <span class="k-icon k-i-cancel"></span> Cancel\r\n                        </a>\r\n                        <a ng-click="vm._$delete()" ng-if="vm.$updateInProcess" class="k-button k-button-icontext k-grid-delete">\r\n                            <span class="k-icon k-i-delete"></span> Delete\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="row">\r\n        <div class="col-lg-12" ng-include="vm.$model.customSections.bottom">\r\n        </div>\r\n    </div>\r\n</div>'}});