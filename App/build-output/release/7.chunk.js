webpackJsonp([7],{380:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),r=o(i),u=n(398),a=(o(u),n(406)),c=o(a),l=n(407),f=o(l),p=n(422),s=o(p),d=n(423),h=o(d);t.default=r.default.module("views.application.landing-page",[]).controller("LandingPageCtrl",c.default).factory("applicationLanding-page",f.default).run(["$templateCache",function(e){e.put("views.application.landing-page.bottomSection.html",s.default),e.put("views.application.landing-page.topSection.html",h.default)}]).name},398:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(t,n){o(this,e),this.$scope=t,this.$injector=n,this.$TOLERANCE=151,this.$customSections={top:"views.application.landing-page.topSection.html",bottom:"views.application.landing-page.bottomSection.html"},this.$tooltip=angular.element(".modules-list-wrapper").kendoTooltip({filter:"a[title]",position:"bottom",width:180}).data("kendoTooltip")}return i(e,[{key:"$onInit",value:function(){var e=this;this.$scope.$on("$viewContentLoaded",function(t){e.onShow&&e.onShow(t.currentScope)}),this.$scope._$onHideTooltip=function(){setTimeout(function(){e.$tooltip.hide()},e.$TOLERANCE)}}}]),e}();r.$inject=["$scope","$injector"],t.default=r},406:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(398),c=function(e){return e&&e.__esModule?e:{default:e}}(a),l=function(e){function t(e,n,r){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))}return r(t,e),u(t,[{key:"includeContentLoaded",value:function(){}},{key:"includeContentError",value:function(e){}},{key:"onShow",value:function(e){console.log("Show")}}]),t}(c.default);l.$inject=["$scope","$injector","stateData"],t.default=l},407:function(e,t,n){"use strict";function o(e,t){function n(){this.scope=null}return n.prototype={onInit:function(e){return console.log("Init",e),{}},onHide:function(e){console.log("hide",e)}},new n}Object.defineProperty(t,"__esModule",{value:!0}),o.$inject=["$q","dsService"],t.default=o},422:function(e,t){e.exports=""},423:function(e,t){e.exports=""}});