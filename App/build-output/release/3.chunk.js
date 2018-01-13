webpackJsonp([3],{387:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),r=o(i),a=n(405),s=(o(a),n(420)),d=o(s),c=n(421),l=o(c),u=n(448),h=o(u),$=n(449),f=o($),p=n(450),v=o(p);t.default=r.default.module("views.payments.new-payment",[]).controller("PaymentsNewPaymentCtrl",d.default).factory("paymentsNewPayment",l.default).run(["$templateCache",function(e){e.put("views.payments.new-payment.bottomSection.html",h.default),e.put("views.payments.new-payment.middleSection.html",f.default),e.put("views.payments.new-payment.topSection.html",v.default)}]).name},405:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(t,n){var i=this;o(this,e),this.$scope=t,this.$dataProviderService=n.get("providerService"),this.$dsService=n.get("dsService"),this.$viewModels={formModel:{},fkeyModels:{}},this.$ds={},this.$primeDSName="$primeDS",this.$pendingChangeMessage="There are unsaved changes. Do you want to complete the changes before continuing?",this.$window=n.get("$window"),this.$ds[this.$primeDSName]=new kendo.data.DataSource({transport:this.$dataProviderService.getTransport("ProjectData",{jsdo:"bePayments"}),type:"jsdo",pageSize:10}),this.$ds[this.$primeDSName].bind("sync",this._$syncHandler.bind(this)).bind("error",this._$errorHandler.bind(this)).bind("change",this._$changeHandler.bind(this)).bind("requestStart",this._$requestStartHandler.bind(this));var r=this;this.$viewModels.fkeyModels["$cachedbeContract.ttContractFK1DSModel"]={},this.$ds["beContract.ttContractFK1DS"]=new kendo.data.DataSource({transport:this.$dataProviderService.getTransport("ProjectData",{jsdo:"beContract"}),type:"jsdo",change:function(e){var t=e.sender,n=t.view();t.filter()&&t.filter().filters.length>0?n.length>0?r.$viewModels.fkeyModels["$cachedbeContract.ttContractFK1DSModel"]=n[0]:r.$viewModels.fkeyModels["$cachedbeContract.ttContractFK1DSModel"]={}:r.$scope.$applyAsync(function(){r.$viewModels.fkeyModels["beContract.ttContractFK1DSModel"]=r.$viewModels.fkeyModels["$cachedbeContract.ttContractFK1DSModel"]})}}),this.$ds["beContract.ttContractFK1DS"].bind("error",this._$errorHandlerForeignKeys.bind(this)),this._$createPristineModel("beContract.ttContractFK1DS"),this._$watchForeignKeyModel("beContract.ttContractFK1DSModel","ContractNr","ContractNr"),this.$model={title:"New Payment",newTitle:"New",editTitle:"Edit",editMode:"Read-Only to Edit",confirmRemove:!0,formOptions:{dataSource:this.$ds[this.$primeDSName]},gridOptions:{pageable:{pageSize:10,refresh:!0},filterable:!1,groupable:!1,resizable:!1,reorderable:!1,sortable:!1,selectable:!0,columns:[{encoded:!0,field:"PaymentAmount",filterable:!0,format:"",sortable:!0,title:"PaymentAmount"},{encoded:!0,field:"PaymentTime",filterable:!0,format:"{0:g}",sortable:!0,title:"PaymentTime"},{encoded:!0,field:"ContractNr",filterable:!0,format:"",sortable:!0,title:"ContractNr"}],dataSource:this.$ds[this.$primeDSName]},customSections:{top:"views.payments.new-payment.topSection.html",middle:"views.payments.new-payment.middleSection.html",bottom:"views.payments.new-payment.bottomSection.html"},events:{onRowSelect:function(e){e.fromView&&i.onRowSelect(e)},onDataBound:function(e){}}},this.$grid=null,this.$requestType="",this.$components={},this.$components.ctl23={widget:null,options:{downArrowText:"",format:"n0",decimals:0,placeholder:"",step:1,upArrowText:"",spinners:!1},events:{onChange:function(e){}},validation:{required:!1}},this.$components.ctl25={widget:null,options:{min:new Date("1899-12-31T22:00:00.000Z"),max:new Date("2099-12-30T22:00:00.000Z"),format:"{0:g}",interval:30},events:{onChange:function(e){}},validation:{required:!1}},this.$components.ctl29={widget:null,options:{dataSource:this.$ds["beContract.ttContractFK1DS"],dataTextField:"ContractNr",dataValueField:"ContractNr",valuePrimitive:!1,filter:"none"},events:{onChange:function(e){},onSelect:function(e){},onFilter:function(e){}},validation:{required:!1}}}return i(e,[{key:"$onInit",value:function(){var e=this;this.$scope.$on("$includeContentLoaded",function(){e.includeContentLoaded&&e.includeContentLoaded()}),this.$scope.$on("$viewContentLoaded",function(t){e.onShow&&e.onShow(t.currentScope)}),this.$scope.$on("$includeContentError",function(t){e.includeContentError&&e.includeContentError(t)}),this.$scope.$on("kendoWidgetCreated",function(t,n){n instanceof kendo.ui.Grid&&(n.one("dataBound",e._$dataBoundHandler.bind(e)),n.wrapper.on("click",".k-grid-content tr[data-uid]",e._$onChangeEvent.bind(e)))}),this.$scope.$on("$stateChangeStart",this._$routeChange.bind(this)),angular.element(this.$window).on("beforeunload",this._$beforeunloadHandler.bind(this)),this.$validatorOptions={errorTemplate:'<p class="input__required">#=message#</p>'},this.$scope.$on("$destroy",this._$destroy.bind(this))}},{key:"_$routeChange",value:function(e){this.$ds[this.$primeDSName].hasChanges()&&confirm(this.$pendingChangeMessage)&&e.preventDefault()}},{key:"_$beforeunloadHandler",value:function(e){if(this.$ds[this.$primeDSName].hasChanges())return this.$pendingChangeMessage}},{key:"_$createPristineModel",value:function(e){this.$viewModels.fkeyModels[e+"Model"]=this.$dsService.createPristineModel(this.$ds[e])}},{key:"_$watchForeignKeyModel",value:function(e,t,n){var o=this;this.$scope.$watch(function(){return o.$viewModels.fkeyModels[e][n]},function(i,r){var a=o.$viewModels.formModel,s=o.$viewModels.fkeyModels;i&&a[t]!==s[e][n]&&(a[t]=s[e][n])})}},{key:"_$restoreSelection",value:function(){var e=this.$grid.dataSource.get(this.$selectedId);if(e){var t=angular.element("[data-uid='"+e.uid+"']");t.length?this.$grid.select(t):this.$grid.select("tr[data-uid]:eq(0)")}else this.$grid.select("tr[data-uid]:eq(0)")}},{key:"_$createSelection",value:function(){var e=this;this.$viewModels.formModel=kendo.proxyModelSetters(this.$grid.dataItem(this.$grid.select())),this.$selectedId=this.$viewModels.formModel.id,this._$createPristineModel("beContract.ttContractFK1DS"),this.$ds["beContract.ttContractFK1DS"].query({filter:{field:"ContractNr",operator:"eq",value:this.$viewModels.formModel.ContractNr}}).then(function(){e.$ds["beContract.ttContractFK1DS"].filter({})})}},{key:"_$restoreState",value:function(){this.$grid.cancelChanges(),this._$restoreSelection(),this._$createSelection()}},{key:"_$errorHandler",value:function(e){this._$showErrorMessage(e),this.$insertInProcess||"update"!=this.$requestType&&this._$restoreState()}},{key:"_$errorHandlerForeignKeys",value:function(e){this._$showErrorMessage(e)}},{key:"_$showErrorMessage",value:function(e){var t=this.$dsService.extractErrorMessage(e);this.$scope.$emit("notification",{type:"error",message:t})}},{key:"_$syncHandler",value:function(e){var t=this;this.$scope.$evalAsync(function(){t._$restoreSelection(),t._$createSelection(),t.$updateInProcess=t.$insertInProcess=!1})}},{key:"_$dataBoundHandler",value:function(e){var t=this;this.$scope.$evalAsync(function(){t.$grid.select("tr[data-uid]:eq(0)"),t.$model.events.onRowSelect({sender:t.$grid,fromView:!0}),t._$createSelection()})}},{key:"_$changeHandler",value:function(e){var t=this;"add"!=e.action&&"remove"!=e.action&&this.$grid&&this.$scope.$evalAsync(function(){t._$restoreSelection(),t._$createSelection()})}},{key:"_$requestStartHandler",value:function(e){this.$requestType=e.type}},{key:"_$onChangeEvent",value:function(e){var t=this;this.$scope.$evalAsync(function(){t._$createSelection()}),this.$model.events.onRowSelect({sender:this.$grid,fromView:!0})}},{key:"_$edit",value:function(e){this.$updateInProcess=!0}},{key:"_$save",value:function(e){this.$validator.validate()&&this.$grid.saveChanges()}},{key:"_$cancel",value:function(e){this._$restoreState(),this.$updateInProcess=this.$insertInProcess=!1}},{key:"_$insert",value:function(){for(var e in this.$ds)if(this.$ds.hasOwnProperty(e)&&e!==this.$primeDSName){this._$createPristineModel(e);var t="$cached"+e+"Model";this.$viewModels.fkeyModels[t]={}}this.$grid.dataSource.add({});var n=this.$grid.dataSource.data();this.$viewModels.formModel=kendo.proxyModelSetters(n[n.length-1]),this.$selectedId=null,this.$insertInProcess=!0,this.$updateInProcess=!1}},{key:"_$delete",value:function(){var e=this,t=function(){e.$grid.removeRow(e.$grid.select().first()),e.$grid.saveChanges()};this.$model.confirmRemove?this.$scope.$emit("dialog",{title:"Are you sure you want to delete this record?",hint:"The record will be permanently removed.",okButton:{handler:t}}):t()}},{key:"_$destroy",value:function(){for(var e in this.$ds)this.$ds.hasOwnProperty(e)&&(e===this.$primeDSName?this.$ds[e].unbind("sync",this._$syncHandler).unbind("error",this._$errorHandler).unbind("change",this._$changeHandler).unbind("requestStart",this._$requestStartHandler):this.$ds[e].unbind("error",this._$errorHandler));this.$grid.wrapper.off("click",this._$onChangeEvent),angular.element(this.$window).off("beforeunload",this._$beforeunloadHandler)}}]),e}();t.default=r},420:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(405),d=function(e){return e&&e.__esModule?e:{default:e}}(s),c=function(e){function t(e,n,r){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))}return r(t,e),a(t,[{key:"includeContentLoaded",value:function(){}},{key:"includeContentError",value:function(e){}},{key:"onShow",value:function(e){console.log("Show")}},{key:"onRowSelect",value:function(e){}}]),t}(d.default);c.$inject=["$scope","$injector","stateData"],t.default=c},421:function(e,t,n){"use strict";function o(e,t){function n(){this.scope=null}return n.prototype={onInit:function(e){return console.log("Init",e),{}},onHide:function(e){console.log("hide",e)}},new n}Object.defineProperty(t,"__esModule",{value:!0}),o.$inject=["$q","dsService"],t.default=o},448:function(e,t){e.exports=""},449:function(e,t){e.exports=""},450:function(e,t){e.exports=""}});