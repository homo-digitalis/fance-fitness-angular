(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _monday_monday_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monday/monday.component */ "./src/app/monday/monday.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _tuesday_tuesday_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tuesday/tuesday.component */ "./src/app/tuesday/tuesday.component.ts");
/* harmony import */ var _wednesday_wednesday_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wednesday/wednesday.component */ "./src/app/wednesday/wednesday.component.ts");
/* harmony import */ var _thursday_thursday_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./thursday/thursday.component */ "./src/app/thursday/thursday.component.ts");
/* harmony import */ var _friday_friday_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./friday/friday.component */ "./src/app/friday/friday.component.ts");
/* harmony import */ var _saturday_saturday_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./saturday/saturday.component */ "./src/app/saturday/saturday.component.ts");
/* harmony import */ var _sunday_sunday_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sunday/sunday.component */ "./src/app/sunday/sunday.component.ts");











var routes = [
    {
        path: 'monday',
        component: _monday_monday_component__WEBPACK_IMPORTED_MODULE_3__["MondayComponent"]
    },
    {
        path: 'tuesday',
        component: _tuesday_tuesday_component__WEBPACK_IMPORTED_MODULE_5__["TuesdayComponent"]
    },
    {
        path: 'wednesday',
        component: _wednesday_wednesday_component__WEBPACK_IMPORTED_MODULE_6__["WednesdayComponent"]
    },
    {
        path: 'thursday',
        component: _thursday_thursday_component__WEBPACK_IMPORTED_MODULE_7__["ThursdayComponent"]
    },
    {
        path: 'friday',
        component: _friday_friday_component__WEBPACK_IMPORTED_MODULE_8__["FridayComponent"]
    },
    {
        path: 'saturday',
        component: _saturday_saturday_component__WEBPACK_IMPORTED_MODULE_9__["SaturdayComponent"]
    },
    {
        path: 'sunday',
        component: _sunday_sunday_component__WEBPACK_IMPORTED_MODULE_10__["SundayComponent"]
    },
    {
        path: '',
        component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'fance-fitness-angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _monday_monday_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./monday/monday.component */ "./src/app/monday/monday.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _tuesday_tuesday_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tuesday/tuesday.component */ "./src/app/tuesday/tuesday.component.ts");
/* harmony import */ var _wednesday_wednesday_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wednesday/wednesday.component */ "./src/app/wednesday/wednesday.component.ts");
/* harmony import */ var _thursday_thursday_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./thursday/thursday.component */ "./src/app/thursday/thursday.component.ts");
/* harmony import */ var _friday_friday_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./friday/friday.component */ "./src/app/friday/friday.component.ts");
/* harmony import */ var _saturday_saturday_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./saturday/saturday.component */ "./src/app/saturday/saturday.component.ts");
/* harmony import */ var _sunday_sunday_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sunday/sunday.component */ "./src/app/sunday/sunday.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _monday_monday_component__WEBPACK_IMPORTED_MODULE_6__["MondayComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"],
                _tuesday_tuesday_component__WEBPACK_IMPORTED_MODULE_8__["TuesdayComponent"],
                _wednesday_wednesday_component__WEBPACK_IMPORTED_MODULE_9__["WednesdayComponent"],
                _thursday_thursday_component__WEBPACK_IMPORTED_MODULE_10__["ThursdayComponent"],
                _friday_friday_component__WEBPACK_IMPORTED_MODULE_11__["FridayComponent"],
                _saturday_saturday_component__WEBPACK_IMPORTED_MODULE_12__["SaturdayComponent"],
                _sunday_sunday_component__WEBPACK_IMPORTED_MODULE_13__["SundayComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/friday/friday.component.css":
/*!*********************************************!*\
  !*** ./src/app/friday/friday.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyaWRheS9mcmlkYXkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/friday/friday.component.html":
/*!**********************************************!*\
  !*** ./src/app/friday/friday.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <meta http-equiv=\"refresh\" content=\"0; URL='https://chat.whatsapp.com/Epx3YNiXdrFC0dYHF6BnA8'\" /> -->\n"

/***/ }),

/***/ "./src/app/friday/friday.component.ts":
/*!********************************************!*\
  !*** ./src/app/friday/friday.component.ts ***!
  \********************************************/
/*! exports provided: FridayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FridayComponent", function() { return FridayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FridayComponent = /** @class */ (function () {
    function FridayComponent() {
    }
    FridayComponent.prototype.ngOnInit = function () {
        window.open('https://chat.whatsapp.com/Epx3YNiXdrFC0dYHF6BnA8');
    };
    FridayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-friday',
            template: __webpack_require__(/*! ./friday.component.html */ "./src/app/friday/friday.component.html"),
            styles: [__webpack_require__(/*! ./friday.component.css */ "./src/app/friday/friday.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FridayComponent);
    return FridayComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Start Bootstrap - Stylish Portfolio (https://startbootstrap.com/template-overviews/stylish-portfolio)\n * Copyright 2013-2017 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-stylish-portfolio/blob/master/LICENSE)\n */\n\n/* Global Styles */\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n  }\n\nbody {\n    font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n\nh2{\n    color: rgb(233,26,77);\n  }\n\nh3{\n    color: rgb(86,188,192);\n  }\n\nh4{\n    color: rgb(86,188,192);\n  }\n\n.text-color-coral{\n    color: rgb(233,26,77);\n  }\n\n.text-color-white{\n    color: white;\n  }\n\n.background-black {\n    background-color: black\n  }\n\n.background-white {\n    background-color: white\n  }\n\n.text-vertical-center {\n    display: table-cell;\n    text-align: center;\n    padding-top: 2%;\n  }\n\n.text-vertical-center h1 {\n    font-size: 4.5em;\n    font-weight: 700;\n    margin: 0;\n    padding: 0;\n  }\n\n/* Custom Button Styles */\n\n.btn-dark {\n    color: rgb(86,188,192);\n    border: none;\n    border-radius: 0;\n    background-color: rgba(0, 0, 0, .9);\n  }\n\n.btn-dark:hover, .btn-dark:focus, .btn-dark:active {\n    color: rgb(86,188,192);\n    background-color: rgba(0, 0, 0, .9);\n  }\n\n.btn-light {\n    color: rgb(86,188,192);\n    border: none;\n    border-radius: 0;\n    background-color: rgb(255, 255, 255);\n  }\n\n.btn-light:hover, .btn-light:focus, .btn-light:active {\n    background-color: rgba(255, 255, 255, .9);\n  }\n\n/* Custom Horizontal Rule */\n\nhr.small {\n    max-width: 100px;\n  }\n\n/* Side Menu */\n\n#sidebar-wrapper {\n    position: fixed;\n    z-index: 1000;\n    right: 0;\n    overflow-y: auto;\n    width: 250px;\n    height: 100%;\n    transition: all .4s ease 0s;\n    transform: translateX(250px);\n    background: #222;\n  }\n\n.sidebar-nav {\n    position: absolute;\n    top: 0;\n    width: 250px;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n\n.sidebar-nav li {\n    line-height: 40px;\n    text-indent: 20px;\n  }\n\n.sidebar-nav li a {\n    display: block;\n    text-decoration: none;\n    color: #999;\n  }\n\n.sidebar-nav li a:hover {\n    text-decoration: none;\n    color: #fff;\n    background: rgba(255, 255, 255, .2);\n  }\n\n.sidebar-nav li a:active, .sidebar-nav li a:focus {\n    text-decoration: none;\n  }\n\n.sidebar-nav>.sidebar-brand {\n    font-size: 18px;\n    line-height: 55px;\n    height: 55px;\n  }\n\n.sidebar-nav>.sidebar-brand a {\n    color: #999;\n  }\n\n.sidebar-nav>.sidebar-brand a:hover {\n    color: #fff;\n    background: none;\n  }\n\n#menu-toggle {\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    right: 0;\n  }\n\n#sidebar-wrapper.active {\n    right: 250px;\n    width: 250px;\n    transition: all .4s ease 0s;\n  }\n\n.toggle {\n    font-size: 1em;\n    margin: 5px 5px 0 0;\n    padding: 15px 20px;\n  }\n\n.header {\n    width: 100%;\n    height: 100vh;\n    position: relative;\n    display: table;\n    background-image: url('background.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n\n.getfancynow {\n    padding: 50px 0;\n  }\n\n.fanceworkouts {\n    padding: 50px 0;\n  }\n\n.fanceworkouts-item {\n    margin-bottom: 30px;\n  }\n\n/* .callout {\n    display: table;\n    width: 100%;\n    height: 400px;\n    color: #fff;\n    background: url(../img/callout.jpg) no-repeat center center scroll;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n  } */\n\n.fancevideos {\n    padding: 50px 0;\n  }\n\n.fancevideos-item {\n    margin-bottom: 30px;\n  }\n\n.img-logo-background {\n    width: 80%;\n    background-color: black;\n    margin: auto;\n    margin-top: 30px;\n  }\n\n.img-logo {\n    width: 75%;\n    margin: auto;\n  }\n\n.img-fancevideos {\n    margin: 0 auto;\n  }\n\n.img-fancevideos:hover {\n    opacity: .8;\n  }\n\n.fancefotos {\n    padding: 50px 0;\n  }\n\n.fancefotos-item {\n    margin-bottom: 30px;\n  }\n\n.img-fancefotos {\n    margin: 0 auto;\n  }\n\n.img-fancefotos:hover {\n    opacity: .8;\n  }\n\n.fancehealth {\n    padding: 50px 0;\n  }\n\n.fancephysio {\n    padding: 50px 0;\n  }\n\n.call-to-action {\n    padding: 50px 0;\n  }\n\n.call-to-action .btn {\n    margin: 10px;\n  }\n\n.map {\n    height: 500px;\n  }\n\n@media(max-width:768px) {\n    .map {\n      height: 75%;\n    }\n  }\n\n.map iframe {\n    pointer-events: none;\n  }\n\nfooter {\n    padding: 100px 0;\n  }\n\n#to-top {\n    font-size: 1em;\n    position: fixed;\n    right: 5px;\n    bottom: 5px;\n    display: none;\n    padding: 15px 20px;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUU7O0FBRUYsa0JBQWtCOztBQUVsQjtJQUNJLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSw4RUFBOEU7RUFDaEY7O0FBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7O0FBR0E7SUFDRTtFQUNGOztBQUNBO0lBQ0U7RUFDRjs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7RUFDWjs7QUFHQSx5QkFBeUI7O0FBRXpCO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUNBQW1DO0VBQ3JDOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLG1DQUFtQztFQUNyQzs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG9DQUFvQztFQUN0Qzs7QUFFQTtJQUNFLHlDQUF5QztFQUMzQzs7QUFHQSwyQkFBMkI7O0FBRTNCO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUdBLGNBQWM7O0FBRWQ7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFLWiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsV0FBVztFQUNiOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxtQ0FBbUM7RUFDckM7O0FBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLE1BQU07SUFDTixRQUFRO0VBQ1Y7O0FBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUtaLDJCQUEyQjtFQUM3Qjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztBQUdGO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHVDQUF3RDtJQUN4RCw0QkFBNEI7SUFJNUIsc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7Ozs7Ozs7Ozs7S0FVRzs7QUFFSDtJQUNFLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtFQUNkOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFQTtJQUNFLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVBO0lBQ0UsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGVBQWU7RUFDakI7O0FBQ0E7SUFDRSxlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0UsYUFBYTtFQUNmOztBQUVBO0lBQ0U7TUFDRSxXQUFXO0lBQ2I7RUFDRjs7QUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBTdGFydCBCb290c3RyYXAgLSBTdHlsaXNoIFBvcnRmb2xpbyAoaHR0cHM6Ly9zdGFydGJvb3RzdHJhcC5jb20vdGVtcGxhdGUtb3ZlcnZpZXdzL3N0eWxpc2gtcG9ydGZvbGlvKVxuICogQ29weXJpZ2h0IDIwMTMtMjAxNyBTdGFydCBCb290c3RyYXBcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL0JsYWNrcm9ja0RpZ2l0YWwvc3RhcnRib290c3RyYXAtc3R5bGlzaC1wb3J0Zm9saW8vYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqL1xuXG4vKiBHbG9iYWwgU3R5bGVzICovXG5cbmh0bWwsIGJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICBoMntcbiAgICBjb2xvcjogcmdiKDIzMywyNiw3Nyk7XG4gIH1cbiAgXG4gIGgze1xuICAgIGNvbG9yOiByZ2IoODYsMTg4LDE5Mik7XG4gIH1cbiAgXG4gIGg0e1xuICAgIGNvbG9yOiByZ2IoODYsMTg4LDE5Mik7XG4gIH1cbiAgXG4gIC50ZXh0LWNvbG9yLWNvcmFse1xuICAgIGNvbG9yOiByZ2IoMjMzLDI2LDc3KTtcbiAgfVxuICBcbiAgLnRleHQtY29sb3Itd2hpdGV7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICBcbiAgLmJhY2tncm91bmQtYmxhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrXG4gIH1cbiAgLmJhY2tncm91bmQtd2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXG4gIH1cbiAgXG4gIC50ZXh0LXZlcnRpY2FsLWNlbnRlciB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICB9XG4gIFxuICAudGV4dC12ZXJ0aWNhbC1jZW50ZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogNC41ZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgXG4gIC8qIEN1c3RvbSBCdXR0b24gU3R5bGVzICovXG4gIFxuICAuYnRuLWRhcmsge1xuICAgIGNvbG9yOiByZ2IoODYsMTg4LDE5Mik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuOSk7XG4gIH1cbiAgXG4gIC5idG4tZGFyazpob3ZlciwgLmJ0bi1kYXJrOmZvY3VzLCAuYnRuLWRhcms6YWN0aXZlIHtcbiAgICBjb2xvcjogcmdiKDg2LDE4OCwxOTIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjkpO1xuICB9XG4gIFxuICAuYnRuLWxpZ2h0IHtcbiAgICBjb2xvcjogcmdiKDg2LDE4OCwxOTIpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgfVxuICBcbiAgLmJ0bi1saWdodDpob3ZlciwgLmJ0bi1saWdodDpmb2N1cywgLmJ0bi1saWdodDphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjkpO1xuICB9XG4gIFxuICBcbiAgLyogQ3VzdG9tIEhvcml6b250YWwgUnVsZSAqL1xuICBcbiAgaHIuc21hbGwge1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gIH1cbiAgXG4gIFxuICAvKiBTaWRlIE1lbnUgKi9cbiAgXG4gICNzaWRlYmFyLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNHMgZWFzZSAwcztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNHMgZWFzZSAwcztcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlIDBzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuNHMgZWFzZSAwcztcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UgMHM7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1MHB4KTtcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xuICB9XG4gIFxuICAuc2lkZWJhci1uYXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbiAgXG4gIC5zaWRlYmFyLW5hdiBsaSB7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgdGV4dC1pbmRlbnQ6IDIwcHg7XG4gIH1cbiAgXG4gIC5zaWRlYmFyLW5hdiBsaSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICM5OTk7XG4gIH1cbiAgXG4gIC5zaWRlYmFyLW5hdiBsaSBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMik7XG4gIH1cbiAgXG4gIC5zaWRlYmFyLW5hdiBsaSBhOmFjdGl2ZSwgLnNpZGViYXItbmF2IGxpIGE6Zm9jdXMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgLnNpZGViYXItbmF2Pi5zaWRlYmFyLWJyYW5kIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICB9XG4gIFxuICAuc2lkZWJhci1uYXY+LnNpZGViYXItYnJhbmQgYSB7XG4gICAgY29sb3I6ICM5OTk7XG4gIH1cbiAgXG4gIC5zaWRlYmFyLW5hdj4uc2lkZWJhci1icmFuZCBhOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG4gIFxuICAjbWVudS10b2dnbGUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgfVxuICBcbiAgI3NpZGViYXItd3JhcHBlci5hY3RpdmUge1xuICAgIHJpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UgMHM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UgMHM7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAuNHMgZWFzZSAwcztcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2UgMHM7XG4gICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlIDBzO1xuICB9XG4gIFxuICAudG9nZ2xlIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtYXJnaW46IDVweCA1cHggMCAwO1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgfVxuICBcbiAgXG4uaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQuanBnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbiAgXG4gIC5nZXRmYW5jeW5vdyB7XG4gICAgcGFkZGluZzogNTBweCAwO1xuICB9XG4gIFxuICAuZmFuY2V3b3Jrb3V0cyB7XG4gICAgcGFkZGluZzogNTBweCAwO1xuICB9XG4gIFxuICAuZmFuY2V3b3Jrb3V0cy1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIFxuICAvKiAuY2FsbG91dCB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1nL2NhbGxvdXQuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBzY3JvbGw7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH0gKi9cbiAgXG4gIC5mYW5jZXZpZGVvcyB7XG4gICAgcGFkZGluZzogNTBweCAwO1xuICB9XG4gIFxuICAuZmFuY2V2aWRlb3MtaXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICBcbiAgLmltZy1sb2dvLWJhY2tncm91bmQge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbiAgXG4gIC5pbWctbG9nbyB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgXG4gIC5pbWctZmFuY2V2aWRlb3Mge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIFxuICAuaW1nLWZhbmNldmlkZW9zOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAuODtcbiAgfVxuICBcbiAgLmZhbmNlZm90b3Mge1xuICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgfVxuICBcbiAgLmZhbmNlZm90b3MtaXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICBcbiAgLmltZy1mYW5jZWZvdG9zIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBcbiAgLmltZy1mYW5jZWZvdG9zOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAuODtcbiAgfVxuICBcbiAgLmZhbmNlaGVhbHRoIHtcbiAgICBwYWRkaW5nOiA1MHB4IDA7XG4gIH1cbiAgXG4gIC5mYW5jZXBoeXNpbyB7XG4gICAgcGFkZGluZzogNTBweCAwO1xuICB9XG4gIC5jYWxsLXRvLWFjdGlvbiB7XG4gICAgcGFkZGluZzogNTBweCAwO1xuICB9XG4gIFxuICAuY2FsbC10by1hY3Rpb24gLmJ0biB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG4gIFxuICAubWFwIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICB9XG4gIFxuICBAbWVkaWEobWF4LXdpZHRoOjc2OHB4KSB7XG4gICAgLm1hcCB7XG4gICAgICBoZWlnaHQ6IDc1JTtcbiAgICB9XG4gIH1cbiAgXG4gIC5tYXAgaWZyYW1lIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbiAgZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAxMDBweCAwO1xuICB9XG4gIFxuICAjdG8tdG9wIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBib3R0b206IDVweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <header class=\"header\" id=\"fance\">\n    <div class=\"text-vertical-center\">\n      <div class=\"img-logo-background\">\n        <img class=\"img-logo img-fluid\" src=\"../assets/img/fitness/PNG.png\">\n      </div>\n      <p></p>\n      <br>\n      <a href=\"#getfancynow\" class=\"btn btn-dark btn-lg js-scroll-trigger\">Get Fancy Now</a>\n    </div>\n  </header>\n  <section id=\"getfancynow\" class=\"getfancynow background-white\">\n    <div class=\"container text-center\">\n      <h2>Fance bringt Abwechslung und Spaß in dein Workout.</h2> <br>\n      <p>Durch die Kombination aus Fitnesstraining und Tanz trainierst du neben deiner Kondition auch deine\n        Beweglichkeit, deine\n        Koordination, dein Körpergefühl und deinen Ausdruck.\n\n        <p>\"Fance - It's about Fitness and Dance\" wurde im Februar 2017 in der Heidelberger Bahnstadt ins Leben gerufen\n          und\n          erfreut sich mittlerweile auch überregional starker Beliebtheit.</p>\n        <br>\n        <p><a class=\"btn btn-dark btn-lg js-scroll-trigger\" href=\"#fanceworkouts\">Get Ready to Fance</a></p>\n    </div>\n  </section>\n\n  <section id=\"fanceworkouts\" class=\"fanceworkouts background-black\">\n    <div class=\"container\">\n      <div class=\"row text-center text-color-white\">\n        <div class=\"col-lg-10 mx-auto\">\n          <h2>Fancy Workouts</h2>\n          <br>\n          <p>Fance Workouts entstehen aus einem Zusammenspiel klassischer Tanzbewegungen mit dazu passenden Dehnungs-\n            und Kräftigungsübungen.\n            <br>\n            <br>\n            <hr class=\"small\">\n            <div class=\"row\">\n              <div class=\"col-md-3 col-sm-6\">\n                <div class=\"fanceworkouts-item\">\n                  <!--<span class=\"fa-stack fa-4x\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-cloud fa-stack-1x text-primary\"></i>\n                  </span>-->\n                  <h4>\n                    <strong>Hip Hop Fance</strong>\n                  </h4> <br>\n                  <p class=\"text-white\">Nach einer rhythmischen Aufwärmphase beginnt das Workout mit fließenden\n                    Dehnungsübungen gefolgt von kraftvollen\n                    Dance Moves. <br>\n                  </p>\n                  <p class=\"text-white\">Im Laufe des Workouts entstehen abwechslungsreiche Choreographien mit knackigen\n                    Kräftigungs- und Stabilisierungsübungen.\n                  </p><br>\n                  <a href=\"#termine\" class=\"btn btn-light\">Let's Do It</a>\n                </div>\n              </div>\n              <div class=\"col-md-3 col-sm-6\">\n                <div class=\"fanceworkouts-item\">\n                  <h4>\n                    <strong>Bachata Fance</strong>\n                  </h4><br>\n                  <p class=\"text-white\">Bachata - Ein wunderschöner Tanz aus der Dominikanischen Republik.\n                  </p>\n                  <p class=\"text-white\">Es erwartet dich eine tänzerische Reise in die Karibik.\n                  </p>\n                  <a href=\"#termine\" class=\"btn btn-light\">Let's Do It</a>\n                </div>\n              </div>\n\n              <div class=\"col-md-3 col-sm-6\">\n                <div class=\"fanceworkouts-item\">\n                  <h4>\n                    <strong>Merengue Fance</strong>\n                  </h4><br>\n                  <p class=\"text-white\">Erlebe den Flow. Merengue eignet sich hervorragend für Einsteiger.\n                  </p>\n                  <p>Einen Vorgeschmack auf die Playlist findest Du <a href=\"#playlists\">hier</a>.</p>\n                  <a href=\"#termine\" class=\"btn btn-light\">Let's Do It</a>\n                </div>\n              </div>\n\n              <div class=\"col-md-3 col-sm-6\">\n                <div class=\"fanceworkouts-item\">\n                  <!--<span class=\"fa-stack fa-4x\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-compass fa-stack-1x text-primary\"></i>\n                  </span>-->\n                  <h4>\n                    <strong>Salsa Fance</strong>\n                  </h4><br>\n                  <p class=\"text-white\">Bei diesem Paar- Workout lernst du ganz nebenbei über 20 typische Salsa\n                    Tanzfiguren kennen.\n                  </p>\n                  <p class=\"text-white\">Du trainierst gemeinsam mit deinem Tanzpartner deine Beweglichkeit und deine\n                    Ausdauer.</p>\n                  <a href=\"#termine\" class=\"btn btn-light\">Let's Do It</a>\n                </div>\n              </div>\n\n              <div class=\"col-md-3 col-sm-6\">\n                <div class=\"fanceworkouts-item\">\n                  <h4>\n                    <strong>Techno Fance</strong>\n                  </h4><br>\n                  <p class=\"text-white\">Bingo Bongo. Hier knallt es so richtig. Techno Classics am laufenden Band und\n                    die entsprechenden Moves dazu. Erlebe die Eskalation.\n                  </p>\n                  <a href=\"#termine\" class=\"btn btn-light\">Let's Do It</a>\n                </div>\n              </div>\n\n              <div class=\"col-md-3 col-sm-6\">\n                <div class=\"fanceworkouts-item\">\n                  <!--<span class=\"fa-stack fa-4x\">\n                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                    <i class=\"fa fa-flask fa-stack-1x text-primary\"></i>\n                  </span>-->\n                  <h4>\n                    <strong>Disco Fance</strong>\n                  </h4><br>\n                  <p class=\"text-white\">Hier geht die Party richtig ab. Die Trainer heizen dir mit Popsongs und\n                    knackigen Schlagern ein.\n                  </p>\n                  <p class=\"text-white\">Du lernst nebenbei viele Discofox Tanzfiguren kennen.</p>\n                  <a href=\"#termine\" class=\"btn btn-light\">Let's Do It</a>\n                </div>\n              </div>\n              <div class=\"col-md-3 col-sm-6\">\n                <div class=\"fanceworkouts-item\">\n                  <h4>\n                    <strong>Box Fance</strong>\n                  </h4><br>\n                  <p class=\"text-white\">Kampfsport und Tanz ist aus vielerlei Gründen leicht kombinierbar. Du solltest\n                    einigermaßen schmerzresistent sein, um an diesem Training teilzunehmen.\n                  </p>\n                  <a href=\"#termine\" class=\"btn btn-light\">Let's Do It</a>\n                </div>\n              </div>\n              <div class=\"col-md-3 col-sm-6\">\n                <div class=\"fanceworkouts-item\">\n                  <h4>\n                    <strong>Oriental Fance</strong>\n                  </h4><br>\n                  <p class=\"text-white\">Körpergefühl, Körperspannung, Beweglichkeit und individueller Ausdruck stehen\n                    hier im Vordergrund.\n                  </p>\n                  <p class=\"text-white\">Es erwartet dich eine tänzerische Reise in den Orient.\n                  </p>\n                  <a href=\"#termine\" class=\"btn btn-light\">Let's Do It</a>\n                </div>\n              </div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section id=\"fancehealth\" class=\"fancehealth\">\n    <div class=\"container text-center\">\n      <h2>Gesundheit</h2> <br> Fance fördert die körperliche und geistige Fitness.\n      <p></p>\n      Schon bevor die Menschen schreiben konnten, tanzten sie.\n      <br> Die Bewegung zur Musik verleiht Kraft und Selbstbewusstsein, sagt Gunter Kreutz von der Universität\n      Oldenburg.\n      Im <a\n        href=\"http://www.spiegel.de/gesundheit/ernaehrung/wie-tanzen-als-medizin-wirkt-und-gluecklich-macht-a-881579.html\">\n        Interview </a> erklärt der Musikkognitionsforscher, warum Tanzen entspannt und wie es gegen Krankheiten\n      hilft.\n      <p></p>\n    </div>\n  </section>\n  <aside class=\"call-to-action background-black\">\n    <div class=\"container text-center\">\n      <h3 class=\"text-color-coral\">Was willst du jetzt tun?</h3>\n      <p></p>\n      <a href=\"#termine\" class=\"btn btn-lg btn-light\">I wanna\n        Fance!</a>\n      <a href=\"#playlists\" class=\"btn btn-lg btn-light\">Playlists Hören</a>\n      <a href=\"#tutorials\" class=\"btn btn-lg btn-light\">Tutorials Anschauen</a>\n      <p></p>\n    </div>\n  </aside>\n\n\n  <section id=\"termine\" class=\"fancefotos\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-10 mx-auto text-center\">\n          <h2>Termine</h2>\n          <hr class=\"small\">\n          <p>Unsere Fance Trainer bieten Fance Kurse in ausgewählten Fitnessstudios sowie als regelmäßige Outdoor Events\n            an.</p>\n          Infos zu den in Heidelberg stattfindenden Fance Kursen findest Du in den folgenden WhatsApp Gruppen.<br>\n          <p></p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <aside class=\"call-to-action background-black\">\n    <div class=\"container text-center\">\n      <a target=\"_blank\" href=\"https://chat.whatsapp.com/CBU73BL7SptJDf3p1R5mMq\">\n        <h3 class=\"text-color-coral\">Fancy Monday</h3>\n        <p></p>\n        <h4>\n          <strong>Bachata, Zouk und etwas Salsa</strong>\n        </h4>\n      </a>\n      <br>\n\n      <!-- todo zieharmonika einbauen -->\n      <a target=\"_blank\" href=\"https://chat.whatsapp.com/CBU73BL7SptJDf3p1R5mMq\">Zur Whatsapp Gruppe</a>.\n      <p></p> <br>\n      <div class=\"fancefotos-item\">\n        <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/fitness/qrcode-monday.jpg\">\n      </div>\n    </div>\n  </aside>\n\n  <aside class=\"call-to-action background-black\">\n    <div class=\"container text-center\">\n      <a target=\"_blank\" href=\"https://chat.whatsapp.com/IDQQisk7vUzAHHgF1UM7To\">\n        <h3 class=\"text-color-coral\">Fancy Tuesday</h3>\n        <p></p>\n        <h4>\n          <strong>Salsa mit Debbie</strong>\n        </h4>\n      </a>\n      <br>\n      <a target=\"_blank\" href=\"https://chat.whatsapp.com/IDQQisk7vUzAHHgF1UM7To\">Zur Whatsapp Gruppe</a>.\n      <p></p> <br>\n      <div class=\"fancefotos-item\">\n        <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/fitness/qrcode-tuesday.jpg\">\n      </div>\n    </div>\n  </aside>\n\n  <aside class=\"call-to-action background-black\">\n    <div class=\"container text-center\">\n      <a target=\"_blank\" href=\"https://chat.whatsapp.com/Gvz4aq6Jvgq6elxNRKnbc4\">\n        <h3 class=\"text-color-coral\">Fancy Wednesday</h3>\n        <p></p>\n        <h4>\n          <strong>Hip Hop, Salsa & Bachata</strong>\n        </h4>\n      </a>\n      <br>\n      <a target=\"_blank\" href=\"https://chat.whatsapp.com/Gvz4aq6Jvgq6elxNRKnbc4\">Zur Whatsapp Gruppe</a>.\n      <p></p> <br>\n      <div class=\"fancefotos-item\">\n        <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/fitness/qrcode-wednesday.jpg\">\n      </div>\n    </div>\n  </aside>\n\n  <aside class=\"call-to-action background-black\">\n    <div class=\"container text-center\">\n      <a target=\"_blank\" href=\"https://chat.whatsapp.com/GhqSHLSGMF7L06DnsWPxYr\">\n        <h3 class=\"text-color-coral\">Fancy Thursday</h3>\n        <p></p>\n        <h4>\n          <strong>Disco Fance</strong>\n        </h4>\n      </a>\n      <br>\n      <a target=\"_blank\" href=\"https://chat.whatsapp.com/GhqSHLSGMF7L06DnsWPxYr\">Zur Whatsapp Gruppe</a>.\n      <p></p> <br>\n      <div class=\"fancefotos-item\">\n        <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/fitness/qrcode-thursday.jpg\">\n      </div>\n    </div>\n  </aside>\n\n  <aside class=\"call-to-action background-black\">\n    <div class=\"container text-center\">\n      <a target=\"_blank\" href=\"https://chat.whatsapp.com/Epx3YNiXdrFC0dYHF6BnA8\">\n        <h3 class=\"text-color-coral\">Fancy Friday</h3>\n        <p></p>\n        <h4>\n          <strong>Hip Hop & Techno</strong>\n        </h4>\n      </a>\n\n      <br>\n\n      <a target=\"_blank\" href=\"https://chat.whatsapp.com/Epx3YNiXdrFC0dYHF6BnA8\">Zur Whatsapp Gruppe</a>.\n      <p></p> <br>\n      <div class=\"fancefotos-item\">\n        <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/fitness/qrcode-friday.jpg\">\n      </div>\n    </div>\n  </aside>\n\n  <aside class=\"call-to-action background-black\">\n    <div class=\"container text-center\">\n      <a target=\"_blank\" href=\"https://chat.whatsapp.com/Is6qY0QZ0WHLA83yoDVJWp\">\n        <h3 class=\"text-color-coral\">Fancy Saturday</h3>\n        <p></p>\n        <h4>\n          <strong>In Klärung - Eventuell Box Fance</strong>\n        </h4>\n      </a>\n      <br>\n      <a target=\"_blank\" href=\"https://chat.whatsapp.com/Is6qY0QZ0WHLA83yoDVJWp\">Zur Whatsapp Gruppe</a>.\n      <p></p> <br>\n      <div class=\"fancefotos-item\">\n        <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/fitness/qrcode-saturday.jpg\">\n      </div>\n    </div>\n  </aside>\n\n  <aside class=\"call-to-action background-black\">\n    <div class=\"container text-center\">\n      <a target=\"_blank\" href=\"https://chat.whatsapp.com/KGe9ZxqVTg77DNvORCONol\">\n        <h3 class=\"text-color-coral\">Fancy Sunday</h3>\n        <p></p>\n        <h4>\n          <strong>In Klärung - Eventuell All you can Fance</strong>\n        </h4>\n      </a>\n      <br>\n      <a target=\"_blank\" href=\"https://chat.whatsapp.com/KGe9ZxqVTg77DNvORCONol\">Zur Whatsapp Gruppe</a>.\n      <p></p> <br>\n      <div class=\"fancefotos-item\">\n        <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/fitness/qrcode-sunday.jpg\">\n      </div>\n    </div>\n  </aside>\n\n\n  <section id=\"fancefotos\" class=\"fancefotos\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-10 mx-auto text-center\">\n          <h2>Fance Foto Galerie</h2>\n          <hr class=\"small\">\n          <p>Get Fancy</p><br>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"fancefotos-item\">\n                <a href=\"#\">\n                  <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/dachterasse.jpg\">\n                </a>\n              </div>\n            </div>\n\n            <div class=\"col-md-6\">\n              <div class=\"fancefotos-item\">\n                <a href=\"#\">\n                  <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/fancespezialpfitzenmeier.jpg\">\n                </a>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"fancefotos-item\">\n                <a href=\"#\">\n                  <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/campusviva.jpg\">\n                </a>\n              </div>\n            </div>\n\n            <div class=\"col-md-6\">\n              <div class=\"fancefotos-item\">\n                <a href=\"#\">\n                  <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/events/Salsa Rueda Dancing.jpg\">\n                </a>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"fancefotos-item\">\n                <a href=\"#\">\n                  <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/events/salsa rueda group.jpg\">\n                </a>\n              </div>\n            </div>\n\n            <div class=\"col-md-6\">\n              <div class=\"fancefotos-item\">\n                <a href=\"#\">\n                  <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/2019-06-11 07.58.33.jpg\">\n                </a>\n              </div>\n            </div>\n\n\n\n\n\n            <div class=\"col-md-6\">\n              <div class=\"fancefotos-item\">\n                <a href=\"#\">\n                  <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/2019-06-11 08.06.53.jpg\">\n                </a>\n              </div>\n            </div>\n\n\n            <div class=\"col-md-6\">\n              <div class=\"fancefotos-item\">\n                <a href=\"#\">\n                  <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/2019-06-11 08.07.10.jpg\">\n                </a>\n              </div>\n            </div>\n\n\n\n\n            <div class=\"col-md-6\">\n              <div class=\"fancefotos-item\">\n                <a href=\"#\">\n                  <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/events/explaining.jpg\">\n                </a>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"fancefotos-item\">\n                <a href=\"#\">\n                  <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/events/dancing.jpg\">\n                </a>\n              </div>\n            </div>\n\n\n\n            <div class=\"col-md-6\">\n              <div class=\"fancefotos-item\">\n                <a href=\"#\">\n                  <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/2019-06-11 07.57.55.jpg\">\n                </a>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"fancefotos-item\">\n                <a href=\"#\">\n                  <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/2019-06-11 07.57.47.jpg\">\n                </a>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"fancefotos-item\">\n                <a href=\"#\">\n                  <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/2019-06-11 07.58.10.jpg\">\n                </a>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"fancefotos-item\">\n                <a href=\"#\">\n                  <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/2019-06-11 07.58.28.jpg\">\n                </a>\n              </div>\n            </div>\n\n            <div class=\"col-md-6\">\n              <div class=\"fancefotos-item\">\n                <a href=\"#\">\n                  <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/2019-06-11 08.06.58.jpg\">\n                </a>\n              </div>\n            </div>\n\n            <div class=\"col-md-6\">\n              <div class=\"fancefotos-item\">\n                <a href=\"#\">\n                  <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/2019-06-11 08.07.04.jpg\">\n                </a>\n              </div>\n            </div>\n\n            <div class=\"col-md-6\">\n              <div class=\"fancefotos-item\">\n                <a href=\"#\">\n                  <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/salsayuma-poster.png\">\n                </a>\n              </div>\n            </div>\n\n            <div class=\"col-md-6\">\n              <div class=\"fancefotos-item\">\n                <a href=\"#\">\n                  <img class=\"img-fancefotos img-fluid\" src=\"../assets/img/disco-fance.png\">\n                </a>\n              </div>\n            </div>\n\n          </div>\n          <!--<a href=\"#\" class=\"btn btn-dark\">View More Items</a>-->\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section id=\"playlists\" class=\"fancefotos\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-10 mx-auto text-center\">\n          <h2>Aktuelle Fance Playlists</h2>\n          <hr class=\"small\">\n          <a target=\"_blank\" href=\"https://www.youtube.com/playlist?list=PLgUMKsBxbYN7Tv1a6fHRfkjTSx3sgdi_f\">Hip Hop\n            Fance</a><br>\n          <p></p>\n          <a target=\"_blank\" href=\"https://www.youtube.com/playlist?list=PLgUMKsBxbYN7niajEiVbYWc7GpOIoYXiI\">Bachata\n            Fance</a><br>\n          <p></p>\n          <a target=\"_blank\"\n            href=\"https://www.youtube.com/watch?v=WPiEbYSF9kE&list=PLgUMKsBxbYN6A-CvbLxvkB_rcYj9xQv8B\">Merengue\n            Fance</a><br>\n          <p></p>\n          <a target=\"_blank\" href=\"https://www.youtube.com/playlist?list=PLgUMKsBxbYN7PqlNRGhb-qTzNiAQG6wZR\">Salsa\n            Fance</a><br>\n          <p></p>\n          <a target=\"_blank\"\n            href=\"https://www.youtube.com/watch?v=VL6Hvvm1lV0&list=PLgUMKsBxbYN5bF2FUnoGvbXUKIYHnGyLw\">Techno\n            Fance</a><br>\n          <p></p>\n          <a target=\"_blank\"\n            href=\"https://www.youtube.com/watch?v=C26uCpEQqe0&list=PLgUMKsBxbYN6eEmoA3j_Mc7T6wg6drc5G\">Disco\n            Fance</a><br>\n          <p></p>\n          <a target=\"_blank\"\n            href=\"https://www.youtube.com/watch?v=PtWafYfzTIQ&list=PLgUMKsBxbYN551QTi4MW6l8T_GZ3nmD3u\">Box\n            Fance</a><br>\n          <!-- <p></p>\n          <a target=\"_blank\"\n            href=\"https://www.youtube.com/watch?v=bUpRGQtOtGs&list=PLgUMKsBxbYN6TRtdU0z91ZZ30XQHiv1J6\">Yoga\n            Fance</a><br> -->\n          <p></p>\n          <a target=\"_blank\"\n            href=\"https://www.youtube.com/watch?v=0lA-hlIDdCU&list=PLgUMKsBxbYN4D8Tsx0rVhq7138lWiBk_9\">Oriental\n            Fance</a><br>\n          <p></p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section id=\"tutorials\" class=\"fancefotos\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-10 mx-auto text-center\">\n          <h2>Tutorials</h2>\n          <hr class=\"small\">\n          Um unsere Tutorials mit allen Funktionen und ohne Werbung anzuschauen, empfehlen wir Dir den <a\n            href=\"https://brave.com/fan464\">Brave Browser</a>.\n          <p><br></p>\n          Die ersten drei Tutorial Videos jeder Fance Variante stehen per <a href=\"https://brave.com/fan464\">Brave\n            Browser</a> kostenlos bereit. <br> Jedes weitere Tutorial kostet <a href=\"https://basicattentiontoken.org\">1\n            BAT (Basic Attention Token)</a>.\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- <section id=\"packages\" class=\"fancefotos\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-10 mx-auto text-center\">\n          <h2>Fance Tour nach Heidelberg</h2>\n          <br>\n\n          Erlebe einen Wochenendtrip mit einem Fance Instructor, der die lokale Tanzszene wie seine Westentasche\n          kennt.\n          Erlebe eine tänzerische Reise nach Heidelberg.\n\n          <br>\n\n          <p>Zum Paket gehört: <br>\n            <p></p>\n            1. Bed & Breakfast <br>\n            2. Fance Unterricht <br>\n            3. Freier Eintritt zu einem angesagten Tanzclub in Heidelberg\n\n\n            <p></p> <br>\n            <b>Samstags </b> <br>\n            9:00 Uhr Willkommens Empfang<br>\n            10:00 Uhr Bachata Fance Unterricht<br>\n            16:00 Uhr Hip Hop Fance Unterricht<br>\n            20:00 Uhr Fance Party (tagesaktuelle Infos auf Anfrage)<br>\n            <p></p> <br>\n            <b>Sonntags </b> <br>\n\n            9:00 Uhr Optional Gemeinsames Frühstück<br>\n            10:00 Uhr Salsa Fance Unterricht<br>\n            16:00 Uhr Hip Hop Fance Unterricht<br>\n\n            <p><br></p>\n            Kosten: 100 Euro pro Person\n\n\n\n        </div>\n      </div>\n    </div>\n  </section> -->\n\n  <!-- <section id=\"instructor\" class=\"fancefotos\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-10 mx-auto text-center\">\n          <h2>Personal Fance Training Package</h2>\n          Verleihe Deinem Tanz mehr Ausdruck. Buche Deinen Personal Fance Trainer.\n          <p>... <br><p></p>\n            1. Wahl des Schwerpunktes z.B. Hip Hop-, Salsa- Bachata Fance <br>\n            2. Basic Moves <br>\n        </div>\n      </div>\n    </div>\n  </section> -->\n\n  <section id=\"instructor\" class=\"fancefotos\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-10 mx-auto text-center\">\n          <h2>Ausbildung zum Fance Instructor</h2>\n          <hr class=\"small\">\n          <p></p><br>\n          Bei erfolgreichem Bestehen der Abschlußprüfung bieten wir eine Jobgarantie in der Rhein Neckar Region. <p></p>\n          Bei\n          Nichtbestehen der Abschlußprüfung erstatten wir die Ausbildungsgebühr zurück.\n          <br>\n          <p></p>\n          Wir bilden aktuell durchschnittlich pro Quartal drei neue Fance Instructors aus. <br>\n          <p></p><br> Die Ausbildung erstreckt sich über acht Wochen.<br>\n          Für die Ausbildung orientieren wir uns grob an der folgenden Agenda: <br>\n          <p></p><br>\n          <b> 1. Wochenende\n\n          </b> <br> Basic Moves + Physiologie Basics <br>\n          <p></p>\n          <b>\n            2. Wochenende\n          </b><br> Basic Moves + Didaktik <br>\n          <p></p>\n          <b> 3. Wochenende\n          </b><br>Pause\n          <br>\n          <p></p>\n          <b>\n            4. Wochenende\n          </b> <br> Advanced Moves + Physiologie Advanced<br>\n          <p></p>\n          <b>\n            5. Wochenende\n          </b> <br> Advanced Moves + Didaktik<br>\n          <p></p>\n          <b>\n            6. Wochenende\n          </b> <br> Pause<br>\n          <p></p>\n          <b>\n            7. Wochenende\n          </b> <br> Real Life Practice as Co-Instructor<br>\n          <p></p>\n          <b>\n            8. Wochenende\n          </b> <br> Examination + Certification<br>\n          <p></p>\n          <p><br></p>\n          Kosten der Ausbildung: 150 €\n          <p></p><br>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!--\n  <aside class=\"callout\">\n    <div class=\"text-vertical-center\">\n      <h1>Flow</h1>\n    </div>\n  </aside> -->\n  <section id=\"contact\" class=\"map\">\n    <iframe\n      src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2596.3767553255107!2d8.666588851281912!3d49.40178047924312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c0d0cd727a6f%3A0x9c3b5bfe21708003!2sZollhofgarten+8%2C+69115+Heidelberg%2C+Germany!5e0!3m2!1sen!2sus!4v1505293107584\"\n      width=\"100%\" height=\"450 \" frameborder=\"0 \" style=\"border:0 \" allowfullscreen></iframe>\n  </section>\n  <footer>\n\n    <div class=\"container \">\n      <div class=\"row \">\n        <div class=\"col-lg-10 mx-auto text-center \">\n          <p></p>\n          <br> KEINE ABMAHNUNG OHNE KONTAKT\n          <p></p>\n          <br> Sollte der Inhalt fremde Rechte Dritter oder gesetzliche Bestimmungen verletzen, informieren Sie mich\n          ohne Kostennote.\n          Ich garantiere, dass die zu Recht beanstandeten Passagen unverzüglich entfernt werden, ohne dass von Ihrer\n          Seite\n          die Einschaltung eines Rechtsbeistandes erforderlich ist. Dennoch von Ihnen ohne vorherige Kontaktaufnahme\n          ausgelöste\n          Kosten werden im Sinne der Schadensminderungspflicht zurückgewiesen und gegebenenfalls wird Gegenklage wegen\n          Verletzung vorgenannter Bestimmungen eingereicht.\n          <p></p>\n          <br>\n          Diese Seite befindet sich im Aufbau. Feedback ist jederzeit willkommen.\n\n          <p><br></p>\n          <p></p><br>\n          <h4>\n            <strong>Fancy Fance Fans</strong>\n          </h4>\n          <p>Zollhofgarten 8\n            <br>69115 Heidelberg</p>\n          <ul class=\"list-unstyled \">\n            <li>\n              <i class=\"fa fa-phone fa-fw \"></i>+49 151 67 83 38 69</li>\n            <!--<li>\n              <i class=\"fa fa-envelope-o fa-fw \"></i>\n              <a href=\"mailto:info@fance-fitness.com\">info@fance-fitness.com</a>\n            </li>-->\n          </ul>\n          <br>\n          <!-- <ul class=\"list-inline \">\n            <li class=\"list-inline-item \">\n              <a href=\"https://www.facebook.com/FANCE.HEIDELBERG/\">\n                <i class=\"fa fa-facebook fa-fw fa-3x \"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item \">\n              <a href=\"# \">\n                <i class=\"fa fa-twitter fa-fw fa-3x \"></i>\n              </a>\n            </li>\n            <li class=\"list-inline-item \">\n              <a href=\"# \">\n                <i class=\"fa fa-dribbble fa-fw fa-3x \"></i>\n              </a>\n            </li>\n          </ul> -->\n          <hr class=\"small \">\n          <p class=\"text-muted \">Copyright &copy; Fance Fitness 2019</p>\n        </div>\n      </div>\n    </div>\n    <a id=\"to-top \" href=\"#fance \" class=\"btn btn-dark btn-lg js-scroll-trigger \">\n      <i class=\"fa fa-chevron-up fa-fw fa-1x \"></i>\n    </a>\n  </footer>\n  <!-- <script src=\"vendor/jquery/jquery.min.js \"></script>\n  <script src=\"vendor/popper/popper.min.js \"></script>\n  <script src=\"vendor/bootstrap/js/bootstrap.min.js \"></script>\n  <script src=\"vendor/jquery-easing/jquery.easing.min.js \"></script>\n  <script src=\"js/stylish-portfolio.js \"></script> -->\n\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/monday/monday.component.css":
/*!*********************************************!*\
  !*** ./src/app/monday/monday.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vbmRheS9tb25kYXkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/monday/monday.component.html":
/*!**********************************************!*\
  !*** ./src/app/monday/monday.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <meta http-equiv=\"refresh\" content=\"0; URL='https://chat.whatsapp.com/CBU73BL7SptJDf3p1R5mMq'\" /> -->\n"

/***/ }),

/***/ "./src/app/monday/monday.component.ts":
/*!********************************************!*\
  !*** ./src/app/monday/monday.component.ts ***!
  \********************************************/
/*! exports provided: MondayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MondayComponent", function() { return MondayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MondayComponent = /** @class */ (function () {
    function MondayComponent() {
    }
    MondayComponent.prototype.ngOnInit = function () {
        window.open('https://chat.whatsapp.com/CBU73BL7SptJDf3p1R5mMq');
    };
    MondayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-monday',
            template: __webpack_require__(/*! ./monday.component.html */ "./src/app/monday/monday.component.html"),
            styles: [__webpack_require__(/*! ./monday.component.css */ "./src/app/monday/monday.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MondayComponent);
    return MondayComponent;
}());



/***/ }),

/***/ "./src/app/saturday/saturday.component.css":
/*!*************************************************!*\
  !*** ./src/app/saturday/saturday.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhdHVyZGF5L3NhdHVyZGF5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/saturday/saturday.component.html":
/*!**************************************************!*\
  !*** ./src/app/saturday/saturday.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <meta http-equiv=\"refresh\" content=\"0; URL='https://chat.whatsapp.com/Is6qY0QZ0WHLA83yoDVJWp'\" /> -->"

/***/ }),

/***/ "./src/app/saturday/saturday.component.ts":
/*!************************************************!*\
  !*** ./src/app/saturday/saturday.component.ts ***!
  \************************************************/
/*! exports provided: SaturdayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaturdayComponent", function() { return SaturdayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SaturdayComponent = /** @class */ (function () {
    function SaturdayComponent() {
    }
    SaturdayComponent.prototype.ngOnInit = function () {
        window.open('https://chat.whatsapp.com/Is6qY0QZ0WHLA83yoDVJWp');
    };
    SaturdayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-saturday',
            template: __webpack_require__(/*! ./saturday.component.html */ "./src/app/saturday/saturday.component.html"),
            styles: [__webpack_require__(/*! ./saturday.component.css */ "./src/app/saturday/saturday.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SaturdayComponent);
    return SaturdayComponent;
}());



/***/ }),

/***/ "./src/app/sunday/sunday.component.css":
/*!*********************************************!*\
  !*** ./src/app/sunday/sunday.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1bmRheS9zdW5kYXkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sunday/sunday.component.html":
/*!**********************************************!*\
  !*** ./src/app/sunday/sunday.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <meta http-equiv=\"refresh\" content=\"0; URL='https://chat.whatsapp.com/KGe9ZxqVTg77DNvORCONol'\" /> -->"

/***/ }),

/***/ "./src/app/sunday/sunday.component.ts":
/*!********************************************!*\
  !*** ./src/app/sunday/sunday.component.ts ***!
  \********************************************/
/*! exports provided: SundayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SundayComponent", function() { return SundayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SundayComponent = /** @class */ (function () {
    function SundayComponent() {
    }
    SundayComponent.prototype.ngOnInit = function () {
        window.open('https://chat.whatsapp.com/KGe9ZxqVTg77DNvORCONol');
    };
    SundayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sunday',
            template: __webpack_require__(/*! ./sunday.component.html */ "./src/app/sunday/sunday.component.html"),
            styles: [__webpack_require__(/*! ./sunday.component.css */ "./src/app/sunday/sunday.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SundayComponent);
    return SundayComponent;
}());



/***/ }),

/***/ "./src/app/thursday/thursday.component.css":
/*!*************************************************!*\
  !*** ./src/app/thursday/thursday.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RodXJzZGF5L3RodXJzZGF5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/thursday/thursday.component.html":
/*!**************************************************!*\
  !*** ./src/app/thursday/thursday.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <meta http-equiv=\"refresh\" content=\"0; URL='https://chat.whatsapp.com/GhqSHLSGMF7L06DnsWPxYr'\" /> -->"

/***/ }),

/***/ "./src/app/thursday/thursday.component.ts":
/*!************************************************!*\
  !*** ./src/app/thursday/thursday.component.ts ***!
  \************************************************/
/*! exports provided: ThursdayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThursdayComponent", function() { return ThursdayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThursdayComponent = /** @class */ (function () {
    function ThursdayComponent() {
    }
    ThursdayComponent.prototype.ngOnInit = function () {
        window.open('https://chat.whatsapp.com/GhqSHLSGMF7L06DnsWPxYr');
    };
    ThursdayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-thursday',
            template: __webpack_require__(/*! ./thursday.component.html */ "./src/app/thursday/thursday.component.html"),
            styles: [__webpack_require__(/*! ./thursday.component.css */ "./src/app/thursday/thursday.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThursdayComponent);
    return ThursdayComponent;
}());



/***/ }),

/***/ "./src/app/tuesday/tuesday.component.css":
/*!***********************************************!*\
  !*** ./src/app/tuesday/tuesday.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R1ZXNkYXkvdHVlc2RheS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tuesday/tuesday.component.html":
/*!************************************************!*\
  !*** ./src/app/tuesday/tuesday.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <meta http-equiv=\"refresh\" content=\"0; URL='https://chat.whatsapp.com/IDQQisk7vUzAHHgF1UM7To'\" /> -->"

/***/ }),

/***/ "./src/app/tuesday/tuesday.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tuesday/tuesday.component.ts ***!
  \**********************************************/
/*! exports provided: TuesdayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuesdayComponent", function() { return TuesdayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TuesdayComponent = /** @class */ (function () {
    function TuesdayComponent() {
    }
    TuesdayComponent.prototype.ngOnInit = function () {
        window.open('https://chat.whatsapp.com/IDQQisk7vUzAHHgF1UM7To');
    };
    TuesdayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tuesday',
            template: __webpack_require__(/*! ./tuesday.component.html */ "./src/app/tuesday/tuesday.component.html"),
            styles: [__webpack_require__(/*! ./tuesday.component.css */ "./src/app/tuesday/tuesday.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TuesdayComponent);
    return TuesdayComponent;
}());



/***/ }),

/***/ "./src/app/wednesday/wednesday.component.css":
/*!***************************************************!*\
  !*** ./src/app/wednesday/wednesday.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlZG5lc2RheS93ZWRuZXNkYXkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/wednesday/wednesday.component.html":
/*!****************************************************!*\
  !*** ./src/app/wednesday/wednesday.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <meta http-equiv=\"refresh\" content=\"0; URL='https://chat.whatsapp.com/Gvz4aq6Jvgq6elxNRKnbc4'\" /> -->"

/***/ }),

/***/ "./src/app/wednesday/wednesday.component.ts":
/*!**************************************************!*\
  !*** ./src/app/wednesday/wednesday.component.ts ***!
  \**************************************************/
/*! exports provided: WednesdayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WednesdayComponent", function() { return WednesdayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WednesdayComponent = /** @class */ (function () {
    function WednesdayComponent() {
    }
    WednesdayComponent.prototype.ngOnInit = function () {
        window.open('https://chat.whatsapp.com/Gvz4aq6Jvgq6elxNRKnbc4');
    };
    WednesdayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wednesday',
            template: __webpack_require__(/*! ./wednesday.component.html */ "./src/app/wednesday/wednesday.component.html"),
            styles: [__webpack_require__(/*! ./wednesday.component.css */ "./src/app/wednesday/wednesday.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WednesdayComponent);
    return WednesdayComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/michael/Desktop/gh-pages/fance-fitness-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map