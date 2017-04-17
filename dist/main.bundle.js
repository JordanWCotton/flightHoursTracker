webpackJsonp([1,5],{

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.token = false;
    }
    AuthService.prototype.signinUser = function (user) {
        return this.http.post('/app/login', user);
    };
    AuthService.prototype.userSignIn = function () {
        this.token = true;
    };
    AuthService.prototype.isSignedIn = function () {
        return this.token;
    };
    AuthService.prototype.signUpUser = function (user) {
        return this.http.post('/app/register', user);
    };
    AuthService.prototype.getUserToken = function () {
    };
    AuthService.prototype.isAuthenticated = function () {
    };
    AuthService.prototype.onLogout = function () {
        this.router.navigate(['/']);
        this.token = false;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 264;


/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(278);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(345)
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_datepicker__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_menu_main_menu_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__flight_log_flight_log_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_flight_add_flight_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routing__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_flight_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__view_log_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__log_in_log_in_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__landing_menu_landing_menu_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sign_up_sign_up_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__routing_guard__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__main_menu_main_menu_component__["a" /* MainMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_7__flight_log_flight_log_component__["a" /* FlightLogComponent */],
            __WEBPACK_IMPORTED_MODULE_8__add_flight_add_flight_component__["a" /* AddFlightComponent */],
            __WEBPACK_IMPORTED_MODULE_12__log_in_log_in_component__["a" /* LogInComponent */],
            __WEBPACK_IMPORTED_MODULE_13__landing_menu_landing_menu_component__["a" /* LandingMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_14__sign_up_sign_up_component__["a" /* SignUpComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_datepicker__["a" /* DatePickerModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__add_flight_service__["a" /* AddFlightService */], __WEBPACK_IMPORTED_MODULE_11__view_log_service__["a" /* ViewLogService */], __WEBPACK_IMPORTED_MODULE_15__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__routing_guard__["a" /* AuthenticationGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_menu_main_menu_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flight_log_flight_log_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_flight_add_flight_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__log_in_log_in_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sign_up_sign_up_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__landing_menu_landing_menu_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routing_guard__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });








var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__landing_menu_landing_menu_component__["a" /* LandingMenuComponent */] },
    { path: 'main-menu', component: __WEBPACK_IMPORTED_MODULE_1__main_menu_main_menu_component__["a" /* MainMenuComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__routing_guard__["a" /* AuthenticationGuard */]] },
    { path: 'flight-log', component: __WEBPACK_IMPORTED_MODULE_2__flight_log_flight_log_component__["a" /* FlightLogComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__routing_guard__["a" /* AuthenticationGuard */]] },
    { path: 'add-flight', component: __WEBPACK_IMPORTED_MODULE_3__add_flight_add_flight_component__["a" /* AddFlightComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__routing_guard__["a" /* AuthenticationGuard */]] },
    { path: 'log-in', component: __WEBPACK_IMPORTED_MODULE_4__log_in_log_in_component__["a" /* LogInComponent */] },
    { path: 'sign-up', component: __WEBPACK_IMPORTED_MODULE_5__sign_up_sign_up_component__["a" /* SignUpComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=routing.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "/*Add New Style page */ \r\n \r\n#add-new-flight-container {\r\n    padding-top: 10px;\r\n    background-color: #AB987A;\r\n    height: 100vh; \r\n    color: #F5F5F5;\r\n    font-family: 'Playfair Display', serif;\r\n} \r\n\r\n#back-icon {\r\n    margin-right: 5px;\r\n    background-color: #FF533D;\r\n    color: #F5F5F5;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n}\r\n\r\n#add-flight-title {\r\n    font-size: 120%;\r\n}\r\n\r\n#page-breaker-line {\r\n    height: 1px;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n#date-selector {\r\n    margin-top: 1%;\r\n}\r\n\r\n#data-selector-tooltip {\r\n    margin-top: 1%;\r\n    font-size: 0.8em;\r\n    margin-bottom: 1%;\r\n} \r\n\r\n#flight-title-container {\r\n    font-size: 240%;\r\n    text-align: center;\r\n}\r\n\r\n.dropdown-menu { \r\n    background-color: #fff;\r\n    text-align: center;\r\n    min-width: auto;\r\n    padding-right: 20%;\r\n    padding-left: 20%;\r\n    font-size: 1.2em;\r\n}\r\n\r\nul input {\r\n    display: none; /* Hide radio button */\r\n}\r\n\r\n.radioSel {\r\n background-color: grey;   \r\n}\r\n\r\n.add-flight-selectors {\r\n    width: 90px;\r\n}\r\n\r\n.add-flight-selectors p {\r\n    margin: 0; \r\n}\r\n\r\n#hours-input {\r\n    text-align: center;\r\n}\r\n\r\n#dropdownMenu1, #dropdownMenu3 {\r\n    background-color: #0F1626;\r\n    color: #F5F5F5; \r\n}\r\n\r\n#dropdownMenu2 {\r\n    background-color: #FF533D;\r\n    color: #F5F5F5;\r\n} \r\n\r\n#submit-button {\r\n    background-color: #FF533D;\r\n    color: #F5F5F5;\r\n}\r\n\r\n#submit-modal-content {\r\n    text-align: center;\r\n    background-color: #AB987A;\r\n    color: #F5F5F5;\r\n} \r\n\r\n.flight-list-row {\r\n    margin-top: 1%;\r\n}\r\n\r\n#logit-button {\r\n    margin-top: 2%;\r\n }\r\n\r\n .add-flight-remarks {\r\n     max-width: 30%;\r\n }\r\n\r\n #yes-modal-button {\r\n     background-color: #0F1626;\r\n    color: #F5F5F5; \r\n }\r\n\r\n #no-modal-button {\r\n     background-color: #FF533D;\r\n    color: #F5F5F5;\r\n }\r\n\r\n/*Mobile specific */\r\n @media only screen and (max-width: 840px) {\r\n     #add-flight-date { \r\n        margin-top: 3%;\r\n    }\r\n\r\n    #date-selector {\r\n        margin-top: 5%;\r\n    }\r\n\r\n    .flight-list-row {\r\n        margin-top: 6%;\r\n    }\r\n\r\n    .add-flight-remarks {\r\n        max-width: 100%;\r\n    }\r\n }\r\n\r\n/* Future use\r\n@media only screen and (max-height: 569) {\r\n    #flight-title-container {\r\n        font-size: 140%;\r\n    }\r\n\r\n    * {\r\n        background-color: purple;\r\n    }\r\n}\r\n*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "/* Flight Log page */\r\n\r\n#flight-log-container {\r\n    padding-top: 10px;\r\n    background-color: #AB987A; \r\n    height: 100vh; \r\n    color: #F5F5F5;\r\n    font-family: 'Playfair Display', serif;\r\n}\r\n\r\n#back-icon {\r\n    margin-right: 5px;\r\n    background-color: #FF533D;\r\n    color: #F5F5F5;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n}\r\n\r\n#flight-log-title {\r\n    font-size: 150%;\r\n    text-align: center;\r\n}\r\n\r\n#page-breaker-line {\r\n    height: 1px;\r\n    background-color:#F5F5F5;\r\n}\r\n\r\n#date-range-container {\r\n    margin-top: 3%;\r\n    text-align: center;\r\n} \r\n\r\n#modal-content-id {\r\n    background-color: #AB987A; \r\n    color: #F5F5F5;\r\n}\r\n\r\n#close-daterange-modal {\r\n    background-color: #FF533D;\r\n    color: #F5F5F5;\r\n}\r\n\r\n#save-daterange-modal {\r\n    background-color: #0F1626;\r\n    color: #F5F5F5;\r\n}\r\n\r\n#date-range-button {\r\n    background-color: #0F1626;\r\n    color: #F5F5F5;\r\n    margin-top: 3%;\r\n    margin-bottom: 3%;\r\n    border-radius: 6px;\r\n    text-align: center;\r\n}\r\n\r\n#exampleModelLabel h5 {\r\n    color: #373D3F;\r\n}\r\n\r\n.add-flight-list {\r\n    text-align: center;\r\n}\r\n\r\n.hours-box {\r\n    text-align: center;\r\n}\r\n.hours-box p {\r\n    border: 2px solid #272D2D;\r\n}\r\n\r\n#filter-buttons {\r\n    margin-top: 1%;\r\n}\r\n\r\n#filterButton, #reqdButton {\r\n    background-color: #FF533D;\r\n    color: #F5F5F5;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    margin-top: 5%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "/* Landing menu page */\r\n \r\n#landing-menu-container { \r\n    /* background-color: #AB987A; */\r\n    background: rgb(243,226,199); /* Old browsers */\r\n    background: -webkit-linear-gradient(bottom left, rgba(243,226,199,1) 0%, rgba(193,158,103,1) 42%, rgba(182,141,76,1) 56%, rgba(233,212,179,1) 100%);\r\n    background: linear-gradient(to top right, rgba(243,226,199,1) 0%, rgba(193,158,103,1) 42%, rgba(182,141,76,1) 56%, rgba(233,212,179,1) 100%); /* FF3.6-15 */\r\n    /* Chrome10-25,Safari5.1-6 */\r\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f3e2c7', endColorstr='#e9d4b3',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */   \r\n    height: 100vh;  \r\n    color: #F5F5F5; \r\n    font-family: 'Playfair Display', serif;\r\n}   \r\n\r\n#it-name {\r\n    color: #FF533D;\r\n} \r\n\r\n#log-name {\r\n    color: #0F1626;\r\n}\r\n\r\n#title-container {\r\n    text-align: center;\r\n    margin-top: 5%;\r\n    margin-bottom: 7%;\r\n    border-radius: 10px;\r\n}\r\n\r\n.button-space {\r\n    margin-top: 5%;\r\n}\r\n\r\n#log-in-div {\r\n    margin-top: 15%;\r\n}\r\n\r\n#signin-button {\r\n    background-color: #FF533D;\r\n    color: #F5F5F5;\r\n    text-align: center;\r\n    width: 100%;\r\n    border-radius: 6px;\r\n}\r\n\r\n#signup-button {\r\n    background-color: #0F1626;\r\n    color: #F5F5F5;\r\n    text-align: center;\r\n    width: 100%;\r\n    border-radius: 6px;\r\n}\r\n\r\n\r\n/*Mobile specific */\r\n@media only screen and (max-width: 840px) {\r\n    .button-space {\r\n        margin-top: 20%;\r\n    }\r\n\r\n    #title-container {\r\n        margin-top: 17%;\r\n        margin-bottom: 13%;\r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "/* Log in page */\r\n\r\n#log-in-container {\r\n    background-color: #AB987A;\r\n    height: 100vh;  \r\n    color: #F5F5F5;\r\n    font-family: 'Playfair Display', serif;\r\n} \r\n\r\n#it-name {\r\n    color: #FF533D;\r\n}\r\n\r\n#log-name {\r\n    color: #0F1626;\r\n}\r\n\r\n#title-container {\r\n    text-align: center;\r\n    margin-top: 6%;\r\n    border-radius: 10px;\r\n}\r\n\r\n#email-input-div {\r\n    margin-top: 10%;\r\n}\r\n\r\n#log-in-div {\r\n    margin-top: 8%;\r\n}\r\n\r\n#submit-button {\r\n    background-color: #0F1626;\r\n    color: #F5F5F5;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n}\r\n\r\n#validation-modal-content {\r\n    text-align: center;\r\n    background-color: #AB987A;\r\n    color: #F5F5F5;\r\n}\r\n\r\n#modal-close-button {\r\n    background-color: #0F1626;\r\n    color: #F5F5F5;\r\n}\r\n\r\n/*Mobile specific */\r\n@media only screen and (max-width: 840px) {\r\n    #title-container {\r\n        margin-top: 17%;\r\n    }\r\n\r\n    #email-input-div {\r\n        margin-top: 25%;\r\n    }\r\n\r\n    #log-in-div {\r\n        margin-top: 15%;\r\n    }\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "/* Main Menu page */ \r\n\r\n#main-menu-container {\r\n    background-color: #AB987A;\r\n    height: 100vh; \r\n    color: #F5F5F5;\r\n    font-family: 'Playfair Display', serif;\r\n}\r\n\r\n#it-name {\r\n    color: #FF533D;\r\n}\r\n\r\n#log-name {\r\n    color: #0F1626;\r\n}\r\n\r\n#title-container {\r\n    text-align: center;\r\n    margin-top: 5%;\r\n    border-radius: 10px;\r\n}\r\n \r\n#new-flight, #weather {\r\n    background-color: #FF533D;\r\n    color: #F5F5F5;\r\n    \r\n}\r\n\r\n#view-log, #notams {\r\n    background-color: #0F1626;\r\n    color: #F5F5F5;\r\n}\r\n\r\n.main-menu-item {\r\n    text-align: center;\r\n    margin-top: 1%;\r\n    border-radius: 6px;\r\n}\r\n\r\n.main-menu-item p {\r\n    font-size: 95%;\r\n}\r\n\r\n#new-flight {\r\n    margin-top: 5%;\r\n}\r\n\r\n#logout-button {\r\n    background-color: #FF533D;\r\n    color: #F5F5F5;\r\n    border-radius: 6px;\r\n}\r\n\r\n#logout-button p {\r\n    margin: 0;\r\n}\r\n/*Mobile specific */\r\n@media only screen and (max-width: 840px) {\r\n    #title-container {\r\n        margin-top: 17%;\r\n    }\r\n\r\n    .main-menu-item {\r\n        margin-top: 5%;\r\n    }\r\n\r\n    #new-flight {\r\n        margin-top: 20%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "/* Sign up page */\r\n  \r\n#sign-up-container { \r\n    background-color: #AB987A;\r\n    height: 100vh; \r\n    color: #F5F5F5; \r\n    font-family: 'Playfair Display', serif; \r\n}\r\n\r\n#it-name {\r\n    color: #FF533D;\r\n} \r\n\r\n#log-name {\r\n    color: #0F1626;\r\n}\r\n\r\n#title-container {\r\n    text-align: center;\r\n    margin-top: 5%;\r\n    margin-bottom: 3%;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n#sign-up-div {\r\n    margin-top: 5%;\r\n}\r\n\r\n#submit-button {\r\n    background-color: #FF533D;\r\n    color: #F5F5F5;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n}\r\n\r\n#register-modal-content {\r\n    text-align: center;\r\n    background-color: #AB987A;\r\n    color: #F5F5F5;\r\n}\r\n\r\n#modal-close-button {\r\n    background-color: #0F1626;\r\n    color: #F5F5F5; \r\n}\r\n\r\n/*Mobile specific */\r\n@media only screen and (max-width: 840px) {\r\n    #title-container {\r\n        margin-top: 17%;\r\n        margin-bottom: 10%;\r\n    }\r\n\r\n    #sign-up-div {\r\n        margin-top: 15%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 111,
	"./af.js": 111,
	"./ar": 118,
	"./ar-dz": 112,
	"./ar-dz.js": 112,
	"./ar-kw": 113,
	"./ar-kw.js": 113,
	"./ar-ly": 114,
	"./ar-ly.js": 114,
	"./ar-ma": 115,
	"./ar-ma.js": 115,
	"./ar-sa": 116,
	"./ar-sa.js": 116,
	"./ar-tn": 117,
	"./ar-tn.js": 117,
	"./ar.js": 118,
	"./az": 119,
	"./az.js": 119,
	"./be": 120,
	"./be.js": 120,
	"./bg": 121,
	"./bg.js": 121,
	"./bn": 122,
	"./bn.js": 122,
	"./bo": 123,
	"./bo.js": 123,
	"./br": 124,
	"./br.js": 124,
	"./bs": 125,
	"./bs.js": 125,
	"./ca": 126,
	"./ca.js": 126,
	"./cs": 127,
	"./cs.js": 127,
	"./cv": 128,
	"./cv.js": 128,
	"./cy": 129,
	"./cy.js": 129,
	"./da": 130,
	"./da.js": 130,
	"./de": 133,
	"./de-at": 131,
	"./de-at.js": 131,
	"./de-ch": 132,
	"./de-ch.js": 132,
	"./de.js": 133,
	"./dv": 134,
	"./dv.js": 134,
	"./el": 135,
	"./el.js": 135,
	"./en-au": 136,
	"./en-au.js": 136,
	"./en-ca": 137,
	"./en-ca.js": 137,
	"./en-gb": 138,
	"./en-gb.js": 138,
	"./en-ie": 139,
	"./en-ie.js": 139,
	"./en-nz": 140,
	"./en-nz.js": 140,
	"./eo": 141,
	"./eo.js": 141,
	"./es": 143,
	"./es-do": 142,
	"./es-do.js": 142,
	"./es.js": 143,
	"./et": 144,
	"./et.js": 144,
	"./eu": 145,
	"./eu.js": 145,
	"./fa": 146,
	"./fa.js": 146,
	"./fi": 147,
	"./fi.js": 147,
	"./fo": 148,
	"./fo.js": 148,
	"./fr": 151,
	"./fr-ca": 149,
	"./fr-ca.js": 149,
	"./fr-ch": 150,
	"./fr-ch.js": 150,
	"./fr.js": 151,
	"./fy": 152,
	"./fy.js": 152,
	"./gd": 153,
	"./gd.js": 153,
	"./gl": 154,
	"./gl.js": 154,
	"./gom-latn": 155,
	"./gom-latn.js": 155,
	"./he": 156,
	"./he.js": 156,
	"./hi": 157,
	"./hi.js": 157,
	"./hr": 158,
	"./hr.js": 158,
	"./hu": 159,
	"./hu.js": 159,
	"./hy-am": 160,
	"./hy-am.js": 160,
	"./id": 161,
	"./id.js": 161,
	"./is": 162,
	"./is.js": 162,
	"./it": 163,
	"./it.js": 163,
	"./ja": 164,
	"./ja.js": 164,
	"./jv": 165,
	"./jv.js": 165,
	"./ka": 166,
	"./ka.js": 166,
	"./kk": 167,
	"./kk.js": 167,
	"./km": 168,
	"./km.js": 168,
	"./kn": 169,
	"./kn.js": 169,
	"./ko": 170,
	"./ko.js": 170,
	"./ky": 171,
	"./ky.js": 171,
	"./lb": 172,
	"./lb.js": 172,
	"./lo": 173,
	"./lo.js": 173,
	"./lt": 174,
	"./lt.js": 174,
	"./lv": 175,
	"./lv.js": 175,
	"./me": 176,
	"./me.js": 176,
	"./mi": 177,
	"./mi.js": 177,
	"./mk": 178,
	"./mk.js": 178,
	"./ml": 179,
	"./ml.js": 179,
	"./mr": 180,
	"./mr.js": 180,
	"./ms": 182,
	"./ms-my": 181,
	"./ms-my.js": 181,
	"./ms.js": 182,
	"./my": 183,
	"./my.js": 183,
	"./nb": 184,
	"./nb.js": 184,
	"./ne": 185,
	"./ne.js": 185,
	"./nl": 187,
	"./nl-be": 186,
	"./nl-be.js": 186,
	"./nl.js": 187,
	"./nn": 188,
	"./nn.js": 188,
	"./pa-in": 189,
	"./pa-in.js": 189,
	"./pl": 190,
	"./pl.js": 190,
	"./pt": 192,
	"./pt-br": 191,
	"./pt-br.js": 191,
	"./pt.js": 192,
	"./ro": 193,
	"./ro.js": 193,
	"./ru": 194,
	"./ru.js": 194,
	"./sd": 195,
	"./sd.js": 195,
	"./se": 196,
	"./se.js": 196,
	"./si": 197,
	"./si.js": 197,
	"./sk": 198,
	"./sk.js": 198,
	"./sl": 199,
	"./sl.js": 199,
	"./sq": 200,
	"./sq.js": 200,
	"./sr": 202,
	"./sr-cyrl": 201,
	"./sr-cyrl.js": 201,
	"./sr.js": 202,
	"./ss": 203,
	"./ss.js": 203,
	"./sv": 204,
	"./sv.js": 204,
	"./sw": 205,
	"./sw.js": 205,
	"./ta": 206,
	"./ta.js": 206,
	"./te": 207,
	"./te.js": 207,
	"./tet": 208,
	"./tet.js": 208,
	"./th": 209,
	"./th.js": 209,
	"./tl-ph": 210,
	"./tl-ph.js": 210,
	"./tlh": 211,
	"./tlh.js": 211,
	"./tr": 212,
	"./tr.js": 212,
	"./tzl": 213,
	"./tzl.js": 213,
	"./tzm": 215,
	"./tzm-latn": 214,
	"./tzm-latn.js": 214,
	"./tzm.js": 215,
	"./uk": 216,
	"./uk.js": 216,
	"./ur": 217,
	"./ur.js": 217,
	"./uz": 219,
	"./uz-latn": 218,
	"./uz-latn.js": 218,
	"./uz.js": 219,
	"./vi": 220,
	"./vi.js": 220,
	"./x-pseudo": 221,
	"./x-pseudo.js": 221,
	"./yo": 222,
	"./yo.js": 222,
	"./zh-cn": 223,
	"./zh-cn.js": 223,
	"./zh-hk": 224,
	"./zh-hk.js": 224,
	"./zh-tw": 225,
	"./zh-tw.js": 225
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 339;


/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"add-new-flight-container\" >\n           <div class=\"row\"> \n                <div class=\"col-3\">\n                    <div [routerLink]=\"['/main-menu']\" class=\"btn-info\" \n                    id=\"back-icon\">Back</div>\n                </div>\n                <div class=\"col-8 offset-1\" id=\"add-flight-title\">\n                    <p>Add Flight</p>\n                </div>\n            </div>\n            <div id=\"page-breaker-line\"></div>\n            <form #f=\"ngForm\">\n            <div class=\"row\">\n                <div class=\"col-12\" id=\"date-selector\">\n                    <ng2-datepicker [options]=\"options\" name=\"date\" \n                    [(ngModel)]=\"flight.date\"></ng2-datepicker>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\" id=\"flight-title-container\">\n                    <p>Flight</p>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-5 add-flight-list\">\n                    <p>Flight Symbol</p>\n                </div>\n                <div class=\"col-4 offset-1\"> \n                    <div class=\"dropdown\" id=\"elFlight\" #elFlight>\n                        <div class=\"btn add-flight-selectors\" type=\"button\" id=\"dropdownMenu1\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                            <p>{{f.value.flightSymbol}}</p>\n                        </div>\n                        <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n                            <div *ngFor=\"let flightSymbol of flightSymbols\">\n                                <label>\n                                <input type=\"radio\" name=\"flightSymbol\" [(ngModel)]=\"flight.flightSymbol\"\n                                [value]=\"flightSymbol.value\" (click)=\"onDropdownSelect($event)\" class=\"radioSel\">\n                                    {{flightSymbol.value}}\n                                </label>\n                            </div>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n           <div class=\"row flight-list-row\">\n                <div class=\"col-5 add-flight-list\">\n                    <p>Duty Symbol</p>\n                </div>\n                <div class=\"col-4 offset-1\">\n                    <div class=\"dropdown\" #elDuty id=\"elDuty\">\n                        <div class=\"btn add-flight-selectors\" type=\"button\" id=\"dropdownMenu2\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                            <p>{{f.value.dutySymbol}}</p>\n                        </div>\n                        <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\n                            <div *ngFor=\"let dutySymbol of dutySymbols\">\n                                <label>\n                                <input type=\"radio\" name=\"dutySymbol\" [(ngModel)]=\"flight.dutySymbol\"\n                                [value]=\"dutySymbol.value\" (click)=\"onDropdownSelect($event)\">\n                                    {{dutySymbol.value}}\n                                </label>\n                            </div>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row flight-list-row\">\n                <div class=\"col-5 add-flight-list\">\n                    <p>Flight Hours</p>\n                </div>\n                <div class=\"col-4 offset-1\">\n                    <div class=\"input-group add-flight-selectors\">\n                        <input type=\"number\" id=\"hours-input\" class=\"form-control\" placeholder=\"0.0\" \n                        aria-describedby=\"sizing-addon1\" name=\"hours\" [(ngModel)]=\"flight.hours\">\n                    </div>\n                </div>\n            </div> \n            <div class=\"row\">\n              <div class=\"alert alert-danger col-5 offset-4\" role=\"alert\" id=\"hours-alert\"\n                *ngIf=\"f.value.hours > 12.0\">\n                    <p>Too high!</p>    \n                </div>  \n            </div>\n            <div class=\"row flight-list-row\">\n                <div class=\"col-5 add-flight-list\">\n                    <p>Seat</p>\n                </div>\n                <div class=\"col-4 offset-1\">\n                    <div class=\"dropdown\" #elSeat id=\"elSeat\">\n                        <div class=\"btn add-flight-selectors\" type=\"button\" id=\"dropdownMenu3\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                            <p>{{f.value.seat}}</p> \n                        </div>\n                        <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu3\">\n                            <div *ngFor=\"let seat of seats\">\n                                <label>\n                                <input type=\"radio\" name=\"seat\" [(ngModel)]=\"flight.seat\"\n                                [value]=\"seat.value\" (click)=\"onDropdownSelect($event)\">\n                                {{seat.value}}\n                                </label>\n                            </div>\n                        </ul>\n                    </div>\n                </div>\n            </div> \n            <div class=\"row flight-list-row\"> \n                <div class=\"col-4 add-flight-list flight-list-centered\">\n                    <p>Remarks</p>\n                </div>\n                <div class=\"col-8 add-flight-remarks\">\n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter remarks...\" \n                        aria-describedby=\"sizing-addon2\" name=\"remarks\" [maxlength]=\"30\" [(ngModel)]=\"flight.remarks\">\n                    </div>\n                </div> \n            </div> \n            <div class=\"row\">\n                <div class=\"col-1 offset-4\" id=\"logit-button\">\n                    <button class=\"btn\" type=\"submit\" id=\"submit-button\" [disabled]=\"\"\n                    (click)=\"onSubmit(f)\">Log It!</button>\n                    <button id=\"openModalButton\" #openModalButton [hidden]=\"true\" data-toggle=\"modal\"\n                    data-target=\".bd-example-modal-sm\"></button>\n                </div>\n                <!--Completion Modal-->\n                <div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\n                aria-hidden=\"true\" id=\"successModal\">\n                    <div class=\"modal-dialog modal-sm\">\n                        <div class=\"modal-content\" id=\"submit-modal-content\">\n                            <div class=\"modal-header\" id=\"submit-modal-header\">\n                                <h3>Upload successful!</h3>\n                            </div>\n                            <div class=\"modal-body\">\n                                <p>Do you want to log another flight?<p>\n                            </div>\n                            <div class=\"modal-footer\">\n                                <button type=\"button\" class=\"btn\" id=\"yes-modal-button\" \n                                data-dismiss=\"modal\" (click)=\"onResetForm()\">Sure!</button>\n                                <button type=\"button\" class=\"btn\" id=\"no-modal-button\" \n                                data-dismiss=\"modal\" [routerLink]=\"['/main-menu']\">No thanks</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div> \n        </form>\n        </div>"

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"flight-log-container\"> \n    <div class=\"row\">\n        <div class=\"col-3\">\n            <div [routerLink]=\"['/main-menu']\" class=\"btn-info\" \n            id=\"back-icon\">Back</div>\n        </div>\n        <div class=\"col-6\" id=\"flight-log-title\">\n            <p>Flight Log</p>\n        </div> \n    </div>\n    <div id=\"page-breaker-line\"></div>\n    <div class=\"row\">\n        <!--Controls date picker modal-->\n        <div class=\"col-4 offset-4 btn-info\" id=\"date-range-button\" data-toggle=\"modal\" \n        data-target=\"#myModal\">\n            <span *ngIf=\"!datesSubmitted; else elseSpan\">Current</span>\n            <ng-template #elseSpan id=\"date-span\">{{fromDate.formatted}} <br>TO<br> {{toDate.formatted}}</ng-template>\n        </div>\n        <!--date picker modal-->\n        <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"#exampleModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\" id=\"modal-content-id\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Select date range</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <label for=\"from\">From</label>\n                    <ng2-datepicker [options]=\"fromOptions\" [(ngModel)]=\"fromDate\"></ng2-datepicker>\n                    <br>\n                    <label for=\"to\">To</label>\n                    <ng2-datepicker [options]=\"toOptions\" [(ngModel)]=\"toDate\"></ng2-datepicker>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn\" id=\"close-daterange-modal\" \n                    data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn\" id=\"save-daterange-modal\" \n                    (click)=\"sendDates()\" data-dismiss=\"modal\">Save Changes</button>\n                 </div>\n            </div>\n            </div>\n        </div> \n    </div>\n    <div *ngIf=\"!sortByDuty; else dutyHoursDiv\">       \n    <div class=\"row\">\n        <div class=\"col-5 offset-1 add-flight-list\">\n            <p>Total Hours</p>\n        </div>\n        <div class=\"col-3 offset-1 hours-box\">\n            {{totalHours}}\n        </div>\n    </div>\n    <div class=\"row flight-list-row\">\n        <div class=\"col-5 offset-1 add-flight-list\">\n            <p>Day</p>\n        </div>\n        <div class=\"col-3 offset-1 hours-box\">\n            {{dayHours}}\n        </div>\n    </div>  \n    <div class=\"row flight-list-row\">\n        <div class=\"col-5 offset-1 add-flight-list\">\n            <p>NVS</p>\n        </div>\n        <div class=\"col-3 offset-1 hours-box\">\n            {{nvsHours}}\n        </div>\n    </div>\n    <div class=\"row flight-list-row\">\n        <div class=\"col-5 offset-1 add-flight-list\">\n            <p>NVG</p>\n        </div>\n        <div class=\"col-3 offset-1 hours-box\">\n            {{nvgHours}}\n        </div>\n    </div> \n    <div class=\"row flight-list-row\">\n        <div class=\"col-5 offset-1 add-flight-list\">\n            <p>NVD</p>\n        </div>\n        <div class=\"col-3 offset-1 hours-box\">\n            {{nvdHours}}\n        </div>\n    </div> \n    <div class=\"row flight-list-row\">\n        <div class=\"col-5 offset-1 add-flight-list\">\n            <p>Hood</p>\n        </div>\n        <div class=\"col-3 offset-1 hours-box\">\n            {{hoodHours}}\n        </div>\n    </div>\n    <div class=\"row flight-list-row\">\n        <div class=\"col-5 offset-1 add-flight-list\">\n            <p>Night</p>\n        </div>\n        <div class=\"col-3 offset-1 hours-box\">\n            {{nightHours}}\n        </div>\n    </div>\n    <div class=\"row flight-list-row\">\n        <div class=\"col-5 offset-1 add-flight-list\">\n            <p>Weather</p>\n        </div>\n        <div class=\"col-3 offset-1 hours-box\">\n            {{weatherHours}}\n        </div>\n    </div> \n    <div class=\"row flight-list-row\">\n        <div class=\"col-5 offset-1 add-flight-list\">\n            <p>Sim</p>\n        </div>\n        <div class=\"col-3 offset-1 hours-box\">\n            {{simHours}}\n        </div>\n    </div>\n    </div>\n    <ng-template #dutyHoursDiv>\n    <div class=\"row\">\n        <div class=\"col-5 offset-1 add-flight-list\">\n            <p>Total Hours</p>\n        </div>\n        <div class=\"col-3 offset-1 hours-box\">\n            {{totalHours}}\n        </div>\n    </div>\n    <div class=\"row flight-list-row\">\n        <div class=\"col-5 offset-1 add-flight-list\">\n            <p>PI</p>\n        </div>\n        <div class=\"col-3 offset-1 hours-box\">\n            {{hoursPI}}\n        </div>\n    </div>  \n    <div class=\"row flight-list-row\">\n        <div class=\"col-5 offset-1 add-flight-list\">\n            <p>PC</p>\n        </div>\n        <div class=\"col-3 offset-1 hours-box\">\n            {{hoursPC}}\n        </div>\n    </div>\n    <div class=\"row flight-list-row\">\n        <div class=\"col-5 offset-1 add-flight-list\">\n            <p>IP</p>\n        </div>\n        <div class=\"col-3 offset-1 hours-box\">\n            {{hoursIP}}\n        </div>\n    </div> \n    <div class=\"row flight-list-row\">\n        <div class=\"col-5 offset-1 add-flight-list\">\n            <p>SP</p>\n        </div>\n        <div class=\"col-3 offset-1 hours-box\">\n            {{hoursSP}}\n        </div>\n    </div> \n    </ng-template>\n    <div class=\"row\" id=\"filter-buttons\">\n        <div class=\"col-3 offset-2 btn-info\" id=\"filterButton\"\n        (click)=\"filterDisplayHours()\">Filter</div>\n        <div class=\"col-3 offset-2 btn-info\" id=\"reqdButton\">Req'd</div>\n        \n    </div>\n</div>"

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"landing-menu-container\"> \n  <div class=\"row\">  \n    <div class=\"col-8 offset-2\" id=\"title-container\">\n     <h1><span id=\"log-name\">Log</span><span id=\"it-name\">It</span></h1>\n      <h4>AH-64D/E</h4> \n    </div>\n  </div>\n  <div class=\"row button-space\">\n      <div class=\"col-4 offset-4\" id=\"signin-button\"\n      [routerLink]=\"['/log-in']\">\n        <p>Sign In</p>\n      </div> \n  </div>\n  <div class=\"row button-space\">\n    <div class=\"col-4 offset-4\" id=\"signup-button\"\n      [routerLink]=\"['/sign-up']\">\n        <p>Sign Up</p>\n      </div> \n  </div>\n</div>\n"

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"log-in-container\">   \n  <div class=\"row\">\n    <div class=\"col-8 offset-2\" id=\"title-container\">\n       <h1><span id=\"log-name\">Log</span><span id=\"it-name\">It</span></h1>\n      <h4>AH-64D/E</h4>\n    </div> \n  </div> \n  <form #f=\"ngForm\">\n  <div class=\"form-group\">\n  <div class=\"row\" id=\"email-input-div\">\n    <div class=\"col-8 offset-2\"> \n      <label>Email:</label> <br>\n      <input type=\"email\" name=\"email\" id=\"email-input\" ngModel class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"row\" id=\"password-input-div\">\n    <div class=\"col-8 offset-2\">\n      <label>Password:</label> <br>\n      <input type=\"password\" name=\"password\" id=\"password-input\" ngModel class=\"form-control\">\n    </div>\n  </div> \n  <div class=\"row\" id=\"log-in-div\">\n    <div type=\"submit\" id=\"submit-button\" (click)=\"onSignIn(f)\"\n    class=\"col-4 offset-4 btn-info\">Sign In</div>\n    <button id=\"openModal\" #openModal [hidden]=\"true\" \n    data-toggle=\"modal\" data-target=\".bd-example-modal-sm\"></button>\n  </div>\n  </div>\n  </form>\n  <!--Log in fail notification modal -->\n  <div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\n  aria-hidden=\"true\" id=\"validation-modal\">\n    <div class=\"modal-dialog modal-sm\">\n      <div class=\"modal-content\" id=\"validation-modal-content\">\n        <div class=\"modal-header\" id=\"validation-modal-header\">\n          <h3>Login credentials incorrect</h3>\n        </div>\n        <div class=\"modal-body\">\n          <p>You have failed to login, either the email or password you have provided is incorrect.\n            Please try again.</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn\" \n          data-dismiss=\"modal\" id=\"modal-close-button\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"main-menu-container\">  \n    <div class=\"row\">\n        <div class=\"col-8 offset-2\" id=\"title-container\"> \n            <h1><span id=\"log-name\">Log</span><span id=\"it-name\">It</span></h1>\n            <h4>AH-64D/E</h4> \n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-4 offset-4 main-menu-item btn-info\" id=\"new-flight\"\n            [routerLink]=\"['/add-flight']\">\n                <p>New Flight</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-4 offset-4 main-menu-item btn-info\" id=\"view-log\"\n            [routerLink]=\"['/flight-log']\">\n                <p>View Log</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-4 offset-4 main-menu-item btn-info\" id=\"weather\">\n            <p>Weather</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-4 offset-4 main-menu-item btn-info\" id=\"notams\">\n            <p>NOTAMS</p>\n        </div>\n    </div>\n    <div class=\"navbar fixed-bottom\" id=\"logout-button-div\">\n        <div class=\"col-4 btn\" id=\"logout-button\" \n        (click)=\"onLogout()\">\n            <p>Log Out</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"sign-up-container\"> \n  <div class=\"row\">\n    <div class=\"col-8 offset-2\" id=\"title-container\">\n       <h1><span id=\"log-name\">Log</span><span id=\"it-name\">It</span></h1> \n      <h4>AH-64D/E</h4>\n    </div>\n  </div>\n  <form #f=\"ngForm\">\n  <div class=\"form-group\">\n    <div class=\"row\" id=\"name-input-div\">\n      <div class=\"col-8 offset-2\">\n        <label>Name:</label> <br>\n        <input type=\"name\" name=\"name\" id=\"name-input\" ngModel class=\"form-control\">\n      </div> \n    </div>\n    <div class=\"row\" id=\"email-input-div\">\n      <div class=\"col-8 offset-2\">\n        <label>Email:</label> <br>\n        <input type=\"email\" name=\"email\" id=\"email-input\" ngModel class=\"form-control\">\n      </div>\n    </div>\n    <div class=\"row\" id=\"password-input-div\">\n      <div class=\"col-8 offset-2\">\n        <label>Password:</label> <br>  \n        <input type=\"password\" name=\"password\" id=\"password-input\" ngModel class=\"form-control\">\n      </div>\n    </div>\n    <div class=\"row\" id=\"sign-up-div\">\n        <div type=\"submit\" (click)=\"onSignUp(f)\" id=\"submit-button\" \n        class=\"col-4 offset-4 btn-info\">Sign up</div>\n        <button id=\"openModal\" #openModal [hidden]=\"true\"\n        data-toggle=\"modal\" data-target=\".bd-example-modal-sm\"></button>\n    </div>\n  </div>\n  </form>\n  <!--Successful registration notification modal -->\n  <div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\n  aria-hidden=\"true\" id=\"register-modal\">\n    <div class=\"modal-dialog modal-sm\">\n      <div class=\"modal-content\" id=\"register-modal-content\">\n        <div class=\"modal-header\" id=\"register-modal-header\">\n          <h3>Success!!</h3>\n        </div>\n        <div class=\"modal-body\">\n          <p>You have successfully registered your account! You may now log in and use the app.</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-success\" id=\"modal-close-button\"\n          data-dismiss=\"modal\" [routerLink]=\"['../']\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(265);


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFlightService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddFlightService = (function () {
    function AddFlightService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    AddFlightService.prototype.logFlightData = function (formData) {
        console.log('logFlightData called!');
        return this.http.post('/data/log-flight', formData);
    };
    return AddFlightService;
}());
AddFlightService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AddFlightService);

var _a, _b;
//# sourceMappingURL=add-flight.service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_datepicker__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_flight_service__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFlightComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddFlightComponent = (function () {
    function AddFlightComponent(addFlight, _fb, rd) {
        this.addFlight = addFlight;
        this._fb = _fb;
        this.rd = rd;
        this.todayDate = new Date();
        this.remarksValue = '';
        //Static values for our user input menus
        this.seats = [
            { value: 'Front' },
            { value: 'Back' }
        ];
        this.dutySymbols = [
            { value: 'PI' },
            { value: 'PC' },
            { value: 'IP' },
            { value: 'SP' }
        ];
        this.flightSymbols = [
            { value: 'Day' },
            { value: 'Night' },
            { value: 'Sim' },
            { value: 'NVS' },
            { value: 'NVG' },
            { value: 'NVD' },
            { value: 'Hood' },
            { value: 'Wx' }
        ];
        this.options = new __WEBPACK_IMPORTED_MODULE_2_ng2_datepicker__["b" /* DatePickerOptions */]({
            initialDate: this.todayDate
        });
    }
    AddFlightComponent.prototype.ngOnInit = function () {
        //On initialization, set all the values to default
        this.initializeForm();
    };
    //Template driven form for static data handling
    AddFlightComponent.prototype.initializeForm = function () {
        this.flight = {
            date: this.date,
            hours: this.hours,
            remarks: this.remarksValue,
            seat: this.seats[0].value,
            dutySymbol: this.dutySymbols[0].value,
            flightSymbol: this.flightSymbols[0].value
        };
    };
    //Send the flight data  to the add-flight service 
    AddFlightComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (f.value.hours !== null && f.value.hours < 12.0) {
            this.addFlight.logFlightData(f.value)
                .subscribe(function (response) {
                console.log(response);
                if (response.status == 200) {
                    _this.openModal.nativeElement.click(); //Displays success modal
                }
            }, function (error) { return console.log(error); });
        }
        else {
        }
    };
    //Closes the dropdown menus when the user selects something
    AddFlightComponent.prototype.onDropdownSelect = function (event) {
        //Bind the input that the user is currently using
        var selected = event.path[4].id;
        //Utilize our local variable to determine which dropdown to close
        switch (selected) {
            case this.elFlight.nativeElement.id:
                this.rd.removeClass(this.elFlight.nativeElement, 'show');
                break;
            case this.elDuty.nativeElement.id:
                this.rd.removeClass(this.elDuty.nativeElement, 'show');
                break;
            case this.elSeat.nativeElement.id:
                this.rd.removeClass(this.elSeat.nativeElement, 'show');
                break;
        }
    };
    AddFlightComponent.prototype.onResetForm = function () {
        //Reset the form properties to their defaults, and reset date input
        this.flight.hours = this.hours;
        this.flight.remarks = this.remarksValue;
        this.flight.seat = this.seats[0].value;
        this.flight.dutySymbol = this.dutySymbols[0].value;
        this.flight.flightSymbol = this.flightSymbols[0].value;
    };
    return AddFlightComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('elFlight'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], AddFlightComponent.prototype, "elFlight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('elDuty'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _b || Object)
], AddFlightComponent.prototype, "elDuty", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('elSeat'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _c || Object)
], AddFlightComponent.prototype, "elSeat", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('openModalButton'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _d || Object)
], AddFlightComponent.prototype, "openModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('openSecModal'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _e || Object)
], AddFlightComponent.prototype, "openSecModal", void 0);
AddFlightComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-add-flight',
        template: __webpack_require__(344),
        styles: [__webpack_require__(333)]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__add_flight_service__["a" /* AddFlightService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__add_flight_service__["a" /* AddFlightService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* Renderer2 */]) === "function" && _h || Object])
], AddFlightComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=add-flight.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_log_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_datepicker__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlightLogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlightLogComponent = (function () {
    function FlightLogComponent(viewLog) {
        this.viewLog = viewLog;
        this.todayDate = new Date();
        this.datesSubmitted = false;
        this.datesInvalid = false;
        this.sortByDuty = false; //Determines whether hours are sorted via duty symbol or flight symbol
        //Holds the raw flight symbol hours after being sorted, before being rounded
        this.rawFlightHours = {
            totalHours: 0,
            dayHours: 0,
            nvsHours: 0,
            nvgHours: 0,
            nvdHours: 0,
            hoodHours: 0,
            nightHours: 0,
            weatherHours: 0,
            simHours: 0
        };
        //Raw duty hours before being rounded
        this.rawDutyHours = {
            hoursPI: 0,
            hoursPC: 0,
            hoursIP: 0,
            hoursSP: 0
        };
        this.fromOptions = new __WEBPACK_IMPORTED_MODULE_2_ng2_datepicker__["b" /* DatePickerOptions */]({
            initialDate: this.todayDate
        });
        this.toOptions = new __WEBPACK_IMPORTED_MODULE_2_ng2_datepicker__["b" /* DatePickerOptions */]({
            initialDate: this.todayDate
        });
    }
    FlightLogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewLog.pullHours() //Have the service pull hours from the DB on form initialization
            .subscribe(function (flightData) {
            _this.flightSymbolSort(flightData);
        });
        this.roundHours(); //Shows previously saved hours while waiting for server response to pull hours
    };
    //Only way to allow .toFixed(1) to be called on hours, was to reassign them to new local variables
    //ensuring correct addition of hours for their display
    FlightLogComponent.prototype.roundHours = function () {
        this.totalHours = this.rawFlightHours.totalHours.toFixed(1);
        this.dayHours = this.rawFlightHours.dayHours.toFixed(1);
        this.nvsHours = this.rawFlightHours.nvsHours.toFixed(1);
        this.nvgHours = this.rawFlightHours.nvgHours.toFixed(1);
        this.nvdHours = this.rawFlightHours.nvdHours.toFixed(1);
        this.hoodHours = this.rawFlightHours.hoodHours.toFixed(1);
        this.nightHours = this.rawFlightHours.nightHours.toFixed(1);
        this.weatherHours = this.rawFlightHours.weatherHours.toFixed(1);
        this.simHours = this.rawFlightHours.simHours.toFixed(1);
    };
    FlightLogComponent.prototype.sortTotalHours = function (flightData) {
        var totalHours = 0;
        for (var hours in flightData) {
            totalHours += flightData[hours].hours;
        }
        this.rawFlightHours.totalHours = totalHours;
    };
    FlightLogComponent.prototype.flightSymbolSort = function (flightData) {
        //Loop through the returned flight hours, separate them by flightSymbol, and add to corresponding variables
        for (var data in flightData) {
            flightData[data].flightSymbol == 'Day' ? this.rawFlightHours.dayHours += flightData[data].hours
                : flightData[data].flightSymbol == 'Night' ? this.rawFlightHours.nightHours += flightData[data].hours
                    : flightData[data].flightSymbol == 'Sim' ? this.rawFlightHours.simHours += flightData[data].hours
                        : flightData[data].flightSymbol == 'NVS' ? this.rawFlightHours.nvsHours += flightData[data].hours
                            : flightData[data].flightSymbol == 'NVG' ? this.rawFlightHours.nvgHours += flightData[data].hours
                                : flightData[data].flightSymbol == 'NVD' ? this.rawFlightHours.nvdHours += flightData[data].hours
                                    : flightData[data].flightSymbol == 'Hood' ? this.rawFlightHours.hoodHours += flightData[data].hours
                                        : flightData[data].flightSymbol == 'Wx' ? this.rawFlightHours.weatherHours += flightData[data].hours : null;
        }
        this.sortTotalHours(flightData);
        this.roundHours();
    };
    //Not yet called anywhere
    FlightLogComponent.prototype.dutySymbolSort = function (flightData) {
        for (var data in flightData) {
            flightData[data].dutySymbol == 'PI' ? this.rawDutyHours.hoursPI += flightData[data].hours
                : flightData[data].dutySymbol == 'PC' ? this.rawDutyHours.hoursPC += flightData[data].hours
                    : flightData[data].dutySymbol == 'IP' ? this.rawDutyHours.hoursIP += flightData[data].hours
                        : flightData[data].dutySymbol == 'SP' ? this.rawDutyHours.hoursSP += flightData[data].hours : null;
        }
        this.sortTotalHours(flightData);
        this.roundHours();
    };
    //Date range validation logic. Ensures users enter a date range from a point in the past to a point in the 
    //future. If they input an incorrect date range the button/date range display willd default back to current
    FlightLogComponent.prototype.sendDates = function () {
        this.fromDate.year > this.toDate.year ? this.datesSubmitted = false //Failed
            : this.fromDate.month > this.toDate.month ? this.datesSubmitted = false //Failed
                : this.fromDate.month < this.toDate.month ? this.datesSubmitted = true //Pass 
                    : this.fromDate.day <= this.toDate.day ? this.datesSubmitted = true //Pass 
                        : this.datesSubmitted = false; //Failed
    };
    FlightLogComponent.prototype.filterDisplayHours = function () {
        this.sortByDuty = (!this.sortByDuty);
        console.log(this.sortByDuty);
    };
    return FlightLogComponent;
}());
FlightLogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-flight-log',
        template: __webpack_require__(346),
        styles: [__webpack_require__(334)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__view_log_service__["a" /* ViewLogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__view_log_service__["a" /* ViewLogService */]) === "function" && _a || Object])
], FlightLogComponent);

var _a;
//# sourceMappingURL=flight-log.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingMenuComponent = (function () {
    function LandingMenuComponent() {
    }
    LandingMenuComponent.prototype.ngOnInit = function () {
    };
    return LandingMenuComponent;
}());
LandingMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-landing-menu',
        template: __webpack_require__(347),
        styles: [__webpack_require__(335)]
    }),
    __metadata("design:paramtypes", [])
], LandingMenuComponent);

//# sourceMappingURL=landing-menu.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogInComponent = (function () {
    function LogInComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    LogInComponent.prototype.ngOnInit = function () {
    };
    LogInComponent.prototype.onSignIn = function (form) {
        var _this = this;
        this.auth.signinUser(form.value)
            .subscribe(function (res) {
            var validation = res.json();
            if (validation.key === true) {
                _this.router.navigate(['/main-menu']);
                _this.auth.userSignIn();
            }
            else {
                _this.openModal.nativeElement.click();
            }
        });
    };
    return LogInComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('openModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], LogInComponent.prototype, "openModal", void 0);
LogInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-log-in',
        template: __webpack_require__(348),
        styles: [__webpack_require__(336)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], LogInComponent);

var _a, _b, _c;
//# sourceMappingURL=log-in.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainMenuComponent = (function () {
    function MainMenuComponent(auth) {
        this.auth = auth;
    }
    MainMenuComponent.prototype.ngOnInit = function () {
    };
    MainMenuComponent.prototype.onLogout = function () {
        this.auth.onLogout();
    };
    return MainMenuComponent;
}());
MainMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-main-menu',
        template: __webpack_require__(349),
        styles: [__webpack_require__(337)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], MainMenuComponent);

var _a;
//# sourceMappingURL=main-menu.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationGuard = (function () {
    function AuthenticationGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthenticationGuard.prototype.canActivate = function (route, state) {
        if (this.auth.isSignedIn() === true) {
            return true;
        }
        else {
            this.router.navigate(['./']);
        }
    };
    return AuthenticationGuard;
}());
AuthenticationGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthenticationGuard);

var _a, _b;
//# sourceMappingURL=routing-guard.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUpComponent = (function () {
    function SignUpComponent(auth) {
        this.auth = auth;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.onSignUp = function (form) {
        var _this = this;
        this.auth.signUpUser(form.value)
            .subscribe(function (res) {
            if (res.status == 200) {
                _this.openModal.nativeElement.click();
            }
        }, function (err) { return console.log(err); });
    };
    return SignUpComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('openModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], SignUpComponent.prototype, "openModal", void 0);
SignUpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-sign-up',
        template: __webpack_require__(350),
        styles: [__webpack_require__(338)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], SignUpComponent);

var _a, _b;
//# sourceMappingURL=sign-up.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewLogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewLogService = (function () {
    function ViewLogService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    ViewLogService.prototype.pullHours = function () {
        console.log('Pulling hours!');
        return this.http.get('/data/flightLog')
            .map(function (response) {
            var data = response.json();
            return data;
        });
    };
    return ViewLogService;
}());
ViewLogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], ViewLogService);

var _a, _b;
//# sourceMappingURL=view-log.service.js.map

/***/ })

},[617]);
//# sourceMappingURL=main.bundle.js.map