(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resetpassword-resetpassword-module"],{

/***/ "./src/app/resetpassword/resetpassword.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.module.ts ***!
  \*******************************************************/
/*! exports provided: ResetpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordPageModule", function() { return ResetpasswordPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _resetpassword_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resetpassword.page */ "./src/app/resetpassword/resetpassword.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _resetpassword_page__WEBPACK_IMPORTED_MODULE_5__["ResetpasswordPage"]
    }
];
var ResetpasswordPageModule = /** @class */ (function () {
    function ResetpasswordPageModule() {
    }
    ResetpasswordPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_resetpassword_page__WEBPACK_IMPORTED_MODULE_5__["ResetpasswordPage"]]
        })
    ], ResetpasswordPageModule);
    return ResetpasswordPageModule;
}());



/***/ }),

/***/ "./src/app/resetpassword/resetpassword.page.html":
/*!*******************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-grid>\n  <ion-row justify-content-center>\n    <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n      <div text-center>\n        <h4>Reset Password</h4>\n      </div>\n\n      <form #ResetForm=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(ResetForm.form.valid)\" autocomplete=\"Off\">\n        <div padding>\n          <ion-item>\n            <ion-input name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" class=\"form-control\" type=\"password\"\n              placeholder=\"Password\" required autocomplete=\"Off\">\n              <ion-icon name=\"key\" class=\"icon\"></ion-icon>\n            </ion-input>\n          </ion-item>\n          <div *ngIf=\"password.errors && ( (password.dirty || password.touched) || ResetForm. _submitted )\">\n            <div class=\"errorClass\" [hidden]=\"!password.errors.required\">\n              Password is required.\n            </div>\n          </div>\n\n          <ion-item>\n            <ion-input name=\"confirmPassword\" [(ngModel)]=\"model.confirmPassword\" #confirmPassword=\"ngModel\" class=\"form-control\"\n              type=\"password\" placeholder=\"Confirm Password\" required autocomplete=\"Off\">\n              <ion-icon name=\"key\" class=\"icon\"></ion-icon>\n            </ion-input>\n          </ion-item>\n          <div *ngIf=\"confirmPassword.errors && ( (confirmPassword.dirty || confirmPassword.touched) || ResetForm. _submitted )\">\n            <div class=\"errorClass\" [hidden]=\"!confirmPassword.errors.required\">\n              Confirm Password is required.\n            </div>\n          </div>\n          <div class=\"errorClass\" *ngIf=\"model.password !== model.confirmPassword && !confirmPassword.errors\">\n            password don't match.\n          </div>\n\n          <div class=\"resetButton\" padding>\n            <ion-button type=\"submit\" size=\"default\" href=\"javascript:void(0)\" expand=\"round\" [disabled]=\"!ResetForm.form.valid || model.password !== model.confirmPassword\">Reset\n              Password</ion-button>\n          </div>\n\n        </div>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-grid>"

/***/ }),

/***/ "./src/app/resetpassword/resetpassword.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".errorClass {\n  color: crimson; }\n\nion-grid {\n  width: 100%;\n  height: 100%;\n  background: #1DA1F2; }\n\n.icon {\n  position: absolute;\n  right: 0; }\n\nion-row {\n  height: 100%; }\n\nion-col {\n  border: 1px solid #488aff;\n  background: #fff; }\n\nion-button {\n  font-weight: 300; }\n\n.resetButton {\n  text-align: center; }\n\n@media (min-width: 240px) and (max-width: 768px) {\n  ion-grid {\n    background: #1DA1F2; }\n  ion-col {\n    border: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpdnlhL0Rlc2t0b3AvbmV3SW9uaWNBcHAvc3JjL2FwcC9yZXNldHBhc3N3b3JkL3Jlc2V0cGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBYyxFQUFBOztBQU1sQjtFQUNJLFdBQVU7RUFDVixZQUpZO0VBS1osbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVEsRUFBQTs7QUFFWjtFQUNJLFlBWlksRUFBQTs7QUFlaEI7RUFDSSx5QkFBeUI7RUFDekIsZ0JBbEJjLEVBQUE7O0FBcUJsQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGtCQUFrQixFQUFBOztBQUl0QjtFQUNJO0lBQ0ksbUJBQW1CLEVBQUE7RUFFdkI7SUFDSSxZQUFZLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5lcnJvckNsYXNze1xuICAgIGNvbG9yOiBjcmltc29uO1xufVxuXG4kd2hpdGUtY29sb3I6ICNmZmY7XG4kaGVpZ2h0MTAwOiAxMDAlO1xuXG5pb24tZ3JpZCB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6ICRoZWlnaHQxMDA7XG4gICAgYmFja2dyb3VuZDogIzFEQTFGMjtcbn1cbi5pY29ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbn1cbmlvbi1yb3cge1xuICAgIGhlaWdodDogJGhlaWdodDEwMDtcbn1cblxuaW9uLWNvbCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ4OGFmZjtcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGUtY29sb3I7XG59XG5cbmlvbi1idXR0b24ge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ucmVzZXRCdXR0b257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiAyNDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgaW9uLWdyaWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMURBMUYyO1xuICAgIH1cbiAgICBpb24tY29sIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/resetpassword/resetpassword.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.page.ts ***!
  \*****************************************************/
/*! exports provided: ResetpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordPage", function() { return ResetpasswordPage; });
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


/* Reset Password component */
var ResetpasswordPage = /** @class */ (function () {
    function ResetpasswordPage(router) {
        this.router = router;
        this.model = {
            'password': '',
            'confirmPassword': ''
        };
    }
    ResetpasswordPage.prototype.ngOnInit = function () {
    };
    /* Function for clicking on forgot password button, then route for login page */
    ResetpasswordPage.prototype.onSubmit = function (form) {
        this.router.navigate(['/login']);
    };
    ResetpasswordPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resetpassword',
            template: __webpack_require__(/*! ./resetpassword.page.html */ "./src/app/resetpassword/resetpassword.page.html"),
            styles: [__webpack_require__(/*! ./resetpassword.page.scss */ "./src/app/resetpassword/resetpassword.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ResetpasswordPage);
    return ResetpasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=resetpassword-resetpassword-module.js.map