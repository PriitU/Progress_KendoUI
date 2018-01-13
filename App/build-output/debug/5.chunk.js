webpackJsonp([5],{

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("///////////////////\n// Auto-generated\n// Do not edit!!!\n///////////////////\n\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _angular = __webpack_require__(6);\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _controller = __webpack_require__(392);\n\nvar _controller2 = _interopRequireDefault(_controller);\n\nvar _controller3 = __webpack_require__(398);\n\nvar _controller4 = _interopRequireDefault(_controller3);\n\nvar _routerEvents = __webpack_require__(399);\n\nvar _routerEvents2 = _interopRequireDefault(_routerEvents);\n\nvar _bottomSection = __webpack_require__(410);\n\nvar _bottomSection2 = _interopRequireDefault(_bottomSection);\n\nvar _topSection = __webpack_require__(411);\n\nvar _topSection2 = _interopRequireDefault(_topSection);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _angular2.default.module('views.application.landing-page', []).controller('LandingPageCtrl', _controller4.default).factory('applicationLanding-page', _routerEvents2.default).run(['$templateCache', function ($templateCache) {\n    $templateCache.put('views.application.landing-page.bottomSection.html', _bottomSection2.default);\n    $templateCache.put('views.application.landing-page.topSection.html', _topSection2.default);\n}]).name;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/modules/application/landing-page/index.js\n// module id = 378\n// module chunks = 5\n\n//# sourceURL=webpack:///./src/modules/application/landing-page/index.js?");

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("///////////////////\n// Auto-generated\n// Do not edit!!!\n///////////////////\n\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar BaseController = function () {\n    function BaseController($scope, $injector) {\n        _classCallCheck(this, BaseController);\n\n        this.$scope = $scope;\n        this.$injector = $injector;\n        this.$TOLERANCE = 151; // needed for very edge cases when someone clicks with the speed of light\n        this.$customSections = {\n            top: 'views.application.landing-page.topSection.html',\n            bottom: 'views.application.landing-page.bottomSection.html'\n        };\n\n        this.$tooltip = angular.element(\".modules-list-wrapper\").kendoTooltip({\n            filter: \"a[title]\",\n            position: \"bottom\",\n            width: 180\n        }).data(\"kendoTooltip\");\n    }\n\n    _createClass(BaseController, [{\n        key: '$onInit',\n        value: function $onInit() {\n            var _this = this;\n\n            this.$scope.$on('$viewContentLoaded', function (e) {\n                if (_this['onShow']) {\n                    _this['onShow'](e.currentScope);\n                }\n            });\n\n            this.$scope._$onHideTooltip = function () {\n                setTimeout(function () {\n                    _this.$tooltip.hide();\n                }, _this.$TOLERANCE);\n            };\n        }\n    }]);\n\n    return BaseController;\n}();\n\nBaseController.$inject = ['$scope', '$injector'];\n\nexports.default = BaseController;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/modules/application/landing-page/controller.js\n// module id = 392\n// module chunks = 5\n\n//# sourceURL=webpack:///./src/modules/application/landing-page/controller.js?");

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _controller = __webpack_require__(392);\n\nvar _controller2 = _interopRequireDefault(_controller);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar LandingPageCtrl = function (_BaseController) {\n    _inherits(LandingPageCtrl, _BaseController);\n\n    function LandingPageCtrl($scope, $injector, stateData) {\n        _classCallCheck(this, LandingPageCtrl);\n\n        return _possibleConstructorReturn(this, (LandingPageCtrl.__proto__ || Object.getPrototypeOf(LandingPageCtrl)).call(this, $scope, $injector));\n    }\n\n    // Fired when custom html section is loaded\n\n\n    _createClass(LandingPageCtrl, [{\n        key: 'includeContentLoaded',\n        value: function includeContentLoaded() {}\n\n        // Fired when custom html section loading failed\n\n    }, {\n        key: 'includeContentError',\n        value: function includeContentError(e) {}\n\n        // Fired when view content is loaded\n\n    }, {\n        key: 'onShow',\n        value: function onShow($scope) {\n            console.log('Show');\n        }\n    }]);\n\n    return LandingPageCtrl;\n}(_controller2.default);\n\nLandingPageCtrl.$inject = ['$scope', '$injector', 'stateData'];\n\nexports.default = LandingPageCtrl;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/modules/application/landing-page/controller.public.js\n// module id = 398\n// module chunks = 5\n\n//# sourceURL=webpack:///./src/modules/application/landing-page/controller.public.js?");

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n/* global angular */\n\nfunction factory($q, dsService) {\n\n    function ApplicationlandingPage() {\n        this.scope = null;\n    }\n\n    ApplicationlandingPage.prototype = {\n        /*  The resolve method could return arbitrary data,\r\n            which will be available in the \"viewShowHandler\" and \"viewHideHandler\" handler as the customData argument */\n        onInit: function onInit($stateParams) {\n            console.log('Init', $stateParams);\n\n            return {};\n        },\n        /* \"customData\" is the data return by the viewInitHandler handler*/\n        onHide: function onHide(customData) {\n            console.log('hide', customData);\n        }\n    };\n\n    return new ApplicationlandingPage();\n}\n\nfactory.$inject = ['$q', 'dsService'];\n\nexports.default = factory;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/modules/application/landing-page/router-events.js\n// module id = 399\n// module chunks = 5\n\n//# sourceURL=webpack:///./src/modules/application/landing-page/router-events.js?");

/***/ }),

/***/ 410:
/***/ (function(module, exports) {

eval("module.exports = \"\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/modules/application/landing-page/bottomSection.html\n// module id = 410\n// module chunks = 5\n\n//# sourceURL=webpack:///./src/modules/application/landing-page/bottomSection.html?");

/***/ }),

/***/ 411:
/***/ (function(module, exports) {

eval("module.exports = \"\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/modules/application/landing-page/topSection.html\n// module id = 411\n// module chunks = 5\n\n//# sourceURL=webpack:///./src/modules/application/landing-page/topSection.html?");

/***/ })

});