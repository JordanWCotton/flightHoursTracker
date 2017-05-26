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
exports.push([module.i, "/*Add New Style page */ \r\n \r\n#add-new-flight-container {\r\n    padding-top: 10px;\r\n    background-color: #F2F2F2;\r\n    height: 100vh; \r\n    font-family: 'Playfair Display', serif;\r\n} \r\n\r\n#back-icon {\r\n    background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n    font-weight: 800;\r\n    font-family: 'Playfair Display', serif;\r\n    border-radius: 6px;\r\n    padding: 3px;\r\n}\r\n\r\n#add-flight-title {\r\n    font-size: 150%;\r\n    text-align: center;\r\n    font-weight: 600;\r\n}\r\n\r\n#page-breaker-line {\r\n    height: 1px;\r\n    background-color: #2E2E2E;\r\n}\r\n\r\n#date-selector {\r\n    margin-top: 1%;\r\n}\r\n\r\n#data-selector-tooltip {\r\n    margin-top: 1%;\r\n    font-size: 0.8em;\r\n    margin-bottom: 1%;\r\n} \r\n\r\n#flight-title-container {\r\n    font-size: 240%;\r\n    text-align: center;\r\n}\r\n\r\n#first-flight-row {\r\n    margin-top: 5%;\r\n}\r\n\r\n.dropdown-menu { \r\n    background-color: #fff;\r\n    text-align: center;\r\n    min-width: auto;\r\n    width: 80px; \r\n    padding-right: 20%;\r\n    padding-left: 20%;\r\n    font-size: 1.2em;\r\n}\r\n\r\nul input {\r\n    display: none; /* Hide radio button */\r\n}\r\n \r\n.radioSel {\r\n background-color: grey;   \r\n}\r\n\r\n.add-flight-selectors {\r\n    font-family: 'Playfair Display', serif;\r\n    font-weight: 800;\r\n}\r\n\r\n.add-flight-selectors p {\r\n    margin: 0; \r\n}\r\n\r\n.hours-input-box {\r\n    text-align: center;\r\n    width: 60px;\r\n    height: 40px;\r\n    border-radius: 6px;\r\n}\r\n\r\n#flightDropdownOne, #flightDropdownTwo, #flightDropdownThree {\r\n    background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n    font-weight: 800;\r\n    font-family: 'Playfair Display', serif;\r\n    width: 60px; /* try 80 */\r\n    border-radius: 6px;\r\n}\r\n\r\n#seatDropdownOne, #seatDropdownTwo, #seatDropdownThree {\r\n    background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n    font-weight: 800;\r\n    font-family: 'Playfair Display', serif;\r\n    width: 60px;\r\n    border-radius: 6px;\r\n}\r\n\r\n#dutyDropdownOne, #dutyDropdownTwo, #dutyDropdownThree {\r\n    background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n    font-weight: 800;\r\n    width: 60px;\r\n} \r\n\r\n#submit-button {\r\n    background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n    font-weight: 800;\r\n    font-family: 'Playfair Display', serif;\r\n    margin-top: 2%;\r\n    border-radius: 6px;\r\n}\r\n\r\n#submit-modal-content {\r\n    text-align: center;\r\n    background-color: #F2F2F2;\r\n    color: #2E2E2E;\r\n} \r\n\r\n.flight-list-row {\r\n    margin-top: 2%;\r\n}\r\n\r\n#last-list-row {\r\n    margin-top: 3%;\r\n}\r\n\r\n#logit-button {\r\n    margin-top: 2%;\r\n }\r\n\r\n .add-flight-remarks {\r\n     max-width: 30%;\r\n }\r\n\r\n #yes-modal-button {\r\n     background-color: #8FC4D9;\r\n    color: #2E2E2E; \r\n    font-weight: 800;\r\n }\r\n\r\n #no-modal-button {\r\n     background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n    font-weight: 800;\r\n }\r\n\r\n .first-row-item {\r\n     margin-left: 8%;\r\n }\r\n\r\n .next-row-item {\r\n     margin-left: 10%;\r\n }\r\n\r\n/*Mobile specific */\r\n @media only screen and (max-width: 840px) {\r\n     #add-flight-date { \r\n        margin-top: 3%;\r\n    }\r\n\r\n    #date-selector {\r\n        margin-top: 5%;\r\n    }\r\n\r\n    #last-list-row {\r\n        margin-top: 9%;\r\n    }\r\n\r\n    .flight-list-row {\r\n        margin-top: 3%;\r\n    }\r\n\r\n    .add-flight-remarks {\r\n        max-width: 100%;\r\n    }\r\n }\r\n\r\n /* Tiny Mobile */ \r\n @media only screen and (max-height: 570px) {\r\n     .flight-list-row {\r\n         margin-top: 3%;\r\n     }\r\n\r\n     .first-row-item {\r\n         margin-left: 0%;\r\n     }\r\n\r\n     .hours-input-box {\r\n        width: 50px;\r\n        height: 35px;\r\n    }\r\n\r\n    #add-flight-title {\r\n        font-size: 140%;\r\n        margin-left: 4%;\r\n    }\r\n\r\n }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "/* Flight Log page */\r\n\r\n#flight-log-container {\r\n    padding-top: 10px;\r\n    background-color: #F2F2F2; \r\n    height: 100vh; \r\n    font-family: 'Playfair Display', serif;\r\n}\r\n\r\n#back-icon {\r\n    background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n    font-weight: 800;\r\n    font-family: 'Playfair Display', serif;\r\n    border-radius: 6px;\r\n    padding: 3px;\r\n}\r\n\r\n#flight-log-title {\r\n    font-size: 150%;\r\n    text-align: center;\r\n    font-weight: 600;\r\n}\r\n\r\n.page-breaker-line {\r\n    height: 1px;\r\n    background-color:#2E2E2E;\r\n}\r\n\r\n#date-range-row { \r\n    margin-top: 2%;\r\n    margin-bottom: 1%;\r\n} \r\n\r\n.header-row {\r\n    font-weight: 600;\r\n}\r\n\r\n#modal-content-id {\r\n    background-color: #F2F2F2; \r\n    color: #2E2E2E;\r\n}\r\n\r\n#close-daterange-modal {\r\n    background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n    font-weight: 800;\r\n}\r\n\r\n#close-remarks-modal {\r\n    background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n    font-weight: 800;\r\n}\r\n\r\n#save-daterange-modal {\r\n    background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n    font-weight: 800;\r\n}\r\n\r\n#date-range-button {\r\n    background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n    font-family: 'Playfair Display', serif;\r\n    margin-bottom: 2%;\r\n    border-radius: 6px;\r\n    text-align: center;\r\n    font-weight: 800;\r\n}\r\n\r\n#new-range-button {\r\n    background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n    font-family: 'Playfair Display', serif;\r\n    border-radius: 6px;\r\n    text-align: center;\r\n    font-weight: 800;\r\n}\r\n\r\n#date-range {\r\n    color: #2E2E2E; \r\n    font-weight: 800;\r\n}\r\n\r\n#exampleModelLabel h5 {\r\n    color: #2E2E2E;\r\n}\r\n\r\n.add-flight-list {\r\n    text-align: center;\r\n}\r\n\r\n.hours-box {\r\n    text-align: center;\r\n}\r\n.hours-box p {\r\n    border: 2px solid #2E2E2E;\r\n}\r\n\r\n#filter-buttons {\r\n    margin-top: 1%;\r\n}\r\n\r\n#filterButton, #reqdButton {\r\n    background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n    font-weight: 800;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    margin-top: 5%;\r\n}\r\n\r\n.custom-col {\r\n    margin-left: 3%;\r\n}\r\n\r\n.log-display {\r\n    margin-left: 3%;\r\n}\r\n\r\n#rmk-button {\r\n    width: 50px;\r\n    height: 85%;\r\n    border-radius: 10px;\r\n    margin-top: 5%;\r\n    padding: 2px;\r\n    background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n}\r\n\r\n#big-flight-log {\r\n    height: 400px;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.bottom-log-btn {\r\n    text-align: center;\r\n    margin-top: 1%;\r\n    border-radius: 6px;\r\n}\r\n\r\n#view-totals-btn {\r\n    background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n    font-weight: 800;\r\n}\r\n\r\n#edit-flights-btn {\r\n    background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n    font-weight: 800;\r\n}\r\n\r\n#show-flight-list {\r\n    background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n    font-weight: 800;\r\n    margin-top: 3%;\r\n}\r\n\r\n.low-button-row {\r\n    margin-top: 3%;\r\n}\r\n\r\n.not-met {\r\n    background-color: #e74c3c;\r\n    border-radius: 6px;\r\n}\r\n\r\n.is-met {\r\n    background-color: #27ae60;\r\n}\r\n\r\n@media only screen and (max-height: 570px) {\r\n    #big-flight-log {\r\n        height: 325px;\r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "/* Landing menu page */ \r\n \r\n#landing-menu-container { \r\n    background-color: #F2F2F2;   \r\n    height: 100vh;  \r\n    font-family: 'Playfair Display', serif;\r\n}   \r\n\r\n#title-container {\r\n    text-align: center;\r\n    margin-top: 3%;\r\n    margin-bottom: 3%;\r\n}\r\n\r\n#title-container img {\r\n    height: 250px;\r\n    width: 240px;\r\n}\r\n\r\n.button-space {\r\n    margin-top: 5%;\r\n}\r\n\r\n#log-in-div {\r\n    margin-top: 15%;\r\n}\r\n\r\n.menu-buttons {\r\n    font-family: 'Playfair Display', serif;\r\n    font-weight: 800;\r\n}\r\n\r\n#signin-button {\r\n    background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n    text-align: center;\r\n    width: 100%;\r\n    border-radius: 6px;\r\n}\r\n\r\n#signup-button {\r\n    background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n    text-align: center;\r\n    width: 100%;\r\n    border-radius: 6px;\r\n}\r\n\r\n\r\n/*Mobile specific */\r\n@media only screen and (max-width: 840px) {\r\n    .button-space {\r\n        margin-top: 20%;\r\n    }\r\n\r\n    #title-container {\r\n        margin-top: 7%;\r\n        margin-bottom: 6%;\r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "/* Log in page */\r\n \r\n#log-in-container {\r\n    background-color: #F2F2F2;\r\n    height: 100vh;  \r\n    font-family: 'Playfair Display', serif;\r\n} \r\n\r\n#title-container {\r\n    text-align: center;\r\n    margin-top: 3%;\r\n    margin-bottom: 3%;\r\n}\r\n\r\n#title-container img {\r\n    height: 250px;\r\n    width: 240px;\r\n}\r\n\r\n#email-input-div {\r\n    margin-top: 10%;\r\n}\r\n\r\n#log-in-div {\r\n    margin-top: 8%;\r\n}\r\n\r\n#submit-button {\r\n    background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    font-family: 'Playfair Display', serif;\r\n    font-weight: 800;\r\n}\r\n\r\n#validation-modal-content {\r\n    text-align: center;\r\n    background-color: #F2F2F2;\r\n    color: #2E2E2E;\r\n}\r\n\r\n#modal-close-button {\r\n    background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n    font-family: 'Playfair Display', serif;\r\n    font-weight: 800;\r\n}\r\n\r\n/*Mobile specific */\r\n@media only screen and (max-width: 840px) {\r\n    #title-container {\r\n        margin-top: 7%;\r\n        margin-bottom: 6%;\r\n    }\r\n\r\n    #email-input-div {\r\n        margin-top: 5%;\r\n    }\r\n\r\n    #log-in-div {\r\n        margin-top: 5%;\r\n    }\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "/* Main Menu page */ \r\n#main-menu-container {\r\n    background-color: #F2F2F2;\r\n    height: 100vh; \r\n    font-family: 'Playfair Display', serif;\r\n}\r\n\r\n#title-container {\r\n    text-align: center;\r\n    margin-top: 1%;\r\n    margin-bottom: 1%;\r\n}\r\n\r\n#title-container img {\r\n    height: 250px;\r\n    width: 240px;\r\n}\r\n \r\n#new-flight, #weather, #view-log, #notams {\r\n    background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n}\r\n\r\n.main-menu-item {\r\n    text-align: center;\r\n    margin-top: 1%;\r\n    border-radius: 6px;\r\n    font-family: 'Playfair Display', serif;\r\n    font-weight: 800;\r\n}\r\n\r\n.main-menu-item p {\r\n    font-size: 95%;\r\n}\r\n\r\n#new-flight {\r\n    margin-top: 2%;\r\n}\r\n\r\n#logout-button {\r\n    background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n    border-radius: 6px;\r\n    margin-top: 20%;\r\n}\r\n\r\n/*Mobile specific */\r\n@media only screen and (max-width: 840px) {\r\n    #title-container {\r\n        margin-top: 7%;\r\n        margin-bottom: 6%;\r\n    }\r\n\r\n    .main-menu-item {\r\n        margin-top: 3%;\r\n    }\r\n\r\n    #new-flight {\r\n        margin-top: 5%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "/* Sign up page */\r\n  \r\n#sign-up-container { \r\n    background-color: #F2F2F2;\r\n    height: 100vh; \r\n    font-family: 'Playfair Display', serif; \r\n}\r\n\r\n#title-container {\r\n    text-align: center;\r\n    margin-top: 3%;\r\n    margin-bottom: 3%;\r\n}\r\n\r\n#title-container img {\r\n    height: 250px;\r\n    width: 240px;\r\n}\r\n\r\n#sign-up-div {\r\n    margin-top: 5%;\r\n}\r\n\r\n#submit-button {\r\n    background-color: #8FC4D9;\r\n    color: #2E2E2E;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    font-family: 'Playfair Display', serif;\r\n    font-weight: 800;\r\n}\r\n\r\n#register-modal-content {\r\n    text-align: center;\r\n    background-color: #F2F2F2;\r\n    color: #2E2E2E;\r\n}\r\n\r\n#modal-close-button {\r\n    background-color: #8FC4D9;\r\n     font-family: 'Playfair Display', serif;\r\n    color: #2E2E2E;\r\n    font-weight: 800; \r\n}\r\n\r\n/*Mobile specific */\r\n@media only screen and (max-width: 840px) {\r\n    #title-container {\r\n        margin-top: 7%;\r\n        margin-bottom: 6%;\r\n    }\r\n\r\n    #sign-up-div {\r\n        margin-top: 5%;\r\n    }\r\n}", ""]);

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

module.exports = "<div class=\"container-fluid\" id=\"add-new-flight-container\">  \n           <div class=\"row\">  \n                <div class=\"col-3\">\n                    <span [routerLink]=\"['/main-menu']\" id=\"back-icon\">Back</span> \n                </div>\n                <div class=\"col-6\" id=\"add-flight-title\">\n                    <p>Add Flight</p>\n                </div>\n            </div>\n            <div id=\"page-breaker-line\"></div>\n            <form #f=\"ngForm\">\n            <div class=\"row\">\n                <div class=\"col-12\" id=\"date-selector\">\n                    <ng2-datepicker [options]=\"options\" name=\"date\" \n                    [(ngModel)]=\"flight.date\"></ng2-datepicker>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12\" id=\"flight-title-container\">\n                    <p>Flight</p>\n                </div>\n            </div>\n            <div class=\"row\" id=\"first-flight-row\">\n                <div class=\"col-3 add-flight-list\"> \n                    <p>Flight Symbol</p>\n                </div>\n                <div class=\"col-1 first-row-item\">\n                    <div class=\"dropdown\" id=\"elFlight\" #elFlight>\n                        <button class=\"btn add-flight-selectors\" type=\"button\" id=\"flightDropdownOne\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                            <span *ngIf=\"f.value.flightSymbolOne == ''; else flightSymbolOneVal\">Day</span>\n                            <ng-template #flightSymbolOneVal>{{f.value.flightSymbolOne}}</ng-template>\n                        </button>\n                        <ul class=\"dropdown-menu\" aria-labelledby=\"flightDropdownOne\">\n                            <div *ngFor=\"let flightSymbol of flightSymbolsOne\">\n                                <label>\n                                <input type=\"radio\" name=\"flightSymbolOne\" [(ngModel)]=\"flight.flightSymbolOne\"\n                                [value]=\"flightSymbol.value\" (click)=\"onDropdownSelect($event)\" class=\"radioSel\">\n                                    {{flightSymbol.value}}\n                                </label>\n                            </div>\n                        </ul>\n                    </div>\n                </div> \n                <div class=\"col-1 next-row-item\"> \n                    <div class=\"dropdown\" id=\"elFlight\" #elFlight>\n                        <button class=\"btn add-flight-selectors\" type=\"button\" id=\"flightDropdownTwo\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                            <span *ngIf=\"f.value.flightSymbolTwo == ''; else flightSymbolTwoVal\">Day</span>\n                            <ng-template #flightSymbolTwoVal>{{f.value.flightSymbolTwo}}</ng-template>\n                        </button>\n                        <ul class=\"dropdown-menu\" aria-labelledby=\"flightDropdownTwo\">\n                            <div *ngFor=\"let flightSymbol of flightSymbolsTwo\">\n                                <label>\n                                <input type=\"radio\" name=\"flightSymbolTwo\" [(ngModel)]=\"flight.flightSymbolTwo\"\n                                [value]=\"flightSymbol.value\" (click)=\"onDropdownSelect($event)\" class=\"radioSel\">\n                                    {{flightSymbol.value}}\n                                </label>\n                            </div>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col-1 next-row-item\"> \n                    <div class=\"dropdown\" id=\"elFlight\" #elFlight>\n                        <button class=\"btn add-flight-selectors\" type=\"button\" id=\"flightDropdownThree\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                            <span *ngIf=\"f.value.flightSymbolThree == ''; else flightSymbolThreeVal\">Day</span>\n                            <ng-template #flightSymbolThreeVal>{{f.value.flightSymbolThree}}</ng-template>\n                        </button>\n                        <ul class=\"dropdown-menu\" aria-labelledby=\"flightDropdownThree\">\n                            <div *ngFor=\"let flightSymbol of flightSymbolsThree\">\n                                <label>\n                                <input type=\"radio\" name=\"flightSymbolThree\" [(ngModel)]=\"flight.flightSymbolThree\"\n                                [value]=\"flightSymbol.value\" (click)=\"onDropdownSelect($event)\" class=\"radioSel\">\n                                    {{flightSymbol.value}}\n                                </label>\n                            </div>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n           <div class=\"row flight-list-row\">\n                <div class=\"col-3 add-flight-list\">\n                    <p>Duty Symbol</p>\n                </div>\n                <div class=\"col-1 first-row-item\">\n                    <div class=\"dropdown\" #elDuty id=\"elDuty\">\n                        <button class=\"btn add-flight-selectors\" type=\"button\" id=\"dutyDropdownOne\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                            <span *ngIf=\"f.value.dutySymbolOne == ''; else dutySymbolOneVal\">PI</span>\n                            <ng-template #dutySymbolOneVal>{{f.value.dutySymbolOne}}</ng-template>\n                        </button>\n                        <ul class=\"dropdown-menu\" aria-labelledby=\"dutyDropdownOne\">\n                            <div *ngFor=\"let dutySymbol of dutySymbolsOne\">\n                                <label>\n                                <input type=\"radio\" name=\"dutySymbolOne\" [(ngModel)]=\"flight.dutySymbolOne\"\n                                [value]=\"dutySymbol.value\" (click)=\"onDropdownSelect($event)\">\n                                    {{dutySymbol.value}}\n                                </label>\n                            </div>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col-1 next-row-item\">\n                    <div class=\"dropdown\" #elDutyTwo id=\"elDutyTwo\">\n                        <button class=\"btn add-flight-selectors\" type=\"button\" id=\"dutyDropdownTwo\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                            <span *ngIf=\"f.value.dutySymbolTwo == ''; else dutySymbolTwoVal\">PI</span>\n                            <ng-template #dutySymbolTwoVal>{{f.value.dutySymbolTwo}}</ng-template>\n                        </button>\n                        <ul class=\"dropdown-menu\" aria-labelledby=\"dutyDropdownTwo\">\n                            <div *ngFor=\"let dutySymbol of dutySymbolsTwo\">\n                                <label>\n                                <input type=\"radio\" name=\"dutySymbolTwo\" [(ngModel)]=\"flight.dutySymbolTwo\"\n                                [value]=\"dutySymbol.value\" (click)=\"onDropdownSelect($event)\">\n                                    {{dutySymbol.value}}\n                                </label>\n                            </div>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col-1 next-row-item\">\n                    <div class=\"dropdown\" #elDutyThree id=\"elDutyThree\">\n                        <button class=\"btn add-flight-selectors\" type=\"button\" id=\"dutyDropdownThree\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                            <span *ngIf=\"f.value.dutySymbolThree == ''; else dutySymbolThreeVal\">PI</span>\n                            <ng-template #dutySymbolThreeVal>{{f.value.dutySymbolThree}}</ng-template>\n                        </button>\n                        <ul class=\"dropdown-menu\" aria-labelledby=\"dutyDropdownThree\">\n                            <div *ngFor=\"let dutySymbol of dutySymbolsThree\">\n                                <label>\n                                <input type=\"radio\" name=\"dutySymbolThree\" [(ngModel)]=\"flight.dutySymbolThree\"\n                                [value]=\"dutySymbol.value\" (click)=\"onDropdownSelect($event)\">\n                                    {{dutySymbol.value}}\n                                </label>\n                            </div>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row flight-list-row\">\n                <div class=\"col-3 add-flight-list\">\n                    <p>Flight Hours</p>\n                </div>\n                <div class=\"col-1 first-row-item\">\n                    <div class=\"input-group add-flight-selectors\">\n                        <input type=\"number\" id=\"hours-inputOne\" class=\"hours-input-box\" placeholder=\"0.0\" \n                        aria-describedby=\"sizing-addon1\" name=\"hoursOne\" [(ngModel)]=\"flight.hoursOne\">\n                    </div>\n                </div>\n                <div class=\"col-1 next-row-item\">\n                    <div class=\"input-group add-flight-selectors\">\n                        <input type=\"number\" id=\"hours-inputTwo\" class=\"hours-input-box\" placeholder=\"0.0\" \n                        aria-describedby=\"sizing-addon1\" name=\"hoursTwo\" [(ngModel)]=\"flight.hoursTwo\">\n                    </div>\n                </div>\n                <div class=\"col-1 next-row-item\">\n                    <div class=\"input-group add-flight-selectors\">\n                        <input type=\"number\" id=\"hours-inputThree\" class=\"hours-input-box\" placeholder=\"0.0\" \n                        aria-describedby=\"sizing-addon1\" name=\"hoursThree\" [(ngModel)]=\"flight.hoursThree\">\n                    </div>\n                </div>\n            </div> \n            <!-- <div class=\"row\">\n                <div class=\"alert alert-danger col-5 offset-4\" role=\"alert\" id=\"hours-alert\"\n                *ngIf=\"f.value.hours > 12.0\">\n                    <p>Too high!</p>    \n                </div>  \n            </div> -->\n            <div class=\"row flight-list-row\">\n                <div class=\"col-3 add-flight-list\">\n                    <p>Seat</p>\n                </div>\n                <div class=\"col-1 first-row-item\">\n                    <div class=\"dropdown\" #elSeat id=\"elSeat\">\n                        <button class=\"btn add-flight-selectors\" type=\"button\" id=\"seatDropdownOne\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                            <span *ngIf=\"f.value.seatOne == ''; else seatOneVal\">F</span>\n                            <ng-template #seatOneVal>{{f.value.seatOne}}</ng-template>\n                        </button>\n                        <ul class=\"dropdown-menu\" aria-labelledby=\"seatDropdownOne\">\n                            <div *ngFor=\"let seats of seatOne\">\n                                <label>\n                                <input type=\"radio\" name=\"seatOne\" [(ngModel)]=\"flight.seatOne\"\n                                [value]=\"seats.value\" (click)=\"onDropdownSelect($event)\">\n                                {{seats.value}}\n                                </label>\n                            </div> \n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col-1 next-row-item\">\n                    <div class=\"dropdown\" #elSeatTwo id=\"elSeatTwo\">\n                        <button class=\"btn add-flight-selectors\" type=\"button\" id=\"seatDropdownTwo\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                            <span *ngIf=\"f.value.seatTwo == ''; else seatTwoVal\">F</span>\n                            <ng-template #seatTwoVal>{{f.value.seatTwo}}</ng-template>\n                        </button>\n                        <ul class=\"dropdown-menu\" aria-labelledby=\"seatDropdownTwo\">\n                            <div *ngFor=\"let seats of seatTwo\">\n                                <label>\n                                <input type=\"radio\" name=\"seatTwo\" [(ngModel)]=\"flight.seatTwo\"\n                                [value]=\"seats.value\" (click)=\"onDropdownSelect($event)\">\n                                {{seats.value}}\n                                </label>\n                            </div>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col-1 next-row-item\">\n                    <div class=\"dropdown\" #elSeatThree id=\"elSeatThree\">\n                        <button class=\"btn add-flight-selectors\" type=\"button\" id=\"seatDropdownThree\"\n                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n                            <span *ngIf=\"f.value.seatThree == ''; else seatThreeVal\">F</span>\n                            <ng-template #seatThreeVal>{{f.value.seatThree}}</ng-template>\n                        </button>\n                        <ul class=\"dropdown-menu\" aria-labelledby=\"seatDropdownThree\">\n                            <div *ngFor=\"let seats of seatThree\">\n                                <label>\n                                <input type=\"radio\" name=\"seatThree\" [(ngModel)]=\"flight.seatThree\"\n                                [value]=\"seats.value\" (click)=\"onDropdownSelect($event)\">\n                                {{seats.value}}\n                                </label>\n                            </div>\n                        </ul>\n                    </div> \n                </div>\n            </div> \n            <div class=\"row\" id=\"last-list-row\"> \n                <div class=\"col-3 add-flight-list flight-list-centered\">\n                    <p>Remarks</p>\n                </div>\n                <div class=\"col-7 add-flight-remarks first-row-item\">\n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter remarks...\" \n                        aria-describedby=\"sizing-addon2\" name=\"remarks\" [maxlength]=\"30\" [(ngModel)]=\"flight.remarks\">\n                    </div>\n                </div> \n            </div> \n            <div class=\"row\">\n                <!--<div class=\"col-1 offset-4\" id=\"logit-button\"> -->\n                    <button class=\"col-4 offset-4 btn\" type=\"submit\" id=\"submit-button\" [disabled]=\"\"\n                    (click)=\"onSubmit(f)\">Log It!</button>\n                    <button id=\"openModalButton\" #openModalButton [hidden]=\"true\" data-toggle=\"modal\"\n                    data-target=\".bd-example-modal-sm\"></button>\n                <!--</div>-->\n                <!--Completion Modal-->\n                <div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\n                aria-hidden=\"true\" id=\"successModal\">\n                    <div class=\"modal-dialog modal-sm\">\n                        <div class=\"modal-content\" id=\"submit-modal-content\">\n                            <div class=\"modal-header\" id=\"submit-modal-header\">\n                                <h3>Upload successful!</h3>\n                            </div>\n                            <div class=\"modal-body\">\n                                <p>Do you want to log another flight?<p>\n                            </div>\n                            <div class=\"modal-footer\">\n                                <button type=\"button\" class=\"btn\" id=\"yes-modal-button\" \n                                data-dismiss=\"modal\" (click)=\"onResetForm()\">Sure!</button>\n                                <button type=\"button\" class=\"btn\" id=\"no-modal-button\" \n                                data-dismiss=\"modal\" [routerLink]=\"['/main-menu']\">No thanks</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div> \n        </form>\n        </div>"

/***/ }),

/***/ 345:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"flight-log-container\">  \n    <div class=\"row\"> \n        <div class=\"col-3\"> \n            <span [routerLink]=\"['/main-menu']\" id=\"back-icon\">Back</span>\n        </div>\n        <div class=\"col-6\" id=\"flight-log-title\">\n            <p>Flight Log</p> \n        </div> \n    </div> \n    <div class=\"page-breaker-line\"></div>\n    <div class=\"row\" id=\"date-range-row\">\n        <!--Controls date picker modal-->\n        <button class=\"col-4 offset-4 btn\" id=\"date-range-button\" *ngIf=\"!datesSubmitted; else elseSpan\">\n            <span data-toggle=\"modal\" data-target=\"#myModal\">Select range</span>\n        </button>\n        <ng-template #elseSpan>\n            <div class=\"col-7 offset-1\" id=\"date-range\">\n                {{fromDate.formatted}} TO {{toDate.formatted}}\n            </div>\n            <button class=\"col-2 btn\" data-toggle=\"modal\" \n            data-target=\"#myModal\" id=\"new-range-button\">New</button>\n        </ng-template>\n        <!--date picker modal-->\n        <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"#exampleModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\" id=\"modal-content-id\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Select date range</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <label for=\"from\">From</label>\n                    <ng2-datepicker [options]=\"fromOptions\" [(ngModel)]=\"fromDate\"></ng2-datepicker>\n                    <br>\n                    <label for=\"to\">To</label>\n                    <ng2-datepicker [options]=\"toOptions\" [(ngModel)]=\"toDate\"></ng2-datepicker>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn\" id=\"close-daterange-modal\" \n                    data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn\" id=\"save-daterange-modal\" \n                    (click)=\"sendDates()\" data-dismiss=\"modal\">Save Changes</button>\n                 </div>\n            </div>\n            </div>\n        </div> \n    </div>\n    <div *ngIf=\"!showTotals; else hourTotalsDiv\">\n    <div class=\"row\">\n        <div class=\"col-4\" id=\"date-row\">\n            DATE\n        </div>\n        <div class=\"col-2\" id=\"fs-row\">\n            FS \n        </div>\n        <div class=\"col-1\" id=\"ds-row\">\n            DS  \n        </div>\n        <div class=\"col-1\" id=\"hours-row\"> \n            Hrs\n        </div>\n        <div class=\"col-1\" id=\"seat-row\">\n            St \n        </div>\n        <div class=\"custom-col\" id=\"remarks-row\">\n            RMKS\n        </div>\n    </div>\n     <div class=\"page-breaker-line\"></div>\n     <div id=\"big-flight-log\">\n     <div *ngFor=\"let flights of flightCollection\">\n        <div class=\"row\">\n            <div class=\"col-4\" id=\"date-display-row\">\n                {{flights.date.formatted}}\n            </div>\n            <div class=\"col-2\" id=\"fs-display-row\">\n                {{flights.flightSymbol}}\n            </div>\n            <div class=\"col-1\" id=\"ds-display-row\">\n                {{flights.dutySymbol}}\n            </div>\n            <div class=\"col-1\" id=\"hours-display-row\">\n                {{flights.hours}}\n            </div>\n            <div class=\"col-1\" id=\"seat-display-row\">\n                {{flights.seat}}\n            </div>\n            <div class=\"log-display\" id=\"remarks-display-row\">\n                <button id=\"rmk-button\" (click)=\"showFlightRemarks(flights.remarks)\">Rmk</button>\n            </div>\n        </div>\n    </div>\n    </div>\n    <div class=\"row low-button-row\">\n        <div class=\"col-4\">\n            <div class=\"bottom-log-btn btn-info\" id=\"view-totals-btn\"\n            (click)=\"changeHoursDisplay()\">\n                <p>Totals</p>\n            </div>\n        </div>\n        <div class=\"col-4 offset-4\">\n            <div class=\"bottom-log-btn btn-info\" id=\"edit-flights-btn\">\n                <p>Edit</p>\n            </div>\n        </div>\n    </div>\n    </div>\n    <ng-template #hourTotalsDiv>\n    <div *ngIf=\"!sortByDuty; else dutyHoursDiv\">\n    <div class=\"row\">\n        <div class=\"col-4 add-flight-list header-row\">\n            <p>Symbol</p>\n        </div>\n        <div class=\"col-2 add-flight-list header-row\">\n            <p>Flown</p>\n        </div>\n        <div class=\"col-2 add-flight-list header-row\">\n            <p>Req</p>\n        </div>\n        <div class=\"col-2 add-flight-list header-row\">\n            <p>Rem</p>\n        </div>\n    </div>   \n    <div class=\"page-breaker-line\"></div>   \n    <div class=\"row\">\n        <div class=\"col-4 add-flight-list\">\n            <p>Total Hours</p>\n        </div>\n        <div class=\"col-2 hours-box\">\n            {{totalHours}}\n        </div>\n        <div class=\"col-2 hours-box\">\n            {{flightSymReq.totalHours}}\n        </div>\n        <div class=\"col-2 hours-box not-met\" [ngClass]=\"{'is-met': totalMet}\">\n            <span *ngIf=\"totalMet; else diffNum\">0 </span>\n            <ng-template #diffNum>{{reqDifference.totalHours}}</ng-template>\n        </div>\n    </div>\n    <div class=\"row flight-list-row\">\n        <div class=\"col-4 add-flight-list\">\n            <p>Day</p>\n        </div>\n        <div class=\"col-2 hours-box\">\n            {{dayHours}}\n        </div>\n        <div class=\"col-2 hours-box\">\n            {{flightSymReq.dayHours}}\n        </div>\n        <div class=\"col-2 hours-box not-met\" [ngClass]=\"{'is-met': dayMet}\">\n            <span *ngIf=\"dayMet; else diffDay\">0 </span>\n            <ng-template #diffDay>{{reqDifference.dayHours}}</ng-template>\n        </div>\n    </div>  \n    <div class=\"row flight-list-row\">\n        <div class=\"col-4 add-flight-list\">\n            <p>NVS</p>\n        </div>\n        <div class=\"col-2 hours-box\">\n            {{nvsHours}}\n        </div>\n        <div class=\"col-2 hours-box\">\n            {{flightSymReq.nvsHours}}\n        </div>\n        <div class=\"col-2 hours-box not-met\" [ngClass]=\"{'is-met': nvsMet}\">\n            <span *ngIf=\"nvsMet; else diffNvs\">0 </span>\n            <ng-template #diffNvs>{{reqDifference.nvsHours}}</ng-template>\n        </div>\n    </div>\n    <div class=\"row flight-list-row\">\n        <div class=\"col-4 add-flight-list\">\n            <p>NVG</p>\n        </div>\n        <div class=\"col-2 hours-box\">\n            {{nvgHours}}\n        </div>\n        <div class=\"col-2 hours-box\">\n            {{flightSymReq.nvgHours}}\n        </div>\n        <div class=\"col-2 hours-box not-met\" [ngClass]=\"{'is-met': nvgMet}\">\n            <span *ngIf=\"nvgMet; else diffNvg\">0 </span>\n            <ng-template #diffNvg>{{reqDifference.nvgHours}}</ng-template>\n        </div>\n    </div> \n    <div class=\"row flight-list-row\">\n        <div class=\"col-4 add-flight-list\">\n            <p>NVD</p>\n        </div>\n        <div class=\"col-2 hours-box\">\n            {{nvdHours}}\n        </div>\n        <div class=\"col-2 hours-box\">\n            {{flightSymReq.nvdHours}}\n        </div>\n        <div class=\"col-2 hours-box not-met\" [ngClass]=\"{'is-met': nvdMet}\">\n            <span *ngIf=\"nvdMet; else diffNvd\">0 </span>\n            <ng-template #diffNvd>{{reqDifference.nvdHours}}</ng-template>\n        </div>\n    </div> \n    <div class=\"row flight-list-row\">\n        <div class=\"col-4 add-flight-list\">\n            <p>Hood</p>\n        </div>\n        <div class=\"col-2 hours-box\">\n            {{hoodHours}}\n        </div>\n        <div class=\"col-2 hours-box\">\n            {{flightSymReq.hoodHours}}\n        </div>\n        <div class=\"col-2 hours-box not-met\" [ngClass]=\"{'is-met': hoodMet}\">\n            <span *ngIf=\"hoodMet; else diffHood\">0 </span>\n            <ng-template #diffHood>{{reqDifference.hoodHours}}</ng-template>\n        </div>\n    </div>\n    <div class=\"row flight-list-row\">\n        <div class=\"col-4 add-flight-list\">\n            <p>Night</p>\n        </div>\n        <div class=\"col-2 hours-box\">\n            {{nightHours}}\n        </div>\n        <div class=\"col-2 hours-box\">\n            {{flightSymReq.nightHours}}\n        </div>\n        <div class=\"col-2 hours-box not-met\" [ngClass]=\"{'is-met': nightMet}\">\n            <span *ngIf=\"nightMet; else diffNight\">0 </span>\n            <ng-template #diffNight>{{reqDifference.nightHours}}</ng-template>\n        </div>\n    </div>\n    <div class=\"row flight-list-row\">\n        <div class=\"col-4 add-flight-list\">\n            <p>Weather</p>\n        </div>\n        <div class=\"col-2 hours-box\">\n            {{weatherHours}}\n        </div>\n        <div class=\"col-2 hours-box\">\n            {{flightSymReq.weatherHours}}\n        </div>\n        <div class=\"col-2 hours-box not-met\" [ngClass]=\"{'is-met': weatherMet}\">\n            <span *ngIf=\"weatherMet; else diffWeather\">0 </span>\n            <ng-template #diffWeather>{{reqDifference.weatherHours}}</ng-template>\n        </div>\n    </div> \n    <div class=\"row flight-list-row\">\n        <div class=\"col-4 add-flight-list\">\n            <p>Sim</p>\n        </div>\n        <div class=\"col-2 hours-box\">\n            {{simHours}}\n        </div>\n        <div class=\"col-2 hours-box\">\n            {{flightSymReq.simHours}}\n        </div>\n        <div class=\"col-2 hours-box not-met\" [ngClass]=\"{'is-met': simMet}\">\n            <span *ngIf=\"simMet; else diffSim\">0 </span>\n            <ng-template #diffSim>{{reqDifference.simHours}}</ng-template>\n        </div>\n    </div>\n    </div>\n    <ng-template #dutyHoursDiv>\n    <div class=\"row\">\n        <div class=\"col-5 offset-1 add-flight-list\">\n            <p>Total Hours</p>\n        </div>\n        <div class=\"col-3 offset-1 hours-box\">\n            {{totalHours}}\n        </div>\n    </div>\n    <div class=\"row flight-list-row\">\n        <div class=\"col-5 offset-1 add-flight-list\">\n            <p>PI</p>\n        </div>\n        <div class=\"col-3 offset-1 hours-box\">\n            {{hoursPI}}\n        </div>\n    </div> \n    <div class=\"row flight-list-row\">\n        <div class=\"col-5 offset-1 add-flight-list\">\n            <p>PC</p>\n        </div>\n        <div class=\"col-3 offset-1 hours-box\">\n            {{hoursPC}}\n        </div>\n    </div>\n    <div class=\"row flight-list-row\">\n        <div class=\"col-5 offset-1 add-flight-list\">\n            <p>IP</p>\n        </div>\n        <div class=\"col-3 offset-1 hours-box\">\n            {{hoursIP}}\n        </div>\n    </div>\n    <div class=\"row flight-list-row\">\n        <div class=\"col-5 offset-1 add-flight-list\">\n            <p>SP</p>\n        </div>\n        <div class=\"col-3 offset-1 hours-box\">\n            {{hoursSP}} \n        </div>\n    </div>\n    </ng-template>\n    <div class=\"row\" id=\"filter-buttons\">\n        <div class=\"col-3 offset-2 btn-info\" id=\"filterButton\"\n        (click)=\"filterTotals()\">Filter</div>\n        <div class=\"col-3 offset-2 btn-info\" id=\"reqdButton\">Req'd</div>     \n    </div>\n    <div class=\"row low-button-row\">\n        <div class=\"col-4 offset-4\">\n            <div class=\"bottom-log-btn btn-info\" id=\"show-flight-list\"\n            (click)=\"changeHoursDisplay()\">\n                <p>Flight List</p>\n            </div>\n        </div>\n    </div>\n    </ng-template>\n    <button id=\"openModalButton\" #openModalButton [hidden]=\"true\" data-toggle=\"modal\"\n    data-target=\"#remarksModel\"></button>\n    <div class=\"modal fade\" id=\"remarksModel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"#exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\" id=\"modal-content-id\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Flight Remarks</h5>\n                </div>\n                <div class=\"modal-body\">\n                    {{currentRemarks}}\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn\" id=\"close-remarks-modal\" \n                    data-dismiss=\"modal\">Close</button>\n                 </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"landing-menu-container\"> \n  <div class=\"row\">  \n    <div class=\"col-8 offset-2\" id=\"title-container\">\n      <img src=\"app_logo.png\" href=\"flightTracker logo\"> \n    </div>\n  </div>\n  <div class=\"row button-space\">\n    <button class=\"col-4 offset-4 btn menu-buttons\" id=\"signin-button\"\n    [routerLink]=\"['/log-in']\">Sign In</button> \n  </div>\n  <div class=\"row button-space\">\n    <button class=\"col-4 offset-4 btn menu-buttons\" id=\"signup-button\"\n    [routerLink]=\"['/sign-up']\">Sign Up</button> \n  </div>\n</div>\n"

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"log-in-container\">   \n  <div class=\"row\">\n    <div class=\"col-8 offset-2\" id=\"title-container\">\n       <img src=\"/dist/assets/app_logo.png\" href=\"flightTracker logo\"> \n    </div> \n  </div> \n  <form #f=\"ngForm\" (ngSubmit)=\"onSignIn(f)\">\n  <div class=\"form-group\"> \n  <div class=\"row\" id=\"email-input-div\"> \n    <div class=\"col-6 offset-3\"> \n      <label>Email:</label> <br>\n      <input type=\"email\" name=\"email\" id=\"email-input\" ngModel class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"row\" id=\"password-input-div\">\n    <div class=\"col-6 offset-3\">\n      <label>Password:</label> <br>\n      <input type=\"password\" name=\"password\" id=\"password-input\" ngModel class=\"form-control\">\n    </div>\n  </div> \n  <div class=\"row\" id=\"log-in-div\">\n    <button type=\"submit\" id=\"submit-button\" \n    class=\"col-4 offset-4 btn\">Sign In</button>\n  </div>\n  </div>\n  </form>\n  <button id=\"openModal\" #openModal [hidden]=\"true\" \n  data-toggle=\"modal\" data-target=\".bd-example-modal-sm\"></button>\n  <!--Log in fail notification modal -->\n  <div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\n  aria-hidden=\"true\" id=\"validation-modal\">\n    <div class=\"modal-dialog modal-sm\">\n      <div class=\"modal-content\" id=\"validation-modal-content\">\n        <div class=\"modal-header\" id=\"validation-modal-header\">\n          <h3>Login credentials incorrect</h3>\n        </div>\n        <div class=\"modal-body\">\n          <p>You have failed to login, either the email or password you have provided is incorrect.\n            Please try again.</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn\" \n          data-dismiss=\"modal\" id=\"modal-close-button\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"main-menu-container\">  \n    <div class=\"row\">\n        <div class=\"col-8 offset-2\" id=\"title-container\"> \n            <img src=\"/dist/assets/app_logo.png\" href=\"flightTracker logo\"> \n        </div>\n    </div>\n    <div class=\"row\"> \n        <button class=\"col-4 offset-4 main-menu-item btn\" id=\"new-flight\"\n        [routerLink]=\"['/add-flight']\">New Flight</button>\n    </div>\n    <div class=\"row\">\n        <button class=\"col-4 offset-4 main-menu-item btn\" id=\"view-log\"\n        [routerLink]=\"['/flight-log']\">View Log</button>\n    </div>\n    <div class=\"row\">\n        <button class=\"col-4 offset-4 main-menu-item btn\" \n        id=\"weather\">Weather</button>\n    </div>\n    <div class=\"row\">\n        <button class=\"col-4 offset-4 main-menu-item btn\" \n        id=\"notams\">NOTAMS</button>\n    </div>\n    <div class=\"row\" id=\"logout-button-div\">\n        <button class=\"col-4 offset-4 btn main-menu-item\" id=\"logout-button\" \n        (click)=\"onLogout()\">Log Out</button>\n    </div>\n</div>"

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"sign-up-container\"> \n  <div class=\"row\">\n    <div class=\"col-8 offset-2\" id=\"title-container\">\n       <img src=\"/dist/assets/app_logo.png\" href=\"flightTracker logo\"> \n    </div>\n  </div>\n  <form #f=\"ngForm\" (ngSubmit)=\"onSignUp(f)\">\n  <div class=\"form-group\">\n    <div class=\"row\" id=\"name-input-div\">\n      <div class=\"col-6 offset-3\">\n        <label>Name:</label> <br>\n        <input type=\"name\" name=\"name\" id=\"name-input\" ngModel class=\"form-control\">\n      </div> \n    </div>\n    <div class=\"row\" id=\"email-input-div\">\n      <div class=\"col-6 offset-3\">\n        <label>Email:</label> <br>\n        <input type=\"email\" name=\"email\" id=\"email-input\" ngModel class=\"form-control\">\n      </div>\n    </div>\n    <div class=\"row\" id=\"password-input-div\">\n      <div class=\"col-6 offset-3\">\n        <label>Password:</label> <br>  \n        <input type=\"password\" name=\"password\" id=\"password-input\" ngModel class=\"form-control\">\n      </div>\n    </div>\n    <div class=\"row\" id=\"sign-up-div\">\n        <button type=\"submit\" (click)=\"onSignUp(f)\" id=\"submit-button\" \n        class=\"col-4 offset-4 btn\">Sign up</button>\n    </div>\n  </div>\n  </form>\n  <button id=\"openModal\" #openModal [hidden]=\"true\"\n  data-toggle=\"modal\" data-target=\".bd-example-modal-sm\"></button>\n  <!--Successful registration notification modal -->\n  <div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\"\n  aria-hidden=\"true\" id=\"register-modal\">\n    <div class=\"modal-dialog modal-sm\">\n      <div class=\"modal-content\" id=\"register-modal-content\">\n        <div class=\"modal-header\" id=\"register-modal-header\">\n          <h3>Success!!</h3>\n        </div>\n        <div class=\"modal-body\">\n          <p>You have successfully registered your account! You may now log in and log your flights!</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-success\" id=\"modal-close-button\"\n          data-dismiss=\"modal\" [routerLink]=\"['../']\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
        this.flightData = {
            flightOne: {
                date: '',
                hours: 0,
                remarks: '',
                flightSymbol: '',
                dutySymbol: '',
                seat: ''
            },
            flightTwo: {
                date: '',
                hours: 0,
                remarks: '',
                flightSymbol: '',
                dutySymbol: '',
                seat: ''
            },
            flightThree: {
                date: '',
                hours: 0,
                remarks: '',
                flightSymbol: '',
                dutySymbol: '',
                seat: ''
            },
            secondFlight: false,
            thirdFlight: false
        };
    }
    AddFlightService.prototype.logFlightData = function (formData) {
        this.flightData.flightOne.date = formData.date;
        this.flightData.flightOne.hours = formData.hoursOne;
        this.flightData.flightOne.remarks = formData.remarks;
        this.flightData.flightOne.flightSymbol = formData.flightSymbolOne;
        this.flightData.flightOne.dutySymbol = formData.dutySymbolOne;
        this.flightData.flightOne.seat = formData.seatOne;
        if (formData.flightSymbolTwo !== '') {
            this.flightData.flightTwo.date = formData.date;
            this.flightData.flightTwo.hours = formData.hoursTwo;
            this.flightData.flightTwo.remarks = formData.remarks;
            this.flightData.flightTwo.flightSymbol = formData.flightSymbolTwo;
            this.flightData.flightTwo.dutySymbol = formData.dutySymbolTwo;
            this.flightData.flightTwo.seat = formData.seatTwo;
            this.flightData.secondFlight = true;
        }
        if (formData.flightSymbolThree !== '') {
            this.flightData.flightThree.date = formData.date;
            this.flightData.flightThree.hours = formData.hoursThree;
            this.flightData.flightThree.remarks = formData.remarks;
            this.flightData.flightThree.flightSymbol = formData.flightSymbolThree;
            this.flightData.flightThree.dutySymbol = formData.dutySymbolThree;
            this.flightData.flightThree.seat = formData.seatThree;
            this.flightData.thirdFlight = true;
        }
        console.log(this.flightData);
        return this.http.post('/data/log-flight', this.flightData);
    };
    AddFlightService.prototype.sortFlightData = function (formData) {
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
        this.seatOne = [
            { value: '' },
            { value: 'F' },
            { value: 'B' }
        ];
        this.seatTwo = [
            { value: '' },
            { value: 'F' },
            { value: 'B' }
        ];
        this.seatThree = [
            { value: '' },
            { value: 'F' },
            { value: 'B' }
        ];
        this.dutySymbolsOne = [
            { value: '' },
            { value: 'PI' },
            { value: 'PC' },
            { value: 'IP' },
            { value: 'SP' }
        ];
        this.dutySymbolsTwo = [
            { value: '' },
            { value: 'PI' },
            { value: 'PC' },
            { value: 'IP' },
            { value: 'SP' }
        ];
        this.dutySymbolsThree = [
            { value: '' },
            { value: 'PI' },
            { value: 'PC' },
            { value: 'IP' },
            { value: 'SP' }
        ];
        this.flightSymbolsOne = [
            { value: '' },
            { value: 'Day' },
            { value: 'Night' },
            { value: 'Sim' },
            { value: 'NVS' },
            { value: 'NVG' },
            { value: 'NVD' },
            { value: 'Hood' },
            { value: 'Wx' }
        ];
        this.flightSymbolsTwo = [
            { value: '' },
            { value: 'Day' },
            { value: 'Night' },
            { value: 'Sim' },
            { value: 'NVS' },
            { value: 'NVG' },
            { value: 'NVD' },
            { value: 'Hood' },
            { value: 'Wx' }
        ];
        this.flightSymbolsThree = [
            { value: '' },
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
            hoursOne: this.hoursOne,
            hoursTwo: this.hoursTwo,
            hoursThree: this.hoursThree,
            remarks: this.remarksValue,
            seatOne: this.seatOne[0].value,
            seatTwo: this.seatTwo[0].value,
            seatThree: this.seatThree[0].value,
            dutySymbolOne: this.dutySymbolsOne[0].value,
            dutySymbolTwo: this.dutySymbolsTwo[0].value,
            dutySymbolThree: this.dutySymbolsThree[0].value,
            flightSymbolOne: this.flightSymbolsOne[0].value,
            flightSymbolTwo: this.flightSymbolsTwo[0].value,
            flightSymbolThree: this.flightSymbolsThree[0].value
        };
    };
    //Send the flight data  to the add-flight service 
    AddFlightComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (true) {
            //replace hours validator here
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
    //Reset the form properties to their defaults, and reset date input
    AddFlightComponent.prototype.onResetForm = function () {
        this.flight.hoursOne = this.hoursOne;
        this.flight.hoursTwo = this.hoursTwo;
        this.flight.hoursThree = this.hoursThree;
        this.flight.remarks = this.remarksValue;
        this.flight.seatOne = this.seatOne[0].value;
        this.flight.seatTwo = this.seatTwo[0].value;
        this.flight.seatThree = this.seatThree[0].value;
        this.flight.dutySymbolOne = this.dutySymbolsOne[0].value;
        this.flight.dutySymbolTwo = this.dutySymbolsTwo[0].value;
        this.flight.dutySymbolThree = this.dutySymbolsThree[0].value;
        this.flight.flightSymbolOne = this.flightSymbolsOne[0].value;
        this.flight.flightSymbolTwo = this.flightSymbolsTwo[0].value;
        this.flight.flightSymbolThree = this.flightSymbolsThree[0].value;
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
        this.sortByDuty = false;
        this.showTotals = false;
        this.currentRemarks = '';
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
        this.flightCollection = [];
        /* ### ATP Requirements ### */
        this.flightSymReq = {
            totalHours: 70,
            dayHours: 20,
            nvsHours: 10,
            nvgHours: 10,
            nvdHours: 10,
            hoodHours: 5,
            nightHours: 20,
            weatherHours: 15,
            simHours: 40
        };
        this.reqDifference = {
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
        this.totalMet = false;
        this.dayMet = false;
        this.nvsMet = false;
        this.nvgMet = false;
        this.nvdMet = false;
        this.hoodMet = false;
        this.nightMet = false;
        this.weatherMet = false;
        this.simMet = false;
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
            _this.flightCollection = flightData;
            _this.flightSymbolSort(flightData);
            _this.dutySymbolSort(flightData);
        });
        this.roundHours(); //Allows initial display of total hours
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
        this.hoursPI = this.rawDutyHours.hoursPI.toFixed(1);
        this.hoursPC = this.rawDutyHours.hoursPC.toFixed(1);
        this.hoursIP = this.rawDutyHours.hoursIP.toFixed(1);
        this.hoursSP = this.rawDutyHours.hoursSP.toFixed(1);
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
    FlightLogComponent.prototype.dutySymbolSort = function (flightData) {
        for (var data in flightData) {
            flightData[data].dutySymbol == 'PI' ? this.rawDutyHours.hoursPI += flightData[data].hours
                : flightData[data].dutySymbol == 'PC' ? this.rawDutyHours.hoursPC += flightData[data].hours
                    : flightData[data].dutySymbol == 'IP' ? this.rawDutyHours.hoursIP += flightData[data].hours
                        : flightData[data].dutySymbol == 'SP' ? this.rawDutyHours.hoursSP += flightData[data].hours : null;
        }
        this.roundHours();
    };
    //Date range validation logic. Ensures users enter a date range from a point in the past to a point in the 
    //future. If they input an incorrect date range the button/date range display willd default back to current
    FlightLogComponent.prototype.sendDates = function () {
        var _this = this;
        this.fromDate.year > this.toDate.year ? this.datesSubmitted = false //Failed
            : this.fromDate.month > this.toDate.month ? this.datesSubmitted = false //Failed
                : this.fromDate.month < this.toDate.month ? this.datesSubmitted = true //Pass 
                    : this.fromDate.day <= this.toDate.day ? this.datesSubmitted = true //Pass 
                        : this.datesSubmitted = false; //Failed
        var dateRange = {
            toDate: this.toDate,
            fromDate: this.fromDate
        };
        this.viewLog.pullHourRange(dateRange)
            .subscribe(function (flightData) {
            _this.displayHoursRange(flightData);
        });
    };
    FlightLogComponent.prototype.filterTotals = function () {
        this.sortByDuty = (!this.sortByDuty);
    };
    FlightLogComponent.prototype.changeHoursDisplay = function () {
        this.calculateRequirements();
        this.showTotals = (!this.showTotals);
    };
    FlightLogComponent.prototype.displayHoursRange = function (flightData) {
        this.flightCollection = [];
        this.flightCollection = flightData;
        this.flightSymbolSort(flightData);
        this.dutySymbolSort(flightData);
    };
    FlightLogComponent.prototype.showFlightRemarks = function (remarks) {
        this.currentRemarks = remarks;
        this.openModal.nativeElement.click();
    };
    FlightLogComponent.prototype.calculateRequirements = function () {
        this.totalHours >= this.flightSymReq.totalHours ? this.totalMet = true : null;
        this.dayHours >= this.flightSymReq.dayHours ? this.dayMet = true : null;
        this.nvsHours >= this.flightSymReq.nvsHours ? this.nvsMet = true : null;
        this.nvdHours >= this.flightSymReq.nvdHours ? this.nvdMet = true : null;
        this.nvgHours >= this.flightSymReq.nvgHours ? this.nvgMet = true : null;
        this.hoodHours >= this.flightSymReq.hoodHours ? this.hoodMet = true : null;
        this.nightHours >= this.flightSymReq.nightHours ? this.nightMet = true : null;
        this.simHours >= this.flightSymReq.simHours ? this.simMet = true : null;
        this.weatherHours >= this.flightSymReq.weatherHours ? this.weatherMet = true : null;
        this.calculateReqDiff();
    };
    FlightLogComponent.prototype.calculateReqDiff = function () {
        this.reqDifference.totalHours = this.flightSymReq.totalHours - this.totalHours;
        this.reqDifference.dayHours = this.flightSymReq.dayHours - this.dayHours;
        this.reqDifference.nvsHours = this.flightSymReq.nvsHours - this.nvsHours;
        this.reqDifference.nvgHours = this.flightSymReq.nvgHours - this.nvgHours;
        this.reqDifference.nvdHours = this.flightSymReq.nvdHours - this.nvdHours;
        this.reqDifference.hoodHours = this.flightSymReq.hoodHours - this.hoodHours;
        this.reqDifference.nightHours = this.flightSymReq.nightHours - this.nightHours;
        this.reqDifference.weatherHours = this.flightSymReq.weatherHours - this.weatherHours;
        this.reqDifference.simHours = this.flightSymReq.simHours - this.simHours;
    };
    return FlightLogComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('openModalButton'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], FlightLogComponent.prototype, "openModal", void 0);
FlightLogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-flight-log',
        template: __webpack_require__(346),
        styles: [__webpack_require__(334)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__view_log_service__["a" /* ViewLogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__view_log_service__["a" /* ViewLogService */]) === "function" && _b || Object])
], FlightLogComponent);

var _a, _b;
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
    ViewLogService.prototype.pullHourRange = function (dateRange) {
        console.log('Pulling hour range!');
        return this.http.post('/data/flightlog/range', dateRange)
            .map(function (response) {
            var range = response.json();
            return range;
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