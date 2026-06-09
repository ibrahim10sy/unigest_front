"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_pages_auth_login_login_component_ts"],{

/***/ 6944:
/*!***********************************************************!*\
  !*** ./src/app/pages/pages/auth/login/login.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 3951);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);























function LoginComponent_mat_icon_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 19);
  }
}
function LoginComponent_mat_icon_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 20);
  }
}
function LoginComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "SE CONNECTER");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_mat_spinner_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-spinner", 21);
  }
}
const _c0 = () => ["/forgot-password"];
class LoginComponent {
  constructor(router, authService, fb, cd, snackbar) {
    this.router = router;
    this.authService = authService;
    this.fb = fb;
    this.cd = cd;
    this.snackbar = snackbar;
    // 1. Ajouter la variable ici
    this.loading = false;
    this.form = this.fb.group({
      login: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.inputType = 'password';
    this.visible = false;
  }
  send() {
    // 2. Activer l'état de chargement
    this.loading = true;
    this.authService.login(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/dashboards/analytics']);
        this.snackbar.open("Bienvenue !", 'OK', {
          duration: 3000
        });
        this.loading = false; // Désactiver
      },

      error: err => {
        this.snackbar.open("Erreur de connexion", 'OK', {
          duration: 3000
        });
        this.loading = false; // Désactiver en cas d'erreur
      }
    });
  }

  toggleVisibility() {
    this.inputType = this.visible ? 'password' : 'text';
    this.visible = !this.visible;
    this.cd.markForCheck();
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["vex-login"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 27,
    vars: 9,
    consts: [[1, "w-full", "min-h-screen", "flex", "items-center", "justify-center", "bg-gradient-to-br", "from-indigo-500", "to-purple-600", "p-4"], [1, "w-full", "max-w-md", "bg-white/90", "backdrop-blur-xl", "shadow-2xl", "rounded-3xl", "p-8", "border", "border-white/20"], [1, "text-center", "mb-8"], ["src", "assets/img/illustrations/data_center.svg", 1, "w-24", "h-auto", "mx-auto", "mb-4"], [1, "text-3xl", "font-bold", "text-gray-800", "tracking-tight"], [1, "flex", "flex-col", "gap-6", 3, "formGroup"], ["appearance", "outline", 1, "w-full"], ["formControlName", "login", "matInput", "", "required", "", "placeholder", "exemple@domaine.com"], ["matSuffix", "", "svgIcon", "mat:mail"], ["formControlName", "password", "matInput", "", "required", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["svgIcon", "mat:visibility", 4, "ngIf"], ["svgIcon", "mat:visibility_off", 4, "ngIf"], [1, "flex", "items-center", "justify-between"], ["color", "primary"], [1, "text-indigo-600", "hover:text-indigo-800", "font-semibold", "text-sm", 3, "routerLink"], ["color", "primary", "mat-flat-button", "", "type", "submit", 1, "h-12", "text-lg", "font-bold", "rounded-xl", "transition-all", "duration-300", 3, "disabled", "click"], [4, "ngIf"], ["diameter", "24", "color", "accent", 4, "ngIf"], ["svgIcon", "mat:visibility"], ["svgIcon", "mat:visibility_off"], ["diameter", "24", "color", "accent"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Bon retour");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 5)(7, "mat-form-field", 6)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "E-mail ou num\u00E9ro de t\u00E9l\u00E9phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 7)(11, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 6)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_16_listener() {
          return ctx.toggleVisibility();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, LoginComponent_mat_icon_17_Template, 1, 0, "mat-icon", 11)(18, LoginComponent_mat_icon_18_Template, 1, 0, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13)(20, "mat-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Se souvenir de moi");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Mot de passe oubli\u00E9 ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_24_listener() {
          return ctx.send();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, LoginComponent_span_25_Template, 2, 0, "span", 17)(26, LoginComponent_mat_spinner_26_Template, 1, 0, "mat-spinner", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.inputType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckbox, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinner],
    styles: [".bg-pattern[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--vex-background-background) 22px, var(--vex-background-hover) 22px, var(--vex-background-hover) 24px, transparent 24px, transparent 67px, var(--vex-background-hover) 67px, var(--vex-background-hover) 69px, transparent 69px), linear-gradient(225deg, var(--vex-background-background) 22px, var(--vex-background-hover) 22px, var(--vex-background-hover) 24px, transparent 24px, transparent 67px, var(--vex-background-hover) 67px, var(--vex-background-hover) 69px, transparent 69px) 0 64px;\n  background-color: var(--vex-background-background);\n  background-size: 64px 128px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL3VuaWdlc3RfZnJvbnQlMjBjb3BpZS9zcmMvYXBwL3BhZ2VzL3BhZ2VzL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2Z0JBQUE7RUFzQkEsa0RBQUE7RUFDQSwyQkFBQTtBQ3BCRiIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1wYXR0ZXJuIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTM1ZGVnLFxuICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtYmFja2dyb3VuZCkgMjJweCxcbiAgICAgIHZhcigtLXZleC1iYWNrZ3JvdW5kLWhvdmVyKSAyMnB4LFxuICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDI0cHgsXG4gICAgICB0cmFuc3BhcmVudCAyNHB4LFxuICAgICAgdHJhbnNwYXJlbnQgNjdweCxcbiAgICAgIHZhcigtLXZleC1iYWNrZ3JvdW5kLWhvdmVyKSA2N3B4LFxuICAgICAgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY5cHgsXG4gICAgICB0cmFuc3BhcmVudCA2OXB4XG4gICksXG4gIGxpbmVhci1ncmFkaWVudChcbiAgICAgIDIyNWRlZyxcbiAgICAgIHZhcigtLXZleC1iYWNrZ3JvdW5kLWJhY2tncm91bmQpIDIycHgsXG4gICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjJweCxcbiAgICAgIHZhcigtLXZleC1iYWNrZ3JvdW5kLWhvdmVyKSAyNHB4LFxuICAgICAgdHJhbnNwYXJlbnQgMjRweCxcbiAgICAgIHRyYW5zcGFyZW50IDY3cHgsXG4gICAgICB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgNjdweCxcbiAgICAgIHZhcigtLXZleC1iYWNrZ3JvdW5kLWhvdmVyKSA2OXB4LFxuICAgICAgdHJhbnNwYXJlbnQgNjlweFxuICApIDAgNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmV4LWJhY2tncm91bmQtYmFja2dyb3VuZCk7XG4gIGJhY2tncm91bmQtc2l6ZTogNjRweCAxMjhweDtcbn1cbiIsIi5iZy1wYXR0ZXJuIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tdmV4LWJhY2tncm91bmQtYmFja2dyb3VuZCkgMjJweCwgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDIycHgsIHZhcigtLXZleC1iYWNrZ3JvdW5kLWhvdmVyKSAyNHB4LCB0cmFuc3BhcmVudCAyNHB4LCB0cmFuc3BhcmVudCA2N3B4LCB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgNjdweCwgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDY5cHgsIHRyYW5zcGFyZW50IDY5cHgpLCBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCB2YXIoLS12ZXgtYmFja2dyb3VuZC1iYWNrZ3JvdW5kKSAyMnB4LCB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgMjJweCwgdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpIDI0cHgsIHRyYW5zcGFyZW50IDI0cHgsIHRyYW5zcGFyZW50IDY3cHgsIHZhcigtLXZleC1iYWNrZ3JvdW5kLWhvdmVyKSA2N3B4LCB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3ZlcikgNjlweCwgdHJhbnNwYXJlbnQgNjlweCkgMCA2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1iYWNrZ3JvdW5kKTtcbiAgYmFja2dyb3VuZC1zaXplOiA2NHB4IDEyOHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms]
    },
    changeDetection: 0
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_auth_login_login_component_ts.js.map