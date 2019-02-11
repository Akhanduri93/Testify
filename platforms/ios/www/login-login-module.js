(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"],
    },
    {
        path: 'welcome',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"],
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid>\n  <ion-row justify-content-center>\n    <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n      <div text-center>\n        <h4>Login</h4>\n      </div>\n\n      <form #LoginForm=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(LoginForm.form.valid)\" autocomplete=\"Off\">\n        <div padding>\n          <ion-item>\n            <ion-input name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" class=\"form-control\" type=\"text\"\n              placeholder=\"Username\" required autocomplete=\"Off\"><ion-icon name=\"contact\" class=\"icon\"></ion-icon></ion-input>\n          </ion-item>\n          <div *ngIf=\"username.errors && ( (username.dirty || username.touched) || LoginForm. _submitted )\">\n            <div class=\"errorClass\" [hidden]=\"!username.errors.required\">\n              Username is required.\n            </div>\n          </div>\n\n          <ion-item>\n            <ion-input name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" class=\"form-control\" type=\"password\"\n              placeholder=\"Password\" required autocomplete=\"Off\"><ion-icon name=\"key\" class=\"icon\"></ion-icon></ion-input>\n          </ion-item>\n          <div *ngIf=\"password.errors && ( (password.dirty || password.touched) || LoginForm. _submitted )\">\n            <div class=\"errorClass\" [hidden]=\"!password.errors.required\">\n              Password is required.\n            </div>\n          </div>\n          <div padding *ngIf=\"isValid\" class=\"errorClass\">\n            Username or Password is incorrect\n          </div>\n          <div class=\"btnSubmit\" padding>\n            <ion-button type=\"submit\" *ngIf=\"isProcessing\" size=\"default\" href=\"javascript:void(0)\" expand=\"round\" [disabled]=\"!LoginForm.form.valid\">\n                <ion-spinner name=\"bubbles\"></ion-spinner>\n            </ion-button>\n            <ion-button type=\"submit\" *ngIf=\"!isProcessing\" size=\"default\" href=\"javascript:void(0)\" expand=\"round\" [disabled]=\"!LoginForm.form.valid\">Login</ion-button>\n            <div>\n              <p><a style=\"cursor:pointer\" routerLink=\"/forgotpassword\">Forgot Password?</a></p>\n            </div>\n          </div>\n\n        </div>\n      </form>\n    </ion-col>\n  </ion-row>\n</ion-grid>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".errorClass {\n  color: crimson; }\n\n.icon {\n  position: absolute;\n  right: 0; }\n\nion-grid {\n  width: 100%;\n  height: 100%;\n  background: #1DA1F2; }\n\n.btnSubmit {\n  text-align: right; }\n\n.btnSubmit p {\n  display: block;\n  text-align: right;\n  font-size: 13px; }\n\nion-row {\n  height: 100%; }\n\n.btnSubmit ion-button {\n  min-width: 100px; }\n\nion-col {\n  border: 1px solid #488aff;\n  background: #fff; }\n\nion-button {\n  font-weight: 300; }\n\n@media (min-width: 240px) and (max-width: 768px) {\n  ion-grid {\n    background: #1DA1F2; }\n  ion-col {\n    border: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpdnlhL0Rlc2t0b3AvbmV3SW9uaWNBcHAvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVEsRUFBQTs7QUFLWjtFQUNJLFdBQVU7RUFDVixZQUpZO0VBS1osbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksY0FBYTtFQUNiLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksWUFqQlksRUFBQTs7QUFtQmhCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0kseUJBQXlCO0VBQ3pCLGdCQTFCYyxFQUFBOztBQTZCbEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSTtJQUNJLG1CQUFtQixFQUFBO0VBRXZCO0lBQ0ksWUFBWSxFQUFBLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5lcnJvckNsYXNze1xuICAgIGNvbG9yOiBjcmltc29uO1xufVxuLmljb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xufVxuJHdoaXRlLWNvbG9yOiAjZmZmO1xuJGhlaWdodDEwMDogMTAwJTtcblxuaW9uLWdyaWQge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiAkaGVpZ2h0MTAwO1xuICAgIGJhY2tncm91bmQ6ICMxREExRjI7XG59XG4uYnRuU3VibWl0e1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmJ0blN1Ym1pdCBwe1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5pb24tcm93IHtcbiAgICBoZWlnaHQ6ICRoZWlnaHQxMDA7XG59XG4uYnRuU3VibWl0IGlvbi1idXR0b257XG4gICAgbWluLXdpZHRoOiAxMDBweDtcbn1cblxuaW9uLWNvbCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ4OGFmZjtcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGUtY29sb3I7XG59XG5cbmlvbi1idXR0b24ge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAyNDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgaW9uLWdyaWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMURBMUYyOztcbiAgICB9XG4gICAgaW9uLWNvbCB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
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


/* Login Component*/
var LoginPage = /** @class */ (function () {
    function LoginPage(router) {
        this.router = router;
        this.model = {
            'username': '',
            'password': ''
        };
        this.isProcessing = false;
        this.isValid = false;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    /* Function for successfully login and route for welcome page */
    LoginPage.prototype.onSubmit = function (form) {
        var _this = this;
        /* checking username and password(if match, then route on welcome page )*/
        if (this.model.username === 'admin' && this.model.password === 'admin') {
            this.isProcessing = true;
            setTimeout(function () {
                _this.router.navigate(['/welcome']);
                _this.isProcessing = false;
            }, 3000);
        }
        /* if username and password don't match then show message */
        else {
            this.isValid = true;
            setTimeout(function () {
                _this.isValid = false;
                _this.isProcessing = false;
            }, 5000);
        }
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map