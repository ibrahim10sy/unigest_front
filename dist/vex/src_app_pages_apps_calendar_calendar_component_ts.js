"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_apps_calendar_calendar_component_ts"],{

/***/ 4790:
/*!******************************************************************************!*\
  !*** ./src/app/pages/apps/calendar/calendar-edit/calendar-edit.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarEditComponent: () => (/* binding */ CalendarEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);













class CalendarEditComponent {
  constructor(dialogRef, event, fb) {
    this.dialogRef = dialogRef;
    this.event = event;
    this.fb = fb;
    this.form = this.fb.group({
      title: null,
      start: null,
      end: null
    });
  }
  ngOnInit() {
    this.form.patchValue(this.event);
  }
  save() {
    this.dialogRef.close({
      ...this.event,
      ...this.form.value
    });
  }
  static #_ = this.ɵfac = function CalendarEditComponent_Factory(t) {
    return new (t || CalendarEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CalendarEditComponent,
    selectors: [["vex-calendar-edit"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 28,
    vars: 6,
    consts: [["matDialogTitle", ""], [3, "formGroup"], [1, "flex", "flex-col"], ["formControlName", "title", "matInput", ""], ["formControlName", "start", "matInput", "", 3, "matDatepicker"], ["matIconSuffix", "", 3, "for"], ["startDatepicker", ""], ["formControlName", "end", "matInput", "", 3, "matDatepicker"], ["endDatepicker", ""], [1, "flex", "justify-end"], ["mat-button", "", "mat-dialog-close", ""], ["color", "primary", "mat-raised-button", "", 1, "save", 3, "click"]],
    template: function CalendarEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content")(3, "form", 1)(4, "div", 2)(5, "mat-form-field")(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Event Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field")(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4)(13, "mat-datepicker-toggle", 5)(14, "mat-datepicker", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field")(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7)(20, "mat-datepicker-toggle", 5)(21, "mat-datepicker", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-dialog-actions", 9)(24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarEditComponent_Template_button_click_26_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.event.title, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
      }
    },
    dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerToggle, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 894:
/*!***********************************************************!*\
  !*** ./src/app/pages/apps/calendar/calendar.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalendarComponent: () => (/* binding */ CalendarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4300);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar */ 2882);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _calendar_edit_calendar_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-edit/calendar-edit.component */ 4790);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _vex_components_vex_scrollbar_vex_scrollbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/components/vex-scrollbar/vex-scrollbar.component */ 9844);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ 9689);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var src_app_services_CustomEventTitleFormatter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/CustomEventTitleFormatter.service */ 3360);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var src_app_services_emploi_du_temps_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/emploi-du-temps.service */ 2938);
/* harmony import */ var src_app_services_classe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/classe.service */ 7244);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 5309);






























function CalendarComponent_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", c_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](c_r9.nom);
  }
}
function CalendarComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CalendarComponent_ng_template_27_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const weekEvent_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().weekEvent;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", weekEvent_r10.event.color == null ? null : weekEvent_r10.event.color.primary);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", weekEvent_r10.event.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](5, 5, weekEvent_r10.event.start, "HH:mm"), " \u2013 ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 8, weekEvent_r10.event.end, "HH:mm"), " ");
  }
}
function CalendarComponent_ng_template_27_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const weekEvent_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().weekEvent;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", weekEvent_r10.event.color == null ? null : weekEvent_r10.event.color.primary);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", weekEvent_r10.event.meta == null ? null : weekEvent_r10.event.meta.matiere == null ? null : weekEvent_r10.event.meta.matiere.nom, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", weekEvent_r10.event.meta == null ? null : weekEvent_r10.event.meta.enseignant == null ? null : weekEvent_r10.event.meta.enseignant.nom, " ", weekEvent_r10.event.meta == null ? null : weekEvent_r10.event.meta.enseignant == null ? null : weekEvent_r10.event.meta.enseignant.prenom, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", weekEvent_r10.event.meta == null ? null : weekEvent_r10.event.meta.classe == null ? null : weekEvent_r10.event.meta.classe.nom, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](8, 8, weekEvent_r10.event.start, "HH:mm"), " \u2013 ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](9, 11, weekEvent_r10.event.end, "HH:mm"), " ");
  }
}
function CalendarComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CalendarComponent_ng_template_27_ng_container_1_Template, 7, 11, "ng-container", 26)(2, CalendarComponent_ng_template_27_ng_template_2_Template, 10, 14, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const weekEvent_r10 = ctx.weekEvent;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", weekEvent_r10.event.color == null ? null : weekEvent_r10.event.color.secondary)("border-left", "4px solid " + (weekEvent_r10.event.color == null ? null : weekEvent_r10.event.color.primary));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isRecreation(weekEvent_r10.event.meta))("ngIfElse", _r13);
  }
}
function CalendarComponent_ng_template_29_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const event_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().event;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", event_r16.title, " ");
  }
}
function CalendarComponent_ng_template_29_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "date");
  }
  if (rf & 2) {
    const event_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().event;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", event_r16.meta == null ? null : event_r16.meta.matiere == null ? null : event_r16.meta.matiere.nom, " \u00B7 ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](1, 2, event_r16.start, "HH:mm"), " ");
  }
}
function CalendarComponent_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32)(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CalendarComponent_ng_template_29_ng_container_2_Template, 2, 1, "ng-container", 26)(3, CalendarComponent_ng_template_29_ng_template_3_Template, 2, 5, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const event_r16 = ctx.event;
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", event_r16.color == null ? null : event_r16.color.primary);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.isRecreation(event_r16.meta))("ngIfElse", _r19);
  }
}
function CalendarComponent_vex_scrollbar_31_mwl_calendar_month_view_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mwl-calendar-month-view", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dayClicked", function CalendarComponent_vex_scrollbar_31_mwl_calendar_month_view_2_Template_mwl_calendar_month_view_dayClicked_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r25.dayClicked($event.day));
    })("eventClicked", function CalendarComponent_vex_scrollbar_31_mwl_calendar_month_view_2_Template_mwl_calendar_month_view_eventClicked_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r27.handleEvent("Clicked", $event.event));
    })("eventTimesChanged", function CalendarComponent_vex_scrollbar_31_mwl_calendar_month_view_2_Template_mwl_calendar_month_view_eventTimesChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r28.eventTimesChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("viewDate", ctx_r22.viewDate)("events", ctx_r22.events)("refresh", ctx_r22.refresh)("locale", "fr")("activeDayIsOpen", ctx_r22.activeDayIsOpen)("cellTemplate", _r8);
  }
}
function CalendarComponent_vex_scrollbar_31_mwl_calendar_week_view_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mwl-calendar-week-view", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("eventClicked", function CalendarComponent_vex_scrollbar_31_mwl_calendar_week_view_3_Template_mwl_calendar_week_view_eventClicked_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r29.handleEvent("Clicked", $event.event));
    })("eventTimesChanged", function CalendarComponent_vex_scrollbar_31_mwl_calendar_week_view_3_Template_mwl_calendar_week_view_eventTimesChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r31.eventTimesChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("viewDate", ctx_r23.viewDate)("events", ctx_r23.events)("refresh", ctx_r23.refresh)("locale", "fr")("eventTemplate", _r3);
  }
}
function CalendarComponent_vex_scrollbar_31_mwl_calendar_day_view_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mwl-calendar-day-view", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("eventClicked", function CalendarComponent_vex_scrollbar_31_mwl_calendar_day_view_4_Template_mwl_calendar_day_view_eventClicked_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r32.handleEvent("Clicked", $event.event));
    })("eventTimesChanged", function CalendarComponent_vex_scrollbar_31_mwl_calendar_day_view_4_Template_mwl_calendar_day_view_eventTimesChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r34.eventTimesChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("viewDate", ctx_r24.viewDate)("events", ctx_r24.events)("refresh", ctx_r24.refresh)("locale", "fr")("eventTemplate", _r3);
  }
}
function CalendarComponent_vex_scrollbar_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "vex-scrollbar", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](1, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CalendarComponent_vex_scrollbar_31_mwl_calendar_month_view_2_Template, 1, 6, "mwl-calendar-month-view", 37)(3, CalendarComponent_vex_scrollbar_31_mwl_calendar_week_view_3_Template, 1, 5, "mwl-calendar-week-view", 38)(4, CalendarComponent_vex_scrollbar_31_mwl_calendar_day_view_4_Template, 1, 5, "mwl-calendar-day-view", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", ctx_r6.view);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", ctx_r6.CalendarView.Month);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", ctx_r6.CalendarView.Week);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", ctx_r6.CalendarView.Day);
  }
}
function CalendarComponent_ng_template_32_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().day;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](day_r35.badgeTotal);
  }
}
function CalendarComponent_ng_template_32_div_5_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const event_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](event_r42.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" \u00B7 ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 3, event_r42.start, "HH:mm"), "\u2013", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](5, 6, event_r42.end, "HH:mm"), " ");
  }
}
function CalendarComponent_ng_template_32_div_5_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "date");
  }
  if (rf & 2) {
    const event_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](event_r42.meta == null ? null : event_r42.meta.matiere == null ? null : event_r42.meta.matiere.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"](" \u00B7 ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 4, event_r42.start, "HH:mm"), "\u2013", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](4, 7, event_r42.end, "HH:mm"), " \u00B7 ", event_r42.meta == null ? null : event_r42.meta.enseignant == null ? null : event_r42.meta.enseignant.nom, " ");
  }
}
function CalendarComponent_ng_template_32_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CalendarComponent_ng_template_32_div_5_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r49);
      const event_r42 = restoredCtx.$implicit;
      const eventClicked_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).eventClicked;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](eventClicked_r37.emit({
        event: event_r42
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CalendarComponent_ng_template_32_div_5_div_1_ng_container_1_Template, 6, 9, "ng-container", 26)(2, CalendarComponent_ng_template_32_div_5_div_1_ng_template_2_Template, 5, 10, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const event_r42 = ctx.$implicit;
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", event_r42.color == null ? null : event_r42.color.primary);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r41.isRecreation(event_r42.meta))("ngIfElse", _r45);
  }
}
function CalendarComponent_ng_template_32_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CalendarComponent_ng_template_32_div_5_div_1_Template, 4, 4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().day;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", day_r35.events);
  }
}
function CalendarComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CalendarComponent_ng_template_32_span_1_Template, 2, 1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "calendarDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, CalendarComponent_ng_template_32_div_5_Template, 2, 1, "div", 44);
  }
  if (rf & 2) {
    const day_r35 = ctx.day;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", day_r35.badgeTotal > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](4, 3, day_r35.date, "monthViewDayNumber", "fr"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", day_r35.events.length > 0);
  }
}
class CalendarComponent {
  constructor(dialog, snackbar, emploiService, classeService) {
    this.dialog = dialog;
    this.snackbar = snackbar;
    this.emploiService = emploiService;
    this.classeService = classeService;
    this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarView.Month;
    this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarView;
    this.viewDate = new Date();
    this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.events = [];
    this.activeDayIsOpen = false;
    this.classes = [];
    this.loading = false;
    // ── Mapping emploi → CalendarEvent ───────────────────────
    this.JOURS_OFFSET = {
      LUNDI: 0,
      MARDI: 1,
      MERCREDI: 2,
      JEUDI: 3,
      VENDREDI: 4,
      SAMEDI: 5,
      DIMANCHE: 6
    };
  }
  ngOnInit() {
    this.loadClasses();
  }
  loadClasses() {
    this.classeService.getAllClasses().subscribe(res => {
      this.classes = res;
      if (this.classes.length > 0) {
        this.classeId = this.classes[0].id;
        this.loadEmplois();
      }
    });
  }
  loadEmplois() {
    if (!this.classeId) return;
    this.loading = true;
    // ── Charge en parallèle :
    //    1. les cours de la classe
    //    2. tous les emplois (pour récupérer pauses/récréations sans classe)
    // Si votre API expose un endpoint dédié aux pauses, remplacez getAll() par celui-ci.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)({
      parClasse: this.emploiService.getByClasse(this.classeId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)([]))),
      tous: this.emploiService.getAll().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)([])))
    }).subscribe({
      next: ({
        parClasse,
        tous
      }) => {
        // Garde les cours de la classe + toutes les pauses/récréations (classe null ou non)
        const pausesEtRecreations = tous.filter(e => e.type === 'PAUSE' || e.type === 'RECREATION');
        // Fusionne sans doublons (par id)
        const ids = new Set(parClasse.map(e => e.id));
        const merged = [...parClasse, ...pausesEtRecreations.filter(e => !ids.has(e.id))];
        this.events = this.mapEmploisToEvents(merged);
        this.refresh.next(null);
        this.loading = false;
      },
      error: () => {
        this.snackbar.open('Erreur lors du chargement', 'Fermer', {
          duration: 3000
        });
        this.loading = false;
      }
    });
  }
  onClasseChange() {
    this.activeDayIsOpen = false;
    this.loadEmplois();
  }
  onViewDateChange() {
    this.loadEmplois();
  }
  // ── Helpers type ─────────────────────────────────────────
  isRecreation(emploi) {
    return emploi?.type === 'RECREATION' || emploi?.type === 'PAUSE';
  }
  getTitreEmploi(e) {
    switch (e.type) {
      case 'PAUSE':
        return `Pause${e.description ? ' – ' + e.description : ''}`;
      case 'RECREATION':
        return `Récréation${e.description ? ' – ' + e.description : ''}`;
      default:
        const matiere = e.matiere?.nom ?? '';
        const enseignant = e.enseignant ? `${e.enseignant.nom} ${e.enseignant.prenom}`.trim() : '';
        return [matiere, enseignant].filter(Boolean).join(' — ');
    }
  }
  getCouleurEmploi(e) {
    if (e.type === 'RECREATION') {
      return {
        primary: '#10b981',
        secondary: 'rgba(16,185,129,0.15)'
      }; // vert
    }

    if (e.type === 'PAUSE') {
      return {
        primary: '#f59e0b',
        secondary: 'rgba(245,158,11,0.15)'
      }; // amber
    }

    const primary = e.couleur ?? '#4f46e5';
    return {
      primary,
      secondary: this.lightenColor(primary)
    };
  }
  mapEmploisToEvents(emplois) {
    const lundi = this.getMondayOf(this.viewDate);
    const events = [];
    for (const e of emplois) {
      // Normalise jours : supporte tableau "jours" et chaîne "jour"
      const jours = Array.isArray(e.jours) && e.jours.length ? e.jours : e.jour ? [e.jour] : [];
      if (jours.length === 0) continue; // entrée sans jour → ignorée
      const [hDebut, mDebut] = (e.heureDebut ?? '08:00').split(':').map(Number);
      const [hFin, mFin] = (e.heureFin ?? '10:00').split(':').map(Number);
      for (const jour of jours) {
        const offset = this.JOURS_OFFSET[jour] ?? 0;
        const date = new Date(lundi);
        date.setDate(lundi.getDate() + offset);
        const start = new Date(date);
        start.setHours(hDebut, mDebut, 0, 0);
        const end = new Date(date);
        end.setHours(hFin, mFin, 0, 0);
        events.push({
          id: `${e.id}-${jour}`,
          title: this.getTitreEmploi(e),
          start,
          end,
          color: this.getCouleurEmploi(e),
          draggable: false,
          resizable: {
            beforeStart: false,
            afterEnd: false
          },
          meta: {
            ...e,
            _jour: jour
          }
        });
      }
    }
    return events;
  }
  getMondayOf(date) {
    const d = new Date(date);
    const day = d.getDay();
    d.setDate(d.getDate() + (day === 0 ? -6 : 1 - day));
    d.setHours(0, 0, 0, 0);
    return d;
  }
  lightenColor(hex) {
    try {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r},${g},${b},0.15)`;
    } catch {
      return '#e0e7ff';
    }
  }
  // ── Interactions ─────────────────────────────────────────
  dayClicked({
    date,
    events
  }) {
    const same = date.toDateString() === this.viewDate.toDateString();
    this.activeDayIsOpen = !(same && this.activeDayIsOpen || events.length === 0);
    this.viewDate = date;
  }
  eventTimesChanged(_) {}
  handleEvent(action, event) {
    if (this.isRecreation(event.meta)) {
      this.snackbar.open(`${event.title}  ·  ${event.meta.heureDebut} – ${event.meta.heureFin}`, 'OK', {
        duration: 3000
      });
      return;
    }
    this.dialog.open(_calendar_edit_calendar_edit_component__WEBPACK_IMPORTED_MODULE_0__.CalendarEditComponent, {
      data: event.meta ?? event
    }).afterClosed().subscribe(result => {
      if (result) {
        this.snackbar.open('Cours mis à jour : ' + event.title, 'OK', {
          duration: 2000
        });
        this.loadEmplois();
      }
    });
  }
  setView(view) {
    this.view = view;
    this.refresh.next(null);
  }
  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
  static #_ = this.ɵfac = function CalendarComponent_Factory(t) {
    return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_emploi_du_temps_service__WEBPACK_IMPORTED_MODULE_3__.EmploiDuTempsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_classe_service__WEBPACK_IMPORTED_MODULE_4__.ClasseService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: CalendarComponent,
    selectors: [["vex-calendar"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
      provide: angular_calendar__WEBPACK_IMPORTED_MODULE_6__.DateAdapter,
      useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_13__.adapterFactory
    }, {
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_5__.LOCALE_ID,
      useValue: 'fr'
    }, {
      provide: angular_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarEventTitleFormatter,
      useClass: src_app_services_CustomEventTitleFormatter_service__WEBPACK_IMPORTED_MODULE_2__.CustomEventTitleFormatter
    }, angular_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarDateFormatter, angular_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarUtils, angular_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarA11y]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 25,
    consts: [[1, "h-full", "flex", "flex-col"], [1, "calendar-bg", "relative", "text-white", "flex-none"], [1, "bg-black", "opacity-25", "absolute", "inset-0", "z-0"], [1, "container", "py-4", "px-6", "h-40", "z-10", "relative", "flex", "items-end"], [1, "flex-auto", "flex", "flex-col", "sm:flex-row", "justify-between", "items-center", "gap-4"], [1, "headline", "text-xl", "font-semibold"], [1, "actions", "flex", "flex-col", "sm:flex-row", "items-center", "gap-3"], ["appearance", "outline", 1, "w-48"], [3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex", "items-center"], ["mat-icon-button", "", "mwlCalendarPreviousView", "", 3, "view", "viewDate", "viewDateChange"], ["svgIcon", "mat:chevron_left"], ["mat-icon-button", "", "mwlCalendarNextView", "", 3, "view", "viewDate", "viewDateChange"], ["svgIcon", "mat:chevron_right"], [1, "flex", "gap-1", "bg-white/20", "rounded-lg", "p-1"], ["mat-button", "", 1, "rounded", 3, "click"], ["class", "flex justify-center items-center py-10", 4, "ngIf"], ["weekEventTemplate", ""], ["monthEventTemplate", ""], ["class", "px-0 shadow flex-auto relative container", 4, "ngIf"], ["monthCellTemplate", ""], [3, "value"], [1, "flex", "justify-center", "items-center", "py-10"], ["diameter", "40"], [1, "cal-event-container", "h-full", "rounded-md", "overflow-hidden", "p-1"], [4, "ngIf", "ngIfElse"], ["coursWeekTpl", ""], [1, "text-xs", "font-bold", "truncate"], [1, "text-xs", "text-gray-500", "mt-0.5"], [1, "text-xs", "truncate", "text-gray-700", "mt-0.5"], [1, "text-xs", "truncate", "text-gray-600", "mt-0.5"], [1, "flex", "items-center", "gap-1", "px-1", "rounded", "w-full", "overflow-hidden"], [1, "text-white", "text-xs", "font-semibold", "truncate"], ["coursMoisTpl", ""], [1, "px-0", "shadow", "flex-auto", "relative", "container"], [3, "ngSwitch"], [3, "viewDate", "events", "refresh", "locale", "activeDayIsOpen", "cellTemplate", "dayClicked", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "locale", "eventTemplate", "eventClicked", "eventTimesChanged", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "locale", "activeDayIsOpen", "cellTemplate", "dayClicked", "eventClicked", "eventTimesChanged"], [3, "viewDate", "events", "refresh", "locale", "eventTemplate", "eventClicked", "eventTimesChanged"], [1, "cal-cell-top"], ["class", "cal-day-badge", 4, "ngIf"], [1, "cal-day-number"], ["class", "cal-events", 4, "ngIf"], [1, "cal-day-badge"], [1, "cal-events"], ["class", "cal-event-month-item rounded px-1 mb-0.5 text-white text-xs truncate cursor-pointer", 3, "background-color", "click", 4, "ngFor", "ngForOf"], [1, "cal-event-month-item", "rounded", "px-1", "mb-0.5", "text-white", "text-xs", "truncate", "cursor-pointer", 3, "click"], ["coursCellTpl", ""]],
    template: function CalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "calendarDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6)(9, "mat-form-field", 7)(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Classe");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CalendarComponent_Template_mat_select_ngModelChange_12_listener($event) {
          return ctx.classeId = $event;
        })("selectionChange", function CalendarComponent_Template_mat_select_selectionChange_12_listener() {
          return ctx.onClasseChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, CalendarComponent_mat_option_13_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 10)(15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("viewDateChange", function CalendarComponent_Template_button_viewDateChange_15_listener($event) {
          return ctx.viewDate = $event;
        })("viewDateChange", function CalendarComponent_Template_button_viewDateChange_15_listener() {
          return ctx.onViewDateChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("viewDateChange", function CalendarComponent_Template_button_viewDateChange_17_listener($event) {
          return ctx.viewDate = $event;
        })("viewDateChange", function CalendarComponent_Template_button_viewDateChange_17_listener() {
          return ctx.onViewDateChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 15)(20, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_20_listener() {
          return ctx.setView(ctx.CalendarView.Month);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Mois");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_22_listener() {
          return ctx.setView(ctx.CalendarView.Week);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Semaine");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_24_listener() {
          return ctx.setView(ctx.CalendarView.Day);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Jour");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, CalendarComponent_div_26_Template, 2, 0, "div", 17)(27, CalendarComponent_ng_template_27_Template, 4, 6, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(29, CalendarComponent_ng_template_29_Template, 5, 4, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(31, CalendarComponent_vex_scrollbar_31_Template, 5, 4, "vex-scrollbar", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, CalendarComponent_ng_template_32_Template, 6, 7, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](7, 21, ctx.viewDate, ctx.view + "ViewTitle", "fr"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.classeId);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.classes);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("bg-white", ctx.view === ctx.CalendarView.Month)("text-primary", ctx.view === ctx.CalendarView.Month);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("bg-white", ctx.view === ctx.CalendarView.Week)("text-primary", ctx.view === ctx.CalendarView.Week);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("bg-white", ctx.view === ctx.CalendarView.Day)("text-primary", ctx.view === ctx.CalendarView.Day);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBarModule, angular_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarCommonModule, angular_calendar__WEBPACK_IMPORTED_MODULE_6__["ɵCalendarPreviousViewDirective"], angular_calendar__WEBPACK_IMPORTED_MODULE_6__["ɵCalendarNextViewDirective"], angular_calendar__WEBPACK_IMPORTED_MODULE_6__["ɵCalendarDatePipe"], angular_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarMonthModule, angular_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarMonthViewComponent, angular_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarWeekModule, angular_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarWeekViewComponent, angular_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarDayModule, angular_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarDayViewComponent, angular_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarModule, _vex_components_vex_scrollbar_vex_scrollbar_component__WEBPACK_IMPORTED_MODULE_1__.VexScrollbarComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinner],
    styles: ["@charset \"UTF-8\";\n.cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder;\n}\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap;\n}\n.cal-month-view .cal-days {\n  border: 1px solid;\n  border-bottom: 0;\n}\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  flex: 1;\n}\n.cal-month-view .cal-cell-row {\n  display: flex;\n}\n.cal-month-view .cal-cell {\n  float: left;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.cal-month-view .cal-cell .cal-event {\n  pointer-events: all !important;\n}\n.cal-month-view .cal-day-cell {\n  min-height: 100px;\n}\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid;\n}\n[dir=rtl] .cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: initial;\n  border-left: 1px solid;\n}\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid;\n}\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px;\n  float: left;\n}\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px;\n}\n.cal-month-view .cal-events {\n  flex: 1;\n  align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  display: flex;\n  flex-wrap: wrap;\n}\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px;\n}\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer;\n}\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default;\n}\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em;\n}\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n}\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px;\n}\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3;\n}\n.cal-month-view .cal-draggable {\n  cursor: move;\n}\n.cal-month-view .cal-drag-active * {\n  pointer-events: none;\n}\n.cal-month-view .cal-event-title {\n  cursor: pointer;\n}\n.cal-month-view .cal-event-title:hover {\n  text-decoration: underline;\n}\n\n.cal-month-view {\n  background-color: #fff;\n}\n.cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa;\n}\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed;\n}\n.cal-month-view .cal-days {\n  border-color: #e1e1e1;\n}\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right-color: #e1e1e1;\n}\n[dir=rtl] .cal-month-view .cal-day-cell:not(:last-child) {\n  border-right-color: initial;\n  border-left-color: #e1e1e1;\n}\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom-color: #e1e1e1;\n}\n.cal-month-view .cal-day-badge {\n  background-color: #b94a48;\n  color: #fff;\n}\n.cal-month-view .cal-event {\n  background-color: #1e90ff;\n  border-color: #d1e8ff;\n  color: #fff;\n}\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: #8b0000;\n}\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #e8fde7;\n}\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important;\n}\n.cal-month-view .cal-open-day-events {\n  color: #fff;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5);\n}\n\n.cal-week-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */\n}\n.cal-week-view * {\n  box-sizing: border-box;\n}\n.cal-week-view .cal-day-headers {\n  display: flex;\n  padding-left: 70px;\n  border: 1px solid;\n}\n[dir=rtl] .cal-week-view .cal-day-headers {\n  padding-left: initial;\n  padding-right: 70px;\n}\n.cal-week-view .cal-day-headers .cal-header {\n  flex: 1;\n  text-align: center;\n  padding: 5px;\n}\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right: 1px solid;\n}\n[dir=rtl] .cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right: initial;\n  border-left: 1px solid;\n}\n.cal-week-view .cal-day-headers .cal-header:first-child {\n  border-left: 1px solid;\n}\n[dir=rtl] .cal-week-view .cal-day-headers .cal-header:first-child {\n  border-left: initial;\n  border-right: 1px solid;\n}\n.cal-week-view .cal-day-headers span {\n  font-weight: 400;\n  opacity: 0.5;\n}\n.cal-week-view .cal-day-column {\n  flex-grow: 1;\n  border-left: solid 1px;\n}\n[dir=rtl] .cal-week-view .cal-day-column {\n  border-left: initial;\n  border-right: solid 1px;\n}\n.cal-week-view .cal-event {\n  font-size: 12px;\n  border: 1px solid;\n  direction: ltr;\n}\n.cal-week-view .cal-time-label-column {\n  width: 70px;\n  height: 100%;\n}\n.cal-week-view .cal-current-time-marker {\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  z-index: 2;\n}\n.cal-week-view .cal-all-day-events {\n  border: solid 1px;\n  border-top: 0;\n  border-bottom-width: 3px;\n  padding-top: 3px;\n  position: relative;\n}\n.cal-week-view .cal-all-day-events .cal-day-columns {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  position: absolute;\n  top: 0;\n  z-index: 0;\n}\n.cal-week-view .cal-all-day-events .cal-events-row {\n  position: relative;\n  height: 31px;\n  margin-left: 70px;\n}\n[dir=rtl] .cal-week-view .cal-all-day-events .cal-events-row {\n  margin-left: initial;\n  margin-right: 70px;\n}\n.cal-week-view .cal-all-day-events .cal-event-container {\n  display: inline-block;\n  position: absolute;\n}\n.cal-week-view .cal-all-day-events .cal-event-container.resize-active {\n  z-index: 1;\n  pointer-events: none;\n}\n.cal-week-view .cal-all-day-events .cal-event {\n  padding: 0 5px;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 28px;\n  line-height: 28px;\n}\n.cal-week-view .cal-all-day-events .cal-starts-within-week .cal-event {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n[dir=rtl] .cal-week-view .cal-all-day-events .cal-starts-within-week .cal-event {\n  border-top-left-radius: initial;\n  border-bottom-left-radius: initial;\n  border-top-right-radius: 5px !important;\n  border-bottom-right-radius: 5px !important;\n}\n.cal-week-view .cal-all-day-events .cal-ends-within-week .cal-event {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n[dir=rtl] .cal-week-view .cal-all-day-events .cal-ends-within-week .cal-event {\n  border-top-right-radius: initial;\n  border-bottom-right-radius: initial;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.cal-week-view .cal-all-day-events .cal-time-label-column {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n}\n.cal-week-view .cal-all-day-events .cal-resize-handle {\n  width: 6px;\n  height: 100%;\n  cursor: col-resize;\n  position: absolute;\n  top: 0;\n}\n.cal-week-view .cal-all-day-events .cal-resize-handle.cal-resize-handle-after-end {\n  right: 0;\n}\n[dir=rtl] .cal-week-view .cal-all-day-events .cal-resize-handle.cal-resize-handle-after-end {\n  right: initial;\n  left: 0;\n}\n.cal-week-view .cal-event,\n.cal-week-view .cal-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.cal-week-view .cal-drag-active {\n  pointer-events: none;\n  z-index: 1;\n}\n.cal-week-view .cal-drag-active * {\n  pointer-events: none;\n}\n.cal-week-view .cal-time-events {\n  position: relative;\n  border: solid 1px;\n  border-top: 0;\n  display: flex;\n}\n.cal-week-view .cal-time-events .cal-day-columns {\n  display: flex;\n  flex-grow: 1;\n}\n.cal-week-view .cal-time-events .cal-day-column {\n  position: relative;\n}\n.cal-week-view .cal-time-events .cal-events-container {\n  position: relative;\n}\n.cal-week-view .cal-time-events .cal-event-container {\n  position: absolute;\n  z-index: 1;\n}\n.cal-week-view .cal-time-events .cal-event {\n  width: calc(100% - 2px);\n  height: calc(100% - 2px);\n  margin: 1px;\n  padding: 0 5px;\n  line-height: 25px;\n}\n.cal-week-view .cal-time-events .cal-resize-handle {\n  width: 100%;\n  height: 4px;\n  cursor: row-resize;\n  position: absolute;\n}\n.cal-week-view .cal-time-events .cal-resize-handle.cal-resize-handle-after-end {\n  bottom: 0;\n}\n.cal-week-view .cal-hour-segment {\n  position: relative;\n}\n.cal-week-view .cal-hour-segment::after {\n  content: \"\u00A0\";\n}\n.cal-week-view .cal-event-container:not(.cal-draggable) {\n  cursor: pointer;\n}\n.cal-week-view .cal-draggable {\n  cursor: move;\n}\n.cal-week-view mwl-calendar-week-view-hour-segment,\n.cal-week-view .cal-hour-segment {\n  display: block;\n}\n.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment,\n.cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n  border-bottom: thin dashed;\n}\n.cal-week-view .cal-time {\n  font-weight: bold;\n  padding-top: 5px;\n  width: 70px;\n  text-align: center;\n}\n.cal-week-view .cal-hour-segment.cal-after-hour-start .cal-time {\n  display: none;\n}\n.cal-week-view .cal-starts-within-day .cal-event {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.cal-week-view .cal-ends-within-day .cal-event {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.cal-week-view {\n  background-color: #fff;\n  border-top: solid 1px #e1e1e1;\n}\n.cal-week-view .cal-day-headers {\n  border-color: #e1e1e1;\n  border-top: 0;\n}\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right-color: #e1e1e1;\n}\n[dir=rtl] .cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right-color: initial;\n  border-left: solid 1px #e1e1e1 !important;\n}\n.cal-week-view .cal-day-headers .cal-header:first-child {\n  border-left-color: #e1e1e1;\n}\n[dir=rtl] .cal-week-view .cal-day-headers .cal-header:first-child {\n  border-left-color: initial;\n  border-right-color: #e1e1e1;\n}\n.cal-week-view .cal-day-headers .cal-header:hover,\n.cal-week-view .cal-day-headers .cal-drag-over {\n  background-color: #ededed;\n}\n.cal-week-view .cal-day-column {\n  border-left-color: #e1e1e1;\n}\n[dir=rtl] .cal-week-view .cal-day-column {\n  border-left-color: initial;\n  border-right-color: #e1e1e1;\n}\n.cal-week-view .cal-event {\n  background-color: #d1e8ff;\n  border-color: #1e90ff;\n  color: #1e90ff;\n}\n.cal-week-view .cal-all-day-events {\n  border-color: #e1e1e1;\n}\n.cal-week-view .cal-header.cal-today {\n  background-color: #e8fde7;\n}\n.cal-week-view .cal-header.cal-weekend span {\n  color: #8b0000;\n}\n.cal-week-view .cal-time-events {\n  border-color: #e1e1e1;\n}\n.cal-week-view .cal-time-events .cal-day-columns:not(.cal-resize-active) .cal-hour-segment:hover {\n  background-color: #ededed;\n}\n.cal-week-view .cal-hour-odd {\n  background-color: #fafafa;\n}\n.cal-week-view .cal-drag-over .cal-hour-segment {\n  background-color: #ededed;\n}\n.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment,\n.cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n  border-bottom-color: #e1e1e1;\n}\n.cal-week-view .cal-current-time-marker {\n  background-color: #ea4334;\n}\n\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */\n}\n.cal-day-view mwl-calendar-week-view-header {\n  display: none;\n}\n.cal-day-view .cal-events-container {\n  margin-left: 70px;\n}\n[dir=rtl] .cal-day-view .cal-events-container {\n  margin-left: initial;\n  margin-right: 70px;\n}\n.cal-day-view .cal-day-column {\n  border-left: 0;\n}\n.cal-day-view .cal-current-time-marker {\n  margin-left: 70px;\n  width: calc(100% - 70px);\n}\n[dir=rtl] .cal-day-view .cal-current-time-marker {\n  margin-left: initial;\n  margin-right: 70px;\n}\n\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9;\n}\n\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px;\n}\n\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n}\n\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px;\n}\n\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n}\n\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px;\n}\n\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n}\n\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px;\n}\n\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n}\n\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  text-align: center;\n  border-radius: 0.25rem;\n}\n\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  border-top-color: #000;\n}\n\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  border-right-color: #000;\n}\n\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  border-bottom-color: #000;\n}\n\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  border-left-color: #000;\n}\n\n.cal-tooltip-inner {\n  color: #fff;\n  background-color: #000;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9hbmd1bGFyLWNhbGVuZGFyL2Nzcy9hbmd1bGFyLWNhbGVuZGFyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBRWIsdUJBQXVCO0VBQzFCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUdSLE9BQU87QUFDakI7QUFDQTtFQUdFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsV0FBVztFQUdILE9BQU87RUFHZixhQUFhO0VBSUwsc0JBQXNCO0VBR3RCLG9CQUFvQjtBQUM5QjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBR1UsT0FBTztFQUdQLHFCQUFxQjtFQUM3QixXQUFXO0VBQ1gsaUJBQWlCO0VBR2pCLGFBQWE7RUFFVCxlQUFlO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7QUFDQTs7RUFFRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBOztFQUVFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBRWQsK0NBQStDO0FBQ3pEOztBQUVBO0VBQ0UseURBQXlEO0FBQzNEO0FBQ0E7RUFFVSxzQkFBc0I7QUFDaEM7QUFDQTtFQUdFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFHVSxPQUFPO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFDQTtFQUdVLFlBQVk7RUFDcEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFVBQVU7QUFDWjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFHWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0Isa0NBQWtDO0VBQ2xDLHVDQUF1QztFQUN2QywwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsMkJBQTJCO0VBQzNCLDhCQUE4QjtBQUNoQztBQUNBO0VBR0UsYUFBYTtFQUdMLG1CQUFtQjtFQUduQix1QkFBdUI7RUFDL0IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE1BQU07QUFDUjtBQUNBO0VBQ0UsUUFBUTtBQUNWO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsT0FBTztBQUNUO0FBQ0E7O0VBRUUsZ0JBQWdCO0VBRWIsdUJBQXVCO0VBQzFCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFHYixhQUFhO0FBQ2Y7QUFDQTtFQUdFLGFBQWE7RUFHTCxZQUFZO0FBQ3RCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTJCO0FBQzdCO0FBQ0E7O0VBRUUseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBOztFQUVFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseURBQXlEO0FBQzNEO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsT0FBTztFQUNQLGdCQUFnQjtFQUNoQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLE1BQU07RUFDTixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtBQUN4QiIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jYWwtbW9udGgtdmlldyAuY2FsLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLWhlYWRlciAuY2FsLWNlbGwge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLW8tdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheXMge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLWNlbGwtdG9wIHtcbiAgbWluLWhlaWdodDogNzhweDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLXJvdyB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLWNlbGwge1xuICBmbG9hdDogbGVmdDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtd2Via2l0LWJveC1hbGlnbjogc3RyZXRjaDtcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBzdHJldGNoO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbCAuY2FsLWV2ZW50IHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbCAhaW1wb3J0YW50O1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwge1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcbn1cbltkaXI9cnRsXSAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXJpZ2h0OiBpbml0aWFsO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5cyAuY2FsLWNlbGwtcm93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWJhZGdlIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiAxMHB4O1xuICBwYWRkaW5nOiAzcHggN3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LW51bWJlciB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1ldmVudHMge1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgICAgLW1zLWZsZXg6IDE7XG4gICAgICAgICAgZmxleDogMTtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBtYXJnaW46IDNweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLWV2ZW50IHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMnB4O1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLWluLW1vbnRoLmNhbC1oYXMtZXZlbnRzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLW91dC1tb250aCAuY2FsLWRheS1udW1iZXIge1xuICBvcGFjaXR5OiAwLjE7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsLmNhbC10b2RheSAuY2FsLWRheS1udW1iZXIge1xuICBmb250LXNpemU6IDEuOWVtO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzIHtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyAuY2FsLWV2ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLW91dC1tb250aCAuY2FsLWRheS1iYWRnZSxcbi5jYWwtbW9udGgtdmlldyAuY2FsLW91dC1tb250aCAuY2FsLWV2ZW50IHtcbiAgb3BhY2l0eTogMC4zO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtZHJhZ2dhYmxlIHtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtZHJhZy1hY3RpdmUgKiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtZXZlbnQtdGl0bGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1ldmVudC10aXRsZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uY2FsLW1vbnRoLXZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC1yb3cgLmNhbC1jZWxsOmhvdmVyLFxuLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC5jYWwtaGFzLWV2ZW50cy5jYWwtb3BlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXlzIHtcbiAgYm9yZGVyLWNvbG9yOiAjZTFlMWUxO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGw6bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2UxZTFlMTtcbn1cbltkaXI9cnRsXSAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBpbml0aWFsO1xuICBib3JkZXItbGVmdC1jb2xvcjogI2UxZTFlMTtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheXMgLmNhbC1jZWxsLXJvdyB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNlMWUxZTE7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktYmFkZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk0YTQ4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLWV2ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlOTBmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZDFlOGZmO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsLmNhbC13ZWVrZW5kIC5jYWwtZGF5LW51bWJlciB7XG4gIGNvbG9yOiAjOGIwMDAwO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLXRvZGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZmRlNztcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsLmNhbC1kcmFnLW92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwICFpbXBvcnRhbnQ7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1vcGVuLWRheS1ldmVudHMge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmNhbC13ZWVrLXZpZXcge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2VsZWN0b3ItdHlwZS1uby11bmtub3duICovXG59XG4uY2FsLXdlZWstdmlldyAqIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuW2Rpcj1ydGxdIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMge1xuICBwYWRkaW5nLWxlZnQ6IGluaXRpYWw7XG4gIHBhZGRpbmctcmlnaHQ6IDcwcHg7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlcjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQ7XG59XG5bZGlyPXJ0bF0gLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlcjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXJpZ2h0OiBpbml0aWFsO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlcjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQ7XG59XG5bZGlyPXJ0bF0gLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlcjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiBpbml0aWFsO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZDtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWNvbHVtbiB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHg7XG59XG5bZGlyPXJ0bF0gLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktY29sdW1uIHtcbiAgYm9yZGVyLWxlZnQ6IGluaXRpYWw7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4O1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWxhYmVsLWNvbHVtbiB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWN1cnJlbnQtdGltZS1tYXJrZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgei1pbmRleDogMjtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMge1xuICBib3JkZXI6IHNvbGlkIDFweDtcbiAgYm9yZGVyLXRvcDogMDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtZGF5LWNvbHVtbnMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAwO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLWV2ZW50cy1yb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzFweDtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG59XG5bZGlyPXJ0bF0gLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLWV2ZW50cy1yb3cge1xuICBtYXJnaW4tbGVmdDogaW5pdGlhbDtcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLWV2ZW50LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLWV2ZW50LWNvbnRhaW5lci5yZXNpemUtYWN0aXZlIHtcbiAgei1pbmRleDogMTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtZXZlbnQge1xuICBwYWRkaW5nOiAwIDVweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIGhlaWdodDogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtc3RhcnRzLXdpdGhpbi13ZWVrIC5jYWwtZXZlbnQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cbltkaXI9cnRsXSAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtc3RhcnRzLXdpdGhpbi13ZWVrIC5jYWwtZXZlbnQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBpbml0aWFsO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiBpbml0aWFsO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1lbmRzLXdpdGhpbi13ZWVrIC5jYWwtZXZlbnQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuW2Rpcj1ydGxdIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1lbmRzLXdpdGhpbi13ZWVrIC5jYWwtZXZlbnQge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogaW5pdGlhbDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IGluaXRpYWw7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLXRpbWUtbGFiZWwtY29sdW1uIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1yZXNpemUtaGFuZGxlIHtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IGNvbC1yZXNpemU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLXJlc2l6ZS1oYW5kbGUuY2FsLXJlc2l6ZS1oYW5kbGUtYWZ0ZXItZW5kIHtcbiAgcmlnaHQ6IDA7XG59XG5bZGlyPXJ0bF0gLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLXJlc2l6ZS1oYW5kbGUuY2FsLXJlc2l6ZS1oYW5kbGUtYWZ0ZXItZW5kIHtcbiAgcmlnaHQ6IGluaXRpYWw7XG4gIGxlZnQ6IDA7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50LFxuLmNhbC13ZWVrLXZpZXcgLmNhbC1oZWFkZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWRyYWctYWN0aXZlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDE7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWRyYWctYWN0aXZlICoge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogc29saWQgMXB4O1xuICBib3JkZXItdG9wOiAwO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLXRpbWUtZXZlbnRzIC5jYWwtZGF5LWNvbHVtbnMge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLXRpbWUtZXZlbnRzIC5jYWwtZGF5LWNvbHVtbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1ldmVudHMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWV2ZW50LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1ldmVudCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDJweCk7XG4gIG1hcmdpbjogMXB4O1xuICBwYWRkaW5nOiAwIDVweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLXRpbWUtZXZlbnRzIC5jYWwtcmVzaXplLWhhbmRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDRweDtcbiAgY3Vyc29yOiByb3ctcmVzaXplO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLXRpbWUtZXZlbnRzIC5jYWwtcmVzaXplLWhhbmRsZS5jYWwtcmVzaXplLWhhbmRsZS1hZnRlci1lbmQge1xuICBib3R0b206IDA7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWhvdXItc2VnbWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtaG91ci1zZWdtZW50OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiw4LCoFwiO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudC1jb250YWluZXI6bm90KC5jYWwtZHJhZ2dhYmxlKSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtZHJhZ2dhYmxlIHtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuLmNhbC13ZWVrLXZpZXcgbXdsLWNhbGVuZGFyLXdlZWstdmlldy1ob3VyLXNlZ21lbnQsXG4uY2FsLXdlZWstdmlldyAuY2FsLWhvdXItc2VnbWVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyOm5vdCg6bGFzdC1jaGlsZCkgLmNhbC1ob3VyLXNlZ21lbnQsXG4uY2FsLXdlZWstdmlldyAuY2FsLWhvdXI6bGFzdC1jaGlsZCA6bm90KDpsYXN0LWNoaWxkKSAuY2FsLWhvdXItc2VnbWVudCB7XG4gIGJvcmRlci1ib3R0b206IHRoaW4gZGFzaGVkO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHdpZHRoOiA3MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWhvdXItc2VnbWVudC5jYWwtYWZ0ZXItaG91ci1zdGFydCAuY2FsLXRpbWUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1zdGFydHMtd2l0aGluLWRheSAuY2FsLWV2ZW50IHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1lbmRzLXdpdGhpbi1kYXkgLmNhbC1ldmVudCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cblxuLmNhbC13ZWVrLXZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2UxZTFlMTtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMge1xuICBib3JkZXItY29sb3I6ICNlMWUxZTE7XG4gIGJvcmRlci10b3A6IDA7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyOm5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItcmlnaHQtY29sb3I6ICNlMWUxZTE7XG59XG5bZGlyPXJ0bF0gLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlcjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBpbml0aWFsO1xuICBib3JkZXItbGVmdDogc29saWQgMXB4ICNlMWUxZTEgIWltcG9ydGFudDtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1oZWFkZXI6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItbGVmdC1jb2xvcjogI2UxZTFlMTtcbn1cbltkaXI9cnRsXSAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IGluaXRpYWw7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2UxZTFlMTtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1oZWFkZXI6aG92ZXIsXG4uY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtZHJhZy1vdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWNvbHVtbiB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZTFlMWUxO1xufVxuW2Rpcj1ydGxdIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWNvbHVtbiB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiBpbml0aWFsO1xuICBib3JkZXItcmlnaHQtY29sb3I6ICNlMWUxZTE7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxZThmZjtcbiAgYm9yZGVyLWNvbG9yOiAjMWU5MGZmO1xuICBjb2xvcjogIzFlOTBmZjtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMge1xuICBib3JkZXItY29sb3I6ICNlMWUxZTE7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWhlYWRlci5jYWwtdG9kYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmZGU3O1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1oZWFkZXIuY2FsLXdlZWtlbmQgc3BhbiB7XG4gIGNvbG9yOiAjOGIwMDAwO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyB7XG4gIGJvcmRlci1jb2xvcjogI2UxZTFlMTtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1kYXktY29sdW1uczpub3QoLmNhbC1yZXNpemUtYWN0aXZlKSAuY2FsLWhvdXItc2VnbWVudDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWhvdXItb2RkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtZHJhZy1vdmVyIC5jYWwtaG91ci1zZWdtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtaG91cjpub3QoOmxhc3QtY2hpbGQpIC5jYWwtaG91ci1zZWdtZW50LFxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyOmxhc3QtY2hpbGQgOm5vdCg6bGFzdC1jaGlsZCkgLmNhbC1ob3VyLXNlZ21lbnQge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZTFlMWUxO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1jdXJyZW50LXRpbWUtbWFya2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhNDMzNDtcbn1cblxuLmNhbC1kYXktdmlldyB7XG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzZWxlY3Rvci10eXBlLW5vLXVua25vd24gKi9cbn1cbi5jYWwtZGF5LXZpZXcgbXdsLWNhbGVuZGFyLXdlZWstdmlldy1oZWFkZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNhbC1kYXktdmlldyAuY2FsLWV2ZW50cy1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogNzBweDtcbn1cbltkaXI9cnRsXSAuY2FsLWRheS12aWV3IC5jYWwtZXZlbnRzLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiBpbml0aWFsO1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG59XG4uY2FsLWRheS12aWV3IC5jYWwtZGF5LWNvbHVtbiB7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuLmNhbC1kYXktdmlldyAuY2FsLWN1cnJlbnQtdGltZS1tYXJrZXIge1xuICBtYXJnaW4tbGVmdDogNzBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xufVxuW2Rpcj1ydGxdIC5jYWwtZGF5LXZpZXcgLmNhbC1jdXJyZW50LXRpbWUtbWFya2VyIHtcbiAgbWFyZ2luLWxlZnQ6IGluaXRpYWw7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbn1cblxuLmNhbC10b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDcwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBsaW5lLWJyZWFrOiBhdXRvO1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC10b3Age1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luLXRvcDogLTNweDtcbn1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLXRvcCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGJvcmRlci13aWR0aDogNXB4IDVweCAwO1xufVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtcmlnaHQge1xuICBwYWRkaW5nOiAwIDVweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLXJpZ2h0IC5jYWwtdG9vbHRpcC1hcnJvdyB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBib3JkZXItd2lkdGg6IDVweCA1cHggNXB4IDA7XG59XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1ib3R0b20ge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtYm90dG9tIC5jYWwtdG9vbHRpcC1hcnJvdyB7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgYm9yZGVyLXdpZHRoOiAwIDVweCA1cHg7XG59XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1sZWZ0IHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xufVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtbGVmdCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGJvcmRlci13aWR0aDogNXB4IDAgNXB4IDVweDtcbn1cblxuLmNhbC10b29sdGlwLWlubmVyIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG4uY2FsLXRvb2x0aXAtYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC10b3AgLmNhbC10b29sdGlwLWFycm93IHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDtcbn1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLXJpZ2h0IC5jYWwtdG9vbHRpcC1hcnJvdyB7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzAwMDtcbn1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLWJvdHRvbSAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDAwO1xufVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtbGVmdCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICBib3JkZXItbGVmdC1jb2xvcjogIzAwMDtcbn1cblxuLmNhbC10b29sdGlwLWlubmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */vex-calendar .calendar-bg {\n  background: url(\"/assets/img/demo/landscape.jpg\") no-repeat center;\n  background-size: cover;\n}\n\n/**\n * angular-calendar overwrites\n */\n.cal-month-view {\n  background: var(--vex-background-card);\n}\n.cal-month-view .cal-days{\n  border-color: var(--vex-foreground-divider);\n}\n.cal-month-view .cal-days .cal-cell-row{\n  border-color: var(--vex-foreground-divider);\n}\n.cal-month-view .cal-header .cal-cell{\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n}\n.cal-month-view .cal-cell-row:hover {\n  background: var(--vex-background-hover);\n}\n.cal-month-view .cal-cell-row .cal-cell:hover {\n  background: var(--vex-background-hover);\n}\n.cal-month-view .cal-cell-row .cal-cell.cal-open {\n  background: var(--vex-background-hover);\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.cal-month-view .cal-day-cell {\n  min-height: 150px;\n}\n.cal-month-view .cal-day-cell.cal-today {\n  background: var(--vex-background-app-bar);\n}\n.cal-month-view .cal-day-cell:not(:last-child){\n  border-color: var(--vex-foreground-divider);\n}\n.cal-month-view .cal-open-day-events{\n  border-bottom-width: 1px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(var(--vex-color-primary-600) / var(--tw-bg-opacity));\n}\n.cal-month-view .cal-open-day-events > div {\n  align-content: center;\n  align-items: center;\n  background: var(--vex-background-card);\n  color: var(--vex-text-dark);\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.cal-month-view .cal-open-day-events > div + div{\n  margin-top: 0.75rem;\n}\n.cal-month-view .cal-open-day-events > div mwl-calendar-event-title {\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n}\n.cal-month-view .cal-open-day-events > div mwl-calendar-event-title .cal-event-title{\n  flex: 1 1 0%;\n  padding: 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-foreground-text-rgb) / var(--tw-text-opacity));\n}\n.cal-month-view .cal-open-day-events > div .cal-event-action{\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-foreground-secondary-text-rgb) / var(--tw-text-opacity));\n}\n.cal-month-view .cal-open-day-events > div .cal-event-action + .cal-event-action{\n  margin-left: 0.75rem;\n}\n\n.cal-week-view,\n.cal-day-view {\n  background: var(--vex-background-card);\n}\n.cal-week-view .cal-header,\n.cal-day-view .cal-header{\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n}\n.cal-week-view .cal-header b,\n.cal-day-view .cal-header b {\n  font-weight: 500;\n}\n.cal-week-view .cal-header.cal-weekend span,\n.cal-day-view .cal-header.cal-weekend span{\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-foreground-secondary-text-rgb) / var(--tw-text-opacity));\n}\n.cal-week-view .cal-header.cal-today,\n.cal-day-view .cal-header.cal-today {\n  background: var(--vex-background-app-bar);\n}\n.cal-week-view .cal-day-headers .cal-header:hover,\n.cal-week-view .cal-day-headers .cal-drag-over,\n.cal-day-view .cal-day-headers .cal-header:hover,\n.cal-day-view .cal-day-headers .cal-drag-over {\n  background-color: var(--vex-background-hover);\n}\n.cal-week-view .cal-hour,\n.cal-day-view .cal-hour {\n  background: var(--vex-background-card);\n}\n.cal-week-view .cal-hour:nth-child(odd),\n.cal-day-view .cal-hour:nth-child(odd) {\n  background: var(--vex-background-card);\n}\n.cal-week-view .cal-hour-odd,\n.cal-day-view .cal-hour-odd {\n  background: var(--vex-background-app-bar);\n}\n.cal-week-view .cal-hour-segment:hover,\n.cal-day-view .cal-hour-segment:hover {\n  background: var(--vex-background-hover);\n}\n.cal-week-view .cal-time-events .cal-day-columns .cal-hour-segment:hover,\n.cal-day-view .cal-time-events .cal-day-columns .cal-hour-segment:hover {\n  background: var(--vex-background-hover);\n}\n.cal-week-view .cal-event,\n.cal-day-view .cal-event {\n  align-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.cal-week-view .cal-event mwl-calendar-event-actions,\n.cal-day-view .cal-event mwl-calendar-event-actions {\n  order: 2;\n}\n.cal-week-view .cal-event mwl-calendar-event-title,\n.cal-day-view .cal-event mwl-calendar-event-title {\n  display: block;\n  flex: 1;\n  order: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.cal-week-view .cal-event mwl-calendar-event-title .cal-event-title,\n.cal-day-view .cal-event mwl-calendar-event-title .cal-event-title {\n  outline: none;\n}\n.cal-week-view .cal-event .cal-event-actions,\n.cal-day-view .cal-event .cal-event-actions {\n  align-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.cal-week-view .cal-event .cal-event-actions .cal-event-action,\n.cal-day-view .cal-event .cal-event-actions .cal-event-action{\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-foreground-secondary-text-rgb) / var(--tw-text-opacity));\n  height: auto;\n}\n.cal-week-view .cal-event .cal-event-actions .cal-event-action .icon,\n.cal-day-view .cal-event .cal-event-actions .cal-event-action .icon {\n  font-size: 18px;\n  padding: 0.25rem;\n}\n\n.cal-event-title{\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-foreground-text-rgb) / var(--tw-text-opacity));\n  text-decoration-line: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYXBwcy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL3VuaWdlc3RfZnJvbnQlMjBjb3BpZS9zcmMvYXBwL3BhZ2VzL2FwcHMvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxrRUFBQTtFQUNBLHNCQUFBO0FDREo7O0FES0E7O0VBQUE7QUFHQTtFQUNFLHNDQUFBO0FDRkY7QURLSTtFQUFBO0FBQUE7QUFHRTtFQUFBO0FBQUE7QUFLRjtFQUFBLG9CQUFBO0VBQUEsdUJBQUE7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTtBQUlBO0VBQ0UsdUNBQUE7QUNOTjtBRFVNO0VBQ0UsdUNBQUE7QUNSUjtBRFdNO0VBQ0UsdUNBQUE7RUFDQSwrRUFBQTtFQUFBLG1HQUFBO0VBQUEsdUdBQUE7QUNUUjtBRGNFO0VBQ0UsaUJBQUE7QUNaSjtBRGNJO0VBQ0UseUNBQUE7QUNaTjtBRGdCTTtFQUFBO0FBQUE7QUFLRjtFQUFBLHdCQUFBO0VBQUEsa0JBQUE7RUFBQTtBQUFBO0FBRUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFBQSxxQkFBQTtFQUFBLDBFQUFBO0VBQUEsOEZBQUE7RUFBQSx1R0FBQTtBQ2ZOO0FEa0JRO0VBQUE7QUFBQTtBQUdGO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtBQ2hCUjtBRG1CVTtFQUFBLFlBQUE7RUFBQSxnQkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxvQkFBQTtFQUFBO0FBQUE7QUFLRjtFQUFBLG9CQUFBO0VBQUE7QUFBQTtBQUdFO0VBQUE7QUFBQTs7QUFPVjs7RUFFRSxzQ0FBQTtBQ3RCRjtBRHlCSTs7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTtBQUVBOztFQUNFLGdCQUFBO0FDcEJOO0FEd0JNOztFQUFBLG9CQUFBO0VBQUE7QUFBQTtBQUdGOztFQUNFLHlDQUFBO0FDcEJOO0FEd0JFOzs7O0VBRUUsNkNBQUE7QUNwQko7QUR1QkU7O0VBQ0Usc0NBQUE7QUNwQko7QURzQkk7O0VBQ0Usc0NBQUE7QUNuQk47QUR1QkU7O0VBQ0UseUNBQUE7QUNwQko7QUR3Qkk7O0VBQ0UsdUNBQUE7QUNyQk47QUQ0QlE7O0VBQ0UsdUNBQUE7QUN6QlY7QUQrQkU7O0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDNUJKO0FEOEJJOztFQUNFLFFBQUE7QUMzQk47QUQ4Qkk7O0VBQ0UsY0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDM0JOO0FENkJNOztFQUNFLGFBQUE7QUMxQlI7QUQ4Qkk7O0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDM0JOO0FEOEJROztFQUFBLG9CQUFBO0VBQUEsNkVBQUE7RUFDQTtBQURBO0FBR0E7O0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDekJWOztBRGlDRTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxvQkFBQTtFQUFBLG1FQUFBO0VBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhci1jYWxlbmRhci9jc3MvYW5ndWxhci1jYWxlbmRhci5jc3NcIjtcblxudmV4LWNhbGVuZGFyIHtcbiAgLmNhbGVuZGFyLWJnIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltZy9kZW1vL2xhbmRzY2FwZS5qcGdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG59XG5cbi8qKlxuICogYW5ndWxhci1jYWxlbmRhciBvdmVyd3JpdGVzXG4gKi9cbi5jYWwtbW9udGgtdmlldyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZleC1iYWNrZ3JvdW5kLWNhcmQpO1xuXG4gIC5jYWwtZGF5cyB7XG4gICAgQGFwcGx5IGJvcmRlci1kaXZpZGVyO1xuXG4gICAgLmNhbC1jZWxsLXJvdyB7XG4gICAgICBAYXBwbHkgYm9yZGVyLWRpdmlkZXI7XG4gICAgfVxuICB9XG5cbiAgLmNhbC1oZWFkZXIgLmNhbC1jZWxsIHtcbiAgICBAYXBwbHkgcHktMyB0ZXh0LXNtIGZvbnQtbWVkaXVtO1xuICB9XG5cbiAgLmNhbC1jZWxsLXJvdyB7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3Zlcik7XG4gICAgfVxuXG4gICAgLmNhbC1jZWxsIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3Zlcik7XG4gICAgICB9XG5cbiAgICAgICYuY2FsLW9wZW4ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3Zlcik7XG4gICAgICAgIEBhcHBseSBzaGFkb3ctbGc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNhbC1kYXktY2VsbCB7XG4gICAgbWluLWhlaWdodDogMTUwcHg7XG5cbiAgICAmLmNhbC10b2RheSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1hcHAtYmFyKTtcbiAgICB9XG5cbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgQGFwcGx5IGJvcmRlci1kaXZpZGVyO1xuICAgIH1cbiAgfVxuXG4gIC5jYWwtb3Blbi1kYXktZXZlbnRzIHtcbiAgICBAYXBwbHkgYmctcHJpbWFyeS02MDAgYm9yZGVyLWI7XG5cbiAgICA+IGRpdiB7XG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdmV4LWJhY2tncm91bmQtY2FyZCk7XG4gICAgICBjb2xvcjogdmFyKC0tdmV4LXRleHQtZGFyayk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIEBhcHBseSBzaGFkb3cgcHgtNjtcblxuICAgICAgJiArIGRpdiB7XG4gICAgICAgIEBhcHBseSBtdC0zO1xuICAgICAgfVxuXG4gICAgICBtd2wtY2FsZW5kYXItZXZlbnQtdGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgICAgIC5jYWwtZXZlbnQtdGl0bGUge1xuICAgICAgICAgIEBhcHBseSBmbGV4LTEgdGV4dC1kZWZhdWx0IHRleHQtc20gcC0zO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jYWwtZXZlbnQtYWN0aW9uIHtcbiAgICAgICAgQGFwcGx5IHRleHQtc2Vjb25kYXJ5O1xuXG4gICAgICAgICYgKyAuY2FsLWV2ZW50LWFjdGlvbiB7XG4gICAgICAgICAgQGFwcGx5IG1sLTM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNhbC13ZWVrLXZpZXcsXG4uY2FsLWRheS12aWV3IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LWJhY2tncm91bmQtY2FyZCk7XG5cbiAgLmNhbC1oZWFkZXIge1xuICAgIEBhcHBseSB0ZXh0LXNtIGZvbnQtbWVkaXVtO1xuXG4gICAgYiB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgICYuY2FsLXdlZWtlbmQgc3BhbiB7XG4gICAgICBAYXBwbHkgdGV4dC1zZWNvbmRhcnk7XG4gICAgfVxuXG4gICAgJi5jYWwtdG9kYXkge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdmV4LWJhY2tncm91bmQtYXBwLWJhcik7XG4gICAgfVxuICB9XG5cbiAgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlcjpob3ZlcixcbiAgLmNhbC1kYXktaGVhZGVycyAuY2FsLWRyYWctb3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpO1xuICB9XG5cbiAgLmNhbC1ob3VyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1jYXJkKTtcblxuICAgICY6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdmV4LWJhY2tncm91bmQtY2FyZCk7XG4gICAgfVxuICB9XG5cbiAgLmNhbC1ob3VyLW9kZCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdmV4LWJhY2tncm91bmQtYXBwLWJhcik7XG4gIH1cblxuICAuY2FsLWhvdXItc2VnbWVudCB7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3Zlcik7XG4gICAgfVxuICB9XG5cbiAgLmNhbC10aW1lLWV2ZW50cyB7XG4gICAgLmNhbC1kYXktY29sdW1ucyB7XG4gICAgICAuY2FsLWhvdXItc2VnbWVudCB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXZleC1iYWNrZ3JvdW5kLWhvdmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jYWwtZXZlbnQge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBtd2wtY2FsZW5kYXItZXZlbnQtYWN0aW9ucyB7XG4gICAgICBvcmRlcjogMjtcbiAgICB9XG5cbiAgICBtd2wtY2FsZW5kYXItZXZlbnQtdGl0bGUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmbGV4OiAxO1xuICAgICAgb3JkZXI6IDE7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgICAuY2FsLWV2ZW50LXRpdGxlIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FsLWV2ZW50LWFjdGlvbnMge1xuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgLmNhbC1ldmVudC1hY3Rpb24ge1xuICAgICAgICBAYXBwbHkgdGV4dC1zZWNvbmRhcnk7XG4gICAgICAgIGhlaWdodDogYXV0bztcblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIEBhcHBseSBwLTE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNhbC1ldmVudC10aXRsZSB7XG4gIEBhcHBseSB0ZXh0LWRlZmF1bHQgbm8tdW5kZXJsaW5lIHRleHQtc207XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItY2FsZW5kYXIvY3NzL2FuZ3VsYXItY2FsZW5kYXIuY3NzXCI7XG52ZXgtY2FsZW5kYXIgLmNhbGVuZGFyLWJnIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvZGVtby9sYW5kc2NhcGUuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi8qKlxuICogYW5ndWxhci1jYWxlbmRhciBvdmVyd3JpdGVzXG4gKi9cbi5jYWwtbW9udGgtdmlldyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZleC1iYWNrZ3JvdW5kLWNhcmQpO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5cyB7XG4gIEBhcHBseSBib3JkZXItZGl2aWRlcjtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheXMgLmNhbC1jZWxsLXJvdyB7XG4gIEBhcHBseSBib3JkZXItZGl2aWRlcjtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLWhlYWRlciAuY2FsLWNlbGwge1xuICBAYXBwbHkgcHktMyB0ZXh0LXNtIGZvbnQtbWVkaXVtO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3Zlcik7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLXJvdyAuY2FsLWNlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3Zlcik7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLXJvdyAuY2FsLWNlbGwuY2FsLW9wZW4ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3Zlcik7XG4gIEBhcHBseSBzaGFkb3ctbGc7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbCB7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLXRvZGF5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LWJhY2tncm91bmQtYXBwLWJhcik7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgQGFwcGx5IGJvcmRlci1kaXZpZGVyO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzIHtcbiAgQGFwcGx5IGJnLXByaW1hcnktNjAwIGJvcmRlci1iO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzID4gZGl2IHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1jYXJkKTtcbiAgY29sb3I6IHZhcigtLXZleC10ZXh0LWRhcmspO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIEBhcHBseSBzaGFkb3cgcHgtNjtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyA+IGRpdiArIGRpdiB7XG4gIEBhcHBseSBtdC0zO1xufVxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzID4gZGl2IG13bC1jYWxlbmRhci1ldmVudC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1vcGVuLWRheS1ldmVudHMgPiBkaXYgbXdsLWNhbGVuZGFyLWV2ZW50LXRpdGxlIC5jYWwtZXZlbnQtdGl0bGUge1xuICBAYXBwbHkgZmxleC0xIHRleHQtZGVmYXVsdCB0ZXh0LXNtIHAtMztcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyA+IGRpdiAuY2FsLWV2ZW50LWFjdGlvbiB7XG4gIEBhcHBseSB0ZXh0LXNlY29uZGFyeTtcbn1cbi5jYWwtbW9udGgtdmlldyAuY2FsLW9wZW4tZGF5LWV2ZW50cyA+IGRpdiAuY2FsLWV2ZW50LWFjdGlvbiArIC5jYWwtZXZlbnQtYWN0aW9uIHtcbiAgQGFwcGx5IG1sLTM7XG59XG5cbi5jYWwtd2Vlay12aWV3LFxuLmNhbC1kYXktdmlldyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZleC1iYWNrZ3JvdW5kLWNhcmQpO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1oZWFkZXIsXG4uY2FsLWRheS12aWV3IC5jYWwtaGVhZGVyIHtcbiAgQGFwcGx5IHRleHQtc20gZm9udC1tZWRpdW07XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWhlYWRlciBiLFxuLmNhbC1kYXktdmlldyAuY2FsLWhlYWRlciBiIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtaGVhZGVyLmNhbC13ZWVrZW5kIHNwYW4sXG4uY2FsLWRheS12aWV3IC5jYWwtaGVhZGVyLmNhbC13ZWVrZW5kIHNwYW4ge1xuICBAYXBwbHkgdGV4dC1zZWNvbmRhcnk7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWhlYWRlci5jYWwtdG9kYXksXG4uY2FsLWRheS12aWV3IC5jYWwtaGVhZGVyLmNhbC10b2RheSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZleC1iYWNrZ3JvdW5kLWFwcC1iYXIpO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlcjpob3Zlcixcbi5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1kcmFnLW92ZXIsXG4uY2FsLWRheS12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1oZWFkZXI6aG92ZXIsXG4uY2FsLWRheS12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1kcmFnLW92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1ob3Zlcik7XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWhvdXIsXG4uY2FsLWRheS12aWV3IC5jYWwtaG91ciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZleC1iYWNrZ3JvdW5kLWNhcmQpO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyOm50aC1jaGlsZChvZGQpLFxuLmNhbC1kYXktdmlldyAuY2FsLWhvdXI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1jYXJkKTtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtaG91ci1vZGQsXG4uY2FsLWRheS12aWV3IC5jYWwtaG91ci1vZGQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1hcHAtYmFyKTtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtaG91ci1zZWdtZW50OmhvdmVyLFxuLmNhbC1kYXktdmlldyAuY2FsLWhvdXItc2VnbWVudDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZleC1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1kYXktY29sdW1ucyAuY2FsLWhvdXItc2VnbWVudDpob3Zlcixcbi5jYWwtZGF5LXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWRheS1jb2x1bW5zIC5jYWwtaG91ci1zZWdtZW50OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudCxcbi5jYWwtZGF5LXZpZXcgLmNhbC1ldmVudCB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudCBtd2wtY2FsZW5kYXItZXZlbnQtYWN0aW9ucyxcbi5jYWwtZGF5LXZpZXcgLmNhbC1ldmVudCBtd2wtY2FsZW5kYXItZXZlbnQtYWN0aW9ucyB7XG4gIG9yZGVyOiAyO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudCBtd2wtY2FsZW5kYXItZXZlbnQtdGl0bGUsXG4uY2FsLWRheS12aWV3IC5jYWwtZXZlbnQgbXdsLWNhbGVuZGFyLWV2ZW50LXRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXg6IDE7XG4gIG9yZGVyOiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5jYWwtd2Vlay12aWV3IC5jYWwtZXZlbnQgbXdsLWNhbGVuZGFyLWV2ZW50LXRpdGxlIC5jYWwtZXZlbnQtdGl0bGUsXG4uY2FsLWRheS12aWV3IC5jYWwtZXZlbnQgbXdsLWNhbGVuZGFyLWV2ZW50LXRpdGxlIC5jYWwtZXZlbnQtdGl0bGUge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudCAuY2FsLWV2ZW50LWFjdGlvbnMsXG4uY2FsLWRheS12aWV3IC5jYWwtZXZlbnQgLmNhbC1ldmVudC1hY3Rpb25zIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudCAuY2FsLWV2ZW50LWFjdGlvbnMgLmNhbC1ldmVudC1hY3Rpb24sXG4uY2FsLWRheS12aWV3IC5jYWwtZXZlbnQgLmNhbC1ldmVudC1hY3Rpb25zIC5jYWwtZXZlbnQtYWN0aW9uIHtcbiAgQGFwcGx5IHRleHQtc2Vjb25kYXJ5O1xuICBoZWlnaHQ6IGF1dG87XG59XG4uY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50IC5jYWwtZXZlbnQtYWN0aW9ucyAuY2FsLWV2ZW50LWFjdGlvbiAuaWNvbixcbi5jYWwtZGF5LXZpZXcgLmNhbC1ldmVudCAuY2FsLWV2ZW50LWFjdGlvbnMgLmNhbC1ldmVudC1hY3Rpb24gLmljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIEBhcHBseSBwLTE7XG59XG5cbi5jYWwtZXZlbnQtdGl0bGUge1xuICBAYXBwbHkgdGV4dC1kZWZhdWx0IG5vLXVuZGVybGluZSB0ZXh0LXNtO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 3360:
/*!***************************************************************!*\
  !*** ./src/app/services/CustomEventTitleFormatter.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomEventTitleFormatter: () => (/* binding */ CustomEventTitleFormatter)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/locales/fr */ 9108);
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-calendar */ 2882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);




(0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_1__["default"]);
class CustomEventTitleFormatter extends angular_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarEventTitleFormatter {
  weekTooltip(event) {
    return '';
  }
  monthTooltip(event) {
    return '';
  }
  static #_ = this.ɵfac = /*@__PURE__*/(() => {
    let ɵCustomEventTitleFormatter_BaseFactory;
    return function CustomEventTitleFormatter_Factory(t) {
      return (ɵCustomEventTitleFormatter_BaseFactory || (ɵCustomEventTitleFormatter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](CustomEventTitleFormatter)))(t || CustomEventTitleFormatter);
    };
  })();
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: CustomEventTitleFormatter,
    factory: CustomEventTitleFormatter.ɵfac
  });
}

/***/ }),

/***/ 9108:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/common/locales/fr.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY.
const u = undefined;
function plural(val) {
  const n = val,
    i = Math.floor(Math.abs(val)),
    v = val.toString().replace(/^[^.]*\.?/, '').length,
    e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, '$2')) || 0;
  if (i === 0 || i === 1) return 1;
  if (e === 0 && !(i === 0) && i % 1000000 === 0 && v === 0 || !(e >= 0 && e <= 5)) return 4;
  return 5;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (["fr", [["AM", "PM"], u, u], u, [["D", "L", "M", "M", "J", "V", "S"], ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], ["di", "lu", "ma", "me", "je", "ve", "sa"]], u, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]], u, [["av. J.-C.", "ap. J.-C."], u, ["avant Jésus-Christ", "après Jésus-Christ"]], 1, [6, 0], ["dd/MM/y", "d MMM y", "d MMMM y", "EEEE d MMMM y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", "{1}, {0}", "{1} 'à' {0}", u], [",", " ", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0 %", "#,##0.00 ¤", "#E0"], "EUR", "€", "euro", {
  "ARS": ["$AR", "$"],
  "AUD": ["$AU", "$"],
  "BEF": ["FB"],
  "BMD": ["$BM", "$"],
  "BND": ["$BN", "$"],
  "BYN": [u, "р."],
  "BZD": ["$BZ", "$"],
  "CAD": ["$CA", "$"],
  "CLP": ["$CL", "$"],
  "CNY": [u, "¥"],
  "COP": ["$CO", "$"],
  "CYP": ["£CY"],
  "EGP": [u, "£E"],
  "FJD": ["$FJ", "$"],
  "FKP": ["£FK", "£"],
  "FRF": ["F"],
  "GBP": ["£GB", "£"],
  "GIP": ["£GI", "£"],
  "HKD": [u, "$"],
  "IEP": ["£IE"],
  "ILP": ["£IL"],
  "ITL": ["₤IT"],
  "JPY": [u, "¥"],
  "KMF": [u, "FC"],
  "LBP": ["£LB", "£L"],
  "MTP": ["£MT"],
  "MXN": ["$MX", "$"],
  "NAD": ["$NA", "$"],
  "NIO": [u, "$C"],
  "NZD": ["$NZ", "$"],
  "PHP": [u, "₱"],
  "RHD": ["$RH"],
  "RON": [u, "L"],
  "RWF": [u, "FR"],
  "SBD": ["$SB", "$"],
  "SGD": ["$SG", "$"],
  "SRD": ["$SR", "$"],
  "TOP": [u, "$T"],
  "TTD": ["$TT", "$"],
  "TWD": [u, "NT$"],
  "USD": ["$US", "$"],
  "UYU": ["$UY", "$"],
  "WST": ["$WS"],
  "XCD": [u, "$"],
  "XPF": ["FCFP"],
  "ZMW": [u, "Kw"]
}, "ltr", plural]);

/***/ })

}]);
//# sourceMappingURL=src_app_pages_apps_calendar_calendar_component_ts.js.map