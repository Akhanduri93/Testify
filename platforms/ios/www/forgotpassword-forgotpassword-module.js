(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpassword-forgotpassword-module"],{

/***/ "./src/app/forgotpassword/forgotpassword.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.module.ts ***!
  \*********************************************************/
/*! exports provided: ForgotpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function() { return ForgotpasswordPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgotpassword.page */ "./src/app/forgotpassword/forgotpassword.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordPage"]
    }
];
var ForgotpasswordPageModule = /** @class */ (function () {
    function ForgotpasswordPageModule() {
    }
    ForgotpasswordPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordPage"]]
        })
    ], ForgotpasswordPageModule);
    return ForgotpasswordPageModule;
}());



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.page.html":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid>\n  <ion-row justify-content-center>\n    <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n      <div text-center>\n        <h4>Forgot Password</h4>\n      </div>\n\n      <form #ForgotForm=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(ForgotForm.form.valid)\" autocomplete=\"Off\">\n        <div padding>\n          <ion-item>\n            <ion-input name=\"email\" type=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" class=\"form-control\" type=\"text\"\n              placeholder=\"Enter email id\" required autocomplete=\"Off\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\n              <ion-icon name=\"mail\" class=\"icon\"></ion-icon>\n            </ion-input>\n          </ion-item>\n          <div *ngIf=\"email.errors && ( (email.dirty || email.touched) || ForgotForm. _submitted )\">\n            <div class=\"errorClass\" [hidden]=\"!email.errors.required\">\n              Email is required.\n            </div>\n\n            <div class=\"errorClass\" *ngIf=\"email.errors.pattern && model.email\">\n              Email is not valid.\n            </div>\n          </div>\n\n          <div class=\"forgotPasswordButtons\" padding>\n            <ion-button type=\"submit\" size=\"default\" href=\"javascript:void(0)\" *ngIf=\"isProcessing\" expand=\"round\">\n              <ion-spinner name=\"bubbles\"></ion-spinner>\n            </ion-button>\n            <ion-button type=\"submit\" size=\"default\" href=\"javascript:void(0)\" *ngIf=\"!isProcessing\" expand=\"round\" [disabled]=\"!ForgotForm.form.valid\">Submit</ion-button>\n          </div>\n\n        </div>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-grid>"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".errorClass {\n  color: crimson; }\n\n.icon {\n  position: absolute;\n  right: 0; }\n\nion-grid {\n  width: 100%;\n  height: 100%;\n  background: #1DA1F2; }\n\nion-row {\n  height: 100%; }\n\n.forgotPasswordButtons ion-button {\n  min-width: 100px; }\n\nion-col {\n  border: 1px solid #488aff;\n  background: #fff; }\n\nion-button {\n  font-weight: 300; }\n\n.forgotPasswordButtons {\n  text-align: center; }\n\n@media (min-width: 240px) and (max-width: 768px) {\n  ion-grid {\n    background: #1DA1F2; }\n  ion-col {\n    border: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpdnlhL0Rlc2t0b3AvbmV3SW9uaWNBcHAvc3JjL2FwcC9mb3Jnb3RwYXNzd29yZC9mb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVEsRUFBQTs7QUFLWjtFQUNJLFdBQVU7RUFDVixZQUpZO0VBS1osbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksWUFUWSxFQUFBOztBQVdoQjtFQUNJLGdCQUFlLEVBQUE7O0FBRW5CO0VBQ0kseUJBQXlCO0VBQ3pCLGdCQWpCYyxFQUFBOztBQW9CbEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSTtJQUNJLG1CQUFtQixFQUFBO0VBRXZCO0lBQ0ksWUFBWSxFQUFBLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9mb3Jnb3RwYXNzd29yZC9mb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5lcnJvckNsYXNze1xuICAgIGNvbG9yOiBjcmltc29uO1xufVxuLmljb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xufVxuJHdoaXRlLWNvbG9yOiAjZmZmO1xuJGhlaWdodDEwMDogMTAwJTtcblxuaW9uLWdyaWQge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiAkaGVpZ2h0MTAwO1xuICAgIGJhY2tncm91bmQ6ICMxREExRjI7XG59XG5cbmlvbi1yb3cge1xuICAgIGhlaWdodDogJGhlaWdodDEwMDtcbn1cbi5mb3Jnb3RQYXNzd29yZEJ1dHRvbnMgaW9uLWJ1dHRvbntcbiAgICBtaW4td2lkdGg6MTAwcHg7XG59XG5pb24tY29sIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDg4YWZmO1xuICAgIGJhY2tncm91bmQ6ICR3aGl0ZS1jb2xvcjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5mb3Jnb3RQYXNzd29yZEJ1dHRvbnN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMjQwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGlvbi1ncmlkIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzFEQTFGMjtcbiAgICB9XG4gICAgaW9uLWNvbCB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.page.ts ***!
  \*******************************************************/
/*! exports provided: ForgotpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPage", function() { return ForgotpasswordPage; });
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


/* Forgot Password component */
var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(router) {
        this.router = router;
        this.model = {
            'email': ''
        };
        this.isProcessing = false;
    }
    ForgotpasswordPage.prototype.ngOnInit = function () {
    };
    /*Function for submit email for forgot password and route for resetPassword */
    ForgotpasswordPage.prototype.onSubmit = function (form) {
        var _this = this;
        this.isProcessing = true;
        setTimeout(function () {
            _this.isProcessing = false;
            _this.router.navigate(['/resetpassword']);
        }, 3000);
    };
    ForgotpasswordPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgotpassword',
            template: __webpack_require__(/*! ./forgotpassword.page.html */ "./src/app/forgotpassword/forgotpassword.page.html"),
            styles: [__webpack_require__(/*! ./forgotpassword.page.scss */ "./src/app/forgotpassword/forgotpassword.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgotpassword-forgotpassword-module.js.map