(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-welcome-module"],{

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (e) {
            return e.title.toLowerCase().indexOf(filter) > -1 ||
                e.title.indexOf(filter) > -1;
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.module.ts":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome.page */ "./src/app/welcome/welcome.page.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../filter.pipe */ "./src/app/filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_5__["WelcomePage"]
    }
];
var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_5__["WelcomePage"], _filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipe"]]
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.page.html":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Welcome Admin!\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-searchbar [(ngModel)]=\"searchTerm\" placeholder=\"client search\" animated></ion-searchbar>\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor=\"let client of clientArr | filter: searchTerm : 'title'\">\n      {{client?.title}}\n    \n    </ion-item>    \n    <ion-item *ngIf=\"(clientArr | filter: searchTerm : 'title').length===0\">No Records Found</ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/welcome/welcome.page.scss":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  text-align: center; }\n\nion-row {\n  height: 100%; }\n\n.searchBar {\n  position: fixed;\n  z-index: 999; }\n\n.clientList {\n  margin-top: 50px; }\n\n.toolbar-title {\n  color: #FFFFFF; }\n\n.new-background-color {\n  --background: #1DA1F2;\n  color: #FFFFFF; }\n\nion-back-button {\n  --color:#FFFFFF; }\n\nion-button {\n  font-weight: 300; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpdnlhL0Rlc2t0b3AvbmV3SW9uaWNBcHAvc3JjL2FwcC93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksWUFQWSxFQUFBOztBQVNoQjtFQUNJLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksZ0JBQWUsRUFBQTs7QUFFbkI7RUFDSSxjQUNGLEVBQUE7O0FBQ0E7RUFDRSxxQkFBYTtFQUNiLGNBQ0osRUFBQTs7QUFDQTtFQUNJLGVBQVEsRUFBQTs7QUFHWjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuJGhlaWdodDEwMDogMTAwJTtcblxuaW9uLWhlYWRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1yb3cge1xuICAgIGhlaWdodDogJGhlaWdodDEwMDtcbn1cbi5zZWFyY2hCYXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5OTtcbn1cbi5jbGllbnRMaXN0e1xuICAgIG1hcmdpbi10b3A6NTBweDtcbn1cbi50b29sYmFyLXRpdGxlIHtcbiAgICBjb2xvcjogI0ZGRkZGRlxuICB9XG4gIC5uZXctYmFja2dyb3VuZC1jb2xvcntcbiAgICAtLWJhY2tncm91bmQ6ICMxREExRjI7XG4gICAgY29sb3I6ICNGRkZGRkZcbn1cbmlvbi1iYWNrLWJ1dHRvbntcbiAgICAtLWNvbG9yOiNGRkZGRkY7XG59XG5cbmlvbi1idXR0b24ge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.page.ts":
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* Welcome and search component  */
var WelcomePage = /** @class */ (function () {
    function WelcomePage(router) {
        this.router = router;
        this.searchTerm = '';
        /* list of clients */
        this.clientArr = [
            { title: 'Ralph Lairsey' },
            { title: 'Griffin' },
            { title: 'Centaur' },
            { title: 'Minotaur' },
            { title: 'Cyclope' },
            { title: 'Alane Messick' },
            { title: 'Alphackette' },
            { title: 'Lajuana Blanche' },
            { title: 'Fierce Spartan' },
            { title: 'Alane Messick' },
            { title: 'Tamara Bozell' },
            { title: 'Diana' },
            { title: 'Donna' },
            { title: 'Bella' },
            { title: 'Emily' },
            { title: 'Jasmine' },
            { title: 'Jennifer' },
            { title: 'Jessica' },
            { title: 'Julia' },
            { title: 'Leah' },
            { title: 'Karen' },
            { title: 'Joanne' },
            { title: 'Mary' },
            { title: 'Megan' },
            { title: 'Molly' },
            { title: 'Natalie' },
            { title: 'Pippa' },
            { title: 'Samantha' },
            { title: 'Stephanie' },
            { title: 'Sophie' },
        ];
    }
    WelcomePage.prototype.ngOnInit = function () {
    };
    WelcomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.page.html */ "./src/app/welcome/welcome.page.html"),
            styles: [__webpack_require__(/*! ./welcome.page.scss */ "./src/app/welcome/welcome.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], WelcomePage);
    return WelcomePage;
}());



/***/ })

}]);
//# sourceMappingURL=welcome-welcome-module.js.map