"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_finance_depense-list_depense-list_component_ts"],{

/***/ 8294:
/*!**************************************************************************!*\
  !*** ./src/app/pages/finance/depense-detail/depense-detail.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepenseDetailComponent: () => (/* binding */ DepenseDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var src_app_models_Medias__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/Medias */ 8718);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_MediasService_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/MediasService.service */ 1308);









function DepenseDetailComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Aucun fichier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DepenseDetailComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 31)(6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DepenseDetailComponent_div_43_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const file_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.voirFile(file_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DepenseDetailComponent_div_43_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const file_r3 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.deleteFile(file_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const file_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](file_r3.fichier);
  }
}
class DepenseDetailComponent {
  constructor(data, mediaService, dialogRef) {
    this.data = data;
    this.mediaService = mediaService;
    this.dialogRef = dialogRef;
    this.files = [];
  }
  ngOnInit() {
    this.depense = this.data;
    this.loadFiles();
  }
  loadFiles() {
    this.mediaService.getByType(src_app_models_Medias__WEBPACK_IMPORTED_MODULE_0__.MediaType.JUSTIFICATIF_DEPENSE, this.depense.id).subscribe(res => {
      this.files = res;
    });
  }
  voirFile(file) {
    window.open(file.fichierUrl, '_blank');
  }
  deleteFile(file) {
    if (!file.idMedia) return;
    this.mediaService.delete(file.idMedia).subscribe(() => {
      this.files = this.files.filter(f => f.idMedia !== file.idMedia);
    });
  }
  uploadFile(event) {
    const file = event.target.files[0];
    if (!file) return;
    const media = {
      type: src_app_models_Medias__WEBPACK_IMPORTED_MODULE_0__.MediaType.JUSTIFICATIF_DEPENSE,
      referenceId: this.depense.id
    };
    this.mediaService.create(media, file).subscribe(res => {
      this.files.push(res);
    });
  }
  close() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function DepenseDetailComponent_Factory(t) {
    return new (t || DepenseDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_MediasService_service__WEBPACK_IMPORTED_MODULE_1__.MediaService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DepenseDetailComponent,
    selectors: [["vex-depense-detail"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 47,
    vars: 10,
    consts: [["mat-dialog-title", "", 1, "flex", "items-center", "p-4", "border-b", "bg-gray-50/50"], [1, "bg-primary/10", "text-primary", "p-2", "rounded-lg", "mr-4"], ["svgIcon", "mat:receipt"], [1, "flex-auto"], [1, "headline", "m-0", "text-lg", "font-bold"], [1, "caption", "text-secondary", "m-0"], ["mat-icon-button", "", 3, "click"], ["svgIcon", "mat:close"], [1, "p-6"], [1, "grid", "grid-cols-2", "gap-4", "mb-6"], [1, "p-3", "border", "rounded"], [1, "text-xs", "text-secondary"], [1, "font-bold"], [1, "font-bold", "text-primary"], [1, "font-medium"], [1, "border", "rounded", "p-4"], [1, "flex", "justify-between", "items-center", "mb-3"], [1, "m-0", "text-xs", "uppercase", "text-secondary"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["svgIcon", "mat:upload"], ["type", "file", "hidden", "", 3, "change"], ["fileInput", ""], ["class", "text-sm text-secondary italic", 4, "ngIf"], ["class", "flex justify-between items-center p-2 border-b", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-button", "", 3, "click"], [1, "text-sm", "text-secondary", "italic"], [1, "flex", "justify-between", "items-center", "p-2", "border-b"], [1, "flex", "items-center", "gap-2"], ["svgIcon", "mat:insert_drive_file"], [1, "text-sm"], [1, "flex", "gap-2"], ["svgIcon", "mat:visibility"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["svgIcon", "mat:delete"]],
    template: function DepenseDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " D\u00E9tails de la d\u00E9pense ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DepenseDetailComponent_Template_button_click_8_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-dialog-content", 8)(11, "div", 9)(12, "div", 10)(13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10)(19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Montant");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 10)(24, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Cat\u00E9gorie");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 10)(29, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Ann\u00E9e scolaire");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 15)(34, "div", 16)(35, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Fichiers justificatifs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DepenseDetailComponent_Template_button_click_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](41);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.click());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " Ajouter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function DepenseDetailComponent_Template_input_change_40_listener($event) {
          return ctx.uploadFile($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, DepenseDetailComponent_div_42_Template, 2, 0, "div", 22)(43, DepenseDetailComponent_div_43_Template, 10, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-dialog-actions", 24)(45, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DepenseDetailComponent_Template_button_click_45_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.depense.libelle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](17, 7, ctx.depense.dateDepense, "dd/MM/yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.depense.montant, " F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.depense.categorieDepense == null ? null : ctx.depense.categorieDepense.nom, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.depense.anneeScolaire == null ? null : ctx.depense.anneeScolaire.libelle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.files.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.files);
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6485:
/*!**********************************************************************!*\
  !*** ./src/app/pages/finance/depense-form/depense-form.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepenseFormComponent: () => (/* binding */ DepenseFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 7889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_categorie_depense_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/categorie-depense.service */ 8428);
/* harmony import */ var src_app_services_annee_scolaire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/annee-scolaire.service */ 5817);
/* harmony import */ var src_app_services_DepenseService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/DepenseService.service */ 9989);


























function DepenseFormComponent_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", cat_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", cat_r3.nom, " ");
  }
}
function DepenseFormComponent_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const annee_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", annee_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", annee_r4.libelle, " ");
  }
}
class DepenseFormComponent {
  constructor(categorieService, anneeScolaireService, fb, depenseService, dialogRef, defaults) {
    this.categorieService = categorieService;
    this.anneeScolaireService = anneeScolaireService;
    this.fb = fb;
    this.depenseService = depenseService;
    this.dialogRef = dialogRef;
    this.defaults = defaults;
    this.mode = 'create';
    this.categories = [];
    this.anneesScolaires = [];
    this.form = this.fb.group({
      libelle: [this.defaults?.libelle || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      montant: [this.defaults?.montant || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(0)]],
      dateDepense: [this.defaults?.dateDepense || new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      description: [this.defaults?.description || ''],
      modePaiement: [this.defaults?.modePaiement || 'Espèces'],
      categorieDepense: [this.defaults?.categorieDepense?.id || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      anneeScolaire: [this.defaults?.anneeScolaire?.id || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required] // On stocke l'ID
    });
  }

  ngOnInit() {
    if (this.defaults) this.mode = 'update';
    this.categorieService.getAll().subscribe(data => this.categories = data);
    this.anneeScolaireService.getAll().subscribe(data => this.anneesScolaires = data);
  }
  save() {
    if (this.form.invalid) return;
    console.log(this.form.value);
    const formValue = this.form.value;
    // Reconstruction de l'objet pour correspondre au modèle Java
    const depensePayload = {
      ...formValue,
      categorieDepense: {
        id: formValue.categorieDepense
      },
      anneeScolaire: {
        id: formValue.anneeScolaire
      }
    };
    if (this.mode === 'update') {
      // Si mode update, on ajoute l'ID de la dépense à l'objet
      depensePayload.id = this.defaults.id;
      this.depenseService.update(this.defaults.id, depensePayload).subscribe({
        next: () => {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            icon: 'success',
            title: 'Dépense mise à jour',
            timer: 1500,
            showConfirmButton: false
          });
          this.dialogRef.close(true);
        },
        error: () => sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Erreur', 'Échec de la mise à jour', 'error')
      });
    } else {
      this.depenseService.create(depensePayload).subscribe({
        next: () => {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            icon: 'success',
            title: 'Dépense enregistrée',
            timer: 1500,
            showConfirmButton: false
          });
          this.dialogRef.close(true);
        },
        error: () => sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Erreur', 'Échec de l\'ajout', 'error')
      });
    }
  }
  static #_ = this.ɵfac = function DepenseFormComponent_Factory(t) {
    return new (t || DepenseFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_categorie_depense_service__WEBPACK_IMPORTED_MODULE_1__.CategorieDepenseService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_annee_scolaire_service__WEBPACK_IMPORTED_MODULE_2__.AnneeScolaireService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_DepenseService_service__WEBPACK_IMPORTED_MODULE_3__.DepenseService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DepenseFormComponent,
    selectors: [["vex-depense-form"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 41,
    vars: 7,
    consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", "", 1, "flex", "items-center"], ["svgIcon", "mat:attach_money", "color", "primary", 1, "mr-4"], [1, "headline", "m-0", "flex-auto"], [1, "flex", "flex-col", "mt-4"], [1, "w-full"], ["formControlName", "libelle", "matInput", "", "placeholder", "Ex: Achat fournitures..."], ["formControlName", "categorieDepense"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "anneeScolaire"], [1, "flex", "gap-4"], [1, "flex-auto"], ["formControlName", "montant", "type", "number", "matInput", ""], ["matInput", "", "formControlName", "dateDepense", 3, "matDatepicker"], ["matIconSuffix", "", 3, "for"], ["picker", ""], ["formControlName", "description", "matInput", ""], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["color", "primary", "mat-flat-button", "", "type", "submit", 3, "disabled"], [3, "value"]],
    template: function DepenseFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function DepenseFormComponent_Template_form_ngSubmit_0_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-dialog-content", 4)(6, "mat-form-field", 5)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Libell\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-form-field", 5)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Cat\u00E9gorie");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, DepenseFormComponent_mat_option_14_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-form-field", 5)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Ann\u00E9e Scolaire");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, DepenseFormComponent_mat_option_19_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 10)(21, "mat-form-field", 11)(22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Montant");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-form-field", 11)(26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 13)(29, "mat-datepicker-toggle", 14)(30, "mat-datepicker", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-form-field", 5)(33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-dialog-actions", 17)(37, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, " Enregistrer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.mode === "update" ? "Modifier" : "Nouvelle", " D\u00E9pense ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.anneesScolaires);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matDatepicker", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.form.invalid);
      }
    },
    dependencies: [_angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2101:
/*!**********************************************************************!*\
  !*** ./src/app/pages/finance/depense-list/depense-list.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepenseListComponent: () => (/* binding */ DepenseListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout.component */ 306);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout-header.directive */ 2369);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout-content.directive */ 5292);
/* harmony import */ var _vex_components_vex_breadcrumbs_vex_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/components/vex-breadcrumbs/vex-breadcrumbs.component */ 9806);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 3951);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vex/animations/stagger.animation */ 6820);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ 7889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button-toggle */ 727);
/* harmony import */ var _depense_form_depense_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../depense-form/depense-form.component */ 6485);
/* harmony import */ var src_app_models_Medias__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/Medias */ 8718);
/* harmony import */ var _depense_detail_depense_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../depense-detail/depense-detail.component */ 8294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_DepenseService_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/DepenseService.service */ 9989);
/* harmony import */ var src_app_services_MediasService_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/MediasService.service */ 1308);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 7947);




































function DepenseListComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DepenseListComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, row_r16.dateDepense, "dd/MM/yyyy"), " ");
  }
}
function DepenseListComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Libell\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DepenseListComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r17.libelle, " ");
  }
}
function DepenseListComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Montant ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DepenseListComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, row_r18.montant, "1.0-0"), " FCFA ");
  }
}
function DepenseListComponent_th_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Cat\u00E9gorie ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DepenseListComponent_td_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r19.categorieDepense == null ? null : row_r19.categorieDepense.nom, " ");
  }
}
function DepenseListComponent_th_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Ann\u00E9e Scolaire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DepenseListComponent_td_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r20.anneeScolaire == null ? null : row_r20.anneeScolaire.libelle, " ");
  }
}
function DepenseListComponent_th_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Justificatif ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DepenseListComponent_td_42_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DepenseListComponent_td_42_ng_container_2_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r27);
      const row_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r26.voirFichier(ctx_r26.filesMap[row_r21.id][0]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
}
function DepenseListComponent_td_42_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Aucune justificatif ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DepenseListComponent_td_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 37)(1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DepenseListComponent_td_42_ng_container_2_Template, 3, 0, "ng-container", 43)(3, DepenseListComponent_td_42_ng_template_3_Template, 2, 0, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DepenseListComponent_td_42_Template_button_click_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r30);
      const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r25.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "input", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function DepenseListComponent_td_42_Template_input_change_7_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r30);
      const row_r21 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r31.onFileSelected($event, row_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r21 = ctx.$implicit;
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](4);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r11.hasFiles(row_r21.id))("ngIfElse", _r24);
  }
}
function DepenseListComponent_th_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "th", 41);
  }
}
function DepenseListComponent_td_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 52)(1, "div", 53)(2, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DepenseListComponent_td_45_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const row_r32 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r33.ouvrirDetail(row_r32));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DepenseListComponent_td_45_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const row_r32 = restoredCtx.$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r35.ouvrirForm(row_r32));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "mat-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DepenseListComponent_td_45_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const row_r32 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r36.supprimer(row_r32));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function DepenseListComponent_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 58);
  }
}
function DepenseListComponent_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 59);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("@fadeInUp", undefined);
  }
}
const _c0 = () => ["Configuration", "D\u00E9penses"];
const _c1 = () => [5, 10, 20];
class DepenseListComponent {
  constructor(dService, dialog, mediaService, router) {
    this.dService = dService;
    this.dialog = dialog;
    this.mediaService = mediaService;
    this.router = router;
    // Configuration des colonnes de la table
    this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.UntypedFormControl('boxed');
    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.UntypedFormControl();
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource();
    this.displayedColumns = ['dateDepense', 'libelle', 'categorie', 'anneeScolaire', 'montant', 'files', 'actions'];
    this.filesMap = {};
  }
  ngOnInit() {
    this.refresh();
    this.searchCtrl.valueChanges.subscribe(v => this.dataSource.filter = v.trim().toLowerCase());
  }
  refresh() {
    this.dService.getAll().subscribe(res => {
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.chargerFichiersDepense();
    });
  }
  chargerFichiersDepense() {
    this.dataSource.data.forEach(depense => {
      this.mediaService.getByType(src_app_models_Medias__WEBPACK_IMPORTED_MODULE_8__.MediaType.JUSTIFICATIF_DEPENSE, depense.id).subscribe({
        next: files => {
          this.filesMap[depense.id] = files;
        },
        error: () => {
          this.filesMap[depense.id] = [];
        }
      });
    });
  }
  onFileSelected(event, depense) {
    const file = event.target.files[0];
    if (!file) return;
    const media = {
      type: src_app_models_Medias__WEBPACK_IMPORTED_MODULE_8__.MediaType.JUSTIFICATIF_DEPENSE,
      referenceId: depense.id
    };
    this.mediaService.create(media, file).subscribe({
      next: res => {
        if (!this.filesMap[depense.id]) {
          this.filesMap[depense.id] = [];
        }
        this.filesMap[depense.id].push(res);
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('Succès', 'Fichier ajouté avec succès', 'success');
      },
      error: () => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('Erreur', 'Impossible d’ajouter le fichier', 'error');
      }
    });
  }
  voirFichier(media) {
    window.open(media.fichierUrl, '_blank');
  }
  hasFiles(id) {
    return !!this.filesMap[id]?.length;
  }
  supprimer(row) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
      title: 'Supprimer ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler'
    }).then(r => {
      if (r.isConfirmed) {
        this.dService.delete(row.id).subscribe(() => {
          // Rafraîchir la liste
          this.refresh();
          // Message de succès sans bouton OK
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            icon: 'success',
            title: 'Supprimé avec succès',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true // Ajoute une petite barre de progression
          });
        });
      }
    });
  }

  ouvrirForm(depense) {
    this.dialog.open(_depense_form_depense_form_component__WEBPACK_IMPORTED_MODULE_7__.DepenseFormComponent, {
      data: depense || null,
      width: '500px'
    }).afterClosed().subscribe(res => {
      if (res) this.refresh();
    });
  }
  ouvrirDetail(depense) {
    this.dialog.open(_depense_detail_depense_detail_component__WEBPACK_IMPORTED_MODULE_9__.DepenseDetailComponent, {
      data: depense,
      width: '800px'
    });
  }
  static #_ = this.ɵfac = function DepenseListComponent_Factory(t) {
    return new (t || DepenseListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_DepenseService_service__WEBPACK_IMPORTED_MODULE_10__.DepenseService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_MediasService_service__WEBPACK_IMPORTED_MODULE_11__.MediaService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: DepenseListComponent,
    selectors: [["vex-depense-list"]],
    viewQuery: function DepenseListComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
    decls: 49,
    vars: 16,
    consts: [[1, "pb-16", "flex", "flex-col", "items-start", "justify-center"], [1, "w-full", "flex", "flex-col", "sm:flex-row", "justify-between"], [1, "title", "mt-0", "mb-1"], [3, "crumbs"], [1, "hidden", "sm:block"], [1, "mt-4", "sm:mt-0", 3, "formControl"], ["value", "boxed"], ["value", "fullwidth"], [1, "-mt-6"], [1, "card", "overflow-auto", "-mt-16"], [1, "bg-app-bar", "px-6", "h-16", "border-b", "sticky", "left-0", "flex", "items-center"], [1, "title", "my-0", "hidden", "sm:block", "flex-none"], ["subscriptSizing", "dynamic", 1, "ml-4"], ["matIconPrefix", "", "svgIcon", "mat:search"], ["matInput", "", "placeholder", "Rechercher une cat\u00E9gorie...", "type", "text", 3, "formControl"], [1, "flex-1"], ["color", "primary", "mat-mini-fab", "", "matTooltip", "Ajouter une cat\u00E9gorie", 1, "ml-4", "flex-none", 3, "click"], ["svgIcon", "mat:add"], ["mat-table", "", "matSort", "", 1, "w-full", 3, "dataSource"], ["matColumnDef", "dateDepense"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "libelle"], ["mat-header-cell", "", "mat-sort-header", "", "class", "uppercase", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "font-medium text-primary", 4, "matCellDef"], ["matColumnDef", "montant"], ["mat-cell", "", "class", "font-bold", 4, "matCellDef"], ["matColumnDef", "categorie"], ["matColumnDef", "anneeScolaire"], ["matColumnDef", "files"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-cell", "", "class", "w-10 text-secondary", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "hover:bg-hover cursor-pointer", 4, "matRowDef", "matRowDefColumns"], [1, "sticky", "left-0", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "uppercase"], ["mat-cell", "", 1, "font-medium", "text-primary"], ["mat-cell", "", 1, "font-bold"], ["mat-header-cell", ""], [1, "flex", "items-center", "gap-2"], [4, "ngIf", "ngIfElse"], ["noFile", ""], ["mat-icon-button", "", 3, "click"], ["svgIcon", "mat:upload"], ["type", "file", "hidden", "", 3, "change"], ["fileInput", ""], ["mat-icon-button", "", "matTooltip", "Voir fichier", 3, "click"], ["svgIcon", "mat:visibility"], [1, "text-xs", "text-gray-400"], ["mat-cell", "", 1, "w-10", "text-secondary"], [1, "flex"], ["mat-icon-button", "", "color", "primary", 3, "click"], ["svgIcon", "mat:edit"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["svgIcon", "mat:delete"], ["mat-header-row", ""], ["mat-row", "", 1, "hover:bg-hover", "cursor-pointer"]],
    template: function DepenseListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "vex-page-layout")(1, "vex-page-layout-header", 0)(2, "div", 1)(3, "div")(4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Gestion des d\u00E9penses");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "vex-breadcrumbs", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 4)(8, "mat-button-toggle-group", 5)(9, "mat-button-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "R\u00E9duire");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "mat-button-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Plein \u00E9cran");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "vex-page-layout-content", 8)(14, "div", 9)(15, "div", 10)(16, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, " Cat\u00E9gories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "mat-icon", 13)(20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DepenseListComponent_Template_button_click_22_listener() {
          return ctx.ouvrirForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](23, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](25, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, DepenseListComponent_th_26_Template, 2, 0, "th", 20)(27, DepenseListComponent_td_27_Template, 3, 4, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](28, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](29, DepenseListComponent_th_29_Template, 2, 0, "th", 23)(30, DepenseListComponent_td_30_Template, 2, 1, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](31, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](32, DepenseListComponent_th_32_Template, 2, 0, "th", 20)(33, DepenseListComponent_td_33_Template, 3, 4, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](34, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, DepenseListComponent_th_35_Template, 2, 0, "th", 20)(36, DepenseListComponent_td_36_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](37, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](38, DepenseListComponent_th_38_Template, 2, 0, "th", 20)(39, DepenseListComponent_td_39_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](40, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](41, DepenseListComponent_th_41_Template, 2, 0, "th", 30)(42, DepenseListComponent_td_42_Template, 9, 2, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](43, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](44, DepenseListComponent_th_44_Template, 1, 0, "th", 30)(45, DepenseListComponent_td_45_Template, 8, 0, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](46, DepenseListComponent_tr_46_Template, 1, 0, "tr", 33)(47, DepenseListComponent_tr_47_Template, 1, 1, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](48, "mat-paginator", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-6", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx.layoutCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx.searchCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("@stagger", undefined)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](15, _c1));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe, _vex_components_vex_page_layout_vex_page_layout_component__WEBPACK_IMPORTED_MODULE_0__.VexPageLayoutComponent, _vex_components_vex_page_layout_vex_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_1__.VexPageLayoutHeaderDirective, _vex_components_vex_page_layout_vex_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_2__.VexPageLayoutContentDirective, _vex_components_vex_breadcrumbs_vex_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__.VexBreadcrumbsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortHeader, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatMiniFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__.MatButtonToggleModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__.MatButtonToggle],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__.fadeInUp400ms, _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__.stagger40ms]
    }
  });
}

/***/ }),

/***/ 9989:
/*!****************************************************!*\
  !*** ./src/app/services/DepenseService.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepenseService: () => (/* binding */ DepenseService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environnement/environment */ 5981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class DepenseService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/depenses`;
  }
  // =========================
  // CREATE
  // =========================
  create(depense) {
    return this.http.post(this.apiUrl, depense);
  }
  // =========================
  // UPDATE
  // =========================
  update(id, depense) {
    return this.http.put(`${this.apiUrl}/${id}`, depense);
  }
  // =========================
  // GET ALL
  // =========================
  getAll() {
    return this.http.get(this.apiUrl);
  }
  // =========================
  // GET BY ID
  // =========================
  getById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  // =========================
  // FILTER BY CATEGORIE
  // =========================
  getByCategorie(categorieId) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('categorieId', categorieId);
    return this.http.get(`${this.apiUrl}/by-categorie`, {
      params
    });
  }
  // =========================
  // FILTER BY DATE
  // =========================
  getByDate(dateDebut, dateFin) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('dateDebut', dateDebut).set('dateFin', dateFin);
    return this.http.get(`${this.apiUrl}/by-date`, {
      params
    });
  }
  // =========================
  // TOTAL GLOBAL
  // =========================
  getTotal() {
    return this.http.get(`${this.apiUrl}/total`);
  }
  // =========================
  // TOTAL PAR CATEGORIE
  // =========================
  getTotalByCategorie(categorieId) {
    return this.http.get(`${this.apiUrl}/total/categorie/${categorieId}`);
  }
  // =========================
  // DELETE
  // =========================
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static #_ = this.ɵfac = function DepenseService_Factory(t) {
    return new (t || DepenseService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: DepenseService,
    factory: DepenseService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_finance_depense-list_depense-list_component_ts.js.map