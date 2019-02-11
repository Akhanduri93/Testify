(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clientsearch-clientsearch-module"],{

/***/ "./src/app/clientsearch/clientsearch.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/clientsearch/clientsearch.module.ts ***!
  \*****************************************************/
/*! exports provided: ClientsearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsearchPageModule", function() { return ClientsearchPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _clientsearch_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clientsearch.page */ "./src/app/clientsearch/clientsearch.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _clientsearch_page__WEBPACK_IMPORTED_MODULE_5__["ClientsearchPage"]
    }
];
var ClientsearchPageModule = /** @class */ (function () {
    function ClientsearchPageModule() {
    }
    ClientsearchPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_clientsearch_page__WEBPACK_IMPORTED_MODULE_5__["ClientsearchPage"]]
        })
    ], ClientsearchPageModule);
    return ClientsearchPageModule;
}());



/***/ }),

/***/ "./src/app/clientsearch/clientsearch.page.html":
/*!*****************************************************!*\
  !*** ./src/app/clientsearch/clientsearch.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content padding>\n    <ion-searchbar animated></ion-searchbar>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/clientsearch/clientsearch.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/clientsearch/clientsearch.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHNlYXJjaC9jbGllbnRzZWFyY2gucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/clientsearch/clientsearch.page.ts":
/*!***************************************************!*\
  !*** ./src/app/clientsearch/clientsearch.page.ts ***!
  \***************************************************/
/*! exports provided: ClientsearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsearchPage", function() { return ClientsearchPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientsearchPage = /** @class */ (function () {
    function ClientsearchPage() {
    }
    ClientsearchPage.prototype.ngOnInit = function () {
    };
    ClientsearchPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clientsearch',
            template: __webpack_require__(/*! ./clientsearch.page.html */ "./src/app/clientsearch/clientsearch.page.html"),
            styles: [__webpack_require__(/*! ./clientsearch.page.scss */ "./src/app/clientsearch/clientsearch.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientsearchPage);
    return ClientsearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=clientsearch-clientsearch-module.js.map