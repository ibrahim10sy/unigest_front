"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["default-src_app_pages_scolarite_classes_classe-form_classe-form_component_ts"],{

/***/ 6151:
/*!******************************************************************************!*\
  !*** ./src/app/pages/scolarite/classes/classe-form/classe-form.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClasseFormComponent: () => (/* binding */ ClasseFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 7889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_classe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/classe.service */ 7244);
/* harmony import */ var src_app_services_filiere_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/filiere.service */ 5344);
/* harmony import */ var src_app_services_niveau_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/niveau.service */ 8703);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 5309);
























function ClasseFormComponent_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const f_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", f_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](f_r1.nom);
  }
}
class ClasseFormComponent {
  constructor(fb, classeService, filiereService,
  // Pour charger la liste des filières
  dialogRef, niveauService, defaults) {
    this.fb = fb;
    this.classeService = classeService;
    this.filiereService = filiereService;
    this.dialogRef = dialogRef;
    this.niveauService = niveauService;
    this.defaults = defaults;
    this.mode = 'create';
    this.filieresFiltrees = [];
    this.form = this.fb.group({
      nom: [this.defaults?.nom || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      filiereId: [this.defaults?.filiere?.id || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
  }
  ngOnInit() {
    if (this.defaults) this.mode = 'update';
    // this.niveauService.getAllNiveaux().subscribe(data => this.niveaux = data);
    // Si on est en mode édition, on charge déjà les filières du niveau actuel
    this.chargerFilieres();
  }
  onNiveauChange(niveauId) {
    // Réinitialiser le champ filière si on change de niveau
    this.form.get('filiereId')?.setValue(null);
    this.chargerFilieres();
  }
  chargerFilieres() {
    this.filiereService.getAllFilieres().subscribe(res => {
      this.filieresFiltrees = res;
    });
  }
  save() {
    if (this.form.invalid) return;
    const val = this.form.value;
    if (this.mode === 'update') {
      this.classeService.modifierClasse(this.defaults.id, val.nom, val.filiereId).subscribe({
        next: () => this.handleSuccess('Classe modifiée'),
        error: () => sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Erreur', 'Échec', 'error')
      });
    } else {
      this.classeService.creerClasse(val.nom, val.filiereId).subscribe({
        next: () => this.handleSuccess('Classe créée'),
        error: () => sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Erreur', 'Échec', 'error')
      });
    }
  }
  handleSuccess(msg) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      icon: 'success',
      title: msg,
      timer: 1500,
      showConfirmButton: false
    });
    this.dialogRef.close(true);
  }
  static #_ = this.ɵfac = function ClasseFormComponent_Factory(t) {
    return new (t || ClasseFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_classe_service__WEBPACK_IMPORTED_MODULE_1__.ClasseService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_filiere_service__WEBPACK_IMPORTED_MODULE_2__.FiliereService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_niveau_service__WEBPACK_IMPORTED_MODULE_3__.NiveauService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ClasseFormComponent,
    selectors: [["vex-classe-form"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 26,
    vars: 6,
    consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", "", 1, "flex", "items-center"], ["svgIcon", "mat:class", "color", "primary", 1, "mr-4"], [1, "headline", "m-0", "flex-auto"], ["mat-dialog-close", "", "mat-icon-button", "", "type", "button", 1, "text-secondary"], ["svgIcon", "mat:close"], [1, "text-border"], [1, "flex", "flex-col", "gap-4", "mt-4"], [1, "flex-auto"], ["formControlName", "nom", "matInput", "", "placeholder", "ex: L1 Informatique"], ["matIconPrefix", "", "svgIcon", "mat:edit"], [1, "flex", "flex-col", "sm:flex-row", "gap-4"], ["formControlName", "filiereId", 3, "disabled"], [3, "value", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["color", "primary", "mat-flat-button", "", "type", "submit", 3, "disabled"], [3, "value"]],
    template: function ClasseFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ClasseFormComponent_Template_form_ngSubmit_0_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-dialog-content", 7)(9, "mat-form-field", 8)(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Nom de la classe");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 9)(13, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 11)(15, "mat-form-field", 8)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Fili\u00E8re");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ClasseFormComponent_mat_option_19_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-dialog-actions", 14)(22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.mode === "update" ? "Modifier" : "Nouvelle", " Classe");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.filieresFiltrees.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filieresFiltrees);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.mode === "update" ? "Mettre \u00E0 jour" : "Enregistrer", " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider],
    encapsulation: 2
  });
}

/***/ }),

/***/ 5344:
/*!*********************************************!*\
  !*** ./src/app/services/filiere.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FiliereService: () => (/* binding */ FiliereService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environnement/environment */ 5981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class FiliereService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/filieres`;
  }
  // 1️⃣ Ajouter une filière (Utilise HttpParams car le backend attend @RequestParam)
  ajouterFiliere(nom, niveauId, fraisInscription, fraisScolarite) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    if (nom) params = params.set('nom', nom);
    if (niveauId) params = params.set('niveauId', niveauId.toString());
    if (fraisInscription !== undefined) params = params.set('fraisInscription', fraisInscription.toString());
    if (fraisScolarite !== undefined) params = params.set('fraisScolarite', fraisScolarite.toString());
    return this.http.post(this.apiUrl, null, {
      params
    });
  }
  // 2️⃣ Modifier une filière
  modifierFiliere(niveauId, id, nom, actif, fraisInscription, fraisScolarite) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    if (nom) params = params.set('nom', nom);
    if (niveauId) params = params.set('niveauId', niveauId.toString());
    if (actif !== undefined) params = params.set('actif', actif.toString());
    if (fraisInscription !== undefined) params = params.set('fraisInscription', fraisInscription.toString());
    if (fraisScolarite !== undefined) params = params.set('fraisScolarite', fraisScolarite.toString());
    return this.http.put(`${this.apiUrl}/${id}`, null, {
      params
    });
  }
  ajouterMatieres(dto) {
    return this.http.post(`${this.apiUrl}/ajouter-matieres`, dto);
  }
  // 3️⃣ Supprimer une filière
  supprimerFiliere(id) {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      responseType: 'text'
    });
  }
  // 4️⃣ Récupérer une filière par ID
  getFiliereById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  // 5️⃣ Lister toutes les filières
  getAllFilieres() {
    return this.http.get(this.apiUrl);
  }
  // 6️⃣ Lister toutes les filières actives
  getFilieresActives() {
    return this.http.get(`${this.apiUrl}/actives`);
  }
  // 7️⃣ Rechercher filières par nom
  rechercherParNom(nom) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('nom', nom);
    return this.http.get(`${this.apiUrl}/recherche`, {
      params
    });
  }
  updateActif(id, actif) {
    return this.http.patch(`${this.apiUrl}/${id}/actif`, {
      actif
    }, {
      responseType: 'text' // 👈 Indique à Angular de ne pas parser en JSON
    });
  }

  getFilieresParNiveau(niveauId) {
    return this.http.get(`${this.apiUrl}/par-niveau/${niveauId}`);
  }
  static #_ = this.ɵfac = function FiliereService_Factory(t) {
    return new (t || FiliereService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: FiliereService,
    factory: FiliereService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8703:
/*!********************************************!*\
  !*** ./src/app/services/niveau.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NiveauService: () => (/* binding */ NiveauService)
/* harmony export */ });
/* harmony import */ var src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environnement/environment */ 5981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class NiveauService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/niveaux`;
  }
  /** 1. Lister tous les niveaux */
  getAllNiveaux() {
    return this.http.get(this.apiUrl);
  }
  /** 2. Créer un niveau (@RequestBody côté Spring) */
  creerNiveau(niveau) {
    return this.http.post(this.apiUrl, niveau);
  }
  /** 3. Modifier un niveau (@RequestBody côté Spring) */
  modifierNiveau(id, niveau) {
    return this.http.put(`${this.apiUrl}/${id}`, niveau);
  }
  /** 4. Supprimer un niveau */
  supprimerNiveau(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  /** 5. Récupérer un niveau par son ID */
  getNiveauById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  static #_ = this.ɵfac = function NiveauService_Factory(t) {
    return new (t || NiveauService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: NiveauService,
    factory: NiveauService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_scolarite_classes_classe-form_classe-form_component_ts.js.map