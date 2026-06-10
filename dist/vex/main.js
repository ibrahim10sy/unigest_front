"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["main"],{

/***/ 3943:
/*!***************************************************!*\
  !*** ./src/@vex/animations/dropdown.animation.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dropdownAnimation: () => (/* binding */ dropdownAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 2501);

const dropdownAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('dropdown', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: 0,
  opacity: 0
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  height: '*',
  opacity: 1
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('false <=> true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('300ms cubic-bezier(.35, 0, .25, 1)'))]);

/***/ }),

/***/ 3951:
/*!*****************************************************!*\
  !*** ./src/@vex/animations/fade-in-up.animation.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fadeInUp400ms: () => (/* binding */ fadeInUp400ms),
/* harmony export */   fadeInUpAnimation: () => (/* binding */ fadeInUpAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 2501);

function fadeInUpAnimation(duration) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInUp', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'translateY(20px)',
    opacity: 0
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'translateY(0)',
    opacity: 1
  }))])]);
}
const fadeInUp400ms = fadeInUpAnimation(400);

/***/ }),

/***/ 6412:
/*!**************************************************!*\
  !*** ./src/@vex/animations/popover.animation.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popoverAnimation: () => (/* binding */ popoverAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 2501);

const popoverAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('transformPopover', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0,
  transform: 'scale(0.6)'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('100ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('150ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'scale(1)'
}))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('100ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0
}))])]);

/***/ }),

/***/ 6820:
/*!**************************************************!*\
  !*** ./src/@vex/animations/stagger.animation.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stagger20ms: () => (/* binding */ stagger20ms),
/* harmony export */   stagger40ms: () => (/* binding */ stagger40ms),
/* harmony export */   stagger60ms: () => (/* binding */ stagger60ms),
/* harmony export */   stagger80ms: () => (/* binding */ stagger80ms),
/* harmony export */   staggerAnimation: () => (/* binding */ staggerAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 2501);

function staggerAnimation(timing) {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('stagger', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => *', [
  // each time the binding value changes
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.stagger)(timing, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)()), {
    optional: true
  })])]);
}
const stagger80ms = staggerAnimation(80);
const stagger60ms = staggerAnimation(60);
const stagger40ms = staggerAnimation(40);
const stagger20ms = staggerAnimation(20);

/***/ }),

/***/ 7788:
/*!****************************************************************************************!*\
  !*** ./src/@vex/components/vex-breadcrumbs/vex-breadcrumb/vex-breadcrumb.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexBreadcrumbComponent: () => (/* binding */ VexBreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

const _c0 = ["*"];
class VexBreadcrumbComponent {
  static #_ = this.ɵfac = function VexBreadcrumbComponent_Factory(t) {
    return new (t || VexBreadcrumbComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: VexBreadcrumbComponent,
    selectors: [["vex-breadcrumb"]],
    hostAttrs: [1, "vex-breadcrumb", "body-2", "text-hint", "leading-none", "hover:text-primary-600", "no-underline", "transition", "duration-400", "ease-out-swift"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function VexBreadcrumbComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 9806:
/*!**************************************************************************!*\
  !*** ./src/@vex/components/vex-breadcrumbs/vex-breadcrumbs.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexBreadcrumbsComponent: () => (/* binding */ VexBreadcrumbsComponent)
/* harmony export */ });
/* harmony import */ var _utils_track_by__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/track-by */ 7637);
/* harmony import */ var _vex_breadcrumb_vex_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vex-breadcrumb/vex-breadcrumb.component */ 7788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);







const _c0 = () => [];
function VexBreadcrumbsComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "vex-breadcrumb")(3, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const crumb_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](crumb_r1);
  }
}
const _c1 = () => ["/"];
class VexBreadcrumbsComponent {
  constructor() {
    this.crumbs = [];
    this.trackByValue = _utils_track_by__WEBPACK_IMPORTED_MODULE_0__.trackByValue;
  }
  static #_ = this.ɵfac = function VexBreadcrumbsComponent_Factory(t) {
    return new (t || VexBreadcrumbsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: VexBreadcrumbsComponent,
    selectors: [["vex-breadcrumbs"]],
    inputs: {
      crumbs: "crumbs"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 4,
    consts: [[1, "flex", "items-center", "gap-2"], [3, "routerLink"], ["svgIcon", "mat:home", 1, "icon-sm"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "w-1", "h-1", "bg-gray-600", "rounded-full"]],
    template: function VexBreadcrumbsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "vex-breadcrumb")(2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, VexBreadcrumbsComponent_ng_container_4_Template, 5, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.crumbs)("ngForTrackBy", ctx.trackByValue);
      }
    },
    dependencies: [_vex_breadcrumb_vex_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.VexBreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgFor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6010:
/*!**********************************************************************!*\
  !*** ./src/@vex/components/vex-highlight/vex-highlight.directive.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexHighlightDirective: () => (/* binding */ VexHighlightDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _vex_highlight_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vex-highlight.service */ 8391);



class VexHighlightDirective {
  constructor(_highlightService, _zone) {
    this._highlightService = _highlightService;
    this._zone = _zone;
    /** An optional array of language names and aliases restricting detection to only those languages.
     * The subset can also be set with configure, but the local parameter overrides the option if set.
     */
    this.languages = [];
    /** Stream that emits when code string is highlighted */
    this.highlighted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnChanges(changes) {
    if (changes['code'] && changes['code'].currentValue !== changes['code'].previousValue) {
      this.highlightElement(this.code, this.languages);
    }
  }
  /**
   * Highlighting with language detection and fix markup.
   * @param code Accepts a string with the code to highlight
   * @param languages An optional array of language names and aliases restricting detection to only those languages.
   * The subset can also be set with configure, but the local parameter overrides the option if set.
   */
  highlightElement(code, languages) {
    this._zone.runOutsideAngular(() => {
      const res = this._highlightService.highlightAuto(code, languages);
      this.highlightedCode = res.value;
      this.highlighted.emit(res);
    });
  }
  static #_ = this.ɵfac = function VexHighlightDirective_Factory(t) {
    return new (t || VexHighlightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_vex_highlight_service__WEBPACK_IMPORTED_MODULE_0__.VexHighlightService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: VexHighlightDirective,
    selectors: [["", "vexHighlight", ""]],
    hostVars: 3,
    hostBindings: function VexHighlightDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("innerHTML", ctx.highlightedCode, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hljs", true);
      }
    },
    inputs: {
      languages: "languages",
      code: ["vexHighlight", "code"]
    },
    outputs: {
      highlighted: "highlighted"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
  });
}

/***/ }),

/***/ 3260:
/*!******************************************************************!*\
  !*** ./src/@vex/components/vex-highlight/vex-highlight.model.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VEX_HIGHLIGHT_OPTIONS: () => (/* binding */ VEX_HIGHLIGHT_OPTIONS)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

const VEX_HIGHLIGHT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('HIGHLIGHT_OPTIONS');

/***/ }),

/***/ 5299:
/*!*******************************************************************!*\
  !*** ./src/@vex/components/vex-highlight/vex-highlight.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexHighlightModule: () => (/* binding */ VexHighlightModule),
/* harmony export */   hljsLanguages: () => (/* binding */ hljsLanguages)
/* harmony export */ });
/* harmony import */ var _vex_highlight_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vex-highlight.directive */ 6010);
/* harmony import */ var _vex_highlight_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vex-highlight.model */ 3260);
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ 7158);
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/lib/languages/scss */ 6186);
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ 8499);
/* harmony import */ var _vex_highlight_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vex-highlight.service */ 8391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);


/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */





/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
function hljsLanguages() {
  return [{
    name: 'typescript',
    func: highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    name: 'scss',
    func: highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    name: 'xml',
    func: highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_2__["default"]
  }];
}
class VexHighlightModule {
  static #_ = this.ɵfac = function VexHighlightModule_Factory(t) {
    return new (t || VexHighlightModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: VexHighlightModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    providers: [{
      provide: _vex_highlight_model__WEBPACK_IMPORTED_MODULE_1__.VEX_HIGHLIGHT_OPTIONS,
      useValue: {
        languages: hljsLanguages
      }
    }, _vex_highlight_service__WEBPACK_IMPORTED_MODULE_5__.VexHighlightService]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](VexHighlightModule, {
    imports: [_vex_highlight_directive__WEBPACK_IMPORTED_MODULE_0__.VexHighlightDirective],
    exports: [_vex_highlight_directive__WEBPACK_IMPORTED_MODULE_0__.VexHighlightDirective]
  });
})();

/***/ }),

/***/ 8391:
/*!********************************************************************!*\
  !*** ./src/@vex/components/vex-highlight/vex-highlight.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexHighlightService: () => (/* binding */ VexHighlightService)
/* harmony export */ });
/* harmony import */ var _vex_highlight_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vex-highlight.model */ 3260);
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/core */ 3974);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);



class VexHighlightService {
  constructor(options) {
    if (options) {
      // Register HighlightJS languages
      options.languages?.().map(language => this.registerLanguage(language.name, language.func));
      if (options.config) {
        // Set global config if present
        this.configure(options.config);
      }
    }
    // Throw an error if no languages were registered.
    if (this.listLanguages().length < 1) {
      throw new Error('[HighlightJS]: No languages were registered!');
    }
  }
  /**
   * Core highlighting function.
   * @param name Accepts a language name, or an alias
   * @param value A string with the code to highlight.
   * @param ignoreIllegals When present and evaluates to a true value, forces highlighting to finish
   * even in case of detecting illegal syntax for the language instead of throwing an exception.
   * When present, the function will restart parsing from this state instead of initializing a new one
   */
  highlight(name, value, ignoreIllegals) {
    return highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].highlight(name, value, ignoreIllegals);
  }
  /**
   * Highlighting with language detection.
   * @param value Accepts a string with the code to highlight
   * @param languageSubset An optional array of language names and aliases restricting detection to only those languages.
   * The subset can also be set with configure, but the local parameter overrides the option if set.
   */
  highlightAuto(value, languageSubset) {
    return highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].highlightAuto(value, languageSubset);
  }
  /**
   * Applies highlighting to a DOM node containing code.
   * The function uses language detection by default but you can specify the language in the class attribute of the DOM node.
   * See the class reference for all available language names and aliases.
   * @param block The element to apply highlight on.
   */
  highlightBlock(block) {
    highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].highlightBlock(block);
  }
  /**
   * Configures global options:
   */
  configure(config) {
    highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].configure(config);
  }
  /**
   * Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
   */
  initHighlighting() {
    highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].initHighlighting();
  }
  /**
   * Adds new language to the library under the specified name. Used mostly internally.
   * @param name A string with the name of the language being registered
   * @param language A function that returns an object which represents the language definition.
   * The function is passed the hljs object to be able to use common regular expressions defined within it.
   */
  registerLanguage(name, language) {
    highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].registerLanguage(name, language);
  }
  /**
   * @return The languages names list.
   */
  listLanguages() {
    return highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].listLanguages();
  }
  /**
   * Looks up a language by name or alias.
   * @param name Language name
   * @return The language object if found, undefined otherwise.
   */
  getLanguage(name) {
    return highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_1__["default"].getLanguage(name);
  }
  static #_ = this.ɵfac = function VexHighlightService_Factory(t) {
    return new (t || VexHighlightService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_vex_highlight_model__WEBPACK_IMPORTED_MODULE_0__.VEX_HIGHLIGHT_OPTIONS));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: VexHighlightService,
    factory: VexHighlightService.ɵfac
  });
}

/***/ }),

/***/ 5292:
/*!**********************************************************************************!*\
  !*** ./src/@vex/components/vex-page-layout/vex-page-layout-content.directive.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexPageLayoutContentDirective: () => (/* binding */ VexPageLayoutContentDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class VexPageLayoutContentDirective {
  constructor() {}
  static #_ = this.ɵfac = function VexPageLayoutContentDirective_Factory(t) {
    return new (t || VexPageLayoutContentDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: VexPageLayoutContentDirective,
    selectors: [["", "vexPageLayoutContent", ""], ["vex-page-layout-content"]],
    hostAttrs: [1, "vex-page-layout-content"],
    standalone: true
  });
}

/***/ }),

/***/ 2369:
/*!*********************************************************************************!*\
  !*** ./src/@vex/components/vex-page-layout/vex-page-layout-header.directive.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexPageLayoutHeaderDirective: () => (/* binding */ VexPageLayoutHeaderDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class VexPageLayoutHeaderDirective {
  constructor() {}
  static #_ = this.ɵfac = function VexPageLayoutHeaderDirective_Factory(t) {
    return new (t || VexPageLayoutHeaderDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: VexPageLayoutHeaderDirective,
    selectors: [["", "vexPageLayoutHeader", ""], ["vex-page-layout-header"]],
    hostAttrs: [1, "vex-page-layout-header"],
    standalone: true
  });
}

/***/ }),

/***/ 306:
/*!**************************************************************************!*\
  !*** ./src/@vex/components/vex-page-layout/vex-page-layout.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexPageLayoutComponent: () => (/* binding */ VexPageLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

const _c0 = ["*"];
class VexPageLayoutComponent {
  constructor() {
    this.mode = 'simple';
  }
  get isCard() {
    return this.mode === 'card';
  }
  get isSimple() {
    return this.mode === 'simple';
  }
  static #_ = this.ɵfac = function VexPageLayoutComponent_Factory(t) {
    return new (t || VexPageLayoutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: VexPageLayoutComponent,
    selectors: [["vex-page-layout"]],
    hostAttrs: [1, "vex-page-layout"],
    hostVars: 4,
    hostBindings: function VexPageLayoutComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vex-page-layout-card", ctx.isCard)("vex-page-layout-simple", ctx.isSimple);
      }
    },
    inputs: {
      mode: "mode"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function VexPageLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    },
    styles: [".vex-page-layout {\n  display: block;\n}\n\n.vex-page-layout-simple .vex-page-layout-content {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n\n.vex-page-layout-card {\n  padding-bottom: 1.5rem;\n}\n.vex-page-layout-card .vex-page-layout-header {\n  margin-bottom: calc(var(--vex-page-layout-toolbar-height) * -1);\n  padding-bottom: var(--vex-page-layout-toolbar-height);\n}\n.vex-page-layout-card .vex-page-layout-content > * > .mat-mdc-tab-group .mat-tab-label,\n.vex-page-layout-card .vex-page-layout-content > .mat-tab-group .mat-tab-label {\n  height: var(--vex-page-layout-toolbar-height);\n}\n\n.vex-page-layout-header {\n  align-items: center;\n  background-color: rgb(var(--vex-color-primary-600) / 0.1);\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  box-sizing: content-box !important;\n  display: flex;\n  flex-direction: row;\n  height: calc(var(--vex-page-layout-header-height) - var(--vex-page-layout-toolbar-height));\n  place-content: center flex-start;\n}\n\n.vex-page-layout-content {\n  box-sizing: border-box;\n  display: block;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2NvbXBvbmVudHMvdmV4LXBhZ2UtbGF5b3V0L3ZleC1wYWdlLWxheW91dC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL3VuaWdlc3RfZnJvbnQlMjBjb3BpZS9zcmMvQHZleC9jb21wb25lbnRzL3ZleC1wYWdlLWxheW91dC92ZXgtcGFnZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FESUk7RUFBQSxtQkFBQTtFQUFBO0FBQUE7O0FBS0Y7RUFBQTtBQUFBO0FBRUE7RUFDRSwrREFBQTtFQUNBLHFEQUFBO0FDREo7QURLSTs7RUFFRSw2Q0FBQTtBQ0hOOztBRFFBO0VBQ0UsbUJBQUE7RUFDQSx5REFBQTtFQUFBLG9CQUFBO0VBQUEscUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBGQUFBO0VBR0EsZ0NBQUE7QUNQRjs7QURVQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQUEscUJBQUE7QUNQRiIsInNvdXJjZXNDb250ZW50IjpbIi52ZXgtcGFnZS1sYXlvdXQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnZleC1wYWdlLWxheW91dC1zaW1wbGUge1xuICAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQge1xuICAgIEBhcHBseSBweS02O1xuICB9XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCB7XG4gIEBhcHBseSBwYi02O1xuXG4gIC52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXZleC1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCkgKiAtMSk7XG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXZleC1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodCk7XG4gIH1cblxuICAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQge1xuICAgID4gKiA+IC5tYXQtbWRjLXRhYi1ncm91cCAubWF0LXRhYi1sYWJlbCxcbiAgICA+IC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWxhYmVsIHtcbiAgICAgIGhlaWdodDogdmFyKC0tdmV4LXBhZ2UtbGF5b3V0LXRvb2xiYXItaGVpZ2h0KTtcbiAgICB9XG4gIH1cbn1cblxuLnZleC1wYWdlLWxheW91dC1oZWFkZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAYXBwbHkgYmctcHJpbWFyeS02MDAvMTAgcHgtNjtcbiAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiBjYWxjKFxuICAgIHZhcigtLXZleC1wYWdlLWxheW91dC1oZWFkZXItaGVpZ2h0KSAtIHZhcigtLXZleC1wYWdlLWxheW91dC10b29sYmFyLWhlaWdodClcbiAgKTtcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGZsZXgtc3RhcnQ7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY29udGVudCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBAYXBwbHkgcHgtNjtcbn1cbiIsIi52ZXgtcGFnZS1sYXlvdXQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnZleC1wYWdlLWxheW91dC1zaW1wbGUgLnZleC1wYWdlLWxheW91dC1jb250ZW50IHtcbiAgQGFwcGx5IHB5LTY7XG59XG5cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCB7XG4gIEBhcHBseSBwYi02O1xufVxuLnZleC1wYWdlLWxheW91dC1jYXJkIC52ZXgtcGFnZS1sYXlvdXQtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS12ZXgtcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQpICogLTEpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tdmV4LXBhZ2UtbGF5b3V0LXRvb2xiYXItaGVpZ2h0KTtcbn1cbi52ZXgtcGFnZS1sYXlvdXQtY2FyZCAudmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQgPiAqID4gLm1hdC1tZGMtdGFiLWdyb3VwIC5tYXQtdGFiLWxhYmVsLFxuLnZleC1wYWdlLWxheW91dC1jYXJkIC52ZXgtcGFnZS1sYXlvdXQtY29udGVudCA+IC5tYXQtdGFiLWdyb3VwIC5tYXQtdGFiLWxhYmVsIHtcbiAgaGVpZ2h0OiB2YXIoLS12ZXgtcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQpO1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWhlYWRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBhcHBseSBiZy1wcmltYXJ5LTYwMC8xMCBweC02O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IGNhbGModmFyKC0tdmV4LXBhZ2UtbGF5b3V0LWhlYWRlci1oZWlnaHQpIC0gdmFyKC0tdmV4LXBhZ2UtbGF5b3V0LXRvb2xiYXItaGVpZ2h0KSk7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBmbGV4LXN0YXJ0O1xufVxuXG4udmV4LXBhZ2UtbGF5b3V0LWNvbnRlbnQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBibG9jaztcbiAgQGFwcGx5IHB4LTY7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 5925:
/*!************************************************************!*\
  !*** ./src/@vex/components/vex-popover/vex-popover-ref.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexPopoverRef: () => (/* binding */ VexPopoverRef)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2513);

class VexPopoverRef {
  constructor(overlay, content, data) {
    this.overlay = overlay;
    this.content = content;
    this.data = data;
    this.afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.afterClosed$ = this.afterClosed.asObservable();
    overlay.backdropClick().subscribe(() => {
      this._close('backdropClick', undefined);
    });
  }
  close(data) {
    this._close('close', data);
  }
  _close(type, data) {
    this.overlay.dispose();
    this.afterClosed.next({
      type,
      data
    });
    this.afterClosed.complete();
  }
}

/***/ }),

/***/ 7930:
/*!******************************************************************!*\
  !*** ./src/@vex/components/vex-popover/vex-popover.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexPopoverComponent: () => (/* binding */ VexPopoverComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _animations_popover_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animations/popover.animation */ 6412);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _vex_popover_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vex-popover-ref */ 5925);





function VexPopoverComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r0.content, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function VexPopoverComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function VexPopoverComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VexPopoverComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.content)("ngTemplateOutletContext", ctx_r1.context);
  }
}
function VexPopoverComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function VexPopoverComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VexPopoverComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngComponentOutlet", ctx_r2.content);
  }
}
class VexPopoverComponent {
  constructor(popoverRef) {
    this.popoverRef = popoverRef;
    this.renderMethod = 'component';
  }
  ngOnInit() {
    this.content = this.popoverRef.content;
    if (typeof this.content === 'string') {
      this.renderMethod = 'text';
    }
    if (this.content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef) {
      this.renderMethod = 'template';
      this.context = {
        close: this.popoverRef.close.bind(this.popoverRef)
      };
    }
  }
  static #_ = this.ɵfac = function VexPopoverComponent_Factory(t) {
    return new (t || VexPopoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_vex_popover_ref__WEBPACK_IMPORTED_MODULE_1__.VexPopoverRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: VexPopoverComponent,
    selectors: [["vex-popover"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 5,
    consts: [[1, "vex-popover"], [3, "ngSwitch"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "innerHTML"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngComponentOutlet"]],
    template: function VexPopoverComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, VexPopoverComponent_div_2_Template, 1, 1, "div", 2)(3, VexPopoverComponent_ng_container_3_Template, 2, 2, "ng-container", 3)(4, VexPopoverComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transformPopover", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.renderMethod);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "template");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "component");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgComponentOutlet],
    styles: ["[_nghost-%COMP%], .vex-popover[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2NvbXBvbmVudHMvdmV4LXBvcG92ZXIvdmV4LXBvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi91bmlnZXN0X2Zyb250JTIwY29waWUvc3JjL0B2ZXgvY29tcG9uZW50cy92ZXgtcG9wb3Zlci92ZXgtcG9wb3Zlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QsXG4udmV4LXBvcG92ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIiwiOmhvc3QsXG4udmV4LXBvcG92ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [_animations_popover_animation__WEBPACK_IMPORTED_MODULE_0__.popoverAnimation]
    }
  });
}

/***/ }),

/***/ 563:
/*!****************************************************************!*\
  !*** ./src/@vex/components/vex-popover/vex-popover.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexPopoverService: () => (/* binding */ VexPopoverService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ 2698);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ 3517);
/* harmony import */ var _vex_popover_ref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vex-popover-ref */ 5925);
/* harmony import */ var _vex_popover_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vex-popover.component */ 7930);







class VexPopoverService {
  constructor(overlay, injector) {
    this.overlay = overlay;
    this.injector = injector;
  }
  open({
    origin,
    content,
    data,
    width,
    height,
    position,
    offsetX,
    offsetY
  }) {
    const overlayRef = this.overlay.create(this.getOverlayConfig({
      origin,
      width,
      height,
      position,
      offsetX,
      offsetY
    }));
    const popoverRef = new _vex_popover_ref__WEBPACK_IMPORTED_MODULE_0__.VexPopoverRef(overlayRef, content, data);
    const injector = this.createInjector(popoverRef, this.injector);
    overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.ComponentPortal(_vex_popover_component__WEBPACK_IMPORTED_MODULE_1__.VexPopoverComponent, null, injector));
    return popoverRef;
  }
  static getPositions() {
    return [{
      originX: 'center',
      originY: 'top',
      overlayX: 'center',
      overlayY: 'bottom'
    }, {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top'
    }];
  }
  createInjector(popoverRef, injector) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector.create({
      providers: [{
        provide: _vex_popover_ref__WEBPACK_IMPORTED_MODULE_0__.VexPopoverRef,
        useValue: popoverRef
      }],
      parent: injector
    });
  }
  getOverlayConfig({
    origin,
    width,
    height,
    position,
    offsetX,
    offsetY
  }) {
    return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayConfig({
      hasBackdrop: true,
      width,
      height,
      backdropClass: 'vex-popover-backdrop',
      positionStrategy: this.getOverlayPosition({
        origin,
        position,
        offsetX,
        offsetY
      }),
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });
  }
  getOverlayPosition({
    origin,
    position,
    offsetX,
    offsetY
  }) {
    return this.overlay.position().flexibleConnectedTo(origin).withPositions(position || VexPopoverService.getPositions()).withFlexibleDimensions(true).withDefaultOffsetY(offsetY || 0).withDefaultOffsetX(offsetX || 0).withTransformOriginOn('.vex-popover').withPush(true);
  }
  static #_ = this.ɵfac = function VexPopoverService_Factory(t) {
    return new (t || VexPopoverService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: VexPopoverService,
    factory: VexPopoverService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6912:
/*!****************************************************************************!*\
  !*** ./src/@vex/components/vex-progress-bar/vex-progress-bar.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexProgressBarComponent: () => (/* binding */ VexProgressBarComponent)
/* harmony export */ });
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-loading-bar/core */ 3123);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3379);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-loading-bar/router */ 7350);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);








class VexProgressBarComponent {
  constructor(loader) {
    this.loader = loader;
    this.value$ = this.loader.useRef('router').value$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.delayWhen)(value => value === 0 ? (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.interval)(200) : (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(undefined)));
  }
  static #_ = this.ɵfac = function VexProgressBarComponent_Factory(t) {
    return new (t || VexProgressBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__.LoadingBarService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: VexProgressBarComponent,
    selectors: [["vex-progress-bar"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
      provide: _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__.LOADING_BAR_CONFIG,
      useValue: {
        latencyThreshold: 80
      }
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 9,
    consts: [["mode", "determinate", 1, "progress-bar", 3, "value"]],
    template: function VexProgressBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        let tmp_1_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("visible", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 3, ctx.value$)) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0) > 0 && ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 5, ctx.value$)) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0) !== 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 7, ctx.value$)) !== null && tmp_1_0 !== undefined ? tmp_1_0 : 0);
      }
    },
    dependencies: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBarModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBar, _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__.LoadingBarModule, _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_6__.LoadingBarRouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: [".progress-bar[_ngcontent-%COMP%] {\n  left: 0;\n  opacity: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  visibility: hidden;\n  z-index: 99999;\n  transition: opacity 500ms cubic-bezier(0.25, 0.8, 0.25, 1) 200ms, visibility 0ms cubic-bezier(0.25, 0.8, 0.25, 1) 700ms;\n}\n.progress-bar.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 500ms cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0ms cubic-bezier(0.25, 0.8, 0.25, 1) 0ms;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2NvbXBvbmVudHMvdmV4LXByb2dyZXNzLWJhci92ZXgtcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vdW5pZ2VzdF9mcm9udCUyMGNvcGllL3NyYy9AdmV4L2NvbXBvbmVudHMvdmV4LXByb2dyZXNzLWJhci92ZXgtcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsT0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1SEFBQTtBQ0ZGO0FES0U7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSwrR0FBQTtBQ0hKIiwic291cmNlc0NvbnRlbnQiOlsiJHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuJHRyYW5zaXRpb24tZGVsYXk6IDIwMG1zO1xuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHotaW5kZXg6IDk5OTk5O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR0cmFuc2l0aW9uLWR1cmF0aW9uIHRoZW1lKFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uLm91dC1zd2lmdFwiKSAkdHJhbnNpdGlvbi1kZWxheSxcbiAgdmlzaWJpbGl0eSAwbXMgdGhlbWUoXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24ub3V0LXN3aWZ0XCIpICgkdHJhbnNpdGlvbi1kdXJhdGlvbiArICR0cmFuc2l0aW9uLWRlbGF5KTtcblxuICAmLnZpc2libGUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR0cmFuc2l0aW9uLWR1cmF0aW9uIHRoZW1lKFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uLm91dC1zd2lmdFwiKSxcbiAgICB2aXNpYmlsaXR5IDBtcyB0aGVtZShcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbi5vdXQtc3dpZnRcIikgMG1zO1xuICB9XG59XG4iLCIucHJvZ3Jlc3MtYmFyIHtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHotaW5kZXg6IDk5OTk5O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIHRoZW1lKFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uLm91dC1zd2lmdFwiKSAyMDBtcywgdmlzaWJpbGl0eSAwbXMgdGhlbWUoXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24ub3V0LXN3aWZ0XCIpIDcwMG1zO1xufVxuLnByb2dyZXNzLWJhci52aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyB0aGVtZShcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbi5vdXQtc3dpZnRcIiksIHZpc2liaWxpdHkgMG1zIHRoZW1lKFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uLm91dC1zd2lmdFwiKSAwbXM7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 9844:
/*!**********************************************************************!*\
  !*** ./src/@vex/components/vex-scrollbar/vex-scrollbar.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexScrollbarComponent: () => (/* binding */ VexScrollbarComponent)
/* harmony export */ });
/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplebar */ 2163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


const _c0 = ["*"];
class VexScrollbarComponent {
  constructor(_element, zone) {
    this._element = _element;
    this.zone = zone;
  }
  ngAfterContentInit() {
    this.zone.runOutsideAngular(() => {
      this.scrollbarRef = new simplebar__WEBPACK_IMPORTED_MODULE_0__["default"](this._element.nativeElement, this.options);
    });
  }
  ngOnDestroy() {
    /**
     * Exists, but not typed in the type definition
     * https://github.com/Grsmto/simplebar/blob/master/packages/simplebar/src/simplebar.js#L903
     */
    if (this.scrollbarRef && this.scrollbarRef.unMount) {
      this.scrollbarRef.unMount();
    }
  }
  static #_ = this.ɵfac = function VexScrollbarComponent_Factory(t) {
    return new (t || VexScrollbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: VexScrollbarComponent,
    selectors: [["vex-scrollbar"]],
    hostAttrs: [1, "vex-scrollbar"],
    inputs: {
      options: "options"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function VexScrollbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2NvbXBvbmVudHMvdmV4LXNjcm9sbGJhci92ZXgtc2Nyb2xsYmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vdW5pZ2VzdF9mcm9udCUyMGNvcGllL3NyYy9AdmV4L2NvbXBvbmVudHMvdmV4LXNjcm9sbGJhci92ZXgtc2Nyb2xsYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUNDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi1oZWlnaHQ6IDA7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiAwO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 483:
/*!******************************************************************!*\
  !*** ./src/@vex/components/vex-sidebar/vex-sidebar.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexSidebarComponent: () => (/* binding */ VexSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


const _c0 = ["*"];
class VexSidebarComponent {
  constructor(document) {
    this.document = document;
    this.position = 'left';
    this.invisibleBackdrop = false;
    this._opened = false;
  }
  get opened() {
    return this._opened;
  }
  set opened(opened) {
    this._opened = opened;
    opened ? this.enableScrollblock() : this.disableScrollblock();
  }
  get positionLeft() {
    return this.position === 'left';
  }
  get positionRight() {
    return this.position === 'right';
  }
  enableScrollblock() {
    if (!this.document.body.classList.contains('vex-scrollblock')) {
      this.document.body.classList.add('vex-scrollblock');
    }
  }
  disableScrollblock() {
    if (this.document.body.classList.contains('vex-scrollblock')) {
      this.document.body.classList.remove('vex-scrollblock');
    }
  }
  open() {
    this.opened = true;
  }
  close() {
    this.opened = false;
  }
  ngOnDestroy() {}
  static #_ = this.ɵfac = function VexSidebarComponent_Factory(t) {
    return new (t || VexSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: VexSidebarComponent,
    selectors: [["vex-sidebar"]],
    hostAttrs: [1, "vex-sidebar"],
    inputs: {
      position: "position",
      invisibleBackdrop: "invisibleBackdrop",
      opened: "opened"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 10,
    consts: [[1, "backdrop", 3, "click"], [1, "sidebar"]],
    template: function VexSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VexSidebarComponent_Template_div_click_0_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("opaque", ctx.invisibleBackdrop)("show", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.opened)("position-left", ctx.positionLeft)("position-right", ctx.positionRight);
      }
    },
    styles: [".sidebar[_ngcontent-%COMP%] {\n  background: var(--vex-background-card);\n  bottom: 0;\n  display: flex;\n  flex: 1 0 auto;\n  flex-direction: column;\n  max-width: 80vw;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: fixed;\n  top: 0;\n  transition-duration: 400ms;\n  transition-property: transform, visibility;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  visibility: hidden;\n  width: var(--vex-sidenav-width);\n  z-index: 1000;\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n@media (min-width: 600px) {\n  .sidebar[_ngcontent-%COMP%] {\n    max-width: unset;\n  }\n}\n.sidebar.position-left[_ngcontent-%COMP%] {\n  left: 0;\n  transform: translateX(-100%);\n}\n.sidebar.position-right[_ngcontent-%COMP%] {\n  right: 0;\n  transform: translateX(100%);\n}\n.sidebar.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  visibility: visible;\n}\n\n.backdrop[_ngcontent-%COMP%] {\n  background-color: transparent;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition-duration: 400ms;\n  transition-property: background-color, visibility;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  visibility: hidden;\n  z-index: 800 !important;\n}\n.backdrop.show[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.6);\n  visibility: visible;\n}\n.backdrop.opaque[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AdmV4L2NvbXBvbmVudHMvdmV4LXNpZGViYXIvdmV4LXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi91bmlnZXN0X2Zyb250JTIwY29waWUvc3JjL0B2ZXgvY29tcG9uZW50cy92ZXgtc2lkZWJhci92ZXgtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQ0FBQTtFQUNBLDREQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxnRkFBQTtFQUFBLG9HQUFBO0VBQUEsdUdBQUE7QUNDRjtBRENFO0VBbkJGO0lBb0JJLGdCQUFBO0VDRUY7QUFDRjtBREFFO0VBQ0UsT0FBQTtFQUNBLDRCQUFBO0FDRUo7QURDRTtFQUNFLFFBQUE7RUFDQSwyQkFBQTtBQ0NKO0FERUU7RUFDRSx3QkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FESUE7RUFDRSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLDBCQUFBO0VBQ0EsaURBQUE7RUFDQSw0REFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNERjtBREdFO0VBQ0Usb0NBQUE7RUFDQSxtQkFBQTtBQ0RKO0FESUU7RUFDRSw2QkFBQTtBQ0ZKIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtYmFja2dyb3VuZC1jYXJkKTtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxIDAgYXV0bztcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiA4MHZ3O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB0aGVtZShcInRyYW5zaXRpb25EdXJhdGlvbi40MDBcIik7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgdmlzaWJpbGl0eTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IHRoZW1lKFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uLm91dC1zd2lmdFwiKTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogdmFyKC0tdmV4LXNpZGVuYXYtd2lkdGgpO1xuICB6LWluZGV4OiAxMDAwO1xuICBAYXBwbHkgc2hhZG93LXhsO1xuXG4gIEBzY3JlZW4gc20ge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gIH1cblxuICAmLnBvc2l0aW9uLWxlZnQge1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxuXG4gICYucG9zaXRpb24tcmlnaHQge1xuICAgIHJpZ2h0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgfVxuXG4gICYub3BlbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbn1cblxuLmJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgdmlzaWJpbGl0eTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHotaW5kZXg6IDgwMCAhaW1wb3J0YW50O1xuXG4gICYuc2hvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICAmLm9wYXF1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cbiIsIi5zaWRlYmFyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LWJhY2tncm91bmQtY2FyZCk7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAwIGF1dG87XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogODB2dztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdGhlbWUoXCJ0cmFuc2l0aW9uRHVyYXRpb24uNDAwXCIpO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIHZpc2liaWxpdHk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB0aGVtZShcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbi5vdXQtc3dpZnRcIik7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IHZhcigtLXZleC1zaWRlbmF2LXdpZHRoKTtcbiAgei1pbmRleDogMTAwMDtcbiAgQGFwcGx5IHNoYWRvdy14bDtcbn1cbkBzY3JlZW4gc20ge1xuICAuc2lkZWJhciB7XG4gICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgfVxufVxuLnNpZGViYXIucG9zaXRpb24tbGVmdCB7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG4uc2lkZWJhci5wb3NpdGlvbi1yaWdodCB7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG59XG4uc2lkZWJhci5vcGVuIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCB2aXNpYmlsaXR5O1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgei1pbmRleDogODAwICFpbXBvcnRhbnQ7XG59XG4uYmFja2Ryb3Auc2hvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5iYWNrZHJvcC5vcGFxdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7892:
/*!*****************************************!*\
  !*** ./src/@vex/config/config.token.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VEX_CONFIG: () => (/* binding */ VEX_CONFIG),
/* harmony export */   VEX_THEMES: () => (/* binding */ VEX_THEMES)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

const VEX_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('VEX_CONFIG');
const VEX_THEMES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('VEX_THEMES');

/***/ }),

/***/ 6739:
/*!**************************************!*\
  !*** ./src/@vex/config/constants.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultRoundedButtonBorderRadius: () => (/* binding */ defaultRoundedButtonBorderRadius)
/* harmony export */ });
const defaultRoundedButtonBorderRadius = {
  value: 9999,
  unit: 'px'
};

/***/ }),

/***/ 5062:
/*!*************************************************!*\
  !*** ./src/@vex/config/vex-config.interface.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexColorScheme: () => (/* binding */ VexColorScheme),
/* harmony export */   VexConfigName: () => (/* binding */ VexConfigName),
/* harmony export */   VexTheme: () => (/* binding */ VexTheme)
/* harmony export */ });
var VexTheme;
(function (VexTheme) {
  VexTheme["DEFAULT"] = "vex-theme-default";
  VexTheme["TEAL"] = "vex-theme-teal";
})(VexTheme || (VexTheme = {}));
var VexConfigName;
(function (VexConfigName) {
  VexConfigName["apollo"] = "apollo";
  VexConfigName["zeus"] = "zeus";
  VexConfigName["hermes"] = "hermes";
  VexConfigName["poseidon"] = "poseidon";
  VexConfigName["ares"] = "ares";
  VexConfigName["ikaros"] = "ikaros";
})(VexConfigName || (VexConfigName = {}));
var VexColorScheme;
(function (VexColorScheme) {
  VexColorScheme["LIGHT"] = "light";
  VexColorScheme["DARK"] = "dark";
})(VexColorScheme || (VexColorScheme = {}));

/***/ }),

/***/ 376:
/*!***********************************************!*\
  !*** ./src/@vex/config/vex-config.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexConfigService: () => (/* binding */ VexConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/merge-deep */ 4567);
/* harmony import */ var _vex_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vex-configs */ 9794);
/* harmony import */ var _vex_config_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vex-config.interface */ 5062);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _vex_config_config_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/config/config.token */ 7892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_vex_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/vex-layout.service */ 4952);









class VexConfigService {
  constructor(config, themes, document, layoutService) {
    this.config = config;
    this.themes = themes;
    this.document = document;
    this.layoutService = layoutService;
    this.configMap = _vex_configs__WEBPACK_IMPORTED_MODULE_1__.vexConfigs;
    this.configs = Object.values(this.configMap);
    this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(this.config);
    this.config$.subscribe(config => this._updateConfig(config));
  }
  get config$() {
    return this._configSubject.asObservable();
  }
  select(selector) {
    return this.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(selector));
  }
  setConfig(configName) {
    const settings = this.configMap[configName];
    if (!settings) {
      throw new Error(`Config with name '${configName}' does not exist!`);
    }
    this._configSubject.next(settings);
  }
  updateConfig(config) {
    this._configSubject.next((0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)({
      ...this._configSubject.getValue()
    }, config));
  }
  _updateConfig(config) {
    this._setLayoutClass(config.bodyClass);
    this._setStyle(config.style);
    this._setDensity();
    this._setDirection(config.direction);
    this._setSidenavState(config.sidenav.state);
    this._emitResize();
  }
  _setStyle(style) {
    /**
     * Set light/dark mode
     */
    switch (style.colorScheme) {
      case _vex_config_interface__WEBPACK_IMPORTED_MODULE_2__.VexColorScheme.LIGHT:
        this.document.body.classList.remove(_vex_config_interface__WEBPACK_IMPORTED_MODULE_2__.VexColorScheme.DARK);
        this.document.body.classList.add(_vex_config_interface__WEBPACK_IMPORTED_MODULE_2__.VexColorScheme.LIGHT);
        break;
      case _vex_config_interface__WEBPACK_IMPORTED_MODULE_2__.VexColorScheme.DARK:
        this.document.body.classList.remove(_vex_config_interface__WEBPACK_IMPORTED_MODULE_2__.VexColorScheme.LIGHT);
        this.document.body.classList.add(_vex_config_interface__WEBPACK_IMPORTED_MODULE_2__.VexColorScheme.DARK);
        break;
    }
    /**
     * Set theme class
     */
    this.document.body.classList.remove(...this.themes.map(t => t.className));
    this.document.body.classList.add(style.themeClassName);
    /**
     * Border Radius
     */
    this.document.body.style.setProperty('--vex-border-radius', `${style.borderRadius.value}${style.borderRadius.unit}`);
    const buttonBorderRadius = style.button.borderRadius ?? style.borderRadius;
    this.document.body.style.setProperty('--vex-button-border-radius', `${buttonBorderRadius.value}${buttonBorderRadius.unit}`);
  }
  _setDensity() {
    if (!this.document.body.classList.contains('vex-mat-dense-default')) {
      this.document.body.classList.add('vex-mat-dense-default');
    }
  }
  /**
   * Emit event so charts and other external libraries know they have to resize on layout switch
   * @private
   */
  _emitResize() {
    if (window) {
      window.dispatchEvent(new Event('resize'));
      setTimeout(() => window.dispatchEvent(new Event('resize')), 200);
    }
  }
  _setDirection(direction) {
    this.document.body.dir = direction;
  }
  _setSidenavState(sidenavState) {
    sidenavState === 'expanded' ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
  }
  _setLayoutClass(bodyClass) {
    this.configs.forEach(c => {
      if (this.document.body.classList.contains(c.bodyClass)) {
        this.document.body.classList.remove(c.bodyClass);
      }
    });
    this.document.body.classList.add(bodyClass);
  }
  static #_ = this.ɵfac = function VexConfigService_Factory(t) {
    return new (t || VexConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_vex_config_config_token__WEBPACK_IMPORTED_MODULE_3__.VEX_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_vex_config_config_token__WEBPACK_IMPORTED_MODULE_3__.VEX_THEMES), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_4__.VexLayoutService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: VexConfigService,
    factory: VexConfigService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9794:
/*!****************************************!*\
  !*** ./src/@vex/config/vex-configs.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vexConfigs: () => (/* binding */ vexConfigs)
/* harmony export */ });
/* harmony import */ var _utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/merge-deep */ 4567);
/* harmony import */ var _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vex-config.interface */ 5062);
/* harmony import */ var _vex_utils_deep_clone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/utils/deep-clone */ 2928);



const baseConfig = {
  id: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.apollo,
  name: 'Apollo',
  bodyClass: 'vex-layout-apollo',
  style: {
    themeClassName: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexTheme.DEFAULT,
    colorScheme: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexColorScheme.LIGHT,
    borderRadius: {
      value: 0.5,
      unit: 'rem'
    },
    button: {
      borderRadius: {
        value: 9999,
        unit: 'px'
      }
    }
  },
  direction: 'ltr',
  imgSrc: '//vex-landing.visurel.com/assets/img/layouts/apollo.png',
  layout: 'horizontal',
  boxed: false,
  sidenav: {
    title: 'UniGest',
    imageUrl: 'assets/img/illustrations/data_center.svg',
    // imageUrl: 'assets/img/logo/logo_b.png',
    showCollapsePin: true,
    user: {
      visible: true
    },
    search: {
      visible: true
    },
    state: 'expanded'
  },
  toolbar: {
    fixed: true,
    user: {
      visible: true
    }
  },
  navbar: {
    position: 'below-toolbar'
  },
  footer: {
    visible: false,
    fixed: true
  }
};
const vexConfigs = {
  apollo: baseConfig,
  poseidon: (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)((0,_vex_utils_deep_clone__WEBPACK_IMPORTED_MODULE_2__["default"])(baseConfig), {
    id: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.poseidon,
    name: 'UniGest',
    bodyClass: 'vex-layout-poseidon',
    imgSrc: 'assets/img/logo/logo_b.png',
    sidenav: {
      user: {
        visible: true
      },
      search: {
        visible: true
      }
    },
    toolbar: {
      user: {
        visible: false
      }
    }
  }),
  hermes: (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)((0,_vex_utils_deep_clone__WEBPACK_IMPORTED_MODULE_2__["default"])(baseConfig), {
    id: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.hermes,
    name: 'UniGest',
    bodyClass: 'vex-layout-hermes',
    imgSrc: 'assets/img/logo/logo_b.png',
    layout: 'vertical',
    boxed: true,
    sidenav: {
      user: {
        visible: false
      },
      search: {
        visible: false
      }
    },
    toolbar: {
      fixed: false
    },
    footer: {
      fixed: false
    }
  }),
  ares: (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)((0,_vex_utils_deep_clone__WEBPACK_IMPORTED_MODULE_2__["default"])(baseConfig), {
    id: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.ares,
    name: 'UniGest',
    bodyClass: 'vex-layout-ares',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/apollo.png',
    sidenav: {
      user: {
        visible: false
      },
      search: {
        visible: false
      }
    },
    toolbar: {
      fixed: false
    },
    navbar: {
      position: 'in-toolbar'
    },
    footer: {
      fixed: false
    }
  }),
  zeus: (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)((0,_vex_utils_deep_clone__WEBPACK_IMPORTED_MODULE_2__["default"])(baseConfig), {
    id: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.zeus,
    name: 'Zeus',
    bodyClass: 'vex-layout-zeus',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/zeus.png',
    sidenav: {
      state: 'collapsed'
    }
  }),
  ikaros: (0,_utils_merge_deep__WEBPACK_IMPORTED_MODULE_0__.mergeDeep)((0,_vex_utils_deep_clone__WEBPACK_IMPORTED_MODULE_2__["default"])(baseConfig), {
    id: _vex_config_interface__WEBPACK_IMPORTED_MODULE_1__.VexConfigName.ikaros,
    name: 'Ikaros',
    bodyClass: 'vex-layout-ikaros',
    imgSrc: '//vex-landing.visurel.com/assets/img/layouts/ikaros.png',
    layout: 'vertical',
    boxed: true,
    sidenav: {
      user: {
        visible: false
      },
      search: {
        visible: false
      }
    },
    toolbar: {
      fixed: false
    },
    navbar: {
      position: 'in-toolbar'
    },
    footer: {
      fixed: false
    }
  })
};

/***/ }),

/***/ 1031:
/*!**********************************************************************************!*\
  !*** ./src/@vex/pipes/vex-date-format-relative/vex-date-format-relative.pipe.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexDateFormatRelativePipe: () => (/* binding */ VexDateFormatRelativePipe)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 7765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class VexDateFormatRelativePipe {
  transform(value, ...args) {
    if (!value) {
      return;
    }
    if (!(value instanceof luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime)) {
      value = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromISO(value);
    }
    return value.toRelative();
  }
  static #_ = this.ɵfac = function VexDateFormatRelativePipe_Factory(t) {
    return new (t || VexDateFormatRelativePipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "vexDateFormatRelative",
    type: VexDateFormatRelativePipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 7374:
/*!***********************************************!*\
  !*** ./src/@vex/services/vex-demo.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexDemoService: () => (/* binding */ VexDemoService)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 5998);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/config/vex-config.service */ 376);






class VexDemoService {
  constructor(router, configService) {
    this.router = router;
    this.configService = configService;
    /**
     * Config Related Subscriptions
     * You can remove this if you don't need the functionality of being able to enable specific configs with queryParams
     * Example: example.com/?layout=apollo&style=default
     */
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd)).subscribe(event => {
      const route = this.router.routerState.root.snapshot;
      if (route.queryParamMap.has('layout')) {
        this.configService.setConfig(route.queryParamMap.get('layout'));
      }
      if (route.queryParamMap.has('style')) {
        this.configService.updateConfig({
          style: {
            colorScheme: route.queryParamMap.get('style')
          }
        });
      }
      // TODO: Adjust primaryColor queryParam and see where it was used?
      const theme = route.queryParamMap.get('theme');
      if (theme) {
        this.configService.updateConfig({
          style: {
            themeClassName: theme
          }
        });
      }
      if (route.queryParamMap.has('rtl')) {
        this.configService.updateConfig({
          direction: (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(route.queryParamMap.get('rtl')) ? 'rtl' : 'ltr'
        });
      }
    });
  }
  static #_ = this.ɵfac = function VexDemoService_Factory(t) {
    return new (t || VexDemoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_0__.VexConfigService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: VexDemoService,
    factory: VexDemoService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4952:
/*!*************************************************!*\
  !*** ./src/@vex/services/vex-layout.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexLayoutService: () => (/* binding */ VexLayoutService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ 9743);






class VexLayoutService {
  constructor(breakpointObserver) {
    this.breakpointObserver = breakpointObserver;
    this._quickpanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.quickpanelOpen$ = this._quickpanelOpenSubject.asObservable();
    this._sidenavOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.sidenavOpen$ = this._sidenavOpenSubject.asObservable();
    this._sidenavCollapsedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.sidenavCollapsed$ = this._sidenavCollapsedSubject.asObservable();
    this._sidenavCollapsedOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.sidenavCollapsedOpen$ = this._sidenavCollapsedOpenSubject.asObservable();
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DestroyRef);
    this._configPanelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this._searchOpen = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.searchOpen$ = this._searchOpen.asObservable();
    this.isDesktop$ = this.breakpointObserver.observe(`(min-width: 1280px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
    this.ltLg$ = this.breakpointObserver.observe(`(max-width: 1279px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
    this.gtMd$ = this.breakpointObserver.observe(`(min-width: 960px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
    this.ltMd$ = this.breakpointObserver.observe(`(max-width: 959px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
    this.gtSm$ = this.breakpointObserver.observe(`(min-width: 600px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
    this.isMobile$ = this.breakpointObserver.observe(`(max-width: 599px)`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(state => state.matches));
    this.isLtLg = () => this.breakpointObserver.isMatched(`(max-width: 1279px)`);
    this.isMobile = () => this.breakpointObserver.isMatched(`(max-width: 599px)`);
    this.configPanelOpen$ = this._configPanelOpenSubject.asObservable();
    /**
     * Expand Sidenav when we switch from mobile to desktop view
     */
    this.isDesktop$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(matches => !matches), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.takeUntilDestroyed)(this.destroyRef)).subscribe(() => this.expandSidenav());
  }
  openQuickpanel() {
    this._quickpanelOpenSubject.next(true);
  }
  closeQuickpanel() {
    this._quickpanelOpenSubject.next(false);
  }
  openSidenav() {
    this._sidenavOpenSubject.next(true);
  }
  closeSidenav() {
    this._sidenavOpenSubject.next(false);
  }
  collapseSidenav() {
    this._sidenavCollapsedSubject.next(true);
  }
  expandSidenav() {
    this._sidenavCollapsedSubject.next(false);
  }
  collapseOpenSidenav() {
    this._sidenavCollapsedOpenSubject.next(true);
  }
  collapseCloseSidenav() {
    this._sidenavCollapsedOpenSubject.next(false);
  }
  openConfigpanel() {
    this._configPanelOpenSubject.next(true);
  }
  closeConfigpanel() {
    this._configPanelOpenSubject.next(false);
  }
  openSearch() {
    this._searchOpen.next(true);
  }
  closeSearch() {
    this._searchOpen.next(false);
  }
  static #_ = this.ɵfac = function VexLayoutService_Factory(t) {
    return new (t || VexLayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.BreakpointObserver));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: VexLayoutService,
    factory: VexLayoutService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2355:
/*!***************************************************!*\
  !*** ./src/@vex/services/vex-platform.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexPlatformService: () => (/* binding */ VexPlatformService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 3274);



class VexPlatformService {
  constructor(document, rendererFactory2, platform) {
    this.document = document;
    this.rendererFactory2 = rendererFactory2;
    this.platform = platform;
    const renderer = this.rendererFactory2.createRenderer(null, null);
    if (this.platform.BLINK) {
      renderer.addClass(this.document.body, 'is-blink');
    }
  }
  static #_ = this.ɵfac = function VexPlatformService_Factory(t) {
    return new (t || VexPlatformService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: VexPlatformService,
    factory: VexPlatformService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1353:
/*!********************************************************!*\
  !*** ./src/@vex/services/vex-splash-screen.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexSplashScreenService: () => (/* binding */ VexSplashScreenService)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);







class VexSplashScreenService {
  constructor(router, document, animationBuilder) {
    this.router = router;
    this.document = document;
    this.animationBuilder = animationBuilder;
    this.splashScreenElem = this.document.body.querySelector('#vex-splash-screen') ?? undefined;
    if (this.splashScreenElem) {
      this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(() => this.hide());
    }
  }
  hide() {
    const player = this.animationBuilder.build([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 1
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('400ms cubic-bezier(0.25, 0.8, 0.25, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 0
    }))]).create(this.splashScreenElem);
    player.onDone(() => this.splashScreenElem?.remove());
    player.play();
  }
  static #_ = this.ɵfac = function VexSplashScreenService_Factory(t) {
    return new (t || VexSplashScreenService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_animations__WEBPACK_IMPORTED_MODULE_3__.AnimationBuilder));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: VexSplashScreenService,
    factory: VexSplashScreenService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9681:
/*!****************************************************!*\
  !*** ./src/@vex/utils/check-router-childs-data.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkRouterChildsData: () => (/* binding */ checkRouterChildsData),
/* harmony export */   getAllParams: () => (/* binding */ getAllParams)
/* harmony export */ });
function checkRouterChildsData(route, compareWith) {
  if (compareWith(route.data)) {
    return true;
  }
  if (!route.firstChild) {
    return false;
  }
  return checkRouterChildsData(route.firstChild, compareWith);
}
/**
 * Used to get params from children in their parent
 */
function getAllParams(route, result = new Map()) {
  if (route.params) {
    for (const key of Object.keys(route.params)) {
      result.set(key, route.params[key]);
    }
  }
  if (!route.firstChild) {
    return result;
  }
  return getAllParams(route.firstChild, result);
}

/***/ }),

/***/ 2928:
/*!**************************************!*\
  !*** ./src/@vex/utils/deep-clone.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function deepClone(obj) {
  if (obj == null || typeof obj !== 'object') {
    return obj;
  }
  if (obj instanceof Date) {
    const copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }
  if (obj instanceof Array) {
    const copy = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = deepClone(obj[i]);
    }
    return copy;
  }
  const copy = {};
  Object.keys(obj).forEach(key => {
    copy[key] = deepClone(obj[key]);
  });
  return copy;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deepClone);

/***/ }),

/***/ 5832:
/*!**********************************!*\
  !*** ./src/@vex/utils/is-nil.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNil: () => (/* binding */ isNil)
/* harmony export */ });
function isNil(value) {
  return value == null;
}

/***/ }),

/***/ 4567:
/*!**************************************!*\
  !*** ./src/@vex/utils/merge-deep.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mergeDeep: () => (/* binding */ mergeDeep)
/* harmony export */ });
/**
 * Performs a deep merge of `source` into `target`.
 * Mutates `target` only but not its objects and arrays.
 *
 * @author inspired by [jhildenbiddle](https://stackoverflow.com/a/48218209).
 */
function mergeDeep(target, source) {
  const isObject = obj => obj && typeof obj === 'object';
  if (!isObject(target) || !isObject(source)) {
    return source;
  }
  Object.keys(source).forEach(key => {
    const targetValue = target[key];
    const sourceValue = source[key];
    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });
  return target;
}

/***/ }),

/***/ 7637:
/*!************************************!*\
  !*** ./src/@vex/utils/track-by.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   trackById: () => (/* binding */ trackById),
/* harmony export */   trackByKey: () => (/* binding */ trackByKey),
/* harmony export */   trackByLabel: () => (/* binding */ trackByLabel),
/* harmony export */   trackByRoute: () => (/* binding */ trackByRoute),
/* harmony export */   trackByValue: () => (/* binding */ trackByValue)
/* harmony export */ });
function trackByRoute(index, item) {
  return item.route;
}
function trackById(index, item) {
  return item.id;
}
function trackByKey(index, item) {
  return item.key;
}
function trackByValue(index, value) {
  return value;
}
function trackByLabel(index, value) {
  return value.label;
}

/***/ }),

/***/ 7463:
/*!**********************************!*\
  !*** ./src/@vex/vex.provider.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideVex: () => (/* binding */ provideVex)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _vex_services_vex_splash_screen_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/services/vex-splash-screen.service */ 1353);
/* harmony import */ var _vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/services/vex-layout.service */ 4952);
/* harmony import */ var _vex_services_vex_demo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/services/vex-demo.service */ 7374);
/* harmony import */ var _vex_services_vex_platform_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/services/vex-platform.service */ 2355);
/* harmony import */ var _vex_config_config_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/config/config.token */ 7892);
/* harmony import */ var _vex_components_vex_highlight_vex_highlight_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vex/components/vex-highlight/vex-highlight.module */ 5299);









function provideVex(options) {
  return [(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.importProvidersFrom)(_vex_components_vex_highlight_vex_highlight_module__WEBPACK_IMPORTED_MODULE_5__.VexHighlightModule), {
    provide: _vex_config_config_token__WEBPACK_IMPORTED_MODULE_4__.VEX_CONFIG,
    useValue: options.config
  }, {
    provide: _vex_config_config_token__WEBPACK_IMPORTED_MODULE_4__.VEX_THEMES,
    useValue: options.availableThemes
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MATERIAL_SANITY_CHECKS,
    useValue: {
      doctype: true,
      theme: false,
      version: true
    }
  }, {
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {
      appearance: 'outline'
    }
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_vex_services_vex_splash_screen_service__WEBPACK_IMPORTED_MODULE_0__.VexSplashScreenService),
    multi: true
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_1__.VexLayoutService),
    multi: true
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_vex_services_vex_platform_service__WEBPACK_IMPORTED_MODULE_3__.VexPlatformService),
    multi: true
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.inject)(_vex_services_vex_demo_service__WEBPACK_IMPORTED_MODULE_2__.VexDemoService),
    multi: true
  }];
}

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


class AppComponent {
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["vex-root"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    encapsulation: 2
  });
}

/***/ }),

/***/ 7110:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routes */ 2016);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 8740);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _core_icons_icons_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/icons/icons.provider */ 214);
/* harmony import */ var _core_luxon_luxon_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/luxon/luxon.provider */ 310);
/* harmony import */ var _vex_vex_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/vex.provider */ 7463);
/* harmony import */ var _core_navigation_navigation_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/navigation/navigation.provider */ 2528);
/* harmony import */ var _vex_config_vex_configs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vex/config/vex-configs */ 9794);
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-quill */ 1363);
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interceptors/jwt.interceptor */ 6644);















 // Minuscule ici
const appConfig = {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.importProvidersFrom)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__.MatBottomSheetModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatNativeDateModule), (0,_angular_router__WEBPACK_IMPORTED_MODULE_12__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_0__.appRoutes,
  // TODO: Add preloading withPreloading(),
  (0,_angular_router__WEBPACK_IMPORTED_MODULE_12__.withInMemoryScrolling)({
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })),
  //interceptor
  (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.withInterceptors)([_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__.jwtInterceptor])),
  // { provide: HTTP_INTERCEPTORS, useClass: jwtInterceptor, multi: true },
  // { provide: HTTP_INTERCEPTORS, useClass: jwtInterceptor, multi: true },
  //interceptor
  (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.provideAnimations)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.withInterceptorsFromDi)()), (0,_vex_vex_provider__WEBPACK_IMPORTED_MODULE_3__.provideVex)({
    /**
     * The config that will be used by default.
     * This can be changed at runtime via the config panel or using the VexConfigService.
     */
    config: _vex_config_vex_configs__WEBPACK_IMPORTED_MODULE_5__.vexConfigs.poseidon,
    /**
     * Only themes that are available in the config in tailwind.config.ts should be listed here.
     * Any theme not listed here will not be available in the config panel.
     */
    availableThemes: [{
      name: 'Default',
      className: 'vex-theme-default'
    }, {
      name: 'Teal',
      className: 'vex-theme-teal'
    }, {
      name: 'Green',
      className: 'vex-theme-green'
    }, {
      name: 'Purple',
      className: 'vex-theme-purple'
    }, {
      name: 'Red',
      className: 'vex-theme-red'
    }, {
      name: 'Orange',
      className: 'vex-theme-orange'
    }]
  }), (0,_core_navigation_navigation_provider__WEBPACK_IMPORTED_MODULE_4__.provideNavigation)(), (0,_core_icons_icons_provider__WEBPACK_IMPORTED_MODULE_1__.provideIcons)(), (0,_core_luxon_luxon_provider__WEBPACK_IMPORTED_MODULE_2__.provideLuxon)(), (0,ngx_quill__WEBPACK_IMPORTED_MODULE_15__.provideQuillConfig)({
    modules: {
      toolbar: [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block'], [{
        list: 'ordered'
      }, {
        list: 'bullet'
      }], [{
        header: [1, 2, 3, 4, 5, 6, false]
      }], ['clean'], ['link', 'image']]
    }
  })]
};

/***/ }),

/***/ 2016:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appRoutes: () => (/* binding */ appRoutes)
/* harmony export */ });
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ 1391);
/* harmony import */ var _layouts_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/layout/layout.component */ 8349);
/* harmony import */ var _pages_pedagogie_affectations_details_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/pedagogie/affectations/details/details.component */ 8198);
/* harmony import */ var _pages_scolarite_classematiere_classe_matiere_list_classe_matiere_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/scolarite/classematiere/classe-matiere-list/classe-matiere-list.component */ 7410);
/* harmony import */ var _pages_scolarite_etudiants_detail_etudiant_detail_etudiant_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/scolarite/etudiants/detail-etudiant/detail-etudiant.component */ 5278);





const appRoutes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
// AUTH
{
  path: 'login',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_auth_login_login_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/auth/login/login.component */ 6944)).then(m => m.LoginComponent)
}, {
  path: '',
  component: _layouts_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent,
  children: [{
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    path: 'dashboards/analytics',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboards_dashboard-analytics_dashboard-analytics_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dashboards/dashboard-analytics/dashboard-analytics.component */ 3843)).then(m => m.DashboardComponent)
  }, {
    path: 'scolarite',
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    children: [{
      path: 'etudiants',
      children: [{
        path: '',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_datepicker_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_scolarite_etudiants_etudiant-list_etudiant-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/scolarite/etudiants/etudiant-list/etudiant-list.component */ 971)).then(m => m.EtudiantListComponent)
      }, {
        path: 'details',
        component: _pages_scolarite_etudiants_detail_etudiant_detail_etudiant_component__WEBPACK_IMPORTED_MODULE_4__.DetailEtudiantComponent
      }]
    }, {
      path: 'aio-table',
      loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_apps_aio-table_aio-table_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/apps/aio-table/aio-table.component */ 9765)).then(m => m.AioTableComponent),
      data: {
        toolbarShadowEnabled: false
      }
    }, {
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      path: 'etudiants/new',
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_datepicker_mjs"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/scolarite/etudiants/etudiant-form/etudiant-form.component */ 631)).then(m => m.EtudiantFormComponent)
    }, {
      path: 'classes',
      children: [{
        path: '',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_scolarite_classes_classe-form_classe-form_component_ts"), __webpack_require__.e("src_app_pages_scolarite_classes_classe-list_classe-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/scolarite/classes/classe-list/classe-list.component */ 2798)).then(m => m.ClasseListComponent)
      }, {
        path: 'details',
        component: _pages_scolarite_classematiere_classe_matiere_list_classe_matiere_list_component__WEBPACK_IMPORTED_MODULE_3__.ClasseMatiereListComponent
      }]
    },
    // {
    //   canActivate: [AuthGuard], // Ajoute le guard ici
    //   path: 'classes',
    //   loadComponent: () =>
    //     import(
    //       './pages/scolarite/classes/classe-list/classe-list.component'
    //     ).then((m) => m.ClasseListComponent)
    // },
    {
      path: 'classes/new',
      loadComponent: () => __webpack_require__.e(/*! import() */ "default-src_app_pages_scolarite_classes_classe-form_classe-form_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/scolarite/classes/classe-form/classe-form.component */ 6151)).then(m => m.ClasseFormComponent)
    }, {
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      path: 'inscriptions',
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_scolarite_inscriptions_inscription-list_inscription-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/scolarite/inscriptions/inscription-list/inscription-list.component */ 6999)).then(m => m.InscriptionListComponent)
    }, {
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      path: 'inscriptions/new',
      loadComponent: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/scolarite/inscriptions/inscription-form/inscription-form.component */ 4655)).then(m => m.InscriptionFormComponent)
    }, {
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      path: 'filieres',
      loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_scolarite_filieres_filiere-list_filiere-list_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/scolarite/filieres/filiere-list/filiere-list.component */ 430)).then(m => m.FiliereListComponent)
    }, {
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      path: 'niveau',
      loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_scolarite_niveau_niveau-list_niveau-list_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/scolarite/niveau/niveau-list/niveau-list.component */ 5132)).then(m => m.NiveauListComponent)
    }, {
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      path: 'parent',
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_scolarite_parent_parent-list_parent-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/scolarite/parent/parent-list/parent-list.component */ 3877)).then(m => m.ParentListComponent)
    }, {
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      path: 'niveau',
      loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_scolarite_niveau_niveau-list_niveau-list_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/scolarite/niveau/niveau-list/niveau-list.component */ 5132)).then(m => m.NiveauListComponent)
    }, {
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      path: 'annee-scolaire',
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_datepicker_mjs"), __webpack_require__.e("src_app_pages_scolarite_annee-scolaire_annee-scolaire-liste_annee-scolaire-liste_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/scolarite/annee-scolaire/annee-scolaire-liste/annee-scolaire-liste.component */ 8385)).then(m => m.AnneeScolaireListeComponent)
    }]
  },
  // ============================
  // 🎓 PEDAGOGIE
  // ============================
  {
    path: 'pedagogie',
    children: [{
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      path: 'matieres',
      loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_pedagogie_matieres_matiere-list_matiere-list_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pedagogie/matieres/matiere-list/matiere-list.component */ 5149)).then(m => m.MatiereListComponent)
    }, {
      path: 'affectations',
      children: [{
        path: '',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_datepicker_mjs"), __webpack_require__.e("src_app_pages_pedagogie_affectations_affectation-list_affectation-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pedagogie/affectations/affectation-list/affectation-list.component */ 8535)).then(m => m.AffectationListComponent)
      }, {
        path: 'details',
        component: _pages_pedagogie_affectations_details_details_component__WEBPACK_IMPORTED_MODULE_2__.DetailsComponent
      }]
    }, {
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      path: 'seances',
      loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_pedagogie_seances_seance-list_seance-list_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pedagogie/seances/seance-list/seance-list.component */ 5125)).then(m => m.SeanceListComponent)
    },
    // 🔥 APPEL (clé du système)
    {
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      path: 'appels',
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_datepicker_mjs"), __webpack_require__.e("src_app_pages_pedagogie_appels_appel-seance_appel-seance_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pedagogie/appels/appel-seance/appel-seance.component */ 1838)).then(m => m.AppelSeanceComponent)
    }, {
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      path: 'notes',
      loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_pedagogie_notes_note-list_note-list_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pedagogie/notes/note-list/note-list.component */ 6681)).then(m => m.NoteListComponent)
    }, {
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      path: 'emploi-du-temps',
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_datepicker_mjs"), __webpack_require__.e("default-src_app_pages_pedagogie_emploi-du-temps_emploi-du-temps-form_emploi-du-temps-form_com-3d6cc5"), __webpack_require__.e("src_app_pages_pedagogie_emploi-du-temps_emploi-du-temps-list_emploi-du-temps-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pedagogie/emploi-du-temps/emploi-du-temps-list/emploi-du-temps-list.component */ 628)).then(m => m.EmploiDuTempsListeComponent)
    }, {
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      path: 'emploi-du-temps-calendar',
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_datepicker_mjs"), __webpack_require__.e("default-src_app_services_emploi-du-temps_service_ts-node_modules_angular-calendar_date-adapte-2ca046"), __webpack_require__.e("default-src_app_pages_pedagogie_emploi-du-temps_emploi-du-temps-form_emploi-du-temps-form_com-3d6cc5"), __webpack_require__.e("src_app_pages_pedagogie_emploi-du-temps_emploi-du-temps-calendar_emploi-du-temps-calendar_com-3d4293")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pedagogie/emploi-du-temps/emploi-du-temps-calendar/emploi-du-temps-calendar.component */ 5646)).then(m => m.EmploiDuTempsCalendarComponent)
    }, {
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      path: 'calendar',
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_datepicker_mjs"), __webpack_require__.e("default-src_app_services_emploi-du-temps_service_ts-node_modules_angular-calendar_date-adapte-2ca046"), __webpack_require__.e("src_app_pages_apps_calendar_calendar_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/apps/calendar/calendar.component */ 894)).then(m => m.CalendarComponent)
    }, {
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      path: 'bulletins',
      loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_pedagogie_bulletins_bulletin-list_bulletin-list_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pedagogie/bulletins/bulletin-list/bulletin-list.component */ 4287)).then(m => m.BulletinListComponent)
    }]
  },
  // ============================
  // 💰 FINANCE
  // ============================
  {
    path: 'finance',
    children: [{
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      path: 'paiements',
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_datepicker_mjs"), __webpack_require__.e("src_app_pages_finance_paiements_paiement-list_paiement-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/finance/paiements/paiement-list/paiement-list.component */ 4136)).then(m => m.PaiementListComponent)
    }, {
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      path: 'categorie-depense',
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_scolarite_categorie-depense_categorie-depense-list_categorie-depense-list_compo-c8ae21")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/scolarite/categorie-depense/categorie-depense-list/categorie-depense-list.component */ 5501)).then(m => m.CategorieListComponent)
    }, {
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      path: 'depenses',
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2022_datepicker_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_finance_depense-list_depense-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/finance/depense-list/depense-list.component */ 2101)).then(m => m.DepenseListComponent)
    }, {
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      path: 'categorie',
      loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_finance_categorie-list_categorie-list_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/finance/categorie-list/categorie-list.component */ 6620)).then(m => m.CategorieListComponent)
    }]
  },
  // ============================
  // 👤 UTILISATEURS
  // ============================
  {
    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    path: 'utilisateurs',
    children: [{
      path: 'parents',
      loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_utilisateurs_parents_parent-list_parent-list_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/utilisateurs/parents/parent-list/parent-list.component */ 4054)).then(m => m.ParentListComponent)
    }, {
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      path: 'parents/new',
      loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_utilisateurs_parents_parent-form_parent-form_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/utilisateurs/parents/parent-form/parent-form.component */ 9629)).then(m => m.ParentFormComponent)
    }, {
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      path: 'enseignants',
      loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_utilisateurs_enseignants_enseignant-list_enseignant-list_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/utilisateurs/enseignants/enseignant-list/enseignant-list.component */ 3992)).then(m => m.EnseignantListComponent)
    }, {
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
      path: 'enseignants/new',
      loadComponent: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/utilisateurs/enseignants/enseignant-form/enseignant-form.component */ 6482)).then(m => m.EnseignantFormComponent)
    }]
  },
  // 404
  {
    path: '**',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_errors_error-404_error-404_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages/errors/error-404/error-404.component */ 2521)).then(m => m.Error404Component)
  }]
}];

/***/ }),

/***/ 214:
/*!**********************************************!*\
  !*** ./src/app/core/icons/icons.provider.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideIcons: () => (/* binding */ provideIcons)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _icons_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons.service */ 3296);


function provideIcons() {
  return [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_icons_service__WEBPACK_IMPORTED_MODULE_0__.IconsService),
    multi: true
  }];
}

/***/ }),

/***/ 3296:
/*!*********************************************!*\
  !*** ./src/app/core/icons/icons.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconsService: () => (/* binding */ IconsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 6515);



class IconsService {
  constructor(domSanitizer, iconRegistry) {
    this.domSanitizer = domSanitizer;
    this.iconRegistry = iconRegistry;
    this.iconRegistry.addSvgIconResolver((name, namespace) => {
      switch (namespace) {
        case 'mat':
          return this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/img/icons/material-design-icons/two-tone/${name}.svg`);
        case 'logo':
          return this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/img/icons/logos/${name}.svg`);
        case 'flag':
          return this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/img/icons/flags/${name}.svg`);
        default:
          return null;
      }
    });
  }
  static #_ = this.ɵfac = function IconsService_Factory(t) {
    return new (t || IconsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconRegistry));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: IconsService,
    factory: IconsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 310:
/*!**********************************************!*\
  !*** ./src/app/core/luxon/luxon.provider.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideLuxon: () => (/* binding */ provideLuxon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _luxon_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./luxon.service */ 5199);


function provideLuxon() {
  return [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_luxon_service__WEBPACK_IMPORTED_MODULE_0__.LuxonService),
    multi: true
  }];
}

/***/ }),

/***/ 5199:
/*!*********************************************!*\
  !*** ./src/app/core/luxon/luxon.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LuxonService: () => (/* binding */ LuxonService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 7765);



class LuxonService {
  constructor(localeId) {
    this.localeId = localeId;
    luxon__WEBPACK_IMPORTED_MODULE_0__.Settings.defaultLocale = this.localeId;
  }
  static #_ = this.ɵfac = function LuxonService_Factory(t) {
    return new (t || LuxonService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.LOCALE_ID));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LuxonService,
    factory: LuxonService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8936:
/*!**************************************************************!*\
  !*** ./src/app/core/navigation/navigation-loader.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationLoaderService: () => (/* binding */ NavigationLoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/services/vex-layout.service */ 4952);



class NavigationLoaderService {
  get items$() {
    return this._items.asObservable();
  }
  constructor(layoutService) {
    this.layoutService = layoutService;
    this._items = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    this.loadNavigation();
  }
  loadNavigation() {
    this._items.next([
    // ============================
    // 📊 DASHBOARD
    // ============================
    {
      type: 'subheading',
      label: 'Tableau de bord',
      children: [{
        type: 'link',
        label: 'Tableau de bord',
        route: '/dashboards/analytics',
        icon: 'mat:insights',
        routerLinkActiveOptions: {
          exact: true
        }
      }]
    },
    // ============================
    // 📚 SCOLARITÉ
    // ============================
    {
      type: 'subheading',
      label: 'Scolarité',
      children: [{
        type: 'link',
        label: 'Étudiants',
        route: '/scolarite/etudiants',
        icon: 'mat:groups'
      }, {
        type: 'link',
        label: 'Année Scolaire',
        route: '/scolarite/annee-scolaire',
        icon: 'mat:date_range'
      }, {
        type: 'link',
        label: 'Niveau',
        route: '/scolarite/niveau',
        icon: 'mat:layers'
      }, {
        type: 'link',
        label: 'Filières',
        route: '/scolarite/filieres',
        icon: 'mat:school'
      }, {
        type: 'link',
        label: 'Classes / Matières',
        route: '/scolarite/classes',
        icon: 'mat:class'
      }, {
        type: 'link',
        label: 'Inscriptions',
        route: '/scolarite/inscriptions',
        icon: 'mat:assignment_ind'
      }]
    },
    // ============================
    // 🎓 PÉDAGOGIE
    // ============================
    {
      type: 'subheading',
      label: 'Pédagogie',
      children: [{
        type: 'link',
        label: 'Matières',
        route: '/pedagogie/matieres',
        icon: 'mat:menu_book'
      }, {
        type: 'link',
        label: 'Affectations',
        route: '/pedagogie/affectations',
        icon: 'mat:assignment'
      }, {
        type: 'link',
        label: 'Séances',
        route: '/pedagogie/seances',
        icon: 'mat:schedule'
      }, {
        type: 'link',
        label: 'Abscences & Retard',
        route: '/pedagogie/appels',
        icon: 'mat:schedule'
      }, {
        type: 'link',
        label: 'Notes',
        route: '/pedagogie/notes',
        icon: 'mat:grading'
      }, {
        type: 'link',
        label: 'Emploi du temps',
        route: '/pedagogie/emploi-du-temps',
        icon: 'mat:description'
      }, {
        type: 'link',
        label: 'Calendrier',
        route: '/pedagogie/calendar',
        icon: 'mat:description'
      }, {
        type: 'link',
        label: 'Bulletins',
        route: '/pedagogie/bulletins',
        icon: 'mat:description'
      }]
    },
    // ============================
    // 💰 FINANCE
    // ============================
    {
      type: 'subheading',
      label: 'Finance',
      children: [{
        type: 'link',
        label: 'Paiements',
        route: '/finance/paiements',
        icon: 'mat:payments'
      }, {
        type: 'link',
        label: 'Categorie Depense',
        route: '/finance/categorie-depense',
        icon: 'mat:payments'
      }, {
        type: 'link',
        label: 'Dépenses',
        route: '/finance/depenses',
        icon: 'mat:payments'
      }]
    },
    // ============================
    // 👤 UTILISATEURS
    // ============================
    {
      type: 'subheading',
      label: 'Utilisateurs',
      children: [{
        type: 'link',
        label: 'Parent',
        route: '/scolarite/parent',
        icon: 'mat:family_restroom'
      }, {
        type: 'link',
        label: 'Enseignants',
        route: '/utilisateurs/enseignants',
        icon: 'mat:person'
      }]
    }]);
  }
  static #_ = this.ɵfac = function NavigationLoaderService_Factory(t) {
    return new (t || NavigationLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_0__.VexLayoutService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: NavigationLoaderService,
    factory: NavigationLoaderService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2528:
/*!********************************************************!*\
  !*** ./src/app/core/navigation/navigation.provider.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideNavigation: () => (/* binding */ provideNavigation)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.service */ 120);
/* harmony import */ var _navigation_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation-loader.service */ 8936);



function provideNavigation() {
  return [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService),
    multi: true
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ENVIRONMENT_INITIALIZER,
    useValue: () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_navigation_loader_service__WEBPACK_IMPORTED_MODULE_1__.NavigationLoaderService),
    multi: true
  }];
}

/***/ }),

/***/ 120:
/*!*******************************************************!*\
  !*** ./src/app/core/navigation/navigation.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationService: () => (/* binding */ NavigationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _navigation_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation-loader.service */ 8936);



class NavigationService {
  constructor(navigationLoaderService) {
    this.navigationLoaderService = navigationLoaderService;
    this.items$ = this.navigationLoaderService.items$;
    this._openChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.openChange$ = this._openChangeSubject.asObservable();
  }
  triggerOpenChange(item) {
    this._openChangeSubject.next(item);
  }
  isLink(item) {
    return item.type === 'link';
  }
  isDropdown(item) {
    return item.type === 'dropdown';
  }
  isSubheading(item) {
    return item.type === 'subheading';
  }
  static #_ = this.ɵfac = function NavigationService_Factory(t) {
    return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_navigation_loader_service__WEBPACK_IMPORTED_MODULE_0__.NavigationLoaderService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: NavigationService,
    factory: NavigationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1391:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 2333);
// import { CanActivateFn } from '@angular/router';
// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };



// export class AuthGuard {
//   static canActivate: CanActivateFn = (route, state) => {
//     const authService = inject(AuthService);
//     const router = inject(Router);
//     if (authService.isLoggedIn()) {
//       return true;
//     } else {
//       router.navigate(['/login']);
//       return false;
//     }
//   };
// }
const AuthGuard = (route, state) => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  if (authService.isLoggedIn()) {
    return true;
  }
  return router.createUrlTree(['/login']);
};

/***/ }),

/***/ 6644:
/*!*************************************************!*\
  !*** ./src/app/interceptors/jwt.interceptor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jwtInterceptor: () => (/* binding */ jwtInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 2333);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3252);
// // import { HttpInterceptorFn } from '@angular/common/http';



const jwtInterceptor = (req, next) => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
  const token = authService.getToken();
  // 1. On ajoute le token si disponible
  let authReq = req;
  if (token) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  // 2. On gère la réponse et l'éventuelle expiration (Erreur 401)
  return next(authReq).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
    if (error.status === 401) {
      // Le token est expiré ou invalide -> Déconnexion forcée
      console.warn("Token expiré ou invalide. Déconnexion...");
      authService.logout();
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
  }));
};

/***/ }),

/***/ 8158:
/*!**************************************************************!*\
  !*** ./src/app/layouts/base-layout/base-layout.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseLayoutComponent: () => (/* binding */ BaseLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5043);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var _vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/utils/check-router-childs-data */ 9681);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _vex_utils_is_nil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/utils/is-nil */ 5832);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/services/vex-layout.service */ 4952);
/* harmony import */ var _vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/config/vex-config.service */ 376);













function BaseLayoutComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const config_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("vex-layout-boxed", config_r1.boxed)("vex-layout-footer-enabled", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 18, ctx_r0.isFooterVisible$))("vex-layout-footer-fixed", config_r1.footer.fixed && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 20, ctx_r0.isFooterVisible$))("vex-layout-horizontal", config_r1.layout === "horizontal")("vex-layout-scroll-disabled", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 22, ctx_r0.scrollDisabled$))("vex-layout-search-overlay-open", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 24, ctx_r0.searchOpen$))("vex-layout-sidenav-collapsed", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 26, ctx_r0.sidenavCollapsed$))("vex-layout-toolbar-fixed", config_r1.toolbar.fixed)("vex-layout-vertical", config_r1.layout === "vertical");
  }
}
const _c0 = ["*"];
class BaseLayoutComponent {
  constructor(layoutService, configService, router, document) {
    this.layoutService = layoutService;
    this.configService = configService;
    this.router = router;
    this.document = document;
    this.config$ = this.configService.config$;
    /**
     * Check if footer should be visible
     */
    this.isFooterVisible$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([
    /**
     * Check if footer is enabled in the config
     */
    this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.footer.visible)),
    /**
     * Check if footer is enabled on the current route
     */
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => (0,_vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_0__.checkRouterChildsData)(this.router.routerState.root.snapshot, data => data.footerVisible ?? true)))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([configEnabled, routeEnabled]) => {
      if ((0,_vex_utils_is_nil__WEBPACK_IMPORTED_MODULE_1__.isNil)(routeEnabled)) {
        return configEnabled;
      }
      return configEnabled && routeEnabled;
    }));
    this.sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
    this.isDesktop$ = this.layoutService.isDesktop$;
    this.scrollDisabled$ = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => (0,_vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_0__.checkRouterChildsData)(this.router.routerState.root.snapshot, data => data.scrollDisabled ?? false)));
    this.searchOpen$ = this.layoutService.searchOpen$;
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.DestroyRef);
  }
  ngOnInit() {
    /**
     * Open sidenav on desktop when layout is not vertical
     * Close sidenav on mobile or when layout is vertical
     */
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([this.isDesktop$, this.configService.select(config => config.layout === 'vertical')]).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_10__.takeUntilDestroyed)(this.destroyRef)).subscribe(([isDesktop, isVerticalLayout]) => {
      if (isDesktop && !isVerticalLayout) {
        this.layoutService.openSidenav();
      } else {
        this.layoutService.closeSidenav();
      }
    });
    /**
     * Mobile only:
     * Close Sidenav after Navigating somewhere (e.g. when a user clicks a link in the Sidenav)
     */
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.withLatestFrom)(this.isDesktop$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(([event, matches]) => !matches), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_10__.takeUntilDestroyed)(this.destroyRef)).subscribe(() => this.layoutService.closeSidenav());
  }
  ngAfterViewInit() {
    /**
     * Enable Scrolling to specific parts of the page using the Router
     */
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.Scroll), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_10__.takeUntilDestroyed)(this.destroyRef)).subscribe(e => {
      if (e.position) {
        // backward navigation
        this.sidenavContainer.scrollable.scrollTo({
          start: e.position[0],
          top: e.position[1]
        });
      } else if (e.anchor) {
        // anchor navigation
        const scroll = anchor => this.sidenavContainer.scrollable.scrollTo({
          behavior: 'smooth',
          top: anchor.offsetTop,
          left: anchor.offsetLeft
        });
        let anchorElem = this.document.getElementById(e.anchor);
        if (anchorElem) {
          scroll(anchorElem);
        } else {
          setTimeout(() => {
            if (!e.anchor) {
              return;
            }
            anchorElem = this.document.getElementById(e.anchor);
            if (!anchorElem) {
              return;
            }
            scroll(anchorElem);
          }, 100);
        }
      } else {
        // forward navigation
        this.sidenavContainer.scrollable.scrollTo({
          top: 0,
          start: 0
        });
      }
    });
  }
  static #_ = this.ɵfac = function BaseLayoutComponent_Factory(t) {
    return new (t || BaseLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_2__.VexLayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_3__.VexConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DOCUMENT));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: BaseLayoutComponent,
    selectors: [["vex-base-layout"]],
    contentQueries: function BaseLayoutComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavContainer, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sidenavContainer = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 3,
    consts: [["class", "vex-base-layout-container", 3, "vex-layout-boxed", "vex-layout-footer-enabled", "vex-layout-footer-fixed", "vex-layout-horizontal", "vex-layout-scroll-disabled", "vex-layout-search-overlay-open", "vex-layout-sidenav-collapsed", "vex-layout-toolbar-fixed", "vex-layout-vertical", 4, "ngIf"], [1, "vex-base-layout-container"]],
    template: function BaseLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, BaseLayoutComponent_div_0_Template, 7, 28, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, ctx.config$));
      }
    },
    dependencies: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavModule, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3593:
/*!******************************************************************************************************!*\
  !*** ./src/app/layouts/components/config-panel/config-panel-toggle/config-panel-toggle.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigPanelToggleComponent: () => (/* binding */ ConfigPanelToggleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 895);






class ConfigPanelToggleComponent {
  constructor() {
    this.openConfig = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ConfigPanelToggleComponent_Factory(t) {
    return new (t || ConfigPanelToggleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ConfigPanelToggleComponent,
    selectors: [["vex-config-panel-toggle"]],
    outputs: {
      openConfig: "openConfig"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 0,
    consts: [["color", "primary", "mat-fab", "", "type", "button", 1, "config-panel-toggle", 3, "click"], ["svgIcon", "mat:settings"]],
    template: function ConfigPanelToggleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfigPanelToggleComponent_Template_button_click_0_listener() {
          return ctx.openConfig.emit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
    styles: [".config-panel-toggle[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: fixed;\n  bottom: 1.5rem;\n  right: 1.5rem;\n}\n\n  [dir=rtl] .config-panel-toggle {\n  left: 1.5rem;\n  right: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL2NvbmZpZy1wYW5lbC9jb25maWctcGFuZWwtdG9nZ2xlL2NvbmZpZy1wYW5lbC10b2dnbGUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi91bmlnZXN0X2Zyb250JTIwY29waWUvc3JjL2FwcC9sYXlvdXRzL2NvbXBvbmVudHMvY29uZmlnLXBhbmVsL2NvbmZpZy1wYW5lbC10b2dnbGUvY29uZmlnLXBhbmVsLXRvZ2dsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQUEsY0FBQTtFQUFBLGFBQUE7QUNDRjs7QURHRTtFQUFBLFlBQUE7RUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpZy1wYW5lbC10b2dnbGUge1xuICB6LWluZGV4OiAxMDA7XG4gIEBhcHBseSBmaXhlZCBib3R0b20tNiByaWdodC02O1xufVxuXG46Om5nLWRlZXAgW2Rpcj1cInJ0bFwiXSAuY29uZmlnLXBhbmVsLXRvZ2dsZSB7XG4gIEBhcHBseSBsZWZ0LTYgcmlnaHQtYXV0bztcbn1cbiIsIi5jb25maWctcGFuZWwtdG9nZ2xlIHtcbiAgei1pbmRleDogMTAwO1xuICBAYXBwbHkgZml4ZWQgYm90dG9tLTYgcmlnaHQtNjtcbn1cblxuOjpuZy1kZWVwIFtkaXI9cnRsXSAuY29uZmlnLXBhbmVsLXRvZ2dsZSB7XG4gIEBhcHBseSBsZWZ0LTYgcmlnaHQtYXV0bztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6426:
/*!***************************************************************************!*\
  !*** ./src/app/layouts/components/config-panel/config-panel.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigPanelComponent: () => (/* binding */ ConfigPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ 2106);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _vex_config_vex_config_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/config/vex-config.interface */ 5062);
/* harmony import */ var _vex_utils_is_nil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/utils/is-nil */ 5832);
/* harmony import */ var _vex_config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/config/constants */ 6739);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _vex_config_config_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/config/config.token */ 7892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/config/vex-config.service */ 376);


















function ConfigPanelComponent_div_0_div_8_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-icon", 24);
  }
}
function ConfigPanelComponent_div_0_div_8_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-icon", 25);
  }
}
function ConfigPanelComponent_div_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_8_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const colorScheme_r6 = restoredCtx.ngIf;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.isDark(colorScheme_r6) ? ctx_r9.disableDarkMode() : ctx_r9.enableDarkMode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ConfigPanelComponent_div_0_div_8_mat_icon_2_Template, 1, 0, "mat-icon", 21)(3, ConfigPanelComponent_div_0_div_8_mat_icon_3_Template, 1, 0, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "DARK MODE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const colorScheme_r6 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isDark(colorScheme_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.isDark(colorScheme_r6));
  }
}
function ConfigPanelComponent_div_0_div_13_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-icon", 24);
  }
}
const _c0 = (a0, a1) => ({
  "bg-primary-600/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-500": a0,
  "bg-primary-600 text-on-primary-600": a1
});
function ConfigPanelComponent_div_0_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_13_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const theme_r11 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.selectTheme(theme_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ConfigPanelComponent_div_0_div_13_mat_icon_4_Template, 1, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const theme_r11 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("", theme_r11.className, " vex-color-picker rounded-full mt-2 flex items-center cursor-pointer relative hover:bg-primary-600 hover:text-on-primary-600 dark:hover:bg-primary-600 dark:hover:text-on-primary-600");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](14, _c0, !((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 6, ctx_r3.isSelectedTheme$)) == null ? null : tmp_1_0(theme_r11.className)), (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 8, ctx_r3.isSelectedTheme$)) == null ? null : tmp_1_0(theme_r11.className)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 10, ctx_r3.isSelectedTheme$)) == null ? null : tmp_2_0(theme_r11.className));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 12, theme_r11.name));
  }
}
function ConfigPanelComponent_div_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 31)(4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_17_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const config_r15 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.setConfig(config_r15.id, ctx_r17.ColorSchemeName.LIGHT));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " LIGHT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_17_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const config_r15 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.setConfig(config_r15.id, ctx_r19.ColorSchemeName.DARK));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " DARK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const config_r15 = ctx.$implicit;
    const first_r16 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mt-6", !first_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", config_r15.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](config_r15.name);
  }
}
const _c1 = (a0, a1) => ({
  "border-gray-300": a0,
  "border-transparent": a1
});
const _c2 = (a0, a1) => ({
  "bg-primary-600 border-primary-600": a0,
  "bg-foreground border-gray-500 group-hover:bg-app-bar": a1
});
function ConfigPanelComponent_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_div_22_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const borderRadius_r20 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.selectBorderRadius(borderRadius_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const borderRadius_r20 = ctx.$implicit;
    const setting_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c1, ctx_r5.isSelectedBorderRadius(borderRadius_r20, setting_r1), !ctx_r5.isSelectedBorderRadius(borderRadius_r20, setting_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("border-top-left-radius", borderRadius_r20.value + borderRadius_r20.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](7, _c2, ctx_r5.isSelectedBorderRadius(borderRadius_r20, setting_r1), !ctx_r5.isSelectedBorderRadius(borderRadius_r20, setting_r1)));
  }
}
const _c3 = (a0, a1) => ({
  "!bg-transparent !border-solid !border-primary-600 !text-primary-600": a0,
  "!border-transparent": a1
});
function ConfigPanelComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4)(6, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "THEME BASE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ConfigPanelComponent_div_0_div_8_Template, 6, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 4)(11, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "THEME COLORS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ConfigPanelComponent_div_0_div_13_Template, 9, 17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 4)(15, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "PRE-BUILT LAYOUTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ConfigPanelComponent_div_0_div_17_Template, 10, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 4)(19, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "ROUNDED CORNERS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, ConfigPanelComponent_div_0_div_22_Template, 2, 10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 4)(24, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "BUTTON STYLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 11)(27, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.selectButtonStyle(undefined));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " INHERIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConfigPanelComponent_div_0_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26.selectButtonStyle(ctx_r26.roundedButtonValue));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " ROUNDED ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 4)(32, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 14)(35, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Orientation");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-slide-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_slide_toggle_change_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r27.layoutRTLChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](38, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "RTL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 4)(41, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Toolbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 14)(44, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "mat-radio-group", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_radio_group_change_46_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r28.toolbarPositionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "mat-radio-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "mat-radio-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Static");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 4)(52, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 14)(55, "mat-slide-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_slide_toggle_change_55_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r29.footerVisibleChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Visible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "mat-radio-group", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ConfigPanelComponent_div_0_Template_mat_radio_group_change_59_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r30.footerPositionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "mat-radio-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "mat-radio-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Static");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const setting_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 10, ctx_r0.colorScheme$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.themes);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.configs);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.roundedCornerValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](14, _c3, !ctx_r0.isSelectedButtonStyle(undefined, setting_r1), ctx_r0.isSelectedButtonStyle(undefined, setting_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](17, _c3, !ctx_r0.isSelectedButtonStyle(ctx_r0.roundedButtonValue, setting_r1), ctx_r0.isSelectedButtonStyle(ctx_r0.roundedButtonValue, setting_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](38, 12, ctx_r0.isRTL$));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", setting_r1.toolbar.fixed ? "fixed" : "static");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", setting_r1.footer.visible);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", setting_r1.footer.fixed ? "fixed" : "static");
  }
}
class ConfigPanelComponent {
  constructor(configService, themes) {
    this.configService = configService;
    this.themes = themes;
    this.configs = this.configService.configs;
    this.config$ = this.configService.config$;
    this.isRTL$ = this.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.direction === 'rtl'));
    this.colorScheme$ = this.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.style.colorScheme));
    this.borderRadius$ = this.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(config => config.style.borderRadius.value));
    this.ConfigName = _vex_config_vex_config_interface__WEBPACK_IMPORTED_MODULE_0__.VexConfigName;
    this.ColorSchemeName = _vex_config_vex_config_interface__WEBPACK_IMPORTED_MODULE_0__.VexColorScheme;
    this.selectedTheme$ = this.configService.select(config => config.style.themeClassName);
    this.isSelectedTheme$ = this.configService.select(config => config.style.themeClassName).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(themeClassName => theme => themeClassName === theme));
    this.roundedCornerValues = [{
      value: 0,
      unit: 'rem'
    }, {
      value: 0.25,
      unit: 'rem'
    }, {
      value: 0.5,
      unit: 'rem'
    }, {
      value: 0.75,
      unit: 'rem'
    }, {
      value: 1,
      unit: 'rem'
    }, {
      value: 1.25,
      unit: 'rem'
    }, {
      value: 1.5,
      unit: 'rem'
    }, {
      value: 1.75,
      unit: 'rem'
    }];
    this.roundedButtonValue = _vex_config_constants__WEBPACK_IMPORTED_MODULE_2__.defaultRoundedButtonBorderRadius;
  }
  setConfig(layout, colorScheme) {
    this.configService.setConfig(layout);
    this.configService.updateConfig({
      style: {
        colorScheme
      }
    });
  }
  selectTheme(theme) {
    this.configService.updateConfig({
      style: {
        themeClassName: theme.className
      }
    });
  }
  enableDarkMode() {
    this.configService.updateConfig({
      style: {
        colorScheme: _vex_config_vex_config_interface__WEBPACK_IMPORTED_MODULE_0__.VexColorScheme.DARK
      }
    });
  }
  disableDarkMode() {
    this.configService.updateConfig({
      style: {
        colorScheme: _vex_config_vex_config_interface__WEBPACK_IMPORTED_MODULE_0__.VexColorScheme.LIGHT
      }
    });
  }
  layoutRTLChange(change) {
    this.configService.updateConfig({
      direction: change.checked ? 'rtl' : 'ltr'
    });
  }
  toolbarPositionChange(change) {
    this.configService.updateConfig({
      toolbar: {
        fixed: change.value === 'fixed'
      }
    });
  }
  footerVisibleChange(change) {
    this.configService.updateConfig({
      footer: {
        visible: change.checked
      }
    });
  }
  footerPositionChange(change) {
    this.configService.updateConfig({
      footer: {
        fixed: change.value === 'fixed'
      }
    });
  }
  isSelectedBorderRadius(borderRadius, config) {
    return borderRadius.value === config.style.borderRadius.value && borderRadius.unit === config.style.borderRadius.unit;
  }
  selectBorderRadius(borderRadius) {
    this.configService.updateConfig({
      style: {
        borderRadius: borderRadius
      }
    });
  }
  isSelectedButtonStyle(buttonStyle, config) {
    if ((0,_vex_utils_is_nil__WEBPACK_IMPORTED_MODULE_1__.isNil)(config.style.button.borderRadius) && (0,_vex_utils_is_nil__WEBPACK_IMPORTED_MODULE_1__.isNil)(buttonStyle)) {
      return true;
    }
    return buttonStyle?.value === config.style.button.borderRadius?.value;
  }
  selectButtonStyle(borderRadius) {
    this.configService.updateConfig({
      style: {
        button: {
          borderRadius: borderRadius
        }
      }
    });
  }
  isDark(colorScheme) {
    return colorScheme === _vex_config_vex_config_interface__WEBPACK_IMPORTED_MODULE_0__.VexColorScheme.DARK;
  }
  static #_ = this.ɵfac = function ConfigPanelComponent_Factory(t) {
    return new (t || ConfigPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_4__.VexConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_vex_config_config_token__WEBPACK_IMPORTED_MODULE_3__.VEX_THEMES));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ConfigPanelComponent,
    selectors: [["vex-config-panel"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [["class", "config-panel", 4, "ngIf"], [1, "config-panel"], [1, "headline", "mb-4"], ["svgIcon", "mat:settings", 1, "mr-3"], [1, "section"], [1, "subheading"], ["class", "rounded-full mt-2 flex items-center cursor-pointer relative bg-black text-white select-none", "matRipple", "", 3, "click", 4, "ngIf"], ["matRipple", "", 3, "ngClass", "class", "click", 4, "ngFor", "ngForOf"], ["class", "rounded", 3, "mt-6", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-4", "gap-4"], ["class", "aspect-square bgbg-primary-60010 flex justify-end items-end cursor-pointer border-2 hover:border-gray-200 group transition duration-400 ease-out-swift rounded-tl", 3, "border-gray-300", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "flex", "justify-between", "gap-4"], ["color", "primary", "mat-flat-button", "", "type", "button", 1, "rounded", "flex-1", "border-2", "border-solid", 3, "ngClass", "click"], ["color", "primary", "mat-flat-button", "", "type", "button", 1, "rounded-full", "flex-1", "border-2", "border-solid", 3, "ngClass", "click"], [1, "section-content"], [3, "checked", "change"], [1, "flex", "flex-col", "gap-3", 3, "value", "change"], ["value", "fixed"], ["value", "static"], ["matRipple", "", 1, "rounded-full", "mt-2", "flex", "items-center", "cursor-pointer", "relative", "bg-black", "text-white", "select-none", 3, "click"], [1, "m-2", "h-6", "w-6", "rounded-full"], ["svgIcon", "mat:check", 4, "ngIf"], ["svgIcon", "mat:close", 4, "ngIf"], [1, "ml-1", "font-medium", "text-sm"], ["svgIcon", "mat:check"], ["svgIcon", "mat:close"], ["matRipple", "", 3, "ngClass", "click"], [1, "m-2", "h-6", "w-6", "rounded-full", "text-on-primary-600", "bg-primary-600"], [1, "rounded"], [1, "layout-image", "rounded", "overflow-hidden", "relative", "hover:bg-hover", "shadow-md"], [1, "w-full", "block", 3, "src"], [1, "layout-image-overlay", "flex", "items-center", "justify-center", "gap-1"], ["mat-raised-button", "", "type", "button", 1, "bg-white", "text-black", "flex-none", "!min-w-[70px]", 3, "click"], ["mat-raised-button", "", "type", "button", 1, "!bg-black", "!text-white", "flex-none", "!min-w-[70px]", 3, "click"], [1, "text-center", "body-2", "mt-2"], [1, "aspect-square", "bgbg-primary-60010", "flex", "justify-end", "items-end", "cursor-pointer", "border-2", "hover:border-gray-200", "group", "transition", "duration-400", "ease-out-swift", "rounded-tl", 3, "border-gray-300", "ngClass", "click"], [1, "h-7", "w-7", "border-2", "transition", "duration-400", "ease-out-swift", 2, "margin-bottom", "-2px", "margin-right", "-2px", 3, "ngClass"]],
    template: function ConfigPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ConfigPanelComponent_div_0_Template, 64, 20, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx.config$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgFor, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggle, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioButton, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.UpperCasePipe],
    styles: [".config-panel[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n\n.heading[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  border-bottom-width: 1px;\n  padding-bottom: 1rem;\n}\n.section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.section-content[_ngcontent-%COMP%] {\n  margin-inline-start: 0.75rem;\n}\n.section-content[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.subheading[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-foreground-secondary-text-rgb) / var(--tw-text-opacity));\n}\n\n.layout[_ngcontent-%COMP%]    + .layout[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.layout-image[_ngcontent-%COMP%]:hover   .layout-image-overlay[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.7);\n  opacity: 1;\n  visibility: visible;\n}\n.layout-image[_ngcontent-%COMP%]   .layout-image-overlay[_ngcontent-%COMP%] {\n  border-radius: var(--vex-border-radius);\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  visibility: hidden;\n  width: 100%;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.layout-image[_ngcontent-%COMP%]   .layout-image-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0 8px;\n}\n\n.vex-color-picker[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.vex-color-picker[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.color[_ngcontent-%COMP%] {\n  align-items: center;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  height: 36px;\n  justify-content: center;\n  text-align: center;\n  vertical-align: middle;\n  width: 36px;\n  margin-inline-end: 1rem;\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.color.light[_ngcontent-%COMP%] {\n  background: white;\n  color: #000;\n}\n.color.dark[_ngcontent-%COMP%] {\n  background: #303030;\n  color: white;\n}\n.color.flat[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #000;\n}\n\nmat-slide-toggle[_ngcontent-%COMP%]    + mat-slide-toggle[_ngcontent-%COMP%], mat-slide-toggle[_ngcontent-%COMP%]    + mat-checkbox[_ngcontent-%COMP%], mat-checkbox[_ngcontent-%COMP%]    + mat-slide-toggle[_ngcontent-%COMP%], mat-checkbox[_ngcontent-%COMP%]    + mat-checkbox[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL2NvbmZpZy1wYW5lbC9jb25maWctcGFuZWwuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi91bmlnZXN0X2Zyb250JTIwY29waWUvc3JjL2FwcC9sYXlvdXRzL2NvbXBvbmVudHMvY29uZmlnLXBhbmVsL2NvbmZpZy1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLGtCQUFBO0VBQUEsbUJBQUE7RUFBQSxtQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsbUJBQUE7RUFBQSx3QkFBQTtFQUFBO0FBQUE7QUFFQTtFQUNFLG1CQUFBO0FDQ0o7O0FESUU7RUFBQTtBQUFBO0FBR0U7RUFBQTtBQUFBOztBQUtGO0VBQUEsZ0JBQUE7RUFBQSxtQkFBQTtFQUFBLGtCQUFBO0VBQUEsaUJBQUE7RUFBQSxnQkFBQTtFQUFBLHlCQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUE7QUFBQTs7QUFLRTtFQUNFLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDSE47QURPRTtFQUNFLHVDQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQSw0REFBQTtBQ0xKO0FET0k7RUFDRSxjQUFBO0FDTE47O0FEVUE7RUFDRSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUEsNERBQUE7QUNQRjtBRFVJO0VBQUEsd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTs7QUFJSjtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQUEsK0VBQUE7RUFBQSxtR0FBQTtFQUFBLHVHQUFBO0FDUkY7QURVRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ1JKO0FEV0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNUSjtBRFlFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDVko7O0FEa0JFOzs7O0VBQUEsbUJBQUE7RUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpZy1wYW5lbCB7XG4gIEBhcHBseSBweC00IHB5LTY7XG59XG5cbi5oZWFkaW5nIHtcbiAgQGFwcGx5IG1iLTY7XG59XG5cbi5zZWN0aW9uIHtcbiAgQGFwcGx5IGJvcmRlci1iIG1iLTQgcGItNDtcblxuICAmOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cbn1cblxuLnNlY3Rpb24tY29udGVudCB7XG4gIEBhcHBseSBtcy0zO1xuXG4gIC5zdWJoZWFkaW5nIHtcbiAgICBAYXBwbHkgbXQtNjtcbiAgfVxufVxuXG4uc3ViaGVhZGluZyB7XG4gIEBhcHBseSBteS00IHVwcGVyY2FzZSB0ZXh0LXhzIHRleHQtc2Vjb25kYXJ5IGZvbnQtbWVkaXVtO1xufVxuXG4ubGF5b3V0ICsgLmxheW91dCB7XG4gIEBhcHBseSBtdC02O1xufVxuXG4ubGF5b3V0LWltYWdlIHtcbiAgJjpob3ZlciB7XG4gICAgLmxheW91dC1pbWFnZS1vdmVybGF5IHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cbiAgfVxuXG4gIC5sYXlvdXQtaW1hZ2Utb3ZlcmxheSB7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tdmV4LWJvcmRlci1yYWRpdXMpO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIEBhcHBseSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi00MDAgZWFzZS1vdXQtc3dpZnQ7XG5cbiAgICBidXR0b24ge1xuICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgfVxuICB9XG59XG5cbi52ZXgtY29sb3ItcGlja2VyIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIEBhcHBseSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi00MDAgZWFzZS1vdXQtc3dpZnQ7XG5cbiAgcCB7XG4gICAgQGFwcGx5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTQwMCBlYXNlLW91dC1zd2lmdDtcbiAgfVxufVxuXG4uY29sb3Ige1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMzZweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDM2cHg7XG4gIEBhcHBseSBzaGFkb3ctbGcgbWUtNDtcblxuICAmLmxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuXG4gICYuZGFyayB7XG4gICAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAmLmZsYXQge1xuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cbn1cblxubWF0LXNsaWRlLXRvZ2dsZSArIG1hdC1zbGlkZS10b2dnbGUsXG5tYXQtc2xpZGUtdG9nZ2xlICsgbWF0LWNoZWNrYm94LFxubWF0LWNoZWNrYm94ICsgbWF0LXNsaWRlLXRvZ2dsZSxcbm1hdC1jaGVja2JveCArIG1hdC1jaGVja2JveCB7XG4gIEBhcHBseSBibG9jayBtdC0zO1xufVxuIiwiLmNvbmZpZy1wYW5lbCB7XG4gIEBhcHBseSBweC00IHB5LTY7XG59XG5cbi5oZWFkaW5nIHtcbiAgQGFwcGx5IG1iLTY7XG59XG5cbi5zZWN0aW9uIHtcbiAgQGFwcGx5IGJvcmRlci1iIG1iLTQgcGItNDtcbn1cbi5zZWN0aW9uOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uc2VjdGlvbi1jb250ZW50IHtcbiAgQGFwcGx5IG1zLTM7XG59XG4uc2VjdGlvbi1jb250ZW50IC5zdWJoZWFkaW5nIHtcbiAgQGFwcGx5IG10LTY7XG59XG5cbi5zdWJoZWFkaW5nIHtcbiAgQGFwcGx5IG15LTQgdXBwZXJjYXNlIHRleHQteHMgdGV4dC1zZWNvbmRhcnkgZm9udC1tZWRpdW07XG59XG5cbi5sYXlvdXQgKyAubGF5b3V0IHtcbiAgQGFwcGx5IG10LTY7XG59XG5cbi5sYXlvdXQtaW1hZ2U6aG92ZXIgLmxheW91dC1pbWFnZS1vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLmxheW91dC1pbWFnZSAubGF5b3V0LWltYWdlLW92ZXJsYXkge1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS12ZXgtYm9yZGVyLXJhZGl1cyk7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIEBhcHBseSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi00MDAgZWFzZS1vdXQtc3dpZnQ7XG59XG4ubGF5b3V0LWltYWdlIC5sYXlvdXQtaW1hZ2Utb3ZlcmxheSBidXR0b24ge1xuICBwYWRkaW5nOiAwIDhweDtcbn1cblxuLnZleC1jb2xvci1waWNrZXIge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgQGFwcGx5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTQwMCBlYXNlLW91dC1zd2lmdDtcbn1cbi52ZXgtY29sb3ItcGlja2VyIHAge1xuICBAYXBwbHkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNDAwIGVhc2Utb3V0LXN3aWZ0O1xufVxuXG4uY29sb3Ige1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMzZweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDM2cHg7XG4gIEBhcHBseSBzaGFkb3ctbGcgbWUtNDtcbn1cbi5jb2xvci5saWdodCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzAwMDtcbn1cbi5jb2xvci5kYXJrIHtcbiAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmNvbG9yLmZsYXQge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBjb2xvcjogIzAwMDtcbn1cblxubWF0LXNsaWRlLXRvZ2dsZSArIG1hdC1zbGlkZS10b2dnbGUsXG5tYXQtc2xpZGUtdG9nZ2xlICsgbWF0LWNoZWNrYm94LFxubWF0LWNoZWNrYm94ICsgbWF0LXNsaWRlLXRvZ2dsZSxcbm1hdC1jaGVja2JveCArIG1hdC1jaGVja2JveCB7XG4gIEBhcHBseSBibG9jayBtdC0zO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3147:
/*!***************************************************************!*\
  !*** ./src/app/layouts/components/footer/footer.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);





class FooterComponent {
  constructor() {}
  ngOnInit() {}
  ngOnDestroy() {}
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["vex-footer"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 7,
    vars: 0,
    consts: [[1, "flex-auto", "flex", "items-center", "container"], ["color", "primary", "href", "//1.envato.market/0vkRO", "id", "get-vex", "mat-flat-button", "", 1, "action", "flex-none"], ["svgIcon", "mat:shopping_bag", 1, "icon-sm", "ltr:mr-2", "rtl:ml-2"], [1, "font-medium", "ltr:ml-4", "rtl:mr-4", "hidden", "sm:block"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Get Vex (Angular 17+)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Vex - Angular 17+ Material Design Admin Template - Save 100s of hours designing and coding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
    styles: ["[_nghost-%COMP%] {\n  position: relative;\n  bottom: 0px;\n  display: flex;\n  width: 100%;\n  border-top-width: 1px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(var(--vex-background-card-rgb) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-foreground-text-rgb) / var(--tw-text-opacity));\n}:is(.dark   )[_nghost-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(var(--vex-background-background-rgb) / var(--tw-bg-opacity));\n}[_nghost-%COMP%] {\n  height: var(--vex-footer-height);\n  z-index: var(--vex-footer-z-index);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi91bmlnZXN0X2Zyb250JTIwY29waWUvc3JjL2FwcC9sYXlvdXRzL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUFBLGtCQUFBO0VBQUEsV0FBQTtFQUFBLGFBQUE7RUFBQSxXQUFBO0VBQUEscUJBQUE7RUFBQSxrQkFBQTtFQUFBLDRFQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBLENBQUE7RUFBQSxrQkFBQTtFQUFBO0FBQUEsQ0FERjtFQUVFLGdDQUFBO0VBQ0Esa0NBQUE7QUNDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgQGFwcGx5IGJnLWZvcmVncm91bmQgZGFyazpiZy1iYXNlIGJvcmRlci10IHRleHQtZGVmYXVsdCBmbGV4IHctZnVsbCBib3R0b20tMCByZWxhdGl2ZTtcbiAgaGVpZ2h0OiB2YXIoLS12ZXgtZm9vdGVyLWhlaWdodCk7XG4gIHotaW5kZXg6IHZhcigtLXZleC1mb290ZXItei1pbmRleCk7XG59XG4iLCI6aG9zdCB7XG4gIEBhcHBseSBiZy1mb3JlZ3JvdW5kIGRhcms6YmctYmFzZSBib3JkZXItdCB0ZXh0LWRlZmF1bHQgZmxleCB3LWZ1bGwgYm90dG9tLTAgcmVsYXRpdmU7XG4gIGhlaWdodDogdmFyKC0tdmV4LWZvb3Rlci1oZWlnaHQpO1xuICB6LWluZGV4OiB2YXIoLS12ZXgtZm9vdGVyLXotaW5kZXgpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9208:
/*!********************************************************************************************!*\
  !*** ./src/app/layouts/components/navigation/navigation-item/navigation-item.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationItemComponent: () => (/* binding */ NavigationItemComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5043);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/utils/track-by */ 7637);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/navigation/navigation.service */ 120);













const _c0 = (a0, a1) => ({
  "bg-primary-600 text-on-primary-600": a0,
  "navigation-color": a1
});
function NavigationItemComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hover:bg-hover", !((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 5, ctx_r0.isActive$)) == null ? null : tmp_0_0(ctx_r0.item)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c0, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 7, ctx_r0.isActive$)) == null ? null : tmp_1_0(ctx_r0.item), !((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 9, ctx_r0.isActive$)) == null ? null : tmp_1_0(ctx_r0.item))))("routerLink", ctx_r0.item.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.item.label, "\n");
  }
}
function NavigationItemComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationItemComponent_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.item.route());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hover:bg-hover", !((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, ctx_r1.isActive$)) == null ? null : tmp_0_0(ctx_r1.item)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.item.label, "\n");
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_a_1_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 14);
  }
  if (rf & 2) {
    const child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", child_r9.icon);
  }
}
const _c1 = a0 => ({
  "text-primary-600": a0
});
function NavigationItemComponent_ng_container_2_ng_container_8_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_a_1_mat_icon_2_Template, 1, 1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 4, ctx_r10.isActive$)) == null ? null : tmp_0_0(child_r9)))("routerLink", child_r9.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", child_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](child_r9.label);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_div_2_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 14);
  }
  if (rf & 2) {
    const child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", child_r9.icon);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationItemComponent_ng_container_2_ng_container_8_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
      const child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](child_r9.route());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavigationItemComponent_ng_container_2_ng_container_8_div_2_mat_icon_1_Template, 1, 1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", child_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](child_r9.label);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 14);
  }
  if (rf & 2) {
    const child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", child_r9.icon);
  }
}
const _c2 = a0 => ({
  item: a0
});
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](11);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c2, item_r42))("ngTemplateOutlet", _r8);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-menu", 6, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template, 2, 4, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const child_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](10);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r40)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, ctx_r39.isActive$)) == null ? null : tmp_1_0(child_r38)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", child_r38.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", child_r38.children);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template, 7, 8, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const child_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](9);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c2, child_r38))("ngTemplateOutlet", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r37.isDropdown(child_r38));
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-menu", 6, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template, 3, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](8);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r36)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, ctx_r35.isActive$)) == null ? null : tmp_1_0(item_r34)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r34.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r34.children);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_ng_container_2_Template, 7, 8, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](7);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c2, item_r34))("ngTemplateOutlet", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r33.isDropdown(item_r34));
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-menu", 6, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_ng_container_6_Template, 3, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const child_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r32)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, ctx_r31.isActive$)) == null ? null : tmp_1_0(child_r30)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", child_r30.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", child_r30.children);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_ng_container_2_Template, 7, 8, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const child_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c2, child_r30))("ngTemplateOutlet", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r29.isDropdown(child_r30));
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-menu", 6, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_ng_container_6_Template, 3, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r28)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 4, ctx_r27.isActive$)) == null ? null : tmp_1_0(item_r26)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r26.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r26.children);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](1, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_ng_container_2_Template, 7, 8, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c2, item_r26))("ngTemplateOutlet", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r24.isDropdown(item_r26));
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_mat_icon_3_Template, 1, 1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-menu", 6, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_ng_container_8_Template, 3, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
    const child_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r23)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c1, (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, ctx_r12.isActive$)) == null ? null : tmp_1_0(child_r9)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", child_r9.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](child_r9.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", child_r9.children);
  }
}
function NavigationItemComponent_ng_container_2_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavigationItemComponent_ng_container_2_ng_container_8_a_1_Template, 5, 8, "a", 10)(2, NavigationItemComponent_ng_container_2_ng_container_8_div_2_Template, 4, 2, "div", 11)(3, NavigationItemComponent_ng_container_2_ng_container_8_ng_container_3_Template, 9, 9, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const child_r9 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.isLink(child_r9) && !ctx_r6.isFunction(child_r9.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.isLink(child_r9) && ctx_r6.isFunction(child_r9.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.isDropdown(child_r9));
  }
}
function NavigationItemComponent_ng_container_2_ng_template_9_a_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().item;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, ctx_r49.isActive$)) == null ? null : tmp_0_0(item_r48)))("routerLink", item_r48.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r48.label);
  }
}
function NavigationItemComponent_ng_container_2_ng_template_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationItemComponent_ng_container_2_ng_template_9_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54);
      const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().item;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](item_r48.route());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().item;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx_r50.isActive$)) == null ? null : tmp_0_0(item_r48)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r48.label, " ");
  }
}
function NavigationItemComponent_ng_container_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NavigationItemComponent_ng_container_2_ng_template_9_a_0_Template, 3, 7, "a", 10)(1, NavigationItemComponent_ng_container_2_ng_template_9_div_1_Template, 3, 6, "div", 23);
  }
  if (rf & 2) {
    const item_r48 = ctx.item;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.isLink(item_r48) && !ctx_r7.isFunction(item_r48.route));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.isLink(item_r48) && ctx_r7.isFunction(item_r48.route));
  }
}
function NavigationItemComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-menu", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NavigationItemComponent_ng_container_2_ng_container_8_Template, 4, 3, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, NavigationItemComponent_ng_container_2_ng_template_9_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("hover:bg-hover", !((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 6, ctx_r2.isActive$)) == null ? null : tmp_0_0(ctx_r2.item)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r5)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](12, _c0, (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 8, ctx_r2.isActive$)) == null ? null : tmp_2_0(ctx_r2.item), !((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 10, ctx_r2.isActive$)) == null ? null : tmp_2_0(ctx_r2.item))));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.item.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.item.children);
  }
}
class NavigationItemComponent {
  constructor(navigationService, router) {
    this.navigationService = navigationService;
    this.router = router;
    this.isActive$ = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => item => this.hasActiveChilds(item)));
    this.isLink = this.navigationService.isLink;
    this.isDropdown = this.navigationService.isDropdown;
    this.isSubheading = this.navigationService.isSubheading;
    this.trackByRoute = _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_0__.trackByRoute;
  }
  ngOnInit() {}
  hasActiveChilds(parent) {
    if (this.isLink(parent)) {
      return this.router.isActive(parent.route, true);
    }
    if (this.isDropdown(parent) || this.isSubheading(parent)) {
      return parent.children.some(child => {
        if (this.isDropdown(child)) {
          return this.hasActiveChilds(child);
        }
        if (this.isLink(child) && !this.isFunction(child.route)) {
          return this.router.isActive(child.route, true);
        }
        return false;
      });
    }
    return false;
  }
  isFunction(prop) {
    return prop instanceof Function;
  }
  static #_ = this.ɵfac = function NavigationItemComponent_Factory(t) {
    return new (t || NavigationItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NavigationItemComponent,
    selectors: [["vex-navigation-item"]],
    inputs: {
      item: "item"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 3,
    consts: [["class", "navigation-item", "matRipple", "", 3, "hover:bg-hover", "ngClass", "routerLink", 4, "ngIf"], ["class", "navigation-item navigation-color", "matRipple", "", 3, "hover:bg-hover", "click", 4, "ngIf"], [4, "ngIf"], ["matRipple", "", 1, "navigation-item", 3, "ngClass", "routerLink"], ["matRipple", "", 1, "navigation-item", "navigation-color", 3, "click"], ["matRipple", "", 1, "navigation-item", 3, "matMenuTriggerFor", "ngClass"], ["yPosition", "below"], ["menu", "matMenu"], [4, "ngFor", "ngForOf"], ["linkTemplate", ""], ["class", "navigation-menu-item", "mat-menu-item", "", 3, "ngClass", "routerLink", 4, "ngIf"], ["class", "navigation-menu-item", "mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "ngClass", "routerLink"], ["class", "text-current", 3, "svgIcon", 4, "ngIf"], [1, "text-current", 3, "svgIcon"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "click"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "matMenuTriggerFor", "ngClass"], ["level1", "matMenu"], [3, "ngTemplateOutletContext", "ngTemplateOutlet"], ["level2", "matMenu"], ["level3", "matMenu"], ["level4", "matMenu"], ["level5", "matMenu"], ["class", "navigation-menu-item", "mat-menu-item", "", 3, "ngClass", "click", 4, "ngIf"], ["mat-menu-item", "", 1, "navigation-menu-item", 3, "ngClass", "click"]],
    template: function NavigationItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NavigationItemComponent_a_0_Template, 5, 14, "a", 0)(1, NavigationItemComponent_div_1_Template, 3, 5, "div", 1)(2, NavigationItemComponent_ng_container_2_Template, 11, 15, "ng-container", 2);
      }
      if (rf & 2) {
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && !ctx.isFunction(ctx.item.route));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && ctx.isFunction(ctx.item.route));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSubheading(ctx.item) && ((tmp_2_0 = ctx.item.children == null ? null : ctx.item.children.length) !== null && tmp_2_0 !== undefined ? tmp_2_0 : 0) > 0 || ctx.isDropdown(ctx.item));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgFor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: [".navigation-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-inline-end: 0.5rem;\n  display: block;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: var(--vex-border-radius);\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  text-decoration-line: none;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.navigation-color[_ngcontent-%COMP%] {\n  color: var(--vex-navigation-color);\n}\n\n.navigation-menu-item[_ngcontent-%COMP%] {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.navigation-menu-item[_ngcontent-%COMP%]:hover {\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-color-primary-600) / var(--tw-text-opacity));\n}\n.navigation-menu-item[_ngcontent-%COMP%]:hover   .mat-icon[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-color-primary-600) / var(--tw-text-opacity));\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi1pdGVtL25hdmlnYXRpb24taXRlbS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL3VuaWdlc3RfZnJvbnQlMjBjb3BpZS9zcmMvYXBwL2xheW91dHMvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24taXRlbS9uYXZpZ2F0aW9uLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxrQkFBQTtFQUFBLHlCQUFBO0VBQUEsY0FBQTtFQUFBLGVBQUE7RUFBQSx5QkFBQTtVQUFBLGlCQUFBO0VBQUEsdUNBQUE7RUFBQSxrQkFBQTtFQUFBLG1CQUFBO0VBQUEsbUJBQUE7RUFBQSxzQkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxnQkFBQTtFQUFBLDBCQUFBO0VBQ0Esd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFEQTs7QUFJRjtFQUNFLGtDQUFBO0FDQ0Y7O0FER0U7RUFBQSx3QkFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQTtBQUFBO0FBR0U7RUFBQSxvQkFBQTtFQUFBO0FBQUE7QUFHRTtFQUFBLG9CQUFBO0VBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9uLWl0ZW0ge1xuICBAYXBwbHkgcm91bmRlZCBjdXJzb3ItcG9pbnRlciB0ZXh0LXNtIGZvbnQtbWVkaXVtIHB4LTQgcHktMiByZWxhdGl2ZSBzZWxlY3Qtbm9uZSBuby11bmRlcmxpbmUgYmxvY2sgbWUtMjtcbiAgQGFwcGx5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTQwMCBlYXNlLW91dC1zd2lmdDtcbn1cblxuLm5hdmlnYXRpb24tY29sb3Ige1xuICBjb2xvcjogdmFyKC0tdmV4LW5hdmlnYXRpb24tY29sb3IpO1xufVxuXG4ubmF2aWdhdGlvbi1tZW51LWl0ZW0ge1xuICBAYXBwbHkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNDAwIGVhc2Utb3V0LXN3aWZ0O1xuXG4gICY6aG92ZXIge1xuICAgIEBhcHBseSB0ZXh0LXByaW1hcnktNjAwO1xuXG4gICAgLm1hdC1pY29uIHtcbiAgICAgIEBhcHBseSB0ZXh0LXByaW1hcnktNjAwO1xuICAgIH1cbiAgfVxufVxuIiwiLm5hdmlnYXRpb24taXRlbSB7XG4gIEBhcHBseSByb3VuZGVkIGN1cnNvci1wb2ludGVyIHRleHQtc20gZm9udC1tZWRpdW0gcHgtNCBweS0yIHJlbGF0aXZlIHNlbGVjdC1ub25lIG5vLXVuZGVybGluZSBibG9jayBtZS0yO1xuICBAYXBwbHkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNDAwIGVhc2Utb3V0LXN3aWZ0O1xufVxuXG4ubmF2aWdhdGlvbi1jb2xvciB7XG4gIGNvbG9yOiB2YXIoLS12ZXgtbmF2aWdhdGlvbi1jb2xvcik7XG59XG5cbi5uYXZpZ2F0aW9uLW1lbnUtaXRlbSB7XG4gIEBhcHBseSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi00MDAgZWFzZS1vdXQtc3dpZnQ7XG59XG4ubmF2aWdhdGlvbi1tZW51LWl0ZW06aG92ZXIge1xuICBAYXBwbHkgdGV4dC1wcmltYXJ5LTYwMDtcbn1cbi5uYXZpZ2F0aW9uLW1lbnUtaXRlbTpob3ZlciAubWF0LWljb24ge1xuICBAYXBwbHkgdGV4dC1wcmltYXJ5LTYwMDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9373:
/*!***********************************************************************!*\
  !*** ./src/app/layouts/components/navigation/navigation.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationComponent: () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation-item/navigation-item.component */ 9208);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/navigation/navigation.service */ 120);




function NavigationComponent_vex_navigation_item_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "vex-navigation-item", 3);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", item_r1);
  }
}
class NavigationComponent {
  constructor(navigationService) {
    this.navigationService = navigationService;
    this.items$ = this.navigationService.items$;
  }
  static #_ = this.ɵfac = function NavigationComponent_Factory(t) {
    return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__.NavigationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NavigationComponent,
    selectors: [["vex-navigation"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 3,
    consts: [[1, "border-b"], [1, "navigation", "flex", "items-center", "container"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]],
    template: function NavigationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavigationComponent_vex_navigation_item_2_Template, 1, 1, "vex-navigation-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx.items$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor, _navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_0__.NavigationItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  background: var(--vex-navigation-background);\n  display: block;\n  height: var(--vex-navigation-height);\n  position: relative;\n  z-index: 200;\n}\n\n.navigation[_ngcontent-%COMP%] {\n  height: var(--vex-navigation-height);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL3VuaWdlc3RfZnJvbnQlMjBjb3BpZS9zcmMvYXBwL2xheW91dHMvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0Q0FBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7QUNDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LW5hdmlnYXRpb24tYmFja2dyb3VuZCk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IHZhcigtLXZleC1uYXZpZ2F0aW9uLWhlaWdodCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjAwO1xufVxuXG4ubmF2aWdhdGlvbiB7XG4gIGhlaWdodDogdmFyKC0tdmV4LW5hdmlnYXRpb24taGVpZ2h0KTtcbn1cbiIsIjpob3N0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LW5hdmlnYXRpb24tYmFja2dyb3VuZCk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IHZhcigtLXZleC1uYXZpZ2F0aW9uLWhlaWdodCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjAwO1xufVxuXG4ubmF2aWdhdGlvbiB7XG4gIGhlaWdodDogdmFyKC0tdmV4LW5hdmlnYXRpb24taGVpZ2h0KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4132:
/*!***********************************************************************!*\
  !*** ./src/app/layouts/components/quickpanel/quickpanel.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuickpanelComponent: () => (/* binding */ QuickpanelComponent)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 7765);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);











const _c0 = () => [];
class QuickpanelComponent {
  constructor() {
    this.date = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().toFormat('DD');
    this.dayName = luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().toFormat('EEEE');
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function QuickpanelComponent_Factory(t) {
    return new (t || QuickpanelComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: QuickpanelComponent,
    selectors: [["vex-quickpanel"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 67,
    vars: 19,
    consts: [[1, "body-2", "p-6", "bg-primary-600", "text-on-primary-600"], [1, "display-1"], ["matSubheader", ""], ["mat-list-item", "", 3, "routerLink"], ["matListItemTitle", ""], ["matListItemLine", ""], ["matRipple", "", 1, "vex-list-item"], [1, "progress-bar"], ["color", "primary", "mode", "determinate", 3, "value"], ["color", "accent", "mode", "determinate", 3, "value"], ["color", "warn", "mode", "determinate", 3, "value"]],
    template: function QuickpanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-nav-list")(9, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "UPCOMING EVENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 3)(12, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Business Meeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "In 16 Minutes, Meeting Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 3)(17, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Ask for Vacation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "12:00 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 3)(22, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Dinner with Sophie");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "18:30 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 3)(27, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Deadline for Project X");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "21:00 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "TODO-LIST");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 3)(35, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Invite Jack to play golf");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Added: 6 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 3)(40, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Get to know Angular more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Added: 2 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 3)(45, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Configure that new router");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Added: 5 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "SERVER STATISTICS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 6)(53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "CPU Load (71% / 100%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "mat-progress-bar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 6)(58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "RAM Usage (6,175 MB / 16,384 MB)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "mat-progress-bar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 6)(63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "CPU Temp (43\u00B0 / 80\u00B0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "mat-progress-bar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dayName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 54);
      }
    },
    dependencies: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListSubheaderCssMatStyler, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItemLine, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItemTitle, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBarModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBar],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-width: 80vw;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.vex-list-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 72px;\n  position: relative;\n  -webkit-user-select: none;\n          user-select: none;\n  padding: 1rem;\n  padding-top: 0px;\n}\n.vex-list-item[_ngcontent-%COMP%]:hover {\n  background: var(--vex-background-hover);\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL3F1aWNrcGFuZWwvcXVpY2twYW5lbC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL3VuaWdlc3RfZnJvbnQlMjBjb3BpZS9zcmMvYXBwL2xheW91dHMvY29tcG9uZW50cy9xdWlja3BhbmVsL3F1aWNrcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtBQ0FGOztBREdBO0VBQ0UsU0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxhQUFBO0VBQUEsZ0JBQUE7QUNBRjtBREVFO0VBQ0UsdUNBQUE7QUNBSjs7QURJQTtFQUNFLGVBQUE7QUNERiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIG1heC13aWR0aDogODB2dztcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnZleC1saXN0LWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA3MnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBAYXBwbHkgcC00IHB0LTA7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpO1xuICB9XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4MHZ3O1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4udmV4LWxpc3QtaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDcycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIEBhcHBseSBwLTQgcHQtMDtcbn1cbi52ZXgtbGlzdC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LWJhY2tncm91bmQtaG92ZXIpO1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4914:
/*!***********************************************************************************!*\
  !*** ./src/app/layouts/components/sidenav/search-modal/search-modal.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchModalComponent: () => (/* binding */ SearchModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);








class SearchModalComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function SearchModalComponent_Factory(t) {
    return new (t || SearchModalComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SearchModalComponent,
    selectors: [["vex-search-modal"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 66,
    vars: 0,
    consts: [[1, "flex", "items-center", "gap-4", "px-6", "py-3", "border-b", "border-divider"], ["svgIcon", "mat:search", 1, "text-secondary", "flex-none"], ["type", "text", "placeholder", "Search...", 1, "text-xl", "font-medium", "bg-transparent", "outline-none", "flex-auto", "placeholder-secondary"], ["type", "button", "mat-icon-button", "", 1, "flex-none", "ltr:-mr-2", "rtl:-ml-2", "text-secondary"], ["svgIcon", "mat:settings"], [1, "p-4"], [1, "text-xs", "font-semibold", "text-secondary", "px-2", "mb-2"], [1, "space-y-1"], ["matRipple", "", 1, "px-2", "py-2", "hover:bg-hover", "rounded", "transition", "duration-200", "ease-out", "flex", "items-center", "gap-4", "cursor-pointer", "select-none"], ["src", "assets/img/avatars/4.jpg", 1, "w-8", "h-8", "rounded-full", "flex-none"], [1, "flex-auto", "text-base", "font-medium"], [1, "flex-none", "text-xs", "text-secondary", "font-medium", "flex", "items-center", "gap-2"], ["svgIcon", "mat:contacts", 1, "icon-xs", "flex-none"], ["svgIcon", "mat:chevron_right", 1, "icon-sm", "flex-none"], ["src", "assets/img/avatars/3.jpg", 1, "w-8", "h-8", "rounded-full", "flex-none"], [1, "flex", "items-center", "justify-center", "w-8", "h-8", "rounded-full", "bg-foreground/20"], ["svgIcon", "mat:web", 1, "icon-sm", "flex-none"], [1, "text-secondary", "text-xs"], ["svgIcon", "mat:check", "color", "primary", 1, "icon-sm", "flex-none"]],
    template: function SearchModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 1)(3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Contacts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Alice Miller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11)(15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "found in Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Frank White");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11)(24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "found in Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5)(29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7)(32, "div", 8)(33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10)(36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Scrumboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "/apps/scrumboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8)(42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10)(45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Mailbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "/apps/mailbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5)(51, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 7)(54, "div", 8)(55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Configure OrderController as defined in RVT-11 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8)(61, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Add more data-models to product-controller ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatIconButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple]
  });
}

/***/ }),

/***/ 6463:
/*!***********************************************************************************!*\
  !*** ./src/app/layouts/components/sidenav/sidenav-item/sidenav-item.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidenavItemComponent: () => (/* binding */ SidenavItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _vex_animations_dropdown_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/animations/dropdown.animation */ 3943);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/navigation/navigation.service */ 120);













function SidenavItemComponent_a_0_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 7);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", ctx_r4.item.icon);
  }
}
const _c0 = (a0, a1) => [a0, a1];
function SidenavItemComponent_a_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, ctx_r5.item.badge.bgClass, ctx_r5.item.badge.textClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.item.badge.value);
  }
}
const _c1 = () => ({
  exact: false
});
function SidenavItemComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidenavItemComponent_a_0_mat_icon_1_Template, 1, 1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SidenavItemComponent_a_0_span_4_Template, 2, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fragment", ctx_r0.item.fragment)("routerLinkActiveOptions", ctx_r0.item.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1))("routerLink", ctx_r0.item.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.level === 0 && ctx_r0.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.item.badge);
  }
}
function SidenavItemComponent_div_1_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 7);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", ctx_r6.item.icon);
  }
}
function SidenavItemComponent_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, ctx_r7.item.badge.bgClass, ctx_r7.item.badge.textClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r7.item.badge.value);
  }
}
function SidenavItemComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidenavItemComponent_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.item.route());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidenavItemComponent_div_1_mat_icon_1_Template, 1, 1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SidenavItemComponent_div_1_span_4_Template, 2, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.level === 0 && ctx_r1.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.item.badge);
  }
}
function SidenavItemComponent_ng_container_2_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-icon", 7);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", ctx_r10.item.icon);
  }
}
function SidenavItemComponent_ng_container_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, ctx_r11.item.badge.bgClass, ctx_r11.item.badge.textClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r11.item.badge.value);
  }
}
function SidenavItemComponent_ng_container_2_vex_sidenav_item_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "vex-sidenav-item", 14);
  }
  if (rf & 2) {
    const subItem_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", subItem_r13)("level", ctx_r12.level + 1);
  }
}
function SidenavItemComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidenavItemComponent_ng_container_2_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.toggleOpen());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SidenavItemComponent_ng_container_2_mat_icon_2_Template, 1, 1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SidenavItemComponent_ng_container_2_span_5_Template, 2, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SidenavItemComponent_ng_container_2_vex_sidenav_item_8_Template, 1, 2, "vex-sidenav-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("vex-sidenav-item--active", ctx_r2.isOpen || ctx_r2.isActive)("vex-sidenav-item--open", ctx_r2.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.level === 0 && ctx_r2.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.item.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@dropdown", ctx_r2.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.item.children);
  }
}
function SidenavItemComponent_ng_container_3_vex_sidenav_item_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "vex-sidenav-item", 14);
  }
  if (rf & 2) {
    const subItem_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("item", subItem_r17)("level", 0);
  }
}
function SidenavItemComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SidenavItemComponent_ng_container_3_vex_sidenav_item_3_Template, 1, 2, "vex-sidenav-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.item.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.item.children);
  }
}
class SidenavItemComponent {
  constructor(router, cd, navigationService) {
    this.router = router;
    this.cd = cd;
    this.navigationService = navigationService;
    this.isOpen = false;
    this.isActive = false;
    this.isLink = this.navigationService.isLink;
    this.isDropdown = this.navigationService.isDropdown;
    this.isSubheading = this.navigationService.isSubheading;
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.DestroyRef);
  }
  get levelClass() {
    return `item-level-${this.level}`;
  }
  ngOnInit() {
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(() => this.isDropdown(this.item)), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__.takeUntilDestroyed)(this.destroyRef)).subscribe(() => this.onRouteChange());
    this.navigationService.openChange$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(() => this.isDropdown(this.item)), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__.takeUntilDestroyed)(this.destroyRef)).subscribe(item => this.onOpenChange(item));
  }
  ngOnChanges(changes) {
    if (changes && changes.hasOwnProperty('item') && this.isDropdown(this.item)) {
      this.onRouteChange();
    }
  }
  toggleOpen() {
    this.isOpen = !this.isOpen;
    this.navigationService.triggerOpenChange(this.item);
    this.cd.markForCheck();
  }
  onOpenChange(item) {
    if (this.isChildrenOf(this.item, item)) {
      return;
    }
    if (this.hasActiveChilds(this.item)) {
      return;
    }
    if (this.item !== item) {
      this.isOpen = false;
      this.cd.markForCheck();
    }
  }
  onRouteChange() {
    if (this.hasActiveChilds(this.item)) {
      this.isActive = true;
      this.isOpen = true;
      this.navigationService.triggerOpenChange(this.item);
      this.cd.markForCheck();
    } else {
      this.isActive = false;
      this.isOpen = false;
      this.navigationService.triggerOpenChange(this.item);
      this.cd.markForCheck();
    }
  }
  isChildrenOf(parent, item) {
    if (parent.children.indexOf(item) !== -1) {
      return true;
    }
    return parent.children.filter(child => this.isDropdown(child)).some(child => this.isChildrenOf(child, item));
  }
  hasActiveChilds(parent) {
    return parent.children.some(child => {
      if (this.isDropdown(child)) {
        return this.hasActiveChilds(child);
      }
      if (this.isLink(child) && !this.isFunction(child.route)) {
        return this.router.isActive(child.route, false);
      }
    });
  }
  isFunction(prop) {
    return prop instanceof Function;
  }
  static #_ = this.ɵfac = function SidenavItemComponent_Factory(t) {
    return new (t || SidenavItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_1__.NavigationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SidenavItemComponent,
    selectors: [["vex-sidenav-item"]],
    hostVars: 2,
    hostBindings: function SidenavItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.levelClass);
      }
    },
    inputs: {
      item: "item",
      level: "level"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 4,
    consts: [["class", "vex-sidenav-item", "matRipple", "", "matRippleColor", "var(--vex-sidenav-item-ripple-color)", "routerLinkActive", "vex-sidenav-item--active", 3, "fragment", "routerLinkActiveOptions", "routerLink", 4, "ngIf"], ["class", "vex-sidenav-item", "matRipple", "", "matRippleColor", "var(--vex-sidenav-item-ripple-color)", "routerLinkActive", "vex-sidenav-item--active", 3, "click", 4, "ngIf"], [4, "ngIf"], ["matRipple", "", "matRippleColor", "var(--vex-sidenav-item-ripple-color)", "routerLinkActive", "vex-sidenav-item--active", 1, "vex-sidenav-item", 3, "fragment", "routerLinkActiveOptions", "routerLink"], ["class", "vex-sidenav-item__icon", 3, "svgIcon", 4, "ngIf"], [1, "vex-sidenav-item__label"], ["class", "vex-sidenav-item__badge", 3, "ngClass", 4, "ngIf"], [1, "vex-sidenav-item__icon", 3, "svgIcon"], [1, "vex-sidenav-item__badge", 3, "ngClass"], ["matRipple", "", "matRippleColor", "var(--vex-sidenav-item-ripple-color)", "routerLinkActive", "vex-sidenav-item--active", 1, "vex-sidenav-item", 3, "click"], ["matRipple", "", "matRippleColor", "var(--vex-sidenav-item-ripple-color)", 1, "vex-sidenav-item", 3, "click"], ["svgIcon", "mat:keyboard_arrow_right", 1, "vex-sidenav-item__dropdown-icon"], [1, "vex-sidenav-item__dropdown"], [3, "item", "level", 4, "ngFor", "ngForOf"], [3, "item", "level"], [1, "vex-sidenav-subheading"]],
    template: function SidenavItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SidenavItemComponent_a_0_Template, 5, 7, "a", 0)(1, SidenavItemComponent_div_1_Template, 5, 3, "div", 1)(2, SidenavItemComponent_ng_container_2_Template, 9, 9, "ng-container", 2)(3, SidenavItemComponent_ng_container_3_Template, 4, 2, "ng-container", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && !ctx.isFunction(ctx.item.route));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLink(ctx.item) && ctx.isFunction(ctx.item.route));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDropdown(ctx.item));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSubheading(ctx.item));
      }
    },
    dependencies: [SidenavItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRipple, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgFor],
    styles: [".vex-sidenav-item[_ngcontent-%COMP%] {\n  align-items: center;\n  box-sizing: border-box;\n  color: var(--vex-sidenav-item-color);\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  min-height: var(--vex-sidenav-item-min-height);\n  padding: var(--vex-sidenav-item-padding-vertical) var(--vex-sidenav-item-padding-horizontal);\n  position: relative;\n  text-decoration: none;\n  -webkit-user-select: none;\n          user-select: none;\n  font-weight: var(--vex-sidenav-item-font-weight);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-background-active);\n}\n.vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__icon[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-icon-color-active);\n}\n.vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-color-active);\n}\n.vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__dropdown-icon[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-color-active);\n}\n.vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--vex-sidenav-item-background-hover);\n}\n.vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__icon[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-icon-color-hover);\n}\n.vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-color-hover);\n}\n.vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__dropdown-icon[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-color-hover);\n}\n.vex-sidenav-item.vex-sidenav-item--open[_ngcontent-%COMP%]   .vex-sidenav-item__dropdown-icon[_ngcontent-%COMP%] {\n  transform: rotate(90deg) !important;\n}\n\n.item-level-1[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--vex-sidenav-item-icon-size) + var(--vex-sidenav-item-icon-gap) + var(--vex-sidenav-item-padding-horizontal) + var(--vex-sidenav-item-dropdown-gap) * 0);\n}\n.item-level-1[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background-active);\n}\n.item-level-1[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-active);\n}\n.item-level-1[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--vex-sidenav-item-dropdown-background-hover);\n}\n.item-level-1[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-hover);\n}\n\n.item-level-2[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--vex-sidenav-item-icon-size) + var(--vex-sidenav-item-icon-gap) + var(--vex-sidenav-item-padding-horizontal) + var(--vex-sidenav-item-dropdown-gap) * 1);\n}\n.item-level-2[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background-active);\n}\n.item-level-2[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-active);\n}\n.item-level-2[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--vex-sidenav-item-dropdown-background-hover);\n}\n.item-level-2[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-hover);\n}\n\n.item-level-3[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--vex-sidenav-item-icon-size) + var(--vex-sidenav-item-icon-gap) + var(--vex-sidenav-item-padding-horizontal) + var(--vex-sidenav-item-dropdown-gap) * 2);\n}\n.item-level-3[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background-active);\n}\n.item-level-3[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-active);\n}\n.item-level-3[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--vex-sidenav-item-dropdown-background-hover);\n}\n.item-level-3[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-hover);\n}\n\n.item-level-4[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--vex-sidenav-item-icon-size) + var(--vex-sidenav-item-icon-gap) + var(--vex-sidenav-item-padding-horizontal) + var(--vex-sidenav-item-dropdown-gap) * 3);\n}\n.item-level-4[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background-active);\n}\n.item-level-4[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-active);\n}\n.item-level-4[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--vex-sidenav-item-dropdown-background-hover);\n}\n.item-level-4[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-hover);\n}\n\n.item-level-5[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--vex-sidenav-item-icon-size) + var(--vex-sidenav-item-icon-gap) + var(--vex-sidenav-item-padding-horizontal) + var(--vex-sidenav-item-dropdown-gap) * 4);\n}\n.item-level-5[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background-active);\n}\n.item-level-5[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-active);\n}\n.item-level-5[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--vex-sidenav-item-dropdown-background-hover);\n}\n.item-level-5[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-hover);\n}\n\n.item-level-6[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background);\n  padding-inline-start: calc(var(--vex-sidenav-item-icon-size) + var(--vex-sidenav-item-icon-gap) + var(--vex-sidenav-item-padding-horizontal) + var(--vex-sidenav-item-dropdown-gap) * 5);\n}\n.item-level-6[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-item-dropdown-background-active);\n}\n.item-level-6[_nghost-%COMP%]   .vex-sidenav-item.vex-sidenav-item--active[_ngcontent-%COMP%]   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-active);\n}\n.item-level-6[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover {\n  background: var(--vex-sidenav-item-dropdown-background-hover);\n}\n.item-level-6[_nghost-%COMP%]   .vex-sidenav-item[_ngcontent-%COMP%]:hover   .vex-sidenav-item__label[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-dropdown-color-hover);\n}\n\n.vex-sidenav-item__icon[_ngcontent-%COMP%], .vex-sidenav-item__label[_ngcontent-%COMP%], .vex-sidenav-item__dropdown-icon[_ngcontent-%COMP%] {\n  transition: inherit;\n}\n\n.vex-sidenav-item__icon[_ngcontent-%COMP%] {\n  flex: none;\n  color: var(--vex-sidenav-item-icon-color);\n  font-size: var(--vex-sidenav-item-icon-size);\n  height: var(--vex-sidenav-item-icon-size);\n  margin-inline-end: var(--vex-sidenav-item-icon-gap);\n  width: var(--vex-sidenav-item-icon-size);\n}\n\n.vex-sidenav-item__label[_ngcontent-%COMP%] {\n  flex: auto;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.vex-sidenav-item__badge[_ngcontent-%COMP%] {\n  flex: none;\n  border-radius: 9999px;\n  font-size: 11px;\n  line-height: 20px;\n  padding: 0 7px;\n  text-align: center;\n  font-weight: 700;\n  margin-inline-start: 0.5rem;\n}\n\n.vex-sidenav-item__dropdown-icon[_ngcontent-%COMP%] {\n  color: var(--vex-sidenav-item-icon-color);\n  font-size: 18px;\n  height: 18px;\n  line-height: 18px;\n  transform: rotate(0deg) !important;\n  width: 18px;\n  margin-inline-start: 0.5rem;\n}\n\n.vex-sidenav-item__dropdown[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.vex-sidenav-subheading[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  color: var(--vex-sidenav-subheading-color);\n  text-transform: uppercase;\n  white-space: nowrap;\n  font-weight: 600;\n  -webkit-user-select: none;\n          user-select: none;\n  margin-top: 1.5rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n\n\n[_nghost-%COMP%]:first-child   .vex-sidenav-subheading[_ngcontent-%COMP%] {\n  margin-top: -0.75rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi1pdGVtL3NpZGVuYXYtaXRlbS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL3VuaWdlc3RfZnJvbnQlMjBjb3BpZS9zcmMvYXBwL2xheW91dHMvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYtaXRlbS9zaWRlbmF2LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSw0RkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUEsNERBQUE7QUNDRjtBRENFO0VBQ0UscURBQUE7QUNDSjtBRENJO0VBQ0UsZ0RBQUE7QUNDTjtBREVJO0VBQ0UsMkNBQUE7QUNBTjtBREdJO0VBQ0UsMkNBQUE7QUNETjtBREtFO0VBQ0Usb0RBQUE7QUNISjtBREtJO0VBQ0UsK0NBQUE7QUNITjtBRE1JO0VBQ0UsMENBQUE7QUNKTjtBRE9JO0VBQ0UsMENBQUE7QUNMTjtBRFVJO0VBQ0UsbUNBQUE7QUNSTjs7QURjRTtFQUNFLHVEQUFBO0VBQ0Esd0xBQUE7QUNYSjtBRGtCSTtFQUNFLDhEQUFBO0FDaEJOO0FEa0JNO0VBQ0Usb0RBQUE7QUNoQlI7QURvQkk7RUFDRSw2REFBQTtBQ2xCTjtBRG9CTTtFQUNFLG1EQUFBO0FDbEJSOztBREhFO0VBQ0UsdURBQUE7RUFDQSx3TEFBQTtBQ01KO0FEQ0k7RUFDRSw4REFBQTtBQ0NOO0FEQ007RUFDRSxvREFBQTtBQ0NSO0FER0k7RUFDRSw2REFBQTtBQ0ROO0FER007RUFDRSxtREFBQTtBQ0RSOztBRHBCRTtFQUNFLHVEQUFBO0VBQ0Esd0xBQUE7QUN1Qko7QURoQkk7RUFDRSw4REFBQTtBQ2tCTjtBRGhCTTtFQUNFLG9EQUFBO0FDa0JSO0FEZEk7RUFDRSw2REFBQTtBQ2dCTjtBRGRNO0VBQ0UsbURBQUE7QUNnQlI7O0FEckNFO0VBQ0UsdURBQUE7RUFDQSx3TEFBQTtBQ3dDSjtBRGpDSTtFQUNFLDhEQUFBO0FDbUNOO0FEakNNO0VBQ0Usb0RBQUE7QUNtQ1I7QUQvQkk7RUFDRSw2REFBQTtBQ2lDTjtBRC9CTTtFQUNFLG1EQUFBO0FDaUNSOztBRHRERTtFQUNFLHVEQUFBO0VBQ0Esd0xBQUE7QUN5REo7QURsREk7RUFDRSw4REFBQTtBQ29ETjtBRGxETTtFQUNFLG9EQUFBO0FDb0RSO0FEaERJO0VBQ0UsNkRBQUE7QUNrRE47QURoRE07RUFDRSxtREFBQTtBQ2tEUjs7QUR2RUU7RUFDRSx1REFBQTtFQUNBLHdMQUFBO0FDMEVKO0FEbkVJO0VBQ0UsOERBQUE7QUNxRU47QURuRU07RUFDRSxvREFBQTtBQ3FFUjtBRGpFSTtFQUNFLDZEQUFBO0FDbUVOO0FEakVNO0VBQ0UsbURBQUE7QUNtRVI7O0FEN0RBOzs7RUFHRSxtQkFBQTtBQ2dFRjs7QUQ3REE7RUFDRSxVQUFBO0VBQ0EseUNBQUE7RUFDQSw0Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsbURBQUE7RUFDQSx3Q0FBQTtBQ2dFRjs7QUQ3REE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDZ0VGOztBRDdEQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUNnRUY7O0FEN0RBO0VBQ0UseUNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUNnRUY7O0FEN0RBO0VBQ0UsZ0JBQUE7QUNnRUY7O0FEN0RBO0VBQ0Usc0JBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUFBLG9CQUFBO0VBQUEsdUJBQUE7RUFBQSxvQkFBQTtFQUFBLHFCQUFBO0VBQUEsa0JBQUE7RUFBQSxpQkFBQTtBQ2dFRjs7QUQ3REEsZ0RBQUE7QUFFRTtFQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIudmV4LXNpZGVuYXYtaXRlbSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtaW4taGVpZ2h0OiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLW1pbi1oZWlnaHQpO1xuICBwYWRkaW5nOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLXBhZGRpbmctdmVydGljYWwpIHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tcGFkZGluZy1ob3Jpem9udGFsKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBmb250LXdlaWdodDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1mb250LXdlaWdodCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBAYXBwbHkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNDAwIGVhc2Utb3V0LXN3aWZ0O1xuXG4gICYudmV4LXNpZGVuYXYtaXRlbS0tYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWJhY2tncm91bmQtYWN0aXZlKTtcblxuICAgIC52ZXgtc2lkZW5hdi1pdGVtX19pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tY29sb3ItYWN0aXZlKTtcbiAgICB9XG5cbiAgICAudmV4LXNpZGVuYXYtaXRlbV9fbGFiZWwge1xuICAgICAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tY29sb3ItYWN0aXZlKTtcbiAgICB9XG5cbiAgICAudmV4LXNpZGVuYXYtaXRlbV9fZHJvcGRvd24taWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1jb2xvci1hY3RpdmUpO1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tYmFja2dyb3VuZC1ob3Zlcik7XG5cbiAgICAudmV4LXNpZGVuYXYtaXRlbV9faWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1pY29uLWNvbG9yLWhvdmVyKTtcbiAgICB9XG5cbiAgICAudmV4LXNpZGVuYXYtaXRlbV9fbGFiZWwge1xuICAgICAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tY29sb3ItaG92ZXIpO1xuICAgIH1cblxuICAgIC52ZXgtc2lkZW5hdi1pdGVtX19kcm9wZG93bi1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWNvbG9yLWhvdmVyKTtcbiAgICB9XG4gIH1cblxuICAmLnZleC1zaWRlbmF2LWl0ZW0tLW9wZW4ge1xuICAgIC52ZXgtc2lkZW5hdi1pdGVtX19kcm9wZG93bi1pY29uIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG5AZm9yICRpIGZyb20gMSB0aHJvdWdoIDYge1xuICA6aG9zdCguaXRlbS1sZXZlbC0jeyRpfSkgLnZleC1zaWRlbmF2LWl0ZW0ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZCk7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IGNhbGMoXG4gICAgICB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgK1xuICAgICAgdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1pY29uLWdhcCkgK1xuICAgICAgdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1wYWRkaW5nLWhvcml6b250YWwpICtcbiAgICAgICh2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWdhcCkgKiAjeyRpIC0gMX0pXG4gICAgKTtcblxuICAgICYudmV4LXNpZGVuYXYtaXRlbS0tYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tYmFja2dyb3VuZC1hY3RpdmUpO1xuXG4gICAgICAudmV4LXNpZGVuYXYtaXRlbV9fbGFiZWwge1xuICAgICAgICBjb2xvcjogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1kcm9wZG93bi1jb2xvci1hY3RpdmUpO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWhvdmVyKTtcblxuICAgICAgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tY29sb3ItaG92ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udmV4LXNpZGVuYXYtaXRlbV9faWNvbixcbi52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCxcbi52ZXgtc2lkZW5hdi1pdGVtX19kcm9wZG93bi1pY29uIHtcbiAgdHJhbnNpdGlvbjogaW5oZXJpdDtcbn1cblxuLnZleC1zaWRlbmF2LWl0ZW1fX2ljb24ge1xuICBmbGV4OiBub25lO1xuICBjb2xvcjogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1pY29uLWNvbG9yKTtcbiAgZm9udC1zaXplOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1pY29uLXNpemUpO1xuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1pY29uLWdhcCk7XG4gIHdpZHRoOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XG59XG5cbi52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCB7XG4gIGZsZXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udmV4LXNpZGVuYXYtaXRlbV9fYmFkZ2Uge1xuICBmbGV4OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDAgN3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIEBhcHBseSBtcy0yO1xufVxuXG4udmV4LXNpZGVuYXYtaXRlbV9fZHJvcGRvd24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tY29sb3IpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxOHB4O1xuICBAYXBwbHkgbXMtMjtcbn1cblxuLnZleC1zaWRlbmF2LWl0ZW1fX2Ryb3Bkb3duIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnZleC1zaWRlbmF2LXN1YmhlYWRpbmcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogdmFyKC0tdmV4LXNpZGVuYXYtc3ViaGVhZGluZy1jb2xvcik7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBAYXBwbHkgdGV4dC14cyBweS0zIHB4LTYgbXQtNjtcbn1cblxuLyoqIElmIGZpcnN0IGl0ZW0gaXMgc3ViaGVhZGluZywgcmVtb3ZlIG1hcmdpbiAqL1xuOmhvc3QoOmZpcnN0LWNoaWxkKSAudmV4LXNpZGVuYXYtc3ViaGVhZGluZyB7XG4gIEBhcHBseSAtbXQtMztcbn1cbiIsIi52ZXgtc2lkZW5hdi1pdGVtIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1pbi1oZWlnaHQ6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tbWluLWhlaWdodCk7XG4gIHBhZGRpbmc6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tcGFkZGluZy12ZXJ0aWNhbCkgdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1wYWRkaW5nLWhvcml6b250YWwpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWZvbnQtd2VpZ2h0KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIEBhcHBseSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi00MDAgZWFzZS1vdXQtc3dpZnQ7XG59XG4udmV4LXNpZGVuYXYtaXRlbS52ZXgtc2lkZW5hdi1pdGVtLS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWJhY2tncm91bmQtYWN0aXZlKTtcbn1cbi52ZXgtc2lkZW5hdi1pdGVtLnZleC1zaWRlbmF2LWl0ZW0tLWFjdGl2ZSAudmV4LXNpZGVuYXYtaXRlbV9faWNvbiB7XG4gIGNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tY29sb3ItYWN0aXZlKTtcbn1cbi52ZXgtc2lkZW5hdi1pdGVtLnZleC1zaWRlbmF2LWl0ZW0tLWFjdGl2ZSAudmV4LXNpZGVuYXYtaXRlbV9fbGFiZWwge1xuICBjb2xvcjogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1jb2xvci1hY3RpdmUpO1xufVxuLnZleC1zaWRlbmF2LWl0ZW0udmV4LXNpZGVuYXYtaXRlbS0tYWN0aXZlIC52ZXgtc2lkZW5hdi1pdGVtX19kcm9wZG93bi1pY29uIHtcbiAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tY29sb3ItYWN0aXZlKTtcbn1cbi52ZXgtc2lkZW5hdi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cbi52ZXgtc2lkZW5hdi1pdGVtOmhvdmVyIC52ZXgtc2lkZW5hdi1pdGVtX19pY29uIHtcbiAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0taWNvbi1jb2xvci1ob3Zlcik7XG59XG4udmV4LXNpZGVuYXYtaXRlbTpob3ZlciAudmV4LXNpZGVuYXYtaXRlbV9fbGFiZWwge1xuICBjb2xvcjogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1jb2xvci1ob3Zlcik7XG59XG4udmV4LXNpZGVuYXYtaXRlbTpob3ZlciAudmV4LXNpZGVuYXYtaXRlbV9fZHJvcGRvd24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWNvbG9yLWhvdmVyKTtcbn1cbi52ZXgtc2lkZW5hdi1pdGVtLnZleC1zaWRlbmF2LWl0ZW0tLW9wZW4gLnZleC1zaWRlbmF2LWl0ZW1fX2Ryb3Bkb3duLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgIWltcG9ydGFudDtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtMSkgLnZleC1zaWRlbmF2LWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgKyB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tZ2FwKSArIHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tcGFkZGluZy1ob3Jpem9udGFsKSArIHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tZ2FwKSAqIDApO1xufVxuOmhvc3QoLml0ZW0tbGV2ZWwtMSkgLnZleC1zaWRlbmF2LWl0ZW0udmV4LXNpZGVuYXYtaXRlbS0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWFjdGl2ZSk7XG59XG46aG9zdCguaXRlbS1sZXZlbC0xKSAudmV4LXNpZGVuYXYtaXRlbS52ZXgtc2lkZW5hdi1pdGVtLS1hY3RpdmUgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcbiAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tY29sb3ItYWN0aXZlKTtcbn1cbjpob3N0KC5pdGVtLWxldmVsLTEpIC52ZXgtc2lkZW5hdi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cbjpob3N0KC5pdGVtLWxldmVsLTEpIC52ZXgtc2lkZW5hdi1pdGVtOmhvdmVyIC52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWNvbG9yLWhvdmVyKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtMikgLnZleC1zaWRlbmF2LWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgKyB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tZ2FwKSArIHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tcGFkZGluZy1ob3Jpem9udGFsKSArIHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tZ2FwKSAqIDEpO1xufVxuOmhvc3QoLml0ZW0tbGV2ZWwtMikgLnZleC1zaWRlbmF2LWl0ZW0udmV4LXNpZGVuYXYtaXRlbS0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWFjdGl2ZSk7XG59XG46aG9zdCguaXRlbS1sZXZlbC0yKSAudmV4LXNpZGVuYXYtaXRlbS52ZXgtc2lkZW5hdi1pdGVtLS1hY3RpdmUgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcbiAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tY29sb3ItYWN0aXZlKTtcbn1cbjpob3N0KC5pdGVtLWxldmVsLTIpIC52ZXgtc2lkZW5hdi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cbjpob3N0KC5pdGVtLWxldmVsLTIpIC52ZXgtc2lkZW5hdi1pdGVtOmhvdmVyIC52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWNvbG9yLWhvdmVyKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtMykgLnZleC1zaWRlbmF2LWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgKyB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tZ2FwKSArIHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tcGFkZGluZy1ob3Jpem9udGFsKSArIHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tZ2FwKSAqIDIpO1xufVxuOmhvc3QoLml0ZW0tbGV2ZWwtMykgLnZleC1zaWRlbmF2LWl0ZW0udmV4LXNpZGVuYXYtaXRlbS0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWFjdGl2ZSk7XG59XG46aG9zdCguaXRlbS1sZXZlbC0zKSAudmV4LXNpZGVuYXYtaXRlbS52ZXgtc2lkZW5hdi1pdGVtLS1hY3RpdmUgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcbiAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tY29sb3ItYWN0aXZlKTtcbn1cbjpob3N0KC5pdGVtLWxldmVsLTMpIC52ZXgtc2lkZW5hdi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cbjpob3N0KC5pdGVtLWxldmVsLTMpIC52ZXgtc2lkZW5hdi1pdGVtOmhvdmVyIC52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWNvbG9yLWhvdmVyKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtNCkgLnZleC1zaWRlbmF2LWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgKyB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tZ2FwKSArIHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tcGFkZGluZy1ob3Jpem9udGFsKSArIHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tZ2FwKSAqIDMpO1xufVxuOmhvc3QoLml0ZW0tbGV2ZWwtNCkgLnZleC1zaWRlbmF2LWl0ZW0udmV4LXNpZGVuYXYtaXRlbS0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWFjdGl2ZSk7XG59XG46aG9zdCguaXRlbS1sZXZlbC00KSAudmV4LXNpZGVuYXYtaXRlbS52ZXgtc2lkZW5hdi1pdGVtLS1hY3RpdmUgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcbiAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tY29sb3ItYWN0aXZlKTtcbn1cbjpob3N0KC5pdGVtLWxldmVsLTQpIC52ZXgtc2lkZW5hdi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cbjpob3N0KC5pdGVtLWxldmVsLTQpIC52ZXgtc2lkZW5hdi1pdGVtOmhvdmVyIC52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWNvbG9yLWhvdmVyKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtNSkgLnZleC1zaWRlbmF2LWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgKyB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tZ2FwKSArIHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tcGFkZGluZy1ob3Jpem9udGFsKSArIHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tZ2FwKSAqIDQpO1xufVxuOmhvc3QoLml0ZW0tbGV2ZWwtNSkgLnZleC1zaWRlbmF2LWl0ZW0udmV4LXNpZGVuYXYtaXRlbS0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWFjdGl2ZSk7XG59XG46aG9zdCguaXRlbS1sZXZlbC01KSAudmV4LXNpZGVuYXYtaXRlbS52ZXgtc2lkZW5hdi1pdGVtLS1hY3RpdmUgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcbiAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tY29sb3ItYWN0aXZlKTtcbn1cbjpob3N0KC5pdGVtLWxldmVsLTUpIC52ZXgtc2lkZW5hdi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cbjpob3N0KC5pdGVtLWxldmVsLTUpIC52ZXgtc2lkZW5hdi1pdGVtOmhvdmVyIC52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWNvbG9yLWhvdmVyKTtcbn1cblxuOmhvc3QoLml0ZW0tbGV2ZWwtNikgLnZleC1zaWRlbmF2LWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWJhY2tncm91bmQpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tc2l6ZSkgKyB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tZ2FwKSArIHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tcGFkZGluZy1ob3Jpem9udGFsKSArIHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tZ2FwKSAqIDUpO1xufVxuOmhvc3QoLml0ZW0tbGV2ZWwtNikgLnZleC1zaWRlbmF2LWl0ZW0udmV4LXNpZGVuYXYtaXRlbS0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWFjdGl2ZSk7XG59XG46aG9zdCguaXRlbS1sZXZlbC02KSAudmV4LXNpZGVuYXYtaXRlbS52ZXgtc2lkZW5hdi1pdGVtLS1hY3RpdmUgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsIHtcbiAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tZHJvcGRvd24tY29sb3ItYWN0aXZlKTtcbn1cbjpob3N0KC5pdGVtLWxldmVsLTYpIC52ZXgtc2lkZW5hdi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1kcm9wZG93bi1iYWNrZ3JvdW5kLWhvdmVyKTtcbn1cbjpob3N0KC5pdGVtLWxldmVsLTYpIC52ZXgtc2lkZW5hdi1pdGVtOmhvdmVyIC52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWRyb3Bkb3duLWNvbG9yLWhvdmVyKTtcbn1cblxuLnZleC1zaWRlbmF2LWl0ZW1fX2ljb24sXG4udmV4LXNpZGVuYXYtaXRlbV9fbGFiZWwsXG4udmV4LXNpZGVuYXYtaXRlbV9fZHJvcGRvd24taWNvbiB7XG4gIHRyYW5zaXRpb246IGluaGVyaXQ7XG59XG5cbi52ZXgtc2lkZW5hdi1pdGVtX19pY29uIHtcbiAgZmxleDogbm9uZTtcbiAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0taWNvbi1jb2xvcik7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1pY29uLXNpemUpO1xuICBoZWlnaHQ6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0taWNvbi1zaXplKTtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0taWNvbi1nYXApO1xuICB3aWR0aDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1pY29uLXNpemUpO1xufVxuXG4udmV4LXNpZGVuYXYtaXRlbV9fbGFiZWwge1xuICBmbGV4OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnZleC1zaWRlbmF2LWl0ZW1fX2JhZGdlIHtcbiAgZmxleDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAwIDdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xuICBAYXBwbHkgbXMtMjtcbn1cblxuLnZleC1zaWRlbmF2LWl0ZW1fX2Ryb3Bkb3duLWljb24ge1xuICBjb2xvcjogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1pY29uLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSAhaW1wb3J0YW50O1xuICB3aWR0aDogMThweDtcbiAgQGFwcGx5IG1zLTI7XG59XG5cbi52ZXgtc2lkZW5hdi1pdGVtX19kcm9wZG93biB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi52ZXgtc2lkZW5hdi1zdWJoZWFkaW5nIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LXN1YmhlYWRpbmctY29sb3IpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXdlaWdodDogNjAwO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgQGFwcGx5IHRleHQteHMgcHktMyBweC02IG10LTY7XG59XG5cbi8qKiBJZiBmaXJzdCBpdGVtIGlzIHN1YmhlYWRpbmcsIHJlbW92ZSBtYXJnaW4gKi9cbjpob3N0KDpmaXJzdC1jaGlsZCkgLnZleC1zaWRlbmF2LXN1YmhlYWRpbmcge1xuICBAYXBwbHkgLW10LTM7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [_vex_animations_dropdown_animation__WEBPACK_IMPORTED_MODULE_0__.dropdownAnimation]
    },
    changeDetection: 0
  });
}

/***/ }),

/***/ 3569:
/*!*********************************************************************************************!*\
  !*** ./src/app/layouts/components/sidenav/sidenav-user-menu/sidenav-user-menu.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidenavUserMenuComponent: () => (/* binding */ SidenavUserMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 7889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _vex_components_vex_popover_vex_popover_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/components/vex-popover/vex-popover-ref */ 5925);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);










const _c0 = () => ["/apps/social"];
const _c1 = () => ["/"];
const _c2 = () => ["/apps/social/timeline"];
class SidenavUserMenuComponent {
  constructor(popoverRef, cd, authService, router) {
    this.popoverRef = popoverRef;
    this.cd = cd;
    this.authService = authService;
    this.router = router;
  }
  ngOnInit() {}
  close() {
    /** Wait for animation to complete and then close */
    setTimeout(() => this.popoverRef.close(), 250);
  }
  logout() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: "Déconnexion",
      text: "Êtes-vous sûr de vouloir vous déconnecter ?",
      icon: "warning",
      // showCancelButton: true,
      // cancelButtonText: "Non",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui!"
    }).then(result => {
      if (result.isConfirmed) {
        this.authService.logout();
        this.close();
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          title: "Déconnecté!",
          text: "À bientôt",
          icon: "success"
        });
        // 4. Redirection UNIQUEMENT ICI
        this.router.navigate(['/login']);
      } else {
        this.close();
      }
    });
  }
  static #_ = this.ɵfac = function SidenavUserMenuComponent_Factory(t) {
    return new (t || SidenavUserMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_vex_components_vex_popover_vex_popover_ref__WEBPACK_IMPORTED_MODULE_1__.VexPopoverRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SidenavUserMenuComponent,
    selectors: [["vex-sidenav-user-menu"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 25,
    vars: 6,
    consts: [[1, "vex-user-menu"], ["matRipple", "", "matRippleColor", "rgb(var(--vex-color-primary-600), 0.1)", 1, "vex-user-menu-item", 3, "routerLink", "click"], ["svgIcon", "mat:account_circle", 1, "vex-user-menu-item__icon", "icon-sm"], [1, "vex-user-menu-item__label"], ["svgIcon", "mat:insights", 1, "vex-user-menu-item__icon", "icon-sm"], [1, "vex-user-menu-item__badge"], ["svgIcon", "mat:settings", 1, "vex-user-menu-item__icon", "icon-sm"], [1, "border-b", "border-divider", "mx-4"], ["matRipple", "", "matRippleColor", "rgb(var(--vex-color-primary-600), 0.1)", 1, "vex-user-menu-item"], ["svgIcon", "mat:switch_account", 1, "vex-user-menu-item__icon", "icon-sm"], ["svgIcon", "mat:chevron_right", 1, "vex-user-menu-item__icon", "icon-sm"], ["matRipple", "", "matRippleColor", "rgb(var(--vex-color-primary-600), 0.1)", 1, "vex-user-menu-item", 3, "click"], ["svgIcon", "mat:logout", 1, "vex-user-menu-item__icon", "icon-sm"]],
    template: function SidenavUserMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidenavUserMenuComponent_Template_a_click_1_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Your Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidenavUserMenuComponent_Template_a_click_5_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "NEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidenavUserMenuComponent_Template_a_click_11_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Account Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Switch Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidenavUserMenuComponent_Template_a_click_21_listener() {
          return ctx.logout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Sign Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c2));
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRipple, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon],
    styles: [".vex-user-menu[_ngcontent-%COMP%] {\n\n    border-radius: var(--vex-border-radius);\n\n    border-width: 1px;\n\n    border-color: var(--vex-foreground-divider);\n\n    --tw-bg-opacity: 1;\n\n    background-color: rgb(var(--vex-background-card-rgb) / var(--tw-bg-opacity));\n\n    padding-top: 0.5rem;\n\n    padding-bottom: 0.5rem;\n\n    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n\n    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n\n.vex-user-menu-item[_ngcontent-%COMP%] {\n\n    position: relative;\n\n    margin-left: 0.5rem;\n\n    margin-right: 0.5rem;\n\n    display: flex;\n\n    height: 2.5rem;\n\n    cursor: pointer;\n\n    -webkit-user-select: none;\n\n            user-select: none;\n\n    align-items: center;\n\n    gap: 1rem;\n\n    border-radius: var(--vex-border-radius);\n\n    padding-left: 0.5rem;\n\n    padding-right: 0.5rem;\n\n    padding-top: 0.5rem;\n\n    padding-bottom: 0.5rem;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition-duration: 100ms;\n\n    transition-timing-function: cubic-bezier(0, 0, 0.2, 1)\n}\n\n.vex-user-menu-item[_ngcontent-%COMP%]:hover {\n\n    background-color: rgb(var(--vex-color-primary-600) / 0.1)\n}\n.vex-user-menu-item[_ngcontent-%COMP%]:hover   .vex-user-menu-item__icon[_ngcontent-%COMP%] {\n\n    --tw-text-opacity: 1;\n\n    color: rgb(var(--vex-color-primary-600) / var(--tw-text-opacity))\n}\n\n.vex-user-menu-item__label[_ngcontent-%COMP%] {\n\n    flex: 1 1 auto;\n\n    font-weight: 500;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition-duration: 100ms;\n\n    transition-timing-function: cubic-bezier(0, 0, 0.2, 1)\n}\n\n.vex-user-menu-item__badge[_ngcontent-%COMP%] {\n\n    flex: none;\n\n    border-radius: var(--vex-border-radius);\n\n    background-color: rgb(var(--vex-color-primary-600) / 0.1);\n\n    padding-left: 0.5rem;\n\n    padding-right: 0.5rem;\n\n    padding-top: 0.25rem;\n\n    padding-bottom: 0.25rem;\n\n    font-size: 0.625rem;\n\n    font-weight: 600;\n\n    --tw-text-opacity: 1;\n\n    color: rgb(var(--vex-color-primary-600) / var(--tw-text-opacity))\n}\n\n.vex-user-menu-item__icon[_ngcontent-%COMP%] {\n\n    flex: none;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n\n    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    transition-duration: 100ms;\n\n    transition-timing-function: cubic-bezier(0, 0, 0.2, 1)\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi11c2VyLW1lbnUvc2lkZW5hdi11c2VyLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7O0lBQUEsdUNBQUE7O0lBQUEsaUJBQUE7O0lBQUEsMkNBQUE7O0lBQUEsa0JBQUE7O0lBQUEsNEVBQUE7O0lBQUEsbUJBQUE7O0lBQUEsc0JBQUE7O0lBQUEsK0VBQUE7O0lBQUEsbUdBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxrQkFBQTs7SUFBQSxtQkFBQTs7SUFBQSxvQkFBQTs7SUFBQSxhQUFBOztJQUFBLGNBQUE7O0lBQUEsZUFBQTs7SUFBQSx5QkFBQTs7WUFBQSxpQkFBQTs7SUFBQSxtQkFBQTs7SUFBQSxTQUFBOztJQUFBLHVDQUFBOztJQUFBLG9CQUFBOztJQUFBLHFCQUFBOztJQUFBLG1CQUFBOztJQUFBLHNCQUFBOztJQUFBLGdLQUFBOztJQUFBLHdKQUFBOztJQUFBLGlMQUFBOztJQUFBLHdEQUFBOztJQUFBLDBCQUFBOztJQUFBO0FBQUE7O0FBQUE7O0lBQUE7QUFBQTtBQUlJOztJQUFBLG9CQUFBOztJQUFBO0FBQUE7O0FBTUo7O0lBQUEsY0FBQTs7SUFBQSxnQkFBQTs7SUFBQSxnS0FBQTs7SUFBQSx3SkFBQTs7SUFBQSxpTEFBQTs7SUFBQSx3REFBQTs7SUFBQSwwQkFBQTs7SUFBQTtBQUFBOztBQUlBOztJQUFBLFVBQUE7O0lBQUEsdUNBQUE7O0lBQUEseURBQUE7O0lBQUEsb0JBQUE7O0lBQUEscUJBQUE7O0lBQUEsb0JBQUE7O0lBQUEsdUJBQUE7O0lBQUEsbUJBQUE7O0lBQUEsZ0JBQUE7O0lBQUEsb0JBQUE7O0lBQUE7QUFBQTs7QUFJQTs7SUFBQSxVQUFBOztJQUFBLGdLQUFBOztJQUFBLHdKQUFBOztJQUFBLGlMQUFBOztJQUFBLHdEQUFBOztJQUFBLDBCQUFBOztJQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIudmV4LXVzZXItbWVudSB7XG4gIEBhcHBseSBiZy1mb3JlZ3JvdW5kIHNoYWRvdy1sZyBib3JkZXIgYm9yZGVyLWRpdmlkZXIgcm91bmRlZCBweS0yO1xufVxuXG4udmV4LXVzZXItbWVudS1pdGVtIHtcbiAgQGFwcGx5IHJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGdhcC00IHB4LTIgbXgtMiBweS0yIHJvdW5kZWQgaG92ZXI6YmctcHJpbWFyeS02MDAvMTAgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xMDAgZWFzZS1vdXQgc2VsZWN0LW5vbmUgaC0xMDtcblxuICAmOmhvdmVyIHtcbiAgICAudmV4LXVzZXItbWVudS1pdGVtX19pY29uIHtcbiAgICAgIEBhcHBseSB0ZXh0LXByaW1hcnktNjAwO1xuICAgIH1cbiAgfVxufVxuXG4udmV4LXVzZXItbWVudS1pdGVtX19sYWJlbCB7XG4gIEBhcHBseSBmbGV4LWF1dG8gZm9udC1tZWRpdW0gdHJhbnNpdGlvbiBkdXJhdGlvbi0xMDAgZWFzZS1vdXQ7XG59XG5cbi52ZXgtdXNlci1tZW51LWl0ZW1fX2JhZGdlIHtcbiAgQGFwcGx5IHB4LTIgcHktMSByb3VuZGVkIGJnLXByaW1hcnktNjAwLzEwIHRleHQtcHJpbWFyeS02MDAgdGV4dC0yeHMgZm9udC1zZW1pYm9sZCBmbGV4LW5vbmU7XG59XG5cbi52ZXgtdXNlci1tZW51LWl0ZW1fX2ljb24ge1xuICBAYXBwbHkgZmxleC1ub25lIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwIGVhc2Utb3V0O1xufVxuXG4udmV4LXVzZXItbWVudS1pdGVtX19kcm9wZG93bi1pY29uIHtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6468:
/*!*****************************************************************!*\
  !*** ./src/app/layouts/components/sidenav/sidenav.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidenavComponent: () => (/* binding */ SidenavComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 5043);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _sidenav_user_menu_sidenav_user_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidenav-user-menu/sidenav-user-menu.component */ 3569);
/* harmony import */ var _search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-modal/search-modal.component */ 4914);
/* harmony import */ var _sidenav_item_sidenav_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidenav-item/sidenav-item.component */ 6463);
/* harmony import */ var _vex_components_vex_scrollbar_vex_scrollbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/components/vex-scrollbar/vex-scrollbar.component */ 9844);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/navigation/navigation.service */ 120);
/* harmony import */ var _vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vex/services/vex-layout.service */ 4952);
/* harmony import */ var _vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vex/config/vex-config.service */ 376);
/* harmony import */ var _vex_components_vex_popover_vex_popover_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vex/components/vex-popover/vex-popover.service */ 563);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);




















function SidenavComponent_button_9_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "mat-icon", 16);
  }
}
function SidenavComponent_button_9_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "mat-icon", 17);
  }
}
function SidenavComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SidenavComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r5.toggleCollapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SidenavComponent_button_9_mat_icon_1_Template, 1, 0, "mat-icon", 14)(2, SidenavComponent_button_9_mat_icon_2_Template, 1, 0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.collapsed);
  }
}
function SidenavComponent_vex_sidenav_item_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "vex-sidenav-item", 18);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("item", item_r7)("level", 0);
  }
}
function SidenavComponent_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SidenavComponent_div_19_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r10.openProfileMenu(_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 24)(5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("vex-sidenav-user--open", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 5, ctx_r8.userMenuOpen$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx_r8.userData == null ? null : ctx_r8.userData.prenom, " ", ctx_r8.userData == null ? null : ctx_r8.userData.nom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r8.userData == null ? null : ctx_r8.userData.role);
  }
}
function SidenavComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, SidenavComponent_div_19_div_1_Template, 10, 7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.userData);
  }
}
class SidenavComponent {
  constructor(navigationService, layoutService, configService, popoverService, dialog, authService // 1. Injecte ton service
  ) {
    this.navigationService = navigationService;
    this.layoutService = layoutService;
    this.configService = configService;
    this.popoverService = popoverService;
    this.dialog = dialog;
    this.authService = authService;
    this.collapsed = false;
    this.collapsedOpen$ = this.layoutService.sidenavCollapsedOpen$;
    this.title$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(config => config.sidenav.title));
    this.imageUrl$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(config => config.sidenav.imageUrl));
    this.showCollapsePin$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(config => config.sidenav.showCollapsePin));
    this.userVisible$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(config => config.sidenav.user.visible));
    this.searchVisible$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(config => config.sidenav.search.visible));
    this.userMenuOpen$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(false);
    this.items$ = this.navigationService.items$;
  }
  ngOnInit() {
    // 2. Récupère les données au chargement
    this.userData = this.authService.getUserData();
  }
  collapseOpenSidenav() {
    this.layoutService.collapseOpenSidenav();
  }
  collapseCloseSidenav() {
    this.layoutService.collapseCloseSidenav();
  }
  toggleCollapse() {
    this.collapsed ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
  }
  trackByRoute(index, item) {
    if (item.type === 'link') {
      return item.route;
    }
    return item.label;
  }
  openProfileMenu(origin) {
    this.userMenuOpen$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(this.popoverService.open({
      content: _sidenav_user_menu_sidenav_user_menu_component__WEBPACK_IMPORTED_MODULE_0__.SidenavUserMenuComponent,
      origin,
      offsetY: -8,
      width: origin.clientWidth,
      position: [{
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
      }]
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(popoverRef => popoverRef.afterClosed$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(() => false))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(true));
  }
  openSearch() {
    this.dialog.open(_search_modal_search_modal_component__WEBPACK_IMPORTED_MODULE_1__.SearchModalComponent, {
      panelClass: 'vex-dialog-glossy',
      width: '100%',
      maxWidth: '600px'
    });
  }
  static #_ = this.ɵfac = function SidenavComponent_Factory(t) {
    return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_4__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_5__.VexLayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_6__.VexConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_vex_components_vex_popover_vex_popover_service__WEBPACK_IMPORTED_MODULE_7__.VexPopoverService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: SidenavComponent,
    selectors: [["vex-sidenav"]],
    inputs: {
      collapsed: "collapsed"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵStandaloneFeature"]],
    decls: 21,
    vars: 25,
    consts: [[1, "vex-sidenav", "flex", "flex-col", 3, "mouseenter", "mouseleave"], [1, "vex-sidenav-toolbar__container"], [1, "sidenav-toolbar", "flex-none", "flex", "items-center"], ["alt", "Logo", 1, "w-6", "select-none", "flex-none", 3, "src"], [1, "vex-sidenav-toolbar__headline", "flex-auto"], ["class", "vex-sidenav-toolbar__collapse-toggle -mr-4 leading-none flex-none hidden lg:block", "mat-icon-button", "", "type", "button", 3, "click", 4, "ngIf"], [1, "vex-sidenav-toolbar__divider"], [1, "flex-1", "flex", "flex-col"], [1, "pt-6", "flex-1"], [3, "item", "level", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "vex-sidenav-footer", "flex", "items-center", "justify-center", "opacity-20", "px-6", "py-6", "select-none", "flex-none"], ["alt", "Logo", 1, "w-8", "select-none", 3, "src"], ["class", "vex-sidenav-user__container flex-none", 4, "ngIf"], ["mat-icon-button", "", "type", "button", 1, "vex-sidenav-toolbar__collapse-toggle", "-mr-4", "leading-none", "flex-none", "hidden", "lg:block", 3, "click"], ["class", "icon-xs", "svgIcon", "mat:radio_button_checked", 4, "ngIf"], ["class", "icon-xs", "svgIcon", "mat:radio_button_unchecked", 4, "ngIf"], ["svgIcon", "mat:radio_button_checked", 1, "icon-xs"], ["svgIcon", "mat:radio_button_unchecked", 1, "icon-xs"], [3, "item", "level"], [1, "vex-sidenav-user__container", "flex-none"], ["class", "vex-sidenav-user flex items-center", "matRipple", "", "matRippleColor", "var(--vex-sidenav-item-ripple-color)", 3, "vex-sidenav-user--open", "click", 4, "ngIf"], ["matRipple", "", "matRippleColor", "var(--vex-sidenav-item-ripple-color)", 1, "vex-sidenav-user", "flex", "items-center", 3, "click"], ["userProfileMenuOriginRef", ""], ["alt", "User Avatar", "src", "../../../../assets/img/avatars/noavatar.png", 1, "vex-sidenav-user__image", "flex-none"], [1, "vex-sidenav-user__content", "flex-auto"], [1, "vex-sidenav-user__title"], [1, "vex-sidenav-user__subtitle"], ["svgIcon", "mat:arrow_drop_down", 1, "vex-sidenav-user__dropdown-icon", "flex-none"]],
    template: function SidenavComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("mouseenter", function SidenavComponent_Template_div_mouseenter_0_listener() {
          return ctx.collapseOpenSidenav();
        })("mouseleave", function SidenavComponent_Template_div_mouseleave_0_listener() {
          return ctx.collapseCloseSidenav();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, SidenavComponent_button_9_Template, 3, 2, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "vex-scrollbar", 7)(13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, SidenavComponent_vex_sidenav_item_14_Template, 1, 2, "vex-sidenav-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, SidenavComponent_div_19_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("collapsed", ctx.collapsed)("open", ctx.collapsed && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 11, ctx.collapsedOpen$));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 13, ctx.imageUrl$), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 15, ctx.title$), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 17, ctx.showCollapsePin$));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](15, 19, ctx.items$))("ngForTrackBy", ctx.trackByRoute);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](18, 21, ctx.imageUrl$), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](20, 23, ctx.userVisible$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatRipple, _vex_components_vex_scrollbar_vex_scrollbar_component__WEBPACK_IMPORTED_MODULE_3__.VexScrollbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgFor, _sidenav_item_sidenav_item_component__WEBPACK_IMPORTED_MODULE_2__.SidenavItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe],
    styles: [".vex-sidenav[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-background);\n  color: var(--vex-sidenav-color);\n  height: 100%;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: var(--vex-sidenav-width);\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%] {\n  width: var(--vex-sidenav-collapsed-width);\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)   .vex-sidenav-toolbar__headline[_ngcontent-%COMP%], .vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)   .vex-sidenav-toolbar__collapse-toggle[_ngcontent-%COMP%] {\n  opacity: 0;\n  padding-inline-start: var(--vex-sidenav-item-padding-horizontal);\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-item__icon {\n  margin-inline-end: var(--vex-sidenav-item-padding-horizontal);\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-subheading, .vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-item__badge, .vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-item__label, .vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-user__title, .vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-user__subtitle, .vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-user__dropdown-icon, .vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-search__placeholder, .vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-search__keybind {\n  opacity: 0;\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .vex-sidenav-user {\n  padding-right: 0.625rem;\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%]:not(.open)     .simplebar-track.simplebar-vertical {\n  visibility: hidden !important;\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%]     .vex-sidenav-subheading, .vex-sidenav.collapsed[_ngcontent-%COMP%]     .vex-sidenav-item__label {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.vex-sidenav.collapsed[_ngcontent-%COMP%]     .vex-sidenav-item__badge {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.vex-sidenav.collapsed.open[_ngcontent-%COMP%] {\n  width: var(--vex-sidenav-width);\n}\n.vex-sidenav.collapsed.open[_ngcontent-%COMP%]   .vex-sidenav-toolbar__collapse-toggle[_ngcontent-%COMP%] {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.vex-sidenav.collapsed.open[_ngcontent-%COMP%]     .vex-sidenav-item__badge {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.vex-sidenav[_ngcontent-%COMP%]     .simplebar-track.simplebar-horizontal {\n  visibility: hidden !important;\n}\n\n\n\n.vex-sidenav-toolbar__container[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-background);\n  position: sticky;\n  top: 0px;\n  z-index: 10;\n}\n\n.sidenav-toolbar[_ngcontent-%COMP%] {\n  align-items: center;\n  background: var(--vex-sidenav-toolbar-background);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  height: var(--vex-toolbar-height);\n  white-space: nowrap;\n  width: 100%;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.vex-sidenav-toolbar__headline[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 700;\n  letter-spacing: 0.025em;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  padding-inline-start: var(--vex-sidenav-item-icon-gap);\n}\n\n.vex-sidenav-toolbar__collapse-toggle[_ngcontent-%COMP%] {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.vex-sidenav-toolbar__divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--vex-sidenav-section-divider-color);\n}\n\n\n\n.vex-sidenav-user__container[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-toolbar-background);\n  border-color: var(--vex-sidenav-section-divider-color);\n  position: sticky;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-top-width: 1px;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n.vex-sidenav-user[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  border-radius: var(--vex-border-radius);\n  padding: 0.375rem;\n  padding-top: 0.5rem;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.vex-sidenav-user[_ngcontent-%COMP%]:hover {\n  background-color: rgb(255 255 255 / 0.1);\n}\n\n.vex-sidenav-user__image[_ngcontent-%COMP%] {\n  display: block;\n  height: 2.25rem;\n  width: 2.25rem;\n  border-radius: 9999px;\n}\n\n.vex-sidenav-user__content[_ngcontent-%COMP%] {\n  padding-left: 0.75rem;\n}\n\n.vex-sidenav-user__title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.vex-sidenav-user__subtitle[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  color: rgb(255 255 255 / 0.5);\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.vex-sidenav-user__dropdown-icon[_ngcontent-%COMP%] {\n  color: rgb(255 255 255 / 0.5);\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.vex-sidenav-user--open[_ngcontent-%COMP%] {\n  background-color: rgb(255 255 255 / 0.1);\n}\n\n\n\n.vex-sidenav-search__container[_ngcontent-%COMP%] {\n  background: var(--vex-sidenav-toolbar-background);\n  z-index: 10;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n.vex-sidenav-search[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  align-items: center;\n  border-radius: var(--vex-border-radius);\n  background-color: rgb(255 255 255 / 0.1);\n  padding: 0.25rem;\n  padding-left: 0.75rem;\n  color: rgb(255 255 255 / 0.3);\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.vex-sidenav-search[_ngcontent-%COMP%]:hover {\n  background-color: rgb(255 255 255 / 0.2);\n  color: rgb(255 255 255 / 0.6);\n}\n\n.vex-sidenav-search__icon[_ngcontent-%COMP%], .vex-sidenav-search__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  height: 1.25rem;\n  width: 1.25rem;\n  line-height: 1.25rem;\n}\n\n.vex-sidenav-search__icon[_ngcontent-%COMP%] {\n  width: var(--vex-sidenav-item-icon-size);\n}\n\n.vex-sidenav-search__placeholder[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 500;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  margin-left: var(--vex-sidenav-item-icon-gap);\n}\n\n.vex-sidenav-search__keybind[_ngcontent-%COMP%] {\n  border-radius: var(--vex-border-radius);\n  background-color: rgb(255 255 255 / 0.1);\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  font-size: 0.625rem;\n  font-weight: 600;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 300ms;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL3VuaWdlc3RfZnJvbnQlMjBjb3BpZS9zcmMvYXBwL2xheW91dHMvY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBLDREQUFBO0VBQ0EsK0JBQUE7QUNDRjtBRENFO0VBQ0UseUNBQUE7QUNDSjtBREVNOztFQUVFLFVBQUE7RUFDQSxnRUFBQTtBQ0FSO0FESVE7RUFDRSw2REFBQTtBQ0ZWO0FES1E7Ozs7Ozs7O0VBUUUsVUFBQTtBQ0hWO0FET1U7RUFBQTtBQUFBO0FBR0Y7RUFDRSw2QkFBQTtBQ0xWO0FEYVE7O0VBQUEsd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTtBQUlBO0VBQUEsd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTtBQUlKO0VBQ0UsK0JBQUE7QUNaTjtBRGVRO0VBQUEsd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTtBQUtFO0VBQUEsd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTtBQU9OO0VBQ0UsNkJBQUE7QUNuQk47O0FEd0JBLHFCQUFBO0FBQ0E7RUFDRSx5Q0FBQTtFQUVBLGdCQUFBO0VBQUEsUUFBQTtFQUFBLFdBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsbUJBQUE7RUFDQSxpREFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUFBLG1CQUFBO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtBQ3RCRjs7QUQwQkU7RUFBQSx5QkFBQTtVQUFBLGlCQUFBO0VBQUEsaUJBQUE7RUFBQSxpQkFBQTtFQUFBLGdCQUFBO0VBQUEsdUJBQUE7RUFBQSx3QkFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQSw0REFBQTtFQUNBO0FBREE7O0FBS0E7RUFBQSx3QkFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQTtBQUFBOztBQUdGO0VBQ0UsV0FBQTtFQUNBLG9EQUFBO0FDdEJGOztBRHlCQSxzQkFBQTtBQUNBO0VBQ0UsaURBQUE7RUFDQSxzREFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEscUJBQUE7RUFBQSxvQkFBQTtFQUFBLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSx1QkFBQTtBQ3ZCRjs7QUQyQkU7RUFBQSxrQkFBQTtFQUFBLGVBQUE7RUFBQSx5QkFBQTtVQUFBLGlCQUFBO0VBQUEsdUNBQUE7RUFBQSxpQkFBQTtFQUFBLG1CQUFBO0VBQUEsd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTs7QUFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxjQUFBO0VBQUEsZUFBQTtFQUFBLGNBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLG1CQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLGdCQUFBO0VBQUEsZ0tBQUE7RUFBQSx3SkFBQTtFQUFBLGlMQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSxtQkFBQTtFQUFBLGtCQUFBO0VBQUEsaUJBQUE7RUFBQSxnQkFBQTtFQUFBLDZCQUFBO0VBQUEsZ0tBQUE7RUFBQSx3SkFBQTtFQUFBLGlMQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQSw2QkFBQTtFQUFBLGdLQUFBO0VBQUEsd0pBQUE7RUFBQSxpTEFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUE7QUFBQTs7QUFHRix3QkFBQTtBQUNBO0VBQ0UsaURBQUE7RUFDQSxXQUFBO0VBQUEscUJBQUE7RUFBQSxzQkFBQTtFQUFBLHVCQUFBO0FDdkJGOztBRDJCRTtFQUFBLGFBQUE7RUFBQSxlQUFBO0VBQUEseUJBQUE7VUFBQSxpQkFBQTtFQUFBLG1CQUFBO0VBQUEsdUNBQUE7RUFBQSx3Q0FBQTtFQUFBLGdCQUFBO0VBQUEscUJBQUE7RUFBQSw2QkFBQTtFQUFBLGdLQUFBO0VBQUEsd0pBQUE7RUFBQSxpTEFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQTtBQUFBOztBQUFBO0VBQUEsd0NBQUE7RUFBQTtBQUFBOztBQUlBO0VBQUEsa0JBQUE7RUFBQSxlQUFBO0VBQUEsY0FBQTtFQUFBO0FBQUE7O0FBREY7RUFFRSx3Q0FBQTtBQ3ZCRjs7QUQyQkU7RUFBQSxtQkFBQTtFQUFBLGtCQUFBO0VBQUEsaUJBQUE7RUFBQSxnQkFBQTtFQUFBLGdLQUFBO0VBQUEsd0pBQUE7RUFBQSxpTEFBQTtFQUFBLHdEQUFBO0VBQUEsMEJBQUE7RUFBQSxzREFBQTtFQUNBO0FBREE7O0FBS0E7RUFBQSx1Q0FBQTtFQUFBLHdDQUFBO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtFQUFBLG9CQUFBO0VBQUEsdUJBQUE7RUFBQSxtQkFBQTtFQUFBLGdCQUFBO0VBQUEsZ0tBQUE7RUFBQSx3SkFBQTtFQUFBLGlMQUFBO0VBQUEsd0RBQUE7RUFBQSwwQkFBQTtFQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIudmV4LXNpZGVuYXYge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtc2lkZW5hdi1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLXZleC1zaWRlbmF2LWNvbG9yKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBAYXBwbHkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNDAwIGVhc2Utb3V0LXN3aWZ0O1xuICB3aWR0aDogdmFyKC0tdmV4LXNpZGVuYXYtd2lkdGgpO1xuXG4gICYuY29sbGFwc2VkIHtcbiAgICB3aWR0aDogdmFyKC0tdmV4LXNpZGVuYXYtY29sbGFwc2VkLXdpZHRoKTtcblxuICAgICY6bm90KC5vcGVuKSB7XG4gICAgICAudmV4LXNpZGVuYXYtdG9vbGJhcl9faGVhZGxpbmUsXG4gICAgICAudmV4LXNpZGVuYXYtdG9vbGJhcl9fY29sbGFwc2UtdG9nZ2xlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tcGFkZGluZy1ob3Jpem9udGFsKTtcbiAgICAgIH1cblxuICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgLnZleC1zaWRlbmF2LWl0ZW1fX2ljb24ge1xuICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLXBhZGRpbmctaG9yaXpvbnRhbCk7XG4gICAgICAgIH1cblxuICAgICAgICAudmV4LXNpZGVuYXYtc3ViaGVhZGluZyxcbiAgICAgICAgLnZleC1zaWRlbmF2LWl0ZW1fX2JhZGdlLFxuICAgICAgICAudmV4LXNpZGVuYXYtaXRlbV9fbGFiZWwsXG4gICAgICAgIC52ZXgtc2lkZW5hdi11c2VyX190aXRsZSxcbiAgICAgICAgLnZleC1zaWRlbmF2LXVzZXJfX3N1YnRpdGxlLFxuICAgICAgICAudmV4LXNpZGVuYXYtdXNlcl9fZHJvcGRvd24taWNvbixcbiAgICAgICAgLnZleC1zaWRlbmF2LXNlYXJjaF9fcGxhY2Vob2xkZXIsXG4gICAgICAgIC52ZXgtc2lkZW5hdi1zZWFyY2hfX2tleWJpbmQge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAudmV4LXNpZGVuYXYtdXNlciB7XG4gICAgICAgICAgQGFwcGx5IHByLTIuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaW1wbGViYXItdHJhY2suc2ltcGxlYmFyLXZlcnRpY2FsIHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIDo6bmctZGVlcCB7XG4gICAgICAudmV4LXNpZGVuYXYtc3ViaGVhZGluZyxcbiAgICAgIC52ZXgtc2lkZW5hdi1pdGVtX19sYWJlbCB7XG4gICAgICAgIEBhcHBseSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi00MDAgZWFzZS1vdXQtc3dpZnQ7XG4gICAgICB9XG5cbiAgICAgIC52ZXgtc2lkZW5hdi1pdGVtX19iYWRnZSB7XG4gICAgICAgIEBhcHBseSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgZWFzZS1vdXQtc3dpZnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5vcGVuIHtcbiAgICAgIHdpZHRoOiB2YXIoLS12ZXgtc2lkZW5hdi13aWR0aCk7XG5cbiAgICAgIC52ZXgtc2lkZW5hdi10b29sYmFyX19jb2xsYXBzZS10b2dnbGUge1xuICAgICAgICBAYXBwbHkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNDAwIGVhc2Utb3V0LXN3aWZ0O1xuICAgICAgfVxuXG4gICAgICA6Om5nLWRlZXAge1xuICAgICAgICAudmV4LXNpZGVuYXYtaXRlbV9fYmFkZ2Uge1xuICAgICAgICAgIEBhcHBseSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi00MDAgZWFzZS1vdXQtc3dpZnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICA6Om5nLWRlZXAge1xuICAgIC5zaW1wbGViYXItdHJhY2suc2ltcGxlYmFyLWhvcml6b250YWwge1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi8qKiBTSURFTkFWIFRPT0xCQVIgKi9cbi52ZXgtc2lkZW5hdi10b29sYmFyX19jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtc2lkZW5hdi1iYWNrZ3JvdW5kKTtcblxuICBAYXBwbHkgc3RpY2t5IHRvcC0wIHotMTA7XG59XG5cbi5zaWRlbmF2LXRvb2xiYXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtc2lkZW5hdi10b29sYmFyLWJhY2tncm91bmQpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IHZhcigtLXZleC10b29sYmFyLWhlaWdodCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBAYXBwbHkgcHktMCBweC02O1xufVxuXG4udmV4LXNpZGVuYXYtdG9vbGJhcl9faGVhZGxpbmUge1xuICBAYXBwbHkgdGV4dC0yeGwgZm9udC1ib2xkIHRyYWNraW5nLXdpZGUgc2VsZWN0LW5vbmUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNDAwIGVhc2Utb3V0LXN3aWZ0O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1pY29uLWdhcCk7XG59XG5cbi52ZXgtc2lkZW5hdi10b29sYmFyX19jb2xsYXBzZS10b2dnbGUge1xuICBAYXBwbHkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGVhc2Utb3V0LXN3aWZ0O1xufVxuXG4udmV4LXNpZGVuYXYtdG9vbGJhcl9fZGl2aWRlciB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtc2lkZW5hdi1zZWN0aW9uLWRpdmlkZXItY29sb3IpO1xufVxuXG4vKiogVkVYIFNJREVOQVYgVVNFUiAqL1xuLnZleC1zaWRlbmF2LXVzZXJfX2NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZleC1zaWRlbmF2LXRvb2xiYXItYmFja2dyb3VuZCk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdmV4LXNpZGVuYXYtc2VjdGlvbi1kaXZpZGVyLWNvbG9yKTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcblxuICBAYXBwbHkgYm9yZGVyLXQgcHgtMiBweS0zO1xufVxuXG4udmV4LXNpZGVuYXYtdXNlciB7XG4gIEBhcHBseSByZWxhdGl2ZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgcm91bmRlZCBob3ZlcjpiZy13aGl0ZS8xMCBzZWxlY3Qtbm9uZSBjdXJzb3ItcG9pbnRlciBwLTEuNSBwdC0yO1xufVxuXG4udmV4LXNpZGVuYXYtdXNlcl9faW1hZ2Uge1xuICBAYXBwbHkgdy05IGgtOSBibG9jayByb3VuZGVkLWZ1bGw7XG59XG5cbi52ZXgtc2lkZW5hdi11c2VyX19jb250ZW50IHtcbiAgQGFwcGx5IHBsLTM7XG59XG5cbi52ZXgtc2lkZW5hdi11c2VyX190aXRsZSB7XG4gIEBhcHBseSB0ZXh0LXNtIGZvbnQtbWVkaXVtIHdoaXRlc3BhY2Utbm93cmFwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2Utb3V0O1xufVxuXG4udmV4LXNpZGVuYXYtdXNlcl9fc3VidGl0bGUge1xuICBAYXBwbHkgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LXdoaXRlLzUwIHdoaXRlc3BhY2Utbm93cmFwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2Utb3V0O1xufVxuXG4udmV4LXNpZGVuYXYtdXNlcl9fZHJvcGRvd24taWNvbiB7XG4gIEBhcHBseSB0ZXh0LXdoaXRlLzUwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2Utb3V0O1xufVxuXG4udmV4LXNpZGVuYXYtdXNlci0tb3BlbiB7XG4gIEBhcHBseSBiZy13aGl0ZS8xMDtcbn1cblxuLyoqIFZFWCBTSURFTkFWIFNFQVJDSCAqL1xuLnZleC1zaWRlbmF2LXNlYXJjaF9fY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtdG9vbGJhci1iYWNrZ3JvdW5kKTtcbiAgQGFwcGx5IHB4LTMgcGItMyB6LTEwO1xufVxuXG4udmV4LXNpZGVuYXYtc2VhcmNoIHtcbiAgQGFwcGx5IHJvdW5kZWQgYmctd2hpdGUvMTAgdGV4dC13aGl0ZS8zMCBob3ZlcjpiZy13aGl0ZS8yMCBob3Zlcjp0ZXh0LXdoaXRlLzYwIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2Utb3V0IGZsZXggaXRlbXMtY2VudGVyIHNlbGVjdC1ub25lIHAtMSBwbC0zO1xufVxuXG4udmV4LXNpZGVuYXYtc2VhcmNoX19pY29uIHtcbiAgQGFwcGx5IGljb24tc207XG4gIHdpZHRoOiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tc2l6ZSk7XG59XG5cbi52ZXgtc2lkZW5hdi1zZWFyY2hfX3BsYWNlaG9sZGVyIHtcbiAgQGFwcGx5IHRleHQteHMgZm9udC1tZWRpdW0gd2hpdGVzcGFjZS1ub3dyYXAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1vdXQ7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLWljb24tZ2FwKTtcbn1cblxuLnZleC1zaWRlbmF2LXNlYXJjaF9fa2V5YmluZCB7XG4gIEBhcHBseSBiZy13aGl0ZS8xMCByb3VuZGVkIHRleHQtMnhzIHB4LTIgcHktMSBmb250LXNlbWlib2xkIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2Utb3V0O1xufVxuIiwiLnZleC1zaWRlbmF2IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LXNpZGVuYXYtYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS12ZXgtc2lkZW5hdi1jb2xvcik7XG4gIGhlaWdodDogMTAwJTtcbiAgQGFwcGx5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTQwMCBlYXNlLW91dC1zd2lmdDtcbiAgd2lkdGg6IHZhcigtLXZleC1zaWRlbmF2LXdpZHRoKTtcbn1cbi52ZXgtc2lkZW5hdi5jb2xsYXBzZWQge1xuICB3aWR0aDogdmFyKC0tdmV4LXNpZGVuYXYtY29sbGFwc2VkLXdpZHRoKTtcbn1cbi52ZXgtc2lkZW5hdi5jb2xsYXBzZWQ6bm90KC5vcGVuKSAudmV4LXNpZGVuYXYtdG9vbGJhcl9faGVhZGxpbmUsXG4udmV4LXNpZGVuYXYuY29sbGFwc2VkOm5vdCgub3BlbikgLnZleC1zaWRlbmF2LXRvb2xiYXJfX2NvbGxhcHNlLXRvZ2dsZSB7XG4gIG9wYWNpdHk6IDA7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS12ZXgtc2lkZW5hdi1pdGVtLXBhZGRpbmctaG9yaXpvbnRhbCk7XG59XG4udmV4LXNpZGVuYXYuY29sbGFwc2VkOm5vdCgub3BlbikgOjpuZy1kZWVwIC52ZXgtc2lkZW5hdi1pdGVtX19pY29uIHtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLXZleC1zaWRlbmF2LWl0ZW0tcGFkZGluZy1ob3Jpem9udGFsKTtcbn1cbi52ZXgtc2lkZW5hdi5jb2xsYXBzZWQ6bm90KC5vcGVuKSA6Om5nLWRlZXAgLnZleC1zaWRlbmF2LXN1YmhlYWRpbmcsXG4udmV4LXNpZGVuYXYuY29sbGFwc2VkOm5vdCgub3BlbikgOjpuZy1kZWVwIC52ZXgtc2lkZW5hdi1pdGVtX19iYWRnZSxcbi52ZXgtc2lkZW5hdi5jb2xsYXBzZWQ6bm90KC5vcGVuKSA6Om5nLWRlZXAgLnZleC1zaWRlbmF2LWl0ZW1fX2xhYmVsLFxuLnZleC1zaWRlbmF2LmNvbGxhcHNlZDpub3QoLm9wZW4pIDo6bmctZGVlcCAudmV4LXNpZGVuYXYtdXNlcl9fdGl0bGUsXG4udmV4LXNpZGVuYXYuY29sbGFwc2VkOm5vdCgub3BlbikgOjpuZy1kZWVwIC52ZXgtc2lkZW5hdi11c2VyX19zdWJ0aXRsZSxcbi52ZXgtc2lkZW5hdi5jb2xsYXBzZWQ6bm90KC5vcGVuKSA6Om5nLWRlZXAgLnZleC1zaWRlbmF2LXVzZXJfX2Ryb3Bkb3duLWljb24sXG4udmV4LXNpZGVuYXYuY29sbGFwc2VkOm5vdCgub3BlbikgOjpuZy1kZWVwIC52ZXgtc2lkZW5hdi1zZWFyY2hfX3BsYWNlaG9sZGVyLFxuLnZleC1zaWRlbmF2LmNvbGxhcHNlZDpub3QoLm9wZW4pIDo6bmctZGVlcCAudmV4LXNpZGVuYXYtc2VhcmNoX19rZXliaW5kIHtcbiAgb3BhY2l0eTogMDtcbn1cbi52ZXgtc2lkZW5hdi5jb2xsYXBzZWQ6bm90KC5vcGVuKSA6Om5nLWRlZXAgLnZleC1zaWRlbmF2LXVzZXIge1xuICBAYXBwbHkgcHItMi41O1xufVxuLnZleC1zaWRlbmF2LmNvbGxhcHNlZDpub3QoLm9wZW4pIDo6bmctZGVlcCAuc2ltcGxlYmFyLXRyYWNrLnNpbXBsZWJhci12ZXJ0aWNhbCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuLnZleC1zaWRlbmF2LmNvbGxhcHNlZCA6Om5nLWRlZXAgLnZleC1zaWRlbmF2LXN1YmhlYWRpbmcsXG4udmV4LXNpZGVuYXYuY29sbGFwc2VkIDo6bmctZGVlcCAudmV4LXNpZGVuYXYtaXRlbV9fbGFiZWwge1xuICBAYXBwbHkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNDAwIGVhc2Utb3V0LXN3aWZ0O1xufVxuLnZleC1zaWRlbmF2LmNvbGxhcHNlZCA6Om5nLWRlZXAgLnZleC1zaWRlbmF2LWl0ZW1fX2JhZGdlIHtcbiAgQGFwcGx5IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBlYXNlLW91dC1zd2lmdDtcbn1cbi52ZXgtc2lkZW5hdi5jb2xsYXBzZWQub3BlbiB7XG4gIHdpZHRoOiB2YXIoLS12ZXgtc2lkZW5hdi13aWR0aCk7XG59XG4udmV4LXNpZGVuYXYuY29sbGFwc2VkLm9wZW4gLnZleC1zaWRlbmF2LXRvb2xiYXJfX2NvbGxhcHNlLXRvZ2dsZSB7XG4gIEBhcHBseSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi00MDAgZWFzZS1vdXQtc3dpZnQ7XG59XG4udmV4LXNpZGVuYXYuY29sbGFwc2VkLm9wZW4gOjpuZy1kZWVwIC52ZXgtc2lkZW5hdi1pdGVtX19iYWRnZSB7XG4gIEBhcHBseSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi00MDAgZWFzZS1vdXQtc3dpZnQ7XG59XG4udmV4LXNpZGVuYXYgOjpuZy1kZWVwIC5zaW1wbGViYXItdHJhY2suc2ltcGxlYmFyLWhvcml6b250YWwge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLyoqIFNJREVOQVYgVE9PTEJBUiAqL1xuLnZleC1zaWRlbmF2LXRvb2xiYXJfX2NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZleC1zaWRlbmF2LWJhY2tncm91bmQpO1xuICBAYXBwbHkgc3RpY2t5IHRvcC0wIHotMTA7XG59XG5cbi5zaWRlbmF2LXRvb2xiYXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtc2lkZW5hdi10b29sYmFyLWJhY2tncm91bmQpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBoZWlnaHQ6IHZhcigtLXZleC10b29sYmFyLWhlaWdodCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBAYXBwbHkgcHktMCBweC02O1xufVxuXG4udmV4LXNpZGVuYXYtdG9vbGJhcl9faGVhZGxpbmUge1xuICBAYXBwbHkgdGV4dC0yeGwgZm9udC1ib2xkIHRyYWNraW5nLXdpZGUgc2VsZWN0LW5vbmUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNDAwIGVhc2Utb3V0LXN3aWZ0O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1pY29uLWdhcCk7XG59XG5cbi52ZXgtc2lkZW5hdi10b29sYmFyX19jb2xsYXBzZS10b2dnbGUge1xuICBAYXBwbHkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwIGVhc2Utb3V0LXN3aWZ0O1xufVxuXG4udmV4LXNpZGVuYXYtdG9vbGJhcl9fZGl2aWRlciB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtc2lkZW5hdi1zZWN0aW9uLWRpdmlkZXItY29sb3IpO1xufVxuXG4vKiogVkVYIFNJREVOQVYgVVNFUiAqL1xuLnZleC1zaWRlbmF2LXVzZXJfX2NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZleC1zaWRlbmF2LXRvb2xiYXItYmFja2dyb3VuZCk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdmV4LXNpZGVuYXYtc2VjdGlvbi1kaXZpZGVyLWNvbG9yKTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgQGFwcGx5IGJvcmRlci10IHB4LTIgcHktMztcbn1cblxuLnZleC1zaWRlbmF2LXVzZXIge1xuICBAYXBwbHkgcmVsYXRpdmUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2Utb3V0IHJvdW5kZWQgaG92ZXI6Ymctd2hpdGUvMTAgc2VsZWN0LW5vbmUgY3Vyc29yLXBvaW50ZXIgcC0xLjUgcHQtMjtcbn1cblxuLnZleC1zaWRlbmF2LXVzZXJfX2ltYWdlIHtcbiAgQGFwcGx5IHctOSBoLTkgYmxvY2sgcm91bmRlZC1mdWxsO1xufVxuXG4udmV4LXNpZGVuYXYtdXNlcl9fY29udGVudCB7XG4gIEBhcHBseSBwbC0zO1xufVxuXG4udmV4LXNpZGVuYXYtdXNlcl9fdGl0bGUge1xuICBAYXBwbHkgdGV4dC1zbSBmb250LW1lZGl1bSB3aGl0ZXNwYWNlLW5vd3JhcCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLW91dDtcbn1cblxuLnZleC1zaWRlbmF2LXVzZXJfX3N1YnRpdGxlIHtcbiAgQGFwcGx5IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC13aGl0ZS81MCB3aGl0ZXNwYWNlLW5vd3JhcCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLW91dDtcbn1cblxuLnZleC1zaWRlbmF2LXVzZXJfX2Ryb3Bkb3duLWljb24ge1xuICBAYXBwbHkgdGV4dC13aGl0ZS81MCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLW91dDtcbn1cblxuLnZleC1zaWRlbmF2LXVzZXItLW9wZW4ge1xuICBAYXBwbHkgYmctd2hpdGUvMTA7XG59XG5cbi8qKiBWRVggU0lERU5BViBTRUFSQ0ggKi9cbi52ZXgtc2lkZW5hdi1zZWFyY2hfX2NvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZleC1zaWRlbmF2LXRvb2xiYXItYmFja2dyb3VuZCk7XG4gIEBhcHBseSBweC0zIHBiLTMgei0xMDtcbn1cblxuLnZleC1zaWRlbmF2LXNlYXJjaCB7XG4gIEBhcHBseSByb3VuZGVkIGJnLXdoaXRlLzEwIHRleHQtd2hpdGUvMzAgaG92ZXI6Ymctd2hpdGUvMjAgaG92ZXI6dGV4dC13aGl0ZS82MCBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLW91dCBmbGV4IGl0ZW1zLWNlbnRlciBzZWxlY3Qtbm9uZSBwLTEgcGwtMztcbn1cblxuLnZleC1zaWRlbmF2LXNlYXJjaF9faWNvbiB7XG4gIEBhcHBseSBpY29uLXNtO1xuICB3aWR0aDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1pY29uLXNpemUpO1xufVxuXG4udmV4LXNpZGVuYXYtc2VhcmNoX19wbGFjZWhvbGRlciB7XG4gIEBhcHBseSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHdoaXRlc3BhY2Utbm93cmFwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2Utb3V0O1xuICBtYXJnaW4tbGVmdDogdmFyKC0tdmV4LXNpZGVuYXYtaXRlbS1pY29uLWdhcCk7XG59XG5cbi52ZXgtc2lkZW5hdi1zZWFyY2hfX2tleWJpbmQge1xuICBAYXBwbHkgYmctd2hpdGUvMTAgcm91bmRlZCB0ZXh0LTJ4cyBweC0yIHB5LTEgZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLW91dDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2276:
/*!*****************************************************************************!*\
  !*** ./src/app/layouts/components/toolbar/mega-menu/mega-menu.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MegaMenuComponent: () => (/* binding */ MegaMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _vex_components_vex_popover_vex_popover_ref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/components/vex-popover/vex-popover-ref */ 5925);








function MegaMenuComponent_a_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MegaMenuComponent_a_14_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", feature_r2.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", feature_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](feature_r2.label);
  }
}
function MegaMenuComponent_a_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MegaMenuComponent_a_19_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", page_r5.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](page_r5.label);
  }
}
class MegaMenuComponent {
  constructor(popoverRef) {
    this.popoverRef = popoverRef;
    this.features = [{
      icon: 'mat:layers',
      label: 'Dashboard',
      route: '/'
    }, {
      icon: 'mat:assignment',
      label: 'AIO-Table',
      route: '/apps/aio-table'
    }, {
      icon: 'mat:contact_support',
      label: 'Help Center',
      route: '/apps/help-center'
    }, {
      icon: 'mat:contacts',
      label: 'Contacts',
      route: '/apps/contacts/grid'
    }, {
      icon: 'mat:assessment',
      label: 'Scrumboard',
      route: '/apps/scrumboard/1'
    }, {
      icon: 'mat:book',
      label: 'Documentation',
      route: '/documentation'
    }];
    this.pages = [{
      label: 'All-In-One Table',
      route: '/apps/aio-table'
    }, {
      label: 'Authentication',
      route: '/login'
    }, {
      label: 'Components',
      route: '/ui/components/overview'
    }, {
      label: 'Documentation',
      route: '/documentation'
    }, {
      label: 'FAQ',
      route: '/pages/faq'
    }, {
      label: 'Form Elements',
      route: '/ui/forms/form-elements'
    }, {
      label: 'Form Wizard',
      route: '/ui/forms/form-wizard'
    }, {
      label: 'Guides',
      route: '/pages/guides'
    }, {
      label: 'Help Center',
      route: '/apps/help-center'
    }, {
      label: 'Scrumboard',
      route: '/apps/scrumboard'
    }];
  }
  ngOnInit() {}
  close() {
    this.popoverRef.close();
  }
  static #_ = this.ɵfac = function MegaMenuComponent_Factory(t) {
    return new (t || MegaMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_vex_components_vex_popover_vex_popover_ref__WEBPACK_IMPORTED_MODULE_0__.VexPopoverRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MegaMenuComponent,
    selectors: [["vex-mega-menu"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 20,
    vars: 2,
    consts: [[1, "card", "overflow-auto", "flex", "flex-col", "md:flex-row", "sm:mr-6"], [1, "bg-primary-600/10", "p-6", "flex-auto", "max-w-[300px]"], [1, "headline", "mb-4", "text-primary-600"], [1, "caption"], ["color", "primary", "mat-flat-button", "", "type", "button", 1, "mt-4", "w-full"], [1, "p-6", "flex-auto", "max-w-[400px]"], [1, "body-2", "m-0"], [1, "mt-4", "grid", "grid-cols-3"], ["class", "text-dark p-3 text-center hover:bg-primary-600/10 hover:text-primary-600 transition duration-400 ease-out-swift rounded block no-underline", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "p-6", "flex-auto", "max-w-[350px]"], [1, "mt-6", "grid", "grid-cols-2", "gap-x-12", "gap-y-4"], ["class", "text-dark body-1 no-underline hover:text-primary-600 transition duration-400 ease-out-swift", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "text-dark", "p-3", "text-center", "hover:bg-primary-600/10", "hover:text-primary-600", "transition", "duration-400", "ease-out-swift", "rounded", "block", "no-underline", 3, "routerLink", "click"], ["color", "primary", 1, "icon-xl", 3, "svgIcon"], [1, "body-2", "mt-2"], [1, "text-dark", "body-1", "no-underline", "hover:text-primary-600", "transition", "duration-400", "ease-out-swift", 3, "routerLink", "click"]],
    template: function MegaMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Mega Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Learn More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5)(11, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MegaMenuComponent_a_14_Template, 4, 3, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9)(16, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MegaMenuComponent_a_19_Template, 2, 2, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.features);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pages);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgFor, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
    encapsulation: 2
  });
}

/***/ }),

/***/ 6182:
/*!***********************************************************************!*\
  !*** ./src/app/layouts/components/toolbar/search/search.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchComponent: () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/services/vex-layout.service */ 4952);
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.service */ 3925);













const _c0 = ["searchInput"];
function SearchComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_div_8_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class SearchComponent {
  constructor(layoutService, searchService) {
    this.layoutService = layoutService;
    this.searchService = searchService;
    this.show$ = this.layoutService.searchOpen$;
    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl();
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.DestroyRef);
  }
  ngOnInit() {
    this.searchService.isOpenSubject.next(true);
    this.searchCtrl.valueChanges.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.takeUntilDestroyed)(this.destroyRef)).subscribe(value => this.searchService.valueChangesSubject.next(value));
    this.show$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(show => show), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.takeUntilDestroyed)(this.destroyRef)).subscribe(() => this.input?.nativeElement.focus());
  }
  close() {
    this.layoutService.closeSearch();
    this.searchCtrl.setValue(undefined);
    this.searchService.isOpenSubject.next(false);
  }
  search() {
    this.searchService.submitSubject.next(this.searchCtrl.value);
    this.close();
  }
  ngOnDestroy() {
    this.layoutService.closeSearch();
    this.searchCtrl.setValue(undefined);
    this.searchService.isOpenSubject.next(false);
  }
  static #_ = this.ɵfac = function SearchComponent_Factory(t) {
    return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_0__.VexLayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_search_service__WEBPACK_IMPORTED_MODULE_1__.SearchService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SearchComponent,
    selectors: [["vex-search"]],
    viewQuery: function SearchComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 10,
    vars: 8,
    consts: [[1, "search", 3, "keyup.escape"], ["color", "primary", "mat-icon-button", "", "type", "button", 1, "ltr:right-12", "rtl:left-12", "top-12", "absolute", 3, "click"], ["svgIcon", "mat:close"], ["placeholder", "Search...", 1, "search-input", 3, "formControl", "keyup.enter"], ["searchInput", ""], [1, "search-hint"], ["class", "search-overlay", 3, "click", 4, "ngIf"], [1, "search-overlay", 3, "click"]],
    template: function SearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.escape", function SearchComponent_Template_div_keyup_escape_0_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_2_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function SearchComponent_Template_input_keyup_enter_4_listener() {
          return ctx.search();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Hit enter to search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SearchComponent_div_8_Template, 1, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 4, ctx.show$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.searchCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 6, ctx.show$));
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: [".search[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  opacity: 0;\n  height: 50vh;\n  pointer-events: none;\n  transform: scale(0.75);\n  transition: all 0.25s cubic-bezier(0.2, 1, 0.3, 1);\n  z-index: 1050;\n}\n.search.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n  transform: scale(1);\n  transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);\n}\n\n.search-input[_ngcontent-%COMP%] {\n  font-size: 7vw;\n  line-height: 3rem;\n  width: 75%;\n  margin: 0px;\n  border-radius: 0px;\n  border-bottom-width: 1px;\n  border-right-width: 0px;\n  border-left-width: 0px;\n  border-top-width: 0px;\n  background-color: transparent;\n  font-weight: 700;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.search-hint[_ngcontent-%COMP%] {\n  width: 75%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  text-align: right;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-foreground-hint-text-rgb) / var(--tw-text-opacity));\n}\n\n.search-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  opacity: 0;\n  height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL3Rvb2xiYXIvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL3VuaWdlc3RfZnJvbnQlMjBjb3BpZS9zcmMvYXBwL2xheW91dHMvY29tcG9uZW50cy90b29sYmFyL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFBQSxlQUFBO0VBQUEsUUFBQTtFQUFBLFNBQUE7RUFBQSxhQUFBO0VBQUEsV0FBQTtFQUFBLHNCQUFBO0VBQUEsbUJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQUEsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0RBQUE7RUFDQTtBQUxBO0FBT0E7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlEQUFBO0FDQ0o7O0FER0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUFBLGtCQUFBO0VBQUEsd0JBQUE7RUFBQSx1QkFBQTtFQUFBLHNCQUFBO0VBQUEscUJBQUE7RUFBQSw2QkFBQTtFQUFBLGdCQUFBO0FDQUY7QURFRTtFQUNFLGFBQUE7QUNBSjs7QURJQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUFBLGtCQUFBO0VBQUEsaUJBQUE7RUFBQSxvQkFBQTtFQUFBLGlCQUFBO0VBQUEsZUFBQTtFQUFBLG1CQUFBO0VBQUEsZ0JBQUE7RUFBQSxvQkFBQTtFQUFBLHdFQUFBO0FDREY7O0FES0U7RUFBQSxlQUFBO0VBQUEsV0FBQTtFQUFBLFNBQUE7RUFBQSxXQUFBO0VBQUEsVUFBQTtFQUNBO0FBREEiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoIHtcbiAgQGFwcGx5IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIGZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgb3BhY2l0eS0wO1xuICBoZWlnaHQ6IDUwdmg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMiwgMSwgMC4zLCAxKTtcbiAgei1pbmRleDogMTA1MDtcblxuICAmLnNob3cge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4yLCAxLCAwLjMsIDEpO1xuICB9XG59XG5cbi5zZWFyY2gtaW5wdXQge1xuICBmb250LXNpemU6IDd2dztcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIHdpZHRoOiA3NSU7XG4gIEBhcHBseSBib3JkZXItYiBtLTAgcm91bmRlZC1ub25lIGJvcmRlci1yLTAgYm9yZGVyLWwtMCBib3JkZXItdC0wIGZvbnQtYm9sZCBiZy10cmFuc3BhcmVudDtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG59XG5cbi5zZWFyY2gtaGludCB7XG4gIHdpZHRoOiA3NSU7XG4gIEBhcHBseSB0ZXh0LWJhc2UgdGV4dC1yaWdodCBweS00IG14LWF1dG8gdGV4dC1oaW50IGZvbnQtYm9sZDtcbn1cblxuLnNlYXJjaC1vdmVybGF5IHtcbiAgQGFwcGx5IGZpeGVkIHctZnVsbCBib3R0b20tMCBsZWZ0LTAgb3BhY2l0eS0wO1xuICBoZWlnaHQ6IDUwdmg7XG59XG4iLCIuc2VhcmNoIHtcbiAgQGFwcGx5IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIGZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgb3BhY2l0eS0wO1xuICBoZWlnaHQ6IDUwdmg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuMiwgMSwgMC4zLCAxKTtcbiAgei1pbmRleDogMTA1MDtcbn1cbi5zZWFyY2guc2hvdyB7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4yLCAxLCAwLjMsIDEpO1xufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgZm9udC1zaXplOiA3dnc7XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICB3aWR0aDogNzUlO1xuICBAYXBwbHkgYm9yZGVyLWIgbS0wIHJvdW5kZWQtbm9uZSBib3JkZXItci0wIGJvcmRlci1sLTAgYm9yZGVyLXQtMCBmb250LWJvbGQgYmctdHJhbnNwYXJlbnQ7XG59XG4uc2VhcmNoLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnNlYXJjaC1oaW50IHtcbiAgd2lkdGg6IDc1JTtcbiAgQGFwcGx5IHRleHQtYmFzZSB0ZXh0LXJpZ2h0IHB5LTQgbXgtYXV0byB0ZXh0LWhpbnQgZm9udC1ib2xkO1xufVxuXG4uc2VhcmNoLW92ZXJsYXkge1xuICBAYXBwbHkgZml4ZWQgdy1mdWxsIGJvdHRvbS0wIGxlZnQtMCBvcGFjaXR5LTA7XG4gIGhlaWdodDogNTB2aDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3925:
/*!*********************************************************************!*\
  !*** ./src/app/layouts/components/toolbar/search/search.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchService: () => (/* binding */ SearchService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);


class SearchService {
  constructor() {
    this.valueChangesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
    this.valueChanges$ = this.valueChangesSubject.asObservable();
    this.submitSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.submit$ = this.submitSubject.asObservable();
    this.isOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isOpen$ = this.isOpenSubject.asObservable();
  }
  static #_ = this.ɵfac = function SearchService_Factory(t) {
    return new (t || SearchService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SearchService,
    factory: SearchService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1951:
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/layouts/components/toolbar/toolbar-notifications/toolbar-notifications-dropdown/toolbar-notifications-dropdown.component.ts ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolbarNotificationsDropdownComponent: () => (/* binding */ ToolbarNotificationsDropdownComponent)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! luxon */ 7765);
/* harmony import */ var _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/utils/track-by */ 7637);
/* harmony import */ var _vex_pipes_vex_date_format_relative_vex_date_format_relative_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/pipes/vex-date-format-relative/vex-date-format-relative.pipe */ 1031);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);














const _c0 = () => [];
function ToolbarNotificationsDropdownComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 17)(3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "vexDateFormatRelative");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const notification_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("read", notification_r2.read);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", notification_r2.colorClass)("svgIcon", notification_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](notification_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 7, notification_r2.datetime), " ");
  }
}
class ToolbarNotificationsDropdownComponent {
  constructor() {
    this.notifications = [{
      id: '1',
      label: 'New Order Received',
      icon: 'mat:shopping_basket',
      colorClass: 'text-primary-600',
      datetime: luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().minus({
        hour: 1
      })
    }, {
      id: '2',
      label: 'New customer has registered',
      icon: 'mat:account_circle',
      colorClass: 'text-orange-600',
      datetime: luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().minus({
        hour: 2
      })
    }, {
      id: '3',
      label: 'Campaign statistics are available',
      icon: 'mat:insert_chart',
      colorClass: 'text-purple-600',
      datetime: luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().minus({
        hour: 5
      })
    }, {
      id: '4',
      label: 'Project has been approved',
      icon: 'mat:check_circle',
      colorClass: 'text-green-600',
      datetime: luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().minus({
        hour: 9
      })
    }, {
      id: '5',
      label: 'Client reports are available',
      icon: 'mat:description',
      colorClass: 'text-primary-600',
      datetime: luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().minus({
        hour: 30
      })
    }, {
      id: '6',
      label: 'New review received',
      icon: 'mat:feedback',
      colorClass: 'text-orange-600',
      datetime: luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().minus({
        hour: 40
      }),
      read: true
    }, {
      id: '7',
      label: '22 verified registrations',
      icon: 'mat:verified_user',
      colorClass: 'text-green-600',
      datetime: luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().minus({
        hour: 60
      })
    }, {
      id: '8',
      label: 'New files available',
      icon: 'mat:file_copy',
      colorClass: 'text-amber-600',
      datetime: luxon__WEBPACK_IMPORTED_MODULE_0__.DateTime.local().minus({
        hour: 90
      })
    }];
    this.trackById = _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_1__.trackById;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ToolbarNotificationsDropdownComponent_Factory(t) {
    return new (t || ToolbarNotificationsDropdownComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ToolbarNotificationsDropdownComponent,
    selectors: [["vex-toolbar-notifications-dropdown"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 24,
    vars: 4,
    consts: [[1, "dropdown"], [1, "dropdown-header", "flex", "items-center", "justify-between"], [1, "dropdown-heading"], [1, "dropdown-subheading"], ["mat-icon-button", "", "type", "button", 3, "matMenuTriggerFor"], ["svgIcon", "mat:settings", 1, "notifications-header-icon"], [1, "dropdown-content"], ["class", "notification flex items-center", "matRipple", "", 3, "read", "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "dropdown-footer", "flex", "items-center", "justify-center"], ["color", "primary", "mat-button", "", "type", "button"], ["xPosition", "before", "yPosition", "below"], ["settingsMenu", "matMenu"], ["mat-menu-item", ""], ["svgIcon", "mat:clear_all"], ["svgIcon", "mat:notifications_off"], ["matRipple", "", 1, "notification", "flex", "items-center", 3, "routerLink"], [1, "notification-icon", "flex-none", 3, "ngClass", "svgIcon"], [1, "flex-auto"], [1, "notification-label"], [1, "notification-description"], ["svgIcon", "mat:chevron_right", 1, "notification-chevron", "flex-none"]],
    template: function ToolbarNotificationsDropdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ToolbarNotificationsDropdownComponent_a_10_Template, 9, 10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8)(12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "MARK ALL AS READ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-menu", 10, 11)(16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Mark all as read");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Disable Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" You have ", ctx.notifications.length, " new notifications. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.notifications)("ngForTrackBy", ctx.trackById);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgFor, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _vex_pipes_vex_date_format_relative_vex_date_format_relative_pipe__WEBPACK_IMPORTED_MODULE_2__.VexDateFormatRelativePipe],
    styles: [".dropdown[_ngcontent-%COMP%] {\n  background: var(--vex-background-card);\n  border-bottom-left-radius: var(--vex-border-radius);\n  border-bottom-right-radius: var(--vex-border-radius);\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  max-width: 100vw;\n  overflow: hidden;\n  width: 350px;\n  border-radius: var(--vex-border-radius);\n}\n\n.dropdown-header[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(var(--vex-color-primary-600) / var(--tw-bg-opacity));\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-color-on-primary-600) / var(--tw-text-opacity));\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.dropdown-heading[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n\n.dropdown-subheading[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  max-height: 291px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.dropdown-footer[_ngcontent-%COMP%] {\n  border-top-width: 1px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(var(--vex-background-app-bar-rgb) / var(--tw-bg-opacity));\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.notification[_ngcontent-%COMP%] {\n  position: relative;\n  -webkit-user-select: none;\n          user-select: none;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-foreground-text-rgb) / var(--tw-text-opacity));\n  text-decoration-line: none;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.notification[_ngcontent-%COMP%]:hover {\n  background-color: var(--vex-background-hover);\n}\n.notification[_ngcontent-%COMP%]:hover   .notification-label[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-color-primary-600) / var(--tw-text-opacity));\n}\n.notification.read[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.notification-icon[_ngcontent-%COMP%] {\n  margin-inline-end: 1.5rem;\n}\n\n.notification-label[_ngcontent-%COMP%] {\n  transition: inherit;\n}\n\n.notification-description[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-foreground-secondary-text-rgb) / var(--tw-text-opacity));\n}\n\n.notification-chevron[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n\n.notification[_ngcontent-%COMP%]    + .notification[_ngcontent-%COMP%] {\n  border-top-width: 1px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci1ub3RpZmljYXRpb25zL3Rvb2xiYXItbm90aWZpY2F0aW9ucy1kcm9wZG93bi90b29sYmFyLW5vdGlmaWNhdGlvbnMtZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi91bmlnZXN0X2Zyb250JTIwY29waWUvc3JjL2FwcC9sYXlvdXRzL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLW5vdGlmaWNhdGlvbnMvdG9vbGJhci1ub3RpZmljYXRpb25zLWRyb3Bkb3duL3Rvb2xiYXItbm90aWZpY2F0aW9ucy1kcm9wZG93bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFBO0VBQ0EsbURBQUE7RUFDQSxvREFBQTtFQUNBLCtFQUFBO0VBQUEsbUdBQUE7RUFBQSx1R0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7QUNDRjs7QURHRTtFQUFBLGtCQUFBO0VBQUEsMEVBQUE7RUFBQSxpQkFBQTtFQUFBLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxxQkFBQTtFQUFBLG9CQUFBO0VBQUEsb0VBQUE7RUFBQSwwRUFBQTtFQUFBLDhGQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLG1CQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGtCQUFBO0VBQUE7QUFBQTs7QUFHRjtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREdFO0VBQUEscUJBQUE7RUFBQSxrQkFBQTtFQUFBLCtFQUFBO0VBQUEsbUJBQUE7RUFBQSxzQkFBQTtFQUFBLG9CQUFBO0VBQUE7QUFBQTs7QUFJQTtFQUFBLGtCQUFBO0VBQUEseUJBQUE7VUFBQSxpQkFBQTtFQUFBLGlCQUFBO0VBQUEsb0JBQUE7RUFBQSxvQkFBQTtFQUFBLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxtRUFBQTtFQUFBLDBCQUFBO0VBQUEsd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTtBQUdFO0VBQUE7QUFBQTtBQUdFO0VBQUEsb0JBQUE7RUFBQTtBQUFBO0FBS0Y7RUFBQTtBQUFBOztBQUtGO0VBQUE7QUFBQTs7QUFHRjtFQUNFLG1CQUFBO0FDRkY7O0FETUU7RUFBQSxrQkFBQTtFQUFBLGlCQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBOztBQUdGO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxnREFBQTtBQ0ZGOztBRE1FO0VBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93biB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZleC1iYWNrZ3JvdW5kLWNhcmQpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS12ZXgtYm9yZGVyLXJhZGl1cyk7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS12ZXgtYm9yZGVyLXJhZGl1cyk7XG4gIEBhcHBseSBzaGFkb3ctbGc7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAzNTBweDtcbiAgQGFwcGx5IHJvdW5kZWQ7XG59XG5cbi5kcm9wZG93bi1oZWFkZXIge1xuICBAYXBwbHkgYmctcHJpbWFyeS02MDAgc2hhZG93IHRleHQtb24tcHJpbWFyeS02MDAgcHktNCBweC02O1xufVxuXG4uZHJvcGRvd24taGVhZGluZyB7XG4gIEBhcHBseSB0ZXh0LWxnO1xufVxuXG4uZHJvcGRvd24tc3ViaGVhZGluZyB7XG4gIEBhcHBseSB0ZXh0LXhzO1xufVxuXG4uZHJvcGRvd24tY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDI5MXB4OyAvLyA3M3B4IGhlaWdodCBvZiAxIG5vdGlmaWNhdGlvbiAqIDRcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZHJvcGRvd24tZm9vdGVyIHtcbiAgQGFwcGx5IGJnLWFwcC1iYXIgYm9yZGVyLXQgcHktMiBweC02O1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgQGFwcGx5IHRleHQtZGVmYXVsdCByZWxhdGl2ZSBzZWxlY3Qtbm9uZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi00MDAgZWFzZS1vdXQtc3dpZnQgcHktNCBweC02IG5vLXVuZGVybGluZTtcblxuICAmOmhvdmVyIHtcbiAgICBAYXBwbHkgYmctaG92ZXI7XG5cbiAgICAubm90aWZpY2F0aW9uLWxhYmVsIHtcbiAgICAgIEBhcHBseSB0ZXh0LXByaW1hcnktNjAwO1xuICAgIH1cbiAgfVxuXG4gICYucmVhZCB7XG4gICAgQGFwcGx5IG9wYWNpdHktNTA7XG4gIH1cbn1cblxuLm5vdGlmaWNhdGlvbi1pY29uIHtcbiAgQGFwcGx5IG1lLTY7XG59XG5cbi5ub3RpZmljYXRpb24tbGFiZWwge1xuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xufVxuXG4ubm90aWZpY2F0aW9uLWRlc2NyaXB0aW9uIHtcbiAgQGFwcGx5IHRleHQtc2Vjb25kYXJ5IHRleHQteHM7XG59XG5cbi5ub3RpZmljYXRpb24tY2hldnJvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbiAgQGFwcGx5IHRleHQtZ3JheS00MDA7XG59XG5cbi5ub3RpZmljYXRpb24gKyAubm90aWZpY2F0aW9uIHtcbiAgQGFwcGx5IGJvcmRlci10O1xufVxuIiwiLmRyb3Bkb3duIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LWJhY2tncm91bmQtY2FyZCk7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLXZleC1ib3JkZXItcmFkaXVzKTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLXZleC1ib3JkZXItcmFkaXVzKTtcbiAgQGFwcGx5IHNoYWRvdy1sZztcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDM1MHB4O1xuICBAYXBwbHkgcm91bmRlZDtcbn1cblxuLmRyb3Bkb3duLWhlYWRlciB7XG4gIEBhcHBseSBiZy1wcmltYXJ5LTYwMCBzaGFkb3cgdGV4dC1vbi1wcmltYXJ5LTYwMCBweS00IHB4LTY7XG59XG5cbi5kcm9wZG93bi1oZWFkaW5nIHtcbiAgQGFwcGx5IHRleHQtbGc7XG59XG5cbi5kcm9wZG93bi1zdWJoZWFkaW5nIHtcbiAgQGFwcGx5IHRleHQteHM7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogMjkxcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmRyb3Bkb3duLWZvb3RlciB7XG4gIEBhcHBseSBiZy1hcHAtYmFyIGJvcmRlci10IHB5LTIgcHgtNjtcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gIEBhcHBseSB0ZXh0LWRlZmF1bHQgcmVsYXRpdmUgc2VsZWN0LW5vbmUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNDAwIGVhc2Utb3V0LXN3aWZ0IHB5LTQgcHgtNiBuby11bmRlcmxpbmU7XG59XG4ubm90aWZpY2F0aW9uOmhvdmVyIHtcbiAgQGFwcGx5IGJnLWhvdmVyO1xufVxuLm5vdGlmaWNhdGlvbjpob3ZlciAubm90aWZpY2F0aW9uLWxhYmVsIHtcbiAgQGFwcGx5IHRleHQtcHJpbWFyeS02MDA7XG59XG4ubm90aWZpY2F0aW9uLnJlYWQge1xuICBAYXBwbHkgb3BhY2l0eS01MDtcbn1cblxuLm5vdGlmaWNhdGlvbi1pY29uIHtcbiAgQGFwcGx5IG1lLTY7XG59XG5cbi5ub3RpZmljYXRpb24tbGFiZWwge1xuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xufVxuXG4ubm90aWZpY2F0aW9uLWRlc2NyaXB0aW9uIHtcbiAgQGFwcGx5IHRleHQtc2Vjb25kYXJ5IHRleHQteHM7XG59XG5cbi5ub3RpZmljYXRpb24tY2hldnJvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbiAgQGFwcGx5IHRleHQtZ3JheS00MDA7XG59XG5cbi5ub3RpZmljYXRpb24gKyAubm90aWZpY2F0aW9uIHtcbiAgQGFwcGx5IGJvcmRlci10O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2824:
/*!*****************************************************************************************************!*\
  !*** ./src/app/layouts/components/toolbar/toolbar-notifications/toolbar-notifications.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolbarNotificationsComponent: () => (/* binding */ ToolbarNotificationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar-notifications-dropdown/toolbar-notifications-dropdown.component */ 1951);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _vex_components_vex_popover_vex_popover_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/components/vex-popover/vex-popover.service */ 563);








const _c0 = ["originRef"];
class ToolbarNotificationsComponent {
  constructor(popover, cd) {
    this.popover = popover;
    this.cd = cd;
    this.dropdownOpen = false;
  }
  ngOnInit() {}
  showPopover() {
    this.dropdownOpen = true;
    this.cd.markForCheck();
    if (!this.originRef) {
      throw new Error('originRef undefined!');
    }
    const popoverRef = this.popover.open({
      content: _toolbar_notifications_dropdown_toolbar_notifications_dropdown_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarNotificationsDropdownComponent,
      origin: this.originRef,
      offsetY: 12,
      position: [{
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
      }, {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }]
    });
    popoverRef.afterClosed$.subscribe(() => {
      this.dropdownOpen = false;
      this.cd.markForCheck();
    });
  }
  static #_ = this.ɵfac = function ToolbarNotificationsComponent_Factory(t) {
    return new (t || ToolbarNotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_vex_components_vex_popover_vex_popover_service__WEBPACK_IMPORTED_MODULE_1__.VexPopoverService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ToolbarNotificationsComponent,
    selectors: [["vex-toolbar-notifications"]],
    viewQuery: function ToolbarNotificationsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.originRef = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 2,
    consts: [["mat-icon-button", "", "type", "button", 1, "button", 3, "click"], ["originRef", ""], ["color", "primary", "svgIcon", "mat:notifications_active"]],
    template: function ToolbarNotificationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToolbarNotificationsComponent_Template_button_click_0_listener() {
          return ctx.showPopover();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("bg-hover", ctx.dropdownOpen);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 7799:
/*!******************************************************************************************************************!*\
  !*** ./src/app/layouts/components/toolbar/toolbar-user/toolbar-user-dropdown/toolbar-user-dropdown.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolbarUserDropdownComponent: () => (/* binding */ ToolbarUserDropdownComponent)
/* harmony export */ });
/* harmony import */ var _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/utils/track-by */ 7637);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _vex_components_vex_popover_vex_popover_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/components/vex-popover/vex-popover-ref */ 5925);















function ToolbarUserDropdownComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToolbarUserDropdownComponent_a_10_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 25)(3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", item_r5.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", item_r5.colorClass)("svgIcon", item_r5.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r5.description);
  }
}
function ToolbarUserDropdownComponent_ng_container_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const status_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", status_r8.colorClass)("svgIcon", status_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](status_r8.label);
  }
}
function ToolbarUserDropdownComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ToolbarUserDropdownComponent_ng_container_13_span_1_Template, 5, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const status_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", status_r8 === ctx_r1.activeStatus);
  }
}
function ToolbarUserDropdownComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToolbarUserDropdownComponent_button_18_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const status_r11 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.setStatus(status_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const status_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", status_r11.colorClass)("svgIcon", status_r11.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](status_r11.label);
  }
}
const _c0 = () => ["/login"];
class ToolbarUserDropdownComponent {
  constructor(cd, popoverRef) {
    this.cd = cd;
    this.popoverRef = popoverRef;
    this.items = [{
      id: '1',
      icon: 'mat:account_circle',
      label: 'My Profile',
      description: 'Personal Information',
      colorClass: 'text-teal-600',
      route: '/apps/social'
    }, {
      id: '2',
      icon: 'mat:move_to_inbox',
      label: 'My Inbox',
      description: 'Messages & Latest News',
      colorClass: 'text-primary-600',
      route: '/apps/chat'
    }, {
      id: '3',
      icon: 'mat:list_alt',
      label: 'My Projects',
      description: 'Tasks & Active Projects',
      colorClass: 'text-amber-600',
      route: '/apps/scrumboard'
    }, {
      id: '4',
      icon: 'mat:table_chart',
      label: 'Billing Information',
      description: 'Pricing & Current Plan',
      colorClass: 'text-purple-600',
      route: '/pages/pricing'
    }];
    this.statuses = [{
      id: 'online',
      label: 'Online',
      icon: 'mat:check_circle',
      colorClass: 'text-green-600'
    }, {
      id: 'away',
      label: 'Away',
      icon: 'mat:access_time',
      colorClass: 'text-orange-600'
    }, {
      id: 'dnd',
      label: 'Do not disturb',
      icon: 'mat:do_not_disturb',
      colorClass: 'text-red-600'
    }, {
      id: 'offline',
      label: 'Offline',
      icon: 'mat:offline_bolt',
      colorClass: 'text-gray-600'
    }];
    this.activeStatus = this.statuses[0];
    this.trackById = _vex_utils_track_by__WEBPACK_IMPORTED_MODULE_0__.trackById;
  }
  ngOnInit() {}
  setStatus(status) {
    this.activeStatus = status;
    this.cd.markForCheck();
  }
  close() {
    this.popoverRef.close();
  }
  static #_ = this.ɵfac = function ToolbarUserDropdownComponent_Factory(t) {
    return new (t || ToolbarUserDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_vex_components_vex_popover_vex_popover_ref__WEBPACK_IMPORTED_MODULE_1__.VexPopoverRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ToolbarUserDropdownComponent,
    selectors: [["vex-toolbar-user-dropdown"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 37,
    vars: 10,
    consts: [[1, "dropdown"], [1, "dropdown-header", "flex", "items-center", "justify-between"], [1, "flex", "items-center"], [1, "dropdown-heading-icon", "flex", "items-center", "justify-center"], ["svgIcon", "mat:person"], [1, "dropdown-heading"], ["mat-icon-button", "", "matTooltip", "Settings", "matTooltipPosition", "before", "type", "button", 3, "matMenuTriggerFor"], ["svgIcon", "mat:settings", 1, "notifications-header-icon"], [1, "dropdown-content"], ["class", "notification flex items-center", "matRipple", "", 3, "routerLink", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "dropdown-footer", "flex", "items-center", "justify-between"], ["mat-button", "", "type", "button", 1, "dropdown-footer-select", 3, "matMenuTriggerFor"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["color", "primary", "mat-button", "", 3, "routerLink", "click"], ["xPosition", "before", "yPosition", "below"], ["statusMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["settingsMenu", "matMenu"], ["mat-menu-item", ""], ["svgIcon", "mat:business"], ["svgIcon", "mat:verified_user"], ["svgIcon", "mat:lock"], ["svgIcon", "mat:notifications_off"], ["matRipple", "", 1, "notification", "flex", "items-center", 3, "routerLink", "click"], [1, "notification-icon", "flex-none", 3, "ngClass", "svgIcon"], [1, "flex-auto"], [1, "notification-label"], [1, "notification-description"], ["svgIcon", "mat:chevron_right", 1, "notification-chevron", "flex-none"], [4, "ngIf"], [3, "ngClass", "svgIcon"], ["svgIcon", "mat:arrow_drop_down", 1, "dropdown-footer-select-caret"], ["mat-menu-item", "", 3, "click"]],
    template: function ToolbarUserDropdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "David Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ToolbarUserDropdownComponent_a_10_Template, 8, 5, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10)(12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ToolbarUserDropdownComponent_ng_container_13_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ToolbarUserDropdownComponent_Template_a_click_14_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-menu", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ToolbarUserDropdownComponent_button_18_Template, 4, 3, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-menu", 14, 17)(21, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Change Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Change Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Disable Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items)("ngForTrackBy", ctx.trackById);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.statuses)("ngForTrackBy", ctx.trackById);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.statuses)("ngForTrackBy", ctx.trackById);
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgFor, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
    styles: [".dropdown[_ngcontent-%COMP%] {\n  background: var(--vex-background-card);\n  border-bottom-left-radius: var(--vex-border-radius);\n  border-bottom-right-radius: var(--vex-border-radius);\n  max-width: 100vw;\n  overflow: hidden;\n  width: 350px;\n  border-radius: var(--vex-border-radius);\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.dropdown-header[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(var(--vex-color-primary-600) / var(--tw-bg-opacity));\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-right: 1rem;\n  padding-left: 0.75rem;\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-color-on-primary-600) / var(--tw-text-opacity));\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.dropdown-heading-icon[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 999999px;\n  margin-right: 0.75rem;\n  padding: 0.5rem;\n}\n.dropdown-heading-icon[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  height: 32px;\n  width: 32px;\n}\n\n.dropdown-heading[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.dropdown-footer[_ngcontent-%COMP%] {\n  border-top-width: 1px;\n  --tw-bg-opacity: 1;\n  background-color: rgb(var(--vex-background-app-bar-rgb) / var(--tw-bg-opacity));\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n.dropdown-footer-select[_ngcontent-%COMP%] {\n  padding-left: 0.75rem;\n}\n.dropdown-footer-select[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:not(.dropdown-footer-select-caret) {\n  vertical-align: -7px !important;\n  margin-right: 0.5rem;\n}\n\n.dropdown-footer-select-caret[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  vertical-align: -4px !important;\n  width: 18px;\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n\n.notification[_ngcontent-%COMP%] {\n  position: relative;\n  -webkit-user-select: none;\n          user-select: none;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-foreground-text-rgb) / var(--tw-text-opacity));\n  text-decoration-line: none;\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.notification[_ngcontent-%COMP%]:hover {\n  background-color: var(--vex-background-hover);\n}\n.notification[_ngcontent-%COMP%]:hover   .notification-label[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-color-primary-600) / var(--tw-text-opacity));\n}\n.notification.read[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.notification-icon[_ngcontent-%COMP%] {\n  margin-right: 1.5rem;\n}\n\n.notification-label[_ngcontent-%COMP%] {\n  transition: inherit;\n}\n\n.notification-description[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  --tw-text-opacity: 1;\n  color: rgb(var(--vex-foreground-secondary-text-rgb) / var(--tw-text-opacity));\n}\n\n.notification-chevron[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n\n.notification[_ngcontent-%COMP%]    + .notification[_ngcontent-%COMP%] {\n  border-top-width: 1px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci11c2VyL3Rvb2xiYXItdXNlci1kcm9wZG93bi90b29sYmFyLXVzZXItZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi91bmlnZXN0X2Zyb250JTIwY29waWUvc3JjL2FwcC9sYXlvdXRzL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLXVzZXIvdG9vbGJhci11c2VyLWRyb3Bkb3duL3Rvb2xiYXItdXNlci1kcm9wZG93bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFBO0VBQ0EsbURBQUE7RUFDQSxvREFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFBQSwrRUFBQTtFQUFBLG1HQUFBO0VBQUEsdUdBQUE7QUNDRjs7QURHRTtFQUFBLGtCQUFBO0VBQUEsMEVBQUE7RUFBQSxpQkFBQTtFQUFBLG9CQUFBO0VBQUEsbUJBQUE7RUFBQSxxQkFBQTtFQUFBLG9CQUFBO0VBQUEsb0VBQUE7RUFBQSwwRUFBQTtFQUFBLDhGQUFBO0VBQUE7QUFBQTs7QUFHRjtFQUNFLG9DQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUFBLGVBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FESUU7RUFBQSxtQkFBQTtFQUFBO0FBQUE7O0FBR0Y7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURJRTtFQUFBLHFCQUFBO0VBQUEsa0JBQUE7RUFBQSwrRUFBQTtFQUFBLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxvQkFBQTtFQUFBO0FBQUE7O0FBSUE7RUFBQTtBQUFBO0FBRUE7RUFDRSwrQkFBQTtFQUNBLG9CQUFBO0FDQUo7O0FESUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsZ0RBQUE7QUNERjs7QURLRTtFQUFBLGtCQUFBO0VBQUEseUJBQUE7VUFBQSxpQkFBQTtFQUFBLGlCQUFBO0VBQUEsb0JBQUE7RUFBQSxvQkFBQTtFQUFBLHFCQUFBO0VBQUEsb0JBQUE7RUFBQSxtRUFBQTtFQUFBLDBCQUFBO0VBQUEsd0JBQUE7RUFBQSx3REFBQTtFQUFBLDBCQUFBO0VBQUE7QUFBQTtBQUdFO0VBQUE7QUFBQTtBQUdFO0VBQUEsb0JBQUE7RUFBQTtBQUFBO0FBS0Y7RUFBQTtBQUFBOztBQUtGO0VBQUE7QUFBQTs7QUFHRjtFQUNFLG1CQUFBO0FDSkY7O0FEUUU7RUFBQSxrQkFBQTtFQUFBLGlCQUFBO0VBQUEsb0JBQUE7RUFBQTtBQUFBOztBQUdGO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxnREFBQTtBQ0pGOztBRFFFO0VBQUE7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93biB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZleC1iYWNrZ3JvdW5kLWNhcmQpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS12ZXgtYm9yZGVyLXJhZGl1cyk7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS12ZXgtYm9yZGVyLXJhZGl1cyk7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAzNTBweDtcbiAgQGFwcGx5IHJvdW5kZWQgc2hhZG93LWxnO1xufVxuXG4uZHJvcGRvd24taGVhZGVyIHtcbiAgQGFwcGx5IGJnLXByaW1hcnktNjAwIHRleHQtb24tcHJpbWFyeS02MDAgcHktNCBwci00IHBsLTMgc2hhZG93O1xufVxuXG4uZHJvcGRvd24taGVhZGluZy1pY29uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA5OTk5OTlweDtcbiAgQGFwcGx5IHAtMiBtci0zO1xuXG4gIC5tYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICB3aWR0aDogMzJweDtcbiAgfVxufVxuXG4uZHJvcGRvd24taGVhZGluZyB7XG4gIEBhcHBseSB0ZXh0LWxnO1xufVxuXG4uZHJvcGRvd24tY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5kcm9wZG93bi1mb290ZXIge1xuICBAYXBwbHkgYm9yZGVyLXQgYmctYXBwLWJhciBweC0yIHB5LTM7XG59XG5cbi5kcm9wZG93bi1mb290ZXItc2VsZWN0IHtcbiAgQGFwcGx5IHBsLTM7XG5cbiAgLm1hdC1pY29uOm5vdCguZHJvcGRvd24tZm9vdGVyLXNlbGVjdC1jYXJldCkge1xuICAgIHZlcnRpY2FsLWFsaWduOiAtN3B4ICFpbXBvcnRhbnQ7XG4gICAgQGFwcGx5IG1yLTI7XG4gIH1cbn1cblxuLmRyb3Bkb3duLWZvb3Rlci1zZWxlY3QtY2FyZXQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgdmVydGljYWwtYWxpZ246IC00cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE4cHg7XG4gIEBhcHBseSB0ZXh0LWdyYXktNDAwO1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgQGFwcGx5IHRleHQtZGVmYXVsdCByZWxhdGl2ZSBzZWxlY3Qtbm9uZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi00MDAgZWFzZS1vdXQtc3dpZnQgcHktNCBweC02IG5vLXVuZGVybGluZTtcblxuICAmOmhvdmVyIHtcbiAgICBAYXBwbHkgYmctaG92ZXI7XG5cbiAgICAubm90aWZpY2F0aW9uLWxhYmVsIHtcbiAgICAgIEBhcHBseSB0ZXh0LXByaW1hcnktNjAwO1xuICAgIH1cbiAgfVxuXG4gICYucmVhZCB7XG4gICAgQGFwcGx5IG9wYWNpdHktNTA7XG4gIH1cbn1cblxuLm5vdGlmaWNhdGlvbi1pY29uIHtcbiAgQGFwcGx5IG1yLTY7XG59XG5cbi5ub3RpZmljYXRpb24tbGFiZWwge1xuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xufVxuXG4ubm90aWZpY2F0aW9uLWRlc2NyaXB0aW9uIHtcbiAgQGFwcGx5IHRleHQtc2Vjb25kYXJ5IHRleHQteHM7XG59XG5cbi5ub3RpZmljYXRpb24tY2hldnJvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbiAgQGFwcGx5IHRleHQtZ3JheS00MDA7XG59XG5cbi5ub3RpZmljYXRpb24gKyAubm90aWZpY2F0aW9uIHtcbiAgQGFwcGx5IGJvcmRlci10O1xufVxuIiwiLmRyb3Bkb3duIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdmV4LWJhY2tncm91bmQtY2FyZCk7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLXZleC1ib3JkZXItcmFkaXVzKTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLXZleC1ib3JkZXItcmFkaXVzKTtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDM1MHB4O1xuICBAYXBwbHkgcm91bmRlZCBzaGFkb3ctbGc7XG59XG5cbi5kcm9wZG93bi1oZWFkZXIge1xuICBAYXBwbHkgYmctcHJpbWFyeS02MDAgdGV4dC1vbi1wcmltYXJ5LTYwMCBweS00IHByLTQgcGwtMyBzaGFkb3c7XG59XG5cbi5kcm9wZG93bi1oZWFkaW5nLWljb24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTk5OXB4O1xuICBAYXBwbHkgcC0yIG1yLTM7XG59XG4uZHJvcGRvd24taGVhZGluZy1pY29uIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbn1cblxuLmRyb3Bkb3duLWhlYWRpbmcge1xuICBAYXBwbHkgdGV4dC1sZztcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uZHJvcGRvd24tZm9vdGVyIHtcbiAgQGFwcGx5IGJvcmRlci10IGJnLWFwcC1iYXIgcHgtMiBweS0zO1xufVxuXG4uZHJvcGRvd24tZm9vdGVyLXNlbGVjdCB7XG4gIEBhcHBseSBwbC0zO1xufVxuLmRyb3Bkb3duLWZvb3Rlci1zZWxlY3QgLm1hdC1pY29uOm5vdCguZHJvcGRvd24tZm9vdGVyLXNlbGVjdC1jYXJldCkge1xuICB2ZXJ0aWNhbC1hbGlnbjogLTdweCAhaW1wb3J0YW50O1xuICBAYXBwbHkgbXItMjtcbn1cblxuLmRyb3Bkb3duLWZvb3Rlci1zZWxlY3QtY2FyZXQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgdmVydGljYWwtYWxpZ246IC00cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE4cHg7XG4gIEBhcHBseSB0ZXh0LWdyYXktNDAwO1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgQGFwcGx5IHRleHQtZGVmYXVsdCByZWxhdGl2ZSBzZWxlY3Qtbm9uZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi00MDAgZWFzZS1vdXQtc3dpZnQgcHktNCBweC02IG5vLXVuZGVybGluZTtcbn1cbi5ub3RpZmljYXRpb246aG92ZXIge1xuICBAYXBwbHkgYmctaG92ZXI7XG59XG4ubm90aWZpY2F0aW9uOmhvdmVyIC5ub3RpZmljYXRpb24tbGFiZWwge1xuICBAYXBwbHkgdGV4dC1wcmltYXJ5LTYwMDtcbn1cbi5ub3RpZmljYXRpb24ucmVhZCB7XG4gIEBhcHBseSBvcGFjaXR5LTUwO1xufVxuXG4ubm90aWZpY2F0aW9uLWljb24ge1xuICBAYXBwbHkgbXItNjtcbn1cblxuLm5vdGlmaWNhdGlvbi1sYWJlbCB7XG4gIHRyYW5zaXRpb246IGluaGVyaXQ7XG59XG5cbi5ub3RpZmljYXRpb24tZGVzY3JpcHRpb24ge1xuICBAYXBwbHkgdGV4dC1zZWNvbmRhcnkgdGV4dC14cztcbn1cblxuLm5vdGlmaWNhdGlvbi1jaGV2cm9uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBAYXBwbHkgdGV4dC1ncmF5LTQwMDtcbn1cblxuLm5vdGlmaWNhdGlvbiArIC5ub3RpZmljYXRpb24ge1xuICBAYXBwbHkgYm9yZGVyLXQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 9546:
/*!***********************************************************************************!*\
  !*** ./src/app/layouts/components/toolbar/toolbar-user/toolbar-user.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolbarUserComponent: () => (/* binding */ ToolbarUserComponent)
/* harmony export */ });
/* harmony import */ var _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toolbar-user-dropdown/toolbar-user-dropdown.component */ 7799);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _vex_components_vex_popover_vex_popover_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/components/vex-popover/vex-popover.service */ 563);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 2333);








class ToolbarUserComponent {
  constructor(popover, cd, authService) {
    this.popover = popover;
    this.cd = cd;
    this.authService = authService;
    this.dropdownOpen = false;
  }
  ngOnInit() {
    // 2. Récupère les données au chargement
    this.userData = this.authService.getUserData();
  }
  showPopover(originRef) {
    this.dropdownOpen = true;
    this.cd.markForCheck();
    const popoverRef = this.popover.open({
      content: _toolbar_user_dropdown_toolbar_user_dropdown_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarUserDropdownComponent,
      origin: originRef,
      offsetY: 12,
      position: [{
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
      }, {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }]
    });
    popoverRef.afterClosed$.subscribe(() => {
      this.dropdownOpen = false;
      this.cd.markForCheck();
    });
  }
  static #_ = this.ɵfac = function ToolbarUserComponent_Factory(t) {
    return new (t || ToolbarUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_vex_components_vex_popover_vex_popover_service__WEBPACK_IMPORTED_MODULE_1__.VexPopoverService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ToolbarUserComponent,
    selectors: [["vex-toolbar-user"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 4,
    consts: [["matRipple", "", 1, "flex", "items-center", "rounded", "cursor-pointer", "relative", "transition", "duration-400", "ease-out-swift", "select-none", "py-1", "pr-1", "pl-3", "hover:bg-hover", 3, "click"], ["originRef", ""], [1, "body-1", "font-medium", "leading-snug", "ltr:mr-3", "rtl:ml-3", "hidden", "sm:block"], [1, "rounded-full", "h-9", "w-9", "flex", "items-center", "justify-center", "text-primary-600", "bg-primary-600/10"], ["svgIcon", "mat:person"]],
    template: function ToolbarUserComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ToolbarUserComponent_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.showPopover(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("bg-hover", ctx.dropdownOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.userData == null ? null : ctx.userData.prenom, " ", ctx.userData == null ? null : ctx.userData.nom, " ");
      }
    },
    dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 52:
/*!*****************************************************************!*\
  !*** ./src/app/layouts/components/toolbar/toolbar.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolbarComponent: () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 5043);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var _mega_menu_mega_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mega-menu/mega-menu.component */ 2276);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation/navigation.component */ 9373);
/* harmony import */ var _toolbar_user_toolbar_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbar-user/toolbar-user.component */ 9546);
/* harmony import */ var _toolbar_notifications_toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar-notifications/toolbar-notifications.component */ 2824);
/* harmony import */ var _navigation_navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navigation/navigation-item/navigation-item.component */ 9208);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vex/utils/check-router-childs-data */ 9681);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var _vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vex/services/vex-layout.service */ 4952);
/* harmony import */ var _vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vex/config/vex-config.service */ 376);
/* harmony import */ var _core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/navigation/navigation.service */ 120);
/* harmony import */ var _vex_components_vex_popover_vex_popover_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vex/components/vex-popover/vex-popover.service */ 563);
























const _c0 = () => ["/"];
function ToolbarComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "h1", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("hidden", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 4, ctx_r0.isDesktop$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 6, ctx_r0.title$), " ");
  }
}
function ToolbarComponent_div_7_vex_navigation_item_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "vex-navigation-item", 23);
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("item", item_r6);
  }
}
function ToolbarComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ToolbarComponent_div_7_vex_navigation_item_2_Template, 1, 1, "vex-navigation-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("hidden", !_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 3, ctx_r1.isDesktop$));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 5, ctx_r1.navigationItems$));
  }
}
function ToolbarComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "vex-toolbar-user");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ToolbarComponent_vex_navigation_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "vex-navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("hidden", !_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 2, ctx_r4.isDesktop$));
  }
}
class ToolbarComponent {
  constructor(layoutService, configService, navigationService, popoverService, router) {
    this.layoutService = layoutService;
    this.configService = configService;
    this.navigationService = navigationService;
    this.popoverService = popoverService;
    this.router = router;
    this.showShadow = false;
    this.navigationItems$ = this.navigationService.items$;
    this.isHorizontalLayout$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(config => config.layout === 'horizontal'));
    this.isVerticalLayout$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(config => config.layout === 'vertical'));
    this.isNavbarInToolbar$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(config => config.navbar.position === 'in-toolbar'));
    this.isNavbarBelowToolbar$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(config => config.navbar.position === 'below-toolbar'));
    this.userVisible$ = this.configService.config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(config => config.toolbar.user.visible));
    this.title$ = this.configService.select(config => config.sidenav.title);
    this.isDesktop$ = this.layoutService.isDesktop$;
    this.megaMenuOpen$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(false);
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_10__.DestroyRef);
  }
  ngOnInit() {
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_14__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.startWith)(null), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_16__.takeUntilDestroyed)(this.destroyRef)).subscribe(() => {
      this.showShadow = (0,_vex_utils_check_router_childs_data__WEBPACK_IMPORTED_MODULE_5__.checkRouterChildsData)(this.router.routerState.root.snapshot, data => data.toolbarShadowEnabled ?? false);
    });
  }
  openQuickpanel() {
    this.layoutService.openQuickpanel();
  }
  openSidenav() {
    this.layoutService.openSidenav();
  }
  openMegaMenu(origin) {
    this.megaMenuOpen$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(this.popoverService.open({
      content: _mega_menu_mega_menu_component__WEBPACK_IMPORTED_MODULE_0__.MegaMenuComponent,
      origin,
      offsetY: 12,
      position: [{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }]
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(popoverRef => popoverRef.afterClosed$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(() => false))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.startWith)(true));
  }
  openSearch() {
    this.layoutService.openSearch();
  }
  static #_ = this.ɵfac = function ToolbarComponent_Factory(t) {
    return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_6__.VexLayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_7__.VexConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_navigation_navigation_service__WEBPACK_IMPORTED_MODULE_8__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_vex_components_vex_popover_vex_popover_service__WEBPACK_IMPORTED_MODULE_9__.VexPopoverService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: ToolbarComponent,
    selectors: [["vex-toolbar"]],
    hostVars: 2,
    hostBindings: function ToolbarComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("shadow-b", ctx.showShadow);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
    decls: 38,
    vars: 25,
    consts: [[1, "toolbar", "text-default", "w-full", "px-6", "flex", "items-center"], ["mat-icon-button", "", "type", "button", 3, "click"], ["svgIcon", "mat:menu"], ["class", "ltr:mr-4 rtl:ml-4 flex items-center", 3, "routerLink", 4, "ngIf"], ["class", "px-6 flex-none flex items-center", 3, "hidden", 4, "ngIf"], [1, "flex-1"], [1, "-mx-1", "flex", "items-center"], [1, "px-1"], ["color", "primary", "svgIcon", "mat:search"], ["color", "primary", "svgIcon", "mat:bookmarks"], ["mat-icon-button", "", "type", "button", 3, "matMenuTriggerFor"], ["svgIcon", "flag:united-states"], ["class", "px-1", 4, "ngIf"], ["overlapTrigger", "false", "xPosition", "before", "yPosition", "below"], ["languageMenu", "matMenu"], ["mat-menu-item", ""], ["svgIcon", "flag:germany"], [3, "hidden", 4, "ngIf"], [1, "ltr:mr-4", "rtl:ml-4", "flex", "items-center", 3, "routerLink"], ["alt", "Logo", "src", "assets/img/illustrations/data_center.svg", 1, "w-8", "select-none"], [1, "text-2xl", "font-bold", "tracking-wide", "ltr:pl-4", "rtl:pr-4", "m-0", "select-none"], [1, "px-6", "flex-none", "flex", "items-center"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]],
    template: function ToolbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_2_listener() {
          return ctx.openSidenav();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ToolbarComponent_a_5_Template, 6, 9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, ToolbarComponent_div_7_Template, 4, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_13_listener() {
          return ctx.openSearch();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "vex-toolbar-notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 7)(18, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_18_listener() {
          return ctx.openQuickpanel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 7)(21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, ToolbarComponent_div_23_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "mat-menu", 13, 14)(27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "German");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, ToolbarComponent_vex_navigation_35_Template, 2, 4, "vex-navigation", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](36, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](37, "async");
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("container", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 9, ctx.isVerticalLayout$));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("hidden", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 11, ctx.isDesktop$));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 13, ctx.isVerticalLayout$));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 15, ctx.isVerticalLayout$) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 17, ctx.isNavbarInToolbar$));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](24, 19, ctx.userVisible$));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](36, 21, ctx.isVerticalLayout$) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](37, 23, ctx.isNavbarBelowToolbar$));
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgFor, _navigation_navigation_item_navigation_item_component__WEBPACK_IMPORTED_MODULE_4__.NavigationItemComponent, _toolbar_notifications_toolbar_notifications_component__WEBPACK_IMPORTED_MODULE_3__.ToolbarNotificationsComponent, _toolbar_user_toolbar_user_component__WEBPACK_IMPORTED_MODULE_2__.ToolbarUserComponent, _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__.NavigationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  background: var(--vex-toolbar-background);\n  box-sizing: border-box;\n  display: block;\n  white-space: nowrap;\n  width: 100%;\n  z-index: var(--vex-toolbar-z-index);\n  border-bottom-width: 1px;\n  --tw-backdrop-blur: blur(8px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  height: var(--vex-toolbar-height);\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uL3VuaWdlc3RfZnJvbnQlMjBjb3BpZS9zcmMvYXBwL2xheW91dHMvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0Esd0JBQUE7RUFBQSw2QkFBQTtFQUFBLCtRQUFBO1VBQUEsdVFBQUE7QUNDRjs7QURFQTtFQUNFLGlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtdG9vbGJhci1iYWNrZ3JvdW5kKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiB2YXIoLS12ZXgtdG9vbGJhci16LWluZGV4KTtcbiAgQGFwcGx5IGJhY2tkcm9wLWJsdXIgYm9yZGVyLWI7XG59XG5cbi50b29sYmFyIHtcbiAgaGVpZ2h0OiB2YXIoLS12ZXgtdG9vbGJhci1oZWlnaHQpO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIiwiOmhvc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12ZXgtdG9vbGJhci1iYWNrZ3JvdW5kKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiB2YXIoLS12ZXgtdG9vbGJhci16LWluZGV4KTtcbiAgQGFwcGx5IGJhY2tkcm9wLWJsdXIgYm9yZGVyLWI7XG59XG5cbi50b29sYmFyIHtcbiAgaGVpZ2h0OiB2YXIoLS12ZXgtdG9vbGJhci1oZWlnaHQpO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8349:
/*!****************************************************!*\
  !*** ./src/app/layouts/layout/layout.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutComponent: () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _vex_components_vex_sidebar_vex_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/components/vex-sidebar/vex-sidebar.component */ 483);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sidenav/sidenav.component */ 6468);
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/toolbar/toolbar.component */ 52);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer/footer.component */ 3147);
/* harmony import */ var _components_quickpanel_quickpanel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/quickpanel/quickpanel.component */ 4132);
/* harmony import */ var _components_config_panel_config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/config-panel/config-panel-toggle/config-panel-toggle.component */ 3593);
/* harmony import */ var _components_config_panel_config_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/config-panel/config-panel.component */ 6426);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base-layout/base-layout.component */ 8158);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _components_toolbar_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/toolbar/search/search.component */ 6182);
/* harmony import */ var _vex_components_vex_progress_bar_vex_progress_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vex/components/vex-progress-bar/vex-progress-bar.component */ 6912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vex/services/vex-layout.service */ 4952);
/* harmony import */ var _vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vex/config/vex-config.service */ 376);




















function LayoutComponent_vex_base_layout_0_vex_footer_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "vex-footer", 12);
  }
}
function LayoutComponent_vex_base_layout_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "vex-base-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "vex-progress-bar")(2, "vex-search");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "mat-sidenav-container", 1)(4, "mat-sidenav", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("closedStart", function LayoutComponent_vex_base_layout_0_Template_mat_sidenav_closedStart_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r4.onSidenavClosed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "vex-sidenav", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "mat-sidenav", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("closedStart", function LayoutComponent_vex_base_layout_0_Template_mat_sidenav_closedStart_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r6.onQuickpanelClosed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "vex-quickpanel");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "mat-sidenav-content", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "vex-toolbar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "main", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, LayoutComponent_vex_base_layout_0_vex_footer_18_Template, 1, 0, "vex-footer", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "vex-config-panel-toggle", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("openConfig", function LayoutComponent_vex_base_layout_0_Template_vex_config_panel_toggle_openConfig_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](21);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r3.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "vex-sidebar", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](23, "vex-config-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const config_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disableClose", !!_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 11, ctx_r0.sidenavDisableClose$))("fixedInViewport", !!_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 13, ctx_r0.sidenavFixedInViewport$))("mode", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 15, ctx_r0.sidenavMode$)) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "side")("opened", !!_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 17, ctx_r0.sidenavOpen$));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("collapsed", !!_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 19, ctx_r0.sidenavCollapsed$));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("opened", !!_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](12, 21, ctx_r0.quickpanelOpen$));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("dark", config_r1.layout === "vertical");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", config_r1.footer.visible);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("invisibleBackdrop", true)("opened", !!_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](22, 23, ctx_r0.configPanelOpen$));
  }
}
class LayoutComponent {
  constructor(layoutService, configService) {
    this.layoutService = layoutService;
    this.configService = configService;
    this.config$ = this.configService.config$;
    this.sidenavCollapsed$ = this.layoutService.sidenavCollapsed$;
    this.sidenavDisableClose$ = this.layoutService.isDesktop$;
    this.sidenavFixedInViewport$ = this.layoutService.isDesktop$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(isDesktop => !isDesktop));
    this.sidenavMode$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this.layoutService.isDesktop$, this.configService.select(config => config.layout)]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(([isDesktop, layout]) => !isDesktop || layout === 'vertical' ? 'over' : 'side'));
    this.sidenavOpen$ = this.layoutService.sidenavOpen$;
    this.configPanelOpen$ = this.layoutService.configPanelOpen$;
    this.quickpanelOpen$ = this.layoutService.quickpanelOpen$;
  }
  onSidenavClosed() {
    this.layoutService.closeSidenav();
  }
  onQuickpanelClosed() {
    this.layoutService.closeQuickpanel();
  }
  static #_ = this.ɵfac = function LayoutComponent_Factory(t) {
    return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_vex_services_vex_layout_service__WEBPACK_IMPORTED_MODULE_10__.VexLayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_vex_config_vex_config_service__WEBPACK_IMPORTED_MODULE_11__.VexConfigService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: LayoutComponent,
    selectors: [["vex-layout"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 3,
    consts: [[4, "ngIf"], [1, "vex-layout-sidenav-container"], [3, "disableClose", "fixedInViewport", "mode", "opened", "closedStart"], [3, "collapsed"], ["mode", "over", "position", "end", 1, "vex-layout-quickpanel", 3, "opened", "closedStart"], [1, "vex-layout-sidenav-content"], [1, "vex-toolbar"], [1, "vex-layout-content"], ["class", "vex-footer", 4, "ngIf"], [3, "openConfig"], ["position", "right", 3, "invisibleBackdrop", "opened"], ["configpanel", ""], [1, "vex-footer"]],
    template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, LayoutComponent_vex_base_layout_0_Template, 24, 25, "vex-base-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 1, ctx.config$));
      }
    },
    dependencies: [_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_7__.BaseLayoutComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__.SidenavComponent, _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__.ToolbarComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _components_quickpanel_quickpanel_component__WEBPACK_IMPORTED_MODULE_4__.QuickpanelComponent, _components_config_panel_config_panel_toggle_config_panel_toggle_component__WEBPACK_IMPORTED_MODULE_5__.ConfigPanelToggleComponent, _vex_components_vex_sidebar_vex_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.VexSidebarComponent, _components_config_panel_config_panel_component__WEBPACK_IMPORTED_MODULE_6__.ConfigPanelComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatSidenavContent, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterOutlet, _components_toolbar_search_search_component__WEBPACK_IMPORTED_MODULE_8__.SearchComponent, _vex_components_vex_progress_bar_vex_progress_bar_component__WEBPACK_IMPORTED_MODULE_9__.VexProgressBarComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7273:
/*!*********************************!*\
  !*** ./src/app/models/Appel.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatutPresence: () => (/* binding */ StatutPresence)
/* harmony export */ });
var StatutPresence;
(function (StatutPresence) {
  StatutPresence["PRESENT"] = "PRESENT";
  StatutPresence["ABSENT"] = "ABSENT";
  StatutPresence["RETARD"] = "RETARD";
})(StatutPresence || (StatutPresence = {}));

/***/ }),

/***/ 8718:
/*!**********************************!*\
  !*** ./src/app/models/Medias.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaType: () => (/* binding */ MediaType)
/* harmony export */ });
var MediaType;
(function (MediaType) {
  MediaType["JUSTIFICATIF_DEPENSE"] = "JUSTIFICATIF_DEPENSE";
  MediaType["CV_ENSEIGNANT"] = "CV_ENSEIGNANT";
  MediaType["DOSSIER_ETUDIANT"] = "DOSSIER_ETUDIANT";
  MediaType["DOSSIER_INSCRIPTION"] = "DOSSIER_INSCRIPTION";
})(MediaType || (MediaType = {}));

/***/ }),

/***/ 2162:
/*!************************************!*\
  !*** ./src/app/models/TypeNote.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypeNote: () => (/* binding */ TypeNote)
/* harmony export */ });
var TypeNote;
(function (TypeNote) {
  TypeNote["DEVOIR"] = "DEVOIR";
  TypeNote["EXAMEN"] = "EXAMEN";
  TypeNote["TP"] = "TP";
  TypeNote["PARTICIPATION"] = "PARTICIPATION";
  TypeNote["INTERROGATION"] = "INTERROGATION";
  TypeNote["TRIMESTRE"] = "TRIMESTRE";
})(TypeNote || (TypeNote = {}));

/***/ }),

/***/ 8103:
/*!***************************************!*\
  !*** ./src/app/models/TypePeriode.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypePeriode: () => (/* binding */ TypePeriode)
/* harmony export */ });
var TypePeriode;
(function (TypePeriode) {
  TypePeriode["SEMESTRE"] = "SEMESTRE";
  TypePeriode["TRIMESTRE"] = "TRIMESTRE";
  TypePeriode["MENSUEL"] = "MENSUEL";
})(TypePeriode || (TypePeriode = {}));

/***/ }),

/***/ 8198:
/*!***************************************************************************!*\
  !*** ./src/app/pages/pedagogie/affectations/details/details.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailsComponent: () => (/* binding */ DetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout.component */ 306);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout-header.directive */ 2369);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout-content.directive */ 5292);
/* harmony import */ var _vex_components_vex_breadcrumbs_vex_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/components/vex-breadcrumbs/vex-breadcrumbs.component */ 9806);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 3951);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vex/animations/stagger.animation */ 6820);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ 7889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button-toggle */ 727);
/* harmony import */ var _appels_appel_form_appel_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../appels/appel-form/appel-form.component */ 756);
/* harmony import */ var _seances_seance_form_seance_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../seances/seance-form/seance-form.component */ 2375);
/* harmony import */ var _notes_note_form_note_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../notes/note-form/note-form.component */ 1197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_seance_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/seance.service */ 4183);
/* harmony import */ var src_app_services_etudiant_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/etudiant.service */ 7985);

































function DetailsComponent_span_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const m_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", m_r17.nom, " ");
  }
}
function DetailsComponent_th_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_td_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 67)(1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "mat-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](4, 1, row_r18.date, "dd MMM yyyy"), " ");
  }
}
function DetailsComponent_th_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Mati\u00E8re ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_td_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 67)(1, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r19.matiere, " ");
  }
}
function DetailsComponent_th_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " D\u00E9but ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_td_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r20.heureDebut, " ");
  }
}
function DetailsComponent_th_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Fin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_td_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r21.heureFin, " ");
  }
}
function DetailsComponent_th_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Statut ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
const _c0 = (a0, a1, a2) => ({
  "bg-emerald-50 text-emerald-600 border-emerald-100": a0,
  "bg-blue-50 text-blue-600 border-blue-100": a1,
  "bg-amber-50 text-amber-600 border-amber-100": a2
});
function DetailsComponent_td_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 67)(1, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction3"](2, _c0, row_r22.statut === "TERMINEE", row_r22.statut === "EN_COURS", row_r22.statut === "PLANIFIEE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r22.statut, " ");
  }
}
function DetailsComponent_th_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_td_84_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DetailsComponent_td_84_ng_container_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r28);
      const row_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r26.confirmerTerminerSeance(row_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Terminer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DetailsComponent_td_84_ng_container_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r28);
      const row_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r29.ouvrirAppel(row_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, " Appel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
}
function DetailsComponent_td_84_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " S\u00E9ance termin\u00E9e ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
}
function DetailsComponent_td_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 67)(1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DetailsComponent_td_84_ng_container_2_Template, 5, 0, "ng-container", 76)(3, DetailsComponent_td_84_ng_container_3_Template, 3, 0, "ng-container", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r23.statut !== "TERMINEE");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r23.statut === "TERMINEE");
  }
}
function DetailsComponent_tr_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 80);
  }
}
function DetailsComponent_tr_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 81);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("@fadeInUp", undefined);
  }
}
function DetailsComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Aucune mati\u00E8re assign\u00E9e \u00E0 cette affectation. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DetailsComponent_div_100_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 85)(1, "div", 86)(2, "div", 87)(3, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "mat-icon", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div")(6, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "Mati\u00E8re");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DetailsComponent_div_100_div_1_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r35);
      const matiere_r33 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r34.ouvrirNotation(matiere_r33));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "mat-icon", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, " Saisir les notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const matiere_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](matiere_r33.nom);
  }
}
function DetailsComponent_div_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DetailsComponent_div_100_div_1_Template, 13, 1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r16.affectation.matieres);
  }
}
const _c1 = () => ["Configuration", "Gestion des s\u00E9ances", "Fiche"];
const _c2 = () => [5, 10, 20];
class DetailsComponent {
  constructor(seanceService, dialog, etudiantService) {
    this.seanceService = seanceService;
    this.dialog = dialog;
    this.etudiantService = etudiantService;
    this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.UntypedFormControl('boxed');
    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.UntypedFormControl();
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource();
    this.displayedColumns = ['date', 'matiere', 'heureDebut', 'heureFin', 'statut', 'actions'];
    this.etudiants = [];
  }
  ngOnInit() {
    this.affectation = history.state?.affectation;
    if (!this.affectation) return;
    this.chargerSeances(this.affectation.id);
    this.chargerEtudiants(this.affectation.classe.id);
  }
  chargerSeances(id) {
    this.seanceService.getSeancesParAffectation(id).subscribe(res => {
      this.dataSource.data = res;
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }
  /**
   * Étudiants actifs de la classe (année active backend)
   */
  chargerEtudiants(classeId) {
    this.etudiantService.getEtudiantsParClasse(classeId).subscribe(res => this.etudiants = res);
  }
  ouvrirAppel(seance) {
    const dialogRef = this.dialog.open(_appels_appel_form_appel_form_component__WEBPACK_IMPORTED_MODULE_7__.AppelFormComponent, {
      width: '900px',
      data: {
        seance,
        etudiants: this.etudiants
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.chargerSeances(this.affectation.id);
      }
    });
  }
  confirmerTerminerSeance(seance) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
      title: 'Terminer la séance ?',
      text: 'Cette action est irréversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Oui, terminer',
      cancelButtonText: 'Annuler'
    }).then(result => {
      if (result.isConfirmed) {
        this.terminerSeance(seance);
      }
    });
  }
  ouvrirDemarrageSeance() {
    const dialogRef = this.dialog.open(_seances_seance_form_seance_form_component__WEBPACK_IMPORTED_MODULE_8__.SeanceFormComponent, {
      width: '500px',
      data: {
        affectationId: this.affectation?.id,
        matieres: this.affectation?.matieres
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.chargerSeances(this.affectation.id);
      }
    });
  }
  ouvrirNotation(matiere) {
    this.dialog.open(_notes_note_form_note_form_component__WEBPACK_IMPORTED_MODULE_9__.NoteFormComponent, {
      width: '1000px',
      data: {
        etudiants: this.etudiants,
        matiere,
        affectation: this.affectation
      }
    });
  }
  terminerSeance(seance) {
    this.seanceService.terminerSeance(seance.id).subscribe(() => {
      this.chargerSeances(this.affectation.id);
      sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
        title: 'Terminé !',
        text: 'La séance a été clôturée avec succès.',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
      });
    });
  }
  /**
   * Filtre par date
   */
  filtrerParDate(date) {
    this.seanceService.getSeancesParDate(date).subscribe(res => {
      this.dataSource.data = res;
    });
  }
  static #_ = this.ɵfac = function DetailsComponent_Factory(t) {
    return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_seance_service__WEBPACK_IMPORTED_MODULE_10__.SeanceService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_etudiant_service__WEBPACK_IMPORTED_MODULE_11__.EtudiantService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: DetailsComponent,
    selectors: [["vex-details"]],
    viewQuery: function DetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
    decls: 101,
    vars: 24,
    consts: [[1, "relative", "pt-16", "pb-24", "bg-slate-900", "text-white", "overflow-hidden"], [1, "absolute", "top-0", "right-0", "-m-16", "w-96", "h-96", "bg-indigo-500/15", "rounded-full", "blur-3xl"], [1, "absolute", "bottom-0", "left-0", "-mb-20", "w-64", "h-64", "bg-emerald-500/10", "rounded-full", "blur-3xl"], [1, "relative", "w-full"], [1, "flex", "flex-col", "sm:flex-row", "justify-between", "items-start", "sm:items-center", "gap-6", "mb-12"], [1, "flex", "items-center", "gap-3", "mb-3"], [1, "p-2", "bg-white/10", "rounded-lg"], ["svgIcon", "mat:assignment_ind", 1, "text-indigo-400"], [1, "text-3xl", "font-extrabold", "tracking-tight"], [1, "text-slate-400", "text-sm", 3, "crumbs"], [1, "bg-white/5", "p-1.5", "rounded-xl", "border", "border-white/10", "backdrop-blur-md"], ["appearance", "standard", 1, "vex-button-toggle-transparent", 3, "formControl"], ["value", "boxed"], ["svgIcon", "mat:aspect_ratio", 1, "mr-2"], ["value", "fullwidth"], ["svgIcon", "mat:fullscreen", 1, "mr-2"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-8"], [1, "group", "bg-slate-800/40", "hover:bg-slate-800/60", "border", "border-white/10", "p-6", "rounded-2xl", "transition-all", "duration-300", "shadow-xl"], [1, "flex", "items-center", "gap-5"], [1, "w-14", "h-14", "rounded-2xl", "bg-indigo-500/20", "flex", "items-center", "justify-center", "group-hover:rotate-3", "transition-transform"], ["svgIcon", "mat:person", 1, "text-indigo-400", "text-3xl"], [1, "text-[10px]", "uppercase", "tracking-[0.2em]", "text-indigo-300", "font-bold", "mb-1.5", "opacity-80"], [1, "text-lg", "font-bold", "leading-none"], [1, "text-sm", "text-slate-400", "mt-2", "italic"], [1, "w-14", "h-14", "rounded-2xl", "bg-emerald-500/20", "flex", "items-center", "justify-center", "group-hover:rotate-3", "transition-transform"], ["svgIcon", "mat:school", 1, "text-emerald-400", "text-3xl"], [1, "text-[10px]", "uppercase", "tracking-[0.2em]", "text-emerald-300", "font-bold", "mb-1.5", "opacity-80"], [1, "text-sm", "text-slate-400", "mt-2"], [1, "flex", "items-start", "gap-5"], [1, "w-14", "h-14", "rounded-2xl", "bg-amber-500/20", "flex", "items-center", "justify-center", "group-hover:rotate-3", "transition-transform", "shrink-0"], ["svgIcon", "mat:auto_stories", 1, "text-amber-400", "text-3xl"], [1, "w-full"], [1, "text-[10px]", "uppercase", "tracking-[0.2em]", "text-amber-300", "font-bold", "mb-2.5", "opacity-80"], [1, "flex", "flex-wrap", "gap-2", "mt-1"], ["class", "px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[10px] font-bold uppercase tracking-tight", 4, "ngFor", "ngForOf"], [1, "-mt-10", "relative", "z-20", "pb-12"], [1, "card", "overflow-hidden", "rounded-3xl", "bg-white", "shadow-xl", "border", "border-slate-100"], [1, "px-4", "sm:px-6", "py-4", "border-b", "bg-white", "flex", "flex-col", "sm:flex-row", "sm:items-center", "gap-4"], [1, "text-lg", "sm:text-xl", "font-bold", "text-slate-900"], [1, "text-xs", "sm:text-sm", "text-slate-500"], [1, "flex-1"], ["mat-raised-button", "", "color", "primary", 1, "w-full", "sm:w-auto", 3, "click"], ["svgIcon", "mat:add"], [1, "overflow-x-auto"], ["mat-table", "", "matSort", "", 1, "w-full", "min-w-[850px]", 3, "dataSource"], ["matColumnDef", "date"], ["mat-header-cell", "", "mat-sort-header", "", "class", "px-4 sm:px-6 py-4 uppercase text-[11px] font-bold text-slate-400", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "px-4 sm:px-6 py-4", 4, "matCellDef"], ["matColumnDef", "matiere"], ["matColumnDef", "heureDebut"], ["mat-header-cell", "", "mat-sort-header", "", "class", "px-4 py-4 text-center uppercase text-[11px] font-bold text-slate-400", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "px-4 py-4 text-center font-mono text-slate-600", 4, "matCellDef"], ["matColumnDef", "heureFin"], ["matColumnDef", "statut"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "px-4 sm:px-6 py-4 text-right uppercase text-[11px] font-bold text-slate-400", 4, "matHeaderCellDef"], ["mat-header-row", "", "class", "bg-slate-50", 4, "matHeaderRowDef"], ["mat-row", "", "class", "hover:bg-slate-50 transition", 4, "matRowDef", "matRowDefColumns"], [1, "border-t", "bg-white", 3, "pageSizeOptions"], [1, "card", "overflow-hidden", "rounded-3xl", "bg-white", "shadow-xl", "border", "border-slate-100", "mt-6"], [1, "px-4", "sm:px-6", "py-4", "border-b", "bg-white", "flex", "items-center", "gap-4"], [1, "text-xs", "text-slate-400"], [1, "px-6", "py-5"], ["class", "text-center py-6 text-slate-400 text-sm", 4, "ngIf"], ["class", "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", 4, "ngIf"], [1, "px-3", "py-1.5", "rounded-lg", "bg-amber-500/10", "border", "border-amber-500/20", "text-amber-300", "text-[10px]", "font-bold", "uppercase", "tracking-tight"], ["mat-header-cell", "", "mat-sort-header", "", 1, "px-4", "sm:px-6", "py-4", "uppercase", "text-[11px]", "font-bold", "text-slate-400"], ["mat-cell", "", 1, "px-4", "sm:px-6", "py-4"], [1, "flex", "items-center", "gap-2", "text-slate-700", "font-medium"], ["svgIcon", "mat:calendar_today", 1, "scale-75", "text-slate-400"], [1, "px-3", "py-1", "rounded-lg", "text-xs", "font-semibold", "bg-indigo-50", "text-indigo-600"], ["mat-header-cell", "", "mat-sort-header", "", 1, "px-4", "py-4", "text-center", "uppercase", "text-[11px]", "font-bold", "text-slate-400"], ["mat-cell", "", 1, "px-4", "py-4", "text-center", "font-mono", "text-slate-600"], [1, "px-3", "py-1", "rounded-lg", "text-xs", "font-bold", "border", 3, "ngClass"], ["mat-header-cell", "", 1, "px-4", "sm:px-6", "py-4", "text-right", "uppercase", "text-[11px]", "font-bold", "text-slate-400"], [1, "flex", "justify-end", "gap-2", "flex-wrap"], [4, "ngIf"], ["mat-stroked-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "px-3", "py-1", "rounded-lg", "text-xs", "font-bold", "bg-emerald-50", "text-emerald-600", "border", "border-emerald-100"], ["mat-header-row", "", 1, "bg-slate-50"], ["mat-row", "", 1, "hover:bg-slate-50", "transition"], [1, "text-center", "py-6", "text-slate-400", "text-sm"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "gap-4"], ["class", "group border border-slate-200 rounded-2xl p-5 hover:border-indigo-300 hover:shadow-md transition-all duration-200 bg-slate-50 hover:bg-white", 4, "ngFor", "ngForOf"], [1, "group", "border", "border-slate-200", "rounded-2xl", "p-5", "hover:border-indigo-300", "hover:shadow-md", "transition-all", "duration-200", "bg-slate-50", "hover:bg-white"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "rounded-xl", "bg-indigo-100", "flex", "items-center", "justify-center"], ["svgIcon", "mat:menu_book", 1, "text-indigo-600", "scale-90"], [1, "font-bold", "text-slate-800", "leading-tight"], [1, "text-xs", "text-slate-400", "mt-0.5"], ["mat-flat-button", "", "color", "primary", 1, "w-full", 3, "click"], ["svgIcon", "mat:edit_note"]],
    template: function DetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "vex-page-layout")(1, "vex-page-layout-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div")(7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, " D\u00E9tails de l'Affectation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "vex-breadcrumbs", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 10)(14, "mat-button-toggle-group", 11)(15, "mat-button-toggle", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](16, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, " R\u00E9duire ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "mat-button-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, " Plein \u00E9cran ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 16)(22, "div", 17)(23, "div", 18)(24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](25, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "div")(27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, " Enseignant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "div", 17)(34, "div", 18)(35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](36, "mat-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "div")(38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, " Classe / Groupe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "div", 17)(45, "div", 28)(46, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](47, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "div", 31)(49, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50, " Mati\u00E8res assign\u00E9es ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](52, DetailsComponent_span_52_Template, 2, 1, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "vex-page-layout-content", 35)(54, "div", 36)(55, "div", 37)(56, "div")(57, "h2", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](58, " Historique des s\u00E9ances ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](60, " Gestion des cours effectu\u00E9s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](61, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DetailsComponent_Template_button_click_62_listener() {
          return ctx.ouvrirDemarrageSeance();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](63, "mat-icon", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](64, " Nouvelle s\u00E9ance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](65, "div", 43)(66, "table", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](67, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](68, DetailsComponent_th_68_Template, 2, 0, "th", 46)(69, DetailsComponent_td_69_Template, 5, 4, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](70, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](71, DetailsComponent_th_71_Template, 2, 0, "th", 46)(72, DetailsComponent_td_72_Template, 3, 1, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](73, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](74, DetailsComponent_th_74_Template, 2, 0, "th", 50)(75, DetailsComponent_td_75_Template, 2, 1, "td", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](76, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](77, DetailsComponent_th_77_Template, 2, 0, "th", 50)(78, DetailsComponent_td_78_Template, 2, 1, "td", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](79, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](80, DetailsComponent_th_80_Template, 2, 0, "th", 46)(81, DetailsComponent_td_81_Template, 3, 6, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](82, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](83, DetailsComponent_th_83_Template, 2, 0, "th", 55)(84, DetailsComponent_td_84_Template, 4, 2, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](85, DetailsComponent_tr_85_Template, 1, 0, "tr", 56)(86, DetailsComponent_tr_86_Template, 1, 1, "tr", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](87, "mat-paginator", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](88, "div", 59)(89, "div", 60)(90, "div")(91, "h2", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](92, "Saisie des notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](93, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](94, " Notez les \u00E9tudiants de la classe par mati\u00E8re ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](95, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](96, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](98, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](99, DetailsComponent_div_99_Template, 2, 0, "div", 63)(100, DetailsComponent_div_100_Template, 2, 1, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-8", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](22, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControl", ctx.layoutCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", ctx.affectation.enseignant.prenom, " ", ctx.affectation.enseignant.nom, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.affectation.enseignant.specialite, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.affectation.classe.nom, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.affectation.classe.filiere.nom, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.affectation == null ? null : ctx.affectation.matieres);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("@stagger", undefined)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](23, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.etudiants.length, " \u00E9tudiant(s) dans la classe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !(ctx.affectation == null ? null : ctx.affectation.matieres) || ctx.affectation.matieres.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.affectation == null ? null : ctx.affectation.matieres == null ? null : ctx.affectation.matieres.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe, _vex_components_vex_page_layout_vex_page_layout_component__WEBPACK_IMPORTED_MODULE_0__.VexPageLayoutComponent, _vex_components_vex_page_layout_vex_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_1__.VexPageLayoutHeaderDirective, _vex_components_vex_page_layout_vex_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_2__.VexPageLayoutContentDirective, _vex_components_vex_breadcrumbs_vex_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__.VexBreadcrumbsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortHeader, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__.MatButtonToggleModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__.MatButtonToggle],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__.fadeInUp400ms, _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__.stagger40ms]
    }
  });
}

/***/ }),

/***/ 756:
/*!***************************************************************************!*\
  !*** ./src/app/pages/pedagogie/appels/appel-form/appel-form.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppelFormComponent: () => (/* binding */ AppelFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var src_app_models_Appel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/Appel */ 7273);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_appel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/appel.service */ 3215);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);











const _c0 = (a0, a1, a2) => ({
  "bg-green-50": a0,
  "bg-red-50": a1,
  "bg-amber-50": a2
});
const _c1 = (a0, a1, a2) => ({
  "text-green-600": a0,
  "text-red-600": a1,
  "text-amber-600": a2
});
function AppelFormComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "div")(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 11)(9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppelFormComponent_div_12_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const etu_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.marquer(etu_r1, ctx_r2.StatutPresence.PRESENT));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Pr\u00E9sent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppelFormComponent_div_12_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const etu_r1 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.marquer(etu_r1, ctx_r4.StatutPresence.ABSENT));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Absent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppelFormComponent_div_12_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const etu_r1 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.marquerRetard(etu_r1, 10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Retard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const etu_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](6, _c0, ctx_r0.statutsMap.get(etu_r1.id) === ctx_r0.StatutPresence.PRESENT, ctx_r0.statutsMap.get(etu_r1.id) === ctx_r0.StatutPresence.ABSENT, ctx_r0.statutsMap.get(etu_r1.id) === ctx_r0.StatutPresence.RETARD));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", etu_r1.prenom, " ", etu_r1.nom, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", etu_r1.telephone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](10, _c1, ctx_r0.statutsMap.get(etu_r1.id) === ctx_r0.StatutPresence.PRESENT, ctx_r0.statutsMap.get(etu_r1.id) === ctx_r0.StatutPresence.ABSENT, ctx_r0.statutsMap.get(etu_r1.id) === ctx_r0.StatutPresence.RETARD));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.statutsMap.get(etu_r1.id) || "NON MARQU\u00C9", " ");
  }
}
class AppelFormComponent {
  constructor(appelService, data, dialogRef, snack) {
    this.appelService = appelService;
    this.data = data;
    this.dialogRef = dialogRef;
    this.snack = snack;
    this.etudiants = [];
    this.StatutPresence = src_app_models_Appel__WEBPACK_IMPORTED_MODULE_0__.StatutPresence;
    this.loadingIds = new Set();
    this.statutsMap = new Map();
  }
  ngOnInit() {
    this.seance = this.data.seance;
    this.etudiants = this.data.etudiants || [];
    this.chargerAppels();
  }
  chargerAppels() {
    if (!this.seance?.id) return;
    this.appelService.getBySeance(this.seance.id).subscribe(res => {
      this.statutsMap.clear();
      res.forEach(appel => {
        this.statutsMap.set(appel.etudiant.id, appel.statut);
      });
    });
  }
  marquer(etudiant, statut, minutes = 0) {
    if (!this.seance?.id || !etudiant?.id) return;
    const etuId = etudiant.id;
    this.loadingIds.add(etuId);
    this.appelService.faireAppel(this.seance.id, etuId, statut, minutes).subscribe({
      next: () => {
        this.loadingIds.delete(etuId);
        // 🔥 UPDATE UI DIRECT
        this.statutsMap.set(etuId, statut);
        this.snack.open('Appel enregistré', 'OK', {
          duration: 1500
        });
      },
      error: () => {
        this.loadingIds.delete(etuId);
        this.snack.open('Erreur appel', 'Fermer', {
          duration: 2000
        });
      }
    });
  }
  marquerRetard(etudiant, minutes = 10) {
    this.marquer(etudiant, src_app_models_Appel__WEBPACK_IMPORTED_MODULE_0__.StatutPresence.RETARD, minutes);
  }
  fermer() {
    this.dialogRef.close(true);
  }
  static #_ = this.ɵfac = function AppelFormComponent_Factory(t) {
    return new (t || AppelFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_appel_service__WEBPACK_IMPORTED_MODULE_1__.AppelService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppelFormComponent,
    selectors: [["vex-appel-form"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 13,
    vars: 6,
    consts: [[1, "card", "p-6", "space-y-4"], [1, "flex", "items-center", "justify-between"], [1, "text-xl", "font-bold"], [1, "text-sm", "text-gray-500"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "space-y-3"], ["class", "flex justify-between p-4 border rounded-xl", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "flex", "justify-between", "p-4", "border", "rounded-xl", 3, "ngClass"], [1, "font-semibold", "text-gray-800"], [1, "text-xs", "text-gray-500"], [1, "mt-1", "text-xs", "font-bold", 3, "ngClass"], [1, "flex", "gap-2"], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "color", "warn", 3, "click"], ["mat-stroked-button", "", "color", "accent", 3, "click"]],
    template: function AppelFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Appel des \u00E9tudiants");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppelFormComponent_Template_button_click_8_listener() {
          return ctx.chargerAppels();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Actualiser ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AppelFormComponent_div_12_Template, 15, 14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" S\u00E9ance : ", ctx.seance.matiere, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 3, ctx.seance.date, "dd/MM/yyyy"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.etudiants);
      }
    },
    dependencies: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.MatProgressSpinnerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1197:
/*!************************************************************************!*\
  !*** ./src/app/pages/pedagogie/notes/note-form/note-form.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoteFormComponent: () => (/* binding */ NoteFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 7889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_models_TypePeriode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/TypePeriode */ 8103);
/* harmony import */ var src_app_models_TypeNote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/TypeNote */ 2162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_classe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/classe.service */ 7244);
/* harmony import */ var src_app_services_affectation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/affectation.service */ 2019);
/* harmony import */ var src_app_services_etudiant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/etudiant.service */ 7985);
/* harmony import */ var src_app_services_note_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/note.service */ 6347);
/* harmony import */ var src_app_services_annee_scolaire_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/annee-scolaire.service */ 5817);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 5309);






























function NoteFormComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"](" ", ctx_r0.data.affectation == null ? null : ctx_r0.data.affectation.classe == null ? null : ctx_r0.data.affectation.classe.nom, " \u2014 ", ctx_r0.data.affectation == null ? null : ctx_r0.data.affectation.enseignant == null ? null : ctx_r0.data.affectation.enseignant.nom, " ", ctx_r0.data.affectation == null ? null : ctx_r0.data.affectation.enseignant == null ? null : ctx_r0.data.affectation.enseignant.prenom, " \u2014 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.data.matiere == null ? null : ctx_r0.data.matiere.nom);
  }
}
function NoteFormComponent_ng_container_10_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", c_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](c_r11.nom);
  }
}
function NoteFormComponent_ng_container_10_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const a_r12 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", a_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r8.getAffectationLabel(a_r12), " ");
  }
}
function NoteFormComponent_ng_container_10_mat_hint_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Aucune affectation pour cette classe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function NoteFormComponent_ng_container_10_mat_form_field_16_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const m_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", m_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", m_r14.nom, " ");
  }
}
function NoteFormComponent_ng_container_10_mat_form_field_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Mati\u00E8re");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, NoteFormComponent_ng_container_10_mat_form_field_16_mat_option_4_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Mati\u00E8re requise");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r10.selectedAffectation.matieres);
  }
}
function NoteFormComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-form-field")(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Classe");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function NoteFormComponent_ng_container_10_Template_mat_select_selectionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r15.onClasseChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, NoteFormComponent_ng_container_10_mat_option_5_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Classe requise");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-form-field")(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Enseignant / Affectation");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function NoteFormComponent_ng_container_10_Template_mat_select_selectionChange_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r17.onAffectationChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, NoteFormComponent_ng_container_10_mat_option_12_Template, 2, 2, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, NoteFormComponent_ng_container_10_mat_hint_13_Template, 2, 0, "mat-hint", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Affectation requise");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, NoteFormComponent_ng_container_10_mat_form_field_16_Template, 7, 1, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.affectations);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.affectations.length === 0 && ((tmp_2_0 = ctx_r1.form.get("classeId")) == null ? null : tmp_2_0.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectedAffectation);
  }
}
function NoteFormComponent_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", t_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](t_r18);
  }
}
function NoteFormComponent_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", p_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](p_r19);
  }
}
function NoteFormComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-spinner", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function NoteFormComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Aucun \u00E9tudiant trouv\u00E9 dans cette classe. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
const _c0 = () => ({
  standalone: true
});
function NoteFormComponent_ng_container_36_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 44)(1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 47)(6, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function NoteFormComponent_ng_container_36_tr_22_Template_input_ngModelChange_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r24);
      const e_r21 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](e_r21.valeur = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const e_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](i_r22 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", e_r21.prenom, " ", e_r21.nom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("border-primary", e_r21.valeur !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", e_r21.valeur)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c0));
  }
}
function NoteFormComponent_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 32)(3, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " note(s) saisie(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NoteFormComponent_ng_container_36_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r25.effacerTout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " Effacer tout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 37)(12, "table", 38)(13, "thead", 39)(14, "tr")(15, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "\u00C9tudiant");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Note /20");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, NoteFormComponent_ng_container_36_tr_22_Template, 7, 8, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r6.etudiantNotes.length, " \u00E9tudiant(s) \u2014 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r6.notesRenseignees);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r6.etudiantNotes)("ngForTrackBy", ctx_r6.trackByEtudiant);
  }
}
class NoteFormComponent {
  // true = ouvert depuis détail affectation (étudiants déjà fournis)
  get modePreRempli() {
    return !!(this.data?.affectation && this.data?.etudiants);
  }
  get selectedAffectation() {
    if (this.modePreRempli) return this.data.affectation;
    const id = this.form?.get('affectationId')?.value;
    return this.affectations.find(a => a.id === id) ?? null;
  }
  get notesRenseignees() {
    return this.etudiantNotes.filter(e => e.valeur !== null).length;
  }
  constructor(data, dialogRef, fb, classeService, affectationService, etudiantService, noteService, anneeService) {
    this.data = data;
    this.dialogRef = dialogRef;
    this.fb = fb;
    this.classeService = classeService;
    this.affectationService = affectationService;
    this.etudiantService = etudiantService;
    this.noteService = noteService;
    this.anneeService = anneeService;
    this.isLoading = false;
    this.isLoadingStudents = false;
    // Mode autonome
    this.classes = [];
    this.affectations = [];
    this.annees = [];
    this.typesPeriode = Object.values(src_app_models_TypePeriode__WEBPACK_IMPORTED_MODULE_1__.TypePeriode);
    this.typesNote = Object.values(src_app_models_TypeNote__WEBPACK_IMPORTED_MODULE_2__.TypeNote);
    this.periodes = [1, 2, 3];
    this.etudiantNotes = [];
  }
  ngOnInit() {
    if (this.modePreRempli) {
      this.initModePreRempli();
    } else {
      this.initModeAutonome();
    }
  }
  // ─── Mode pré-rempli (depuis détail affectation) ──────────────────────────
  initModePreRempli() {
    this.form = this.fb.group({
      typePeriode: [src_app_models_TypePeriode__WEBPACK_IMPORTED_MODULE_1__.TypePeriode.TRIMESTRE, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      periode: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      typeNote: [src_app_models_TypeNote__WEBPACK_IMPORTED_MODULE_2__.TypeNote.DEVOIR, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
    });
    // Étudiants déjà fournis par le parent
    this.etudiantNotes = (this.data.etudiants ?? []).map(e => ({
      etudiantId: e.id,
      nom: e.nom,
      prenom: e.prenom,
      valeur: null
    }));
  }
  // ─── Mode autonome (depuis page notes) ────────────────────────────────────
  initModeAutonome() {
    this.form = this.fb.group({
      classeId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      affectationId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      matiereId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      typePeriode: [src_app_models_TypePeriode__WEBPACK_IMPORTED_MODULE_1__.TypePeriode.TRIMESTRE, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      periode: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      typeNote: [src_app_models_TypeNote__WEBPACK_IMPORTED_MODULE_2__.TypeNote.DEVOIR, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
    });
    this.classeService.getAllClasses().subscribe(c => this.classes = c);
    this.anneeService.getAll().subscribe(a => {
      this.annees = a;
    });
  }
  onClasseChange() {
    const classeId = this.form.get('classeId')?.value;
    this.form.patchValue({
      affectationId: null,
      matiereId: null
    });
    this.etudiantNotes = [];
    this.affectations = [];
    if (!classeId) return;
    this.affectationService.getAffectationsParClasse(classeId).subscribe(a => {
      this.affectations = a;
    });
    this.chargerEtudiants(classeId);
  }
  onAffectationChange() {
    this.form.patchValue({
      matiereId: null
    });
    const aff = this.selectedAffectation;
    if (aff?.matieres?.length === 1) {
      this.form.patchValue({
        matiereId: aff.matieres[0].id
      });
    }
  }
  chargerEtudiants(classeId) {
    this.isLoadingStudents = true;
    this.etudiantService.getEtudiantsParClasse(classeId).subscribe({
      next: etudiants => {
        this.etudiantNotes = etudiants.map(e => ({
          etudiantId: e.id,
          nom: e.nom,
          prenom: e.prenom,
          valeur: null
        }));
        this.isLoadingStudents = false;
      },
      error: () => {
        this.isLoadingStudents = false;
      }
    });
  }
  getAffectationLabel(a) {
    const ens = a.enseignant ? `${a.enseignant.nom} ${a.enseignant.prenom}` : '';
    const mat = a.matieres?.map(m => m.nom).join(', ') ?? '';
    return ens + (mat ? ` — ${mat}` : '');
  }
  effacerTout() {
    this.etudiantNotes.forEach(e => e.valeur = null);
  }
  trackByEtudiant(_, e) {
    return e.etudiantId;
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const notesToSave = this.etudiantNotes.filter(e => e.valeur !== null && !isNaN(Number(e.valeur)));
    if (notesToSave.length === 0) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Attention', 'Veuillez saisir au moins une note', 'warning');
      return;
    }
    const v = this.form.value;
    const affectationId = this.modePreRempli ? this.data.affectation.id : v.affectationId;
    const matiereId = this.modePreRempli ? this.data.matiere.id : v.matiereId;
    const batch = notesToSave.map(e => ({
      etudiantId: e.etudiantId,
      affectationId,
      matiereId,
      valeur: Number(e.valeur),
      type: v.typeNote,
      periode: v.periode,
      typePeriode: v.typePeriode
    }));
    this.isLoading = true;
    this.noteService.ajouterNotesBatch(batch).subscribe({
      next: () => {
        this.isLoading = false;
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          icon: 'success',
          title: `${notesToSave.length} note(s) enregistrée(s)`,
          timer: 1800,
          showConfirmButton: false
        });
        this.dialogRef.close(true);
      },
      error: err => {
        this.isLoading = false;
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Erreur', err?.error?.message ?? 'Une erreur est survenue', 'error');
      }
    });
  }
  static #_ = this.ɵfac = function NoteFormComponent_Factory(t) {
    return new (t || NoteFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_classe_service__WEBPACK_IMPORTED_MODULE_3__.ClasseService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_affectation_service__WEBPACK_IMPORTED_MODULE_4__.AffectationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_etudiant_service__WEBPACK_IMPORTED_MODULE_5__.EtudiantService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_note_service__WEBPACK_IMPORTED_MODULE_6__.NoteService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_annee_scolaire_service__WEBPACK_IMPORTED_MODULE_7__.AnneeScolaireService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: NoteFormComponent,
    selectors: [["vex-note-form"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
    decls: 44,
    vars: 10,
    consts: [[3, "formGroup"], ["mat-dialog-title", "", 1, "flex", "items-center", "justify-between"], [1, "headline", "m-0"], ["class", "text-secondary text-xs mt-0.5", 4, "ngIf"], ["mat-icon-button", "", "mat-dialog-close", "", "type", "button"], ["svgIcon", "mat:close"], [1, "-mx-6", "text-border"], [1, "flex", "flex-col", "gap-4", "mt-4", 2, "min-width", "560px"], [4, "ngIf"], [1, "grid", "grid-cols-3", "gap-4"], ["formControlName", "typePeriode"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "periode"], ["formControlName", "typeNote"], ["value", "DEVOIR"], ["value", "EXAMEN"], ["value", "TP"], ["value", "PARTICIPATION"], ["class", "flex justify-center py-6", 4, "ngIf"], ["class", "text-center py-4 text-secondary text-sm", 4, "ngIf"], ["align", "end"], ["type", "button", "mat-button", "", "mat-dialog-close", ""], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "disabled", "click"], ["svgIcon", "mat:save"], [1, "text-secondary", "text-xs", "mt-0.5"], ["formControlName", "classeId", 3, "selectionChange"], ["formControlName", "affectationId", 3, "selectionChange"], [3, "value"], ["formControlName", "matiereId"], [1, "flex", "justify-center", "py-6"], ["diameter", "36"], [1, "text-center", "py-4", "text-secondary", "text-sm"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "font-medium"], [1, "text-primary", "font-semibold"], ["type", "button", "mat-stroked-button", "", 1, "text-xs", "h-8", 3, "click"], ["svgIcon", "mat:clear_all", 1, "scale-75"], [1, "overflow-auto", "border", "rounded", 2, "max-height", "320px"], [1, "w-full", "text-sm"], [1, "bg-app-bar", "sticky", "top-0", "z-10"], [1, "px-4", "py-2.5", "text-left", "text-xs", "font-semibold", "text-secondary", "uppercase", "w-10"], [1, "px-4", "py-2.5", "text-left", "text-xs", "font-semibold", "text-secondary", "uppercase"], [1, "px-4", "py-2.5", "text-center", "text-xs", "font-semibold", "text-secondary", "uppercase", "w-28"], ["class", "border-t hover:bg-hover transition-colors", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "border-t", "hover:bg-hover", "transition-colors"], [1, "px-4", "py-2.5", "text-secondary", "text-xs"], [1, "px-4", "py-2.5", "font-medium"], [1, "px-4", "py-2.5", "text-center"], ["type", "number", "min", "0", "max", "20", "step", "0.25", "placeholder", "\u2014", 1, "w-20", "text-center", "border", "border-gray-300", "rounded", "px-2", "py-1", "text-sm", "focus:outline-none", "focus:border-primary", "focus:ring-1", "focus:ring-primary", 3, "ngModel", "ngModelOptions", "ngModelChange"]],
    template: function NoteFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Saisie des notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, NoteFormComponent_p_5_Template, 4, 4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-dialog-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, NoteFormComponent_ng_container_10_Template, 17, 4, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 9)(12, "mat-form-field")(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Type de p\u00E9riode");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, NoteFormComponent_mat_option_16_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-form-field")(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "P\u00E9riode n\u00B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, NoteFormComponent_mat_option_21_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "mat-form-field")(23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Type de note");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "mat-select", 13)(26, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Devoir");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Composition");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "TP");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Participation");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, NoteFormComponent_div_34_Template, 2, 0, "div", 18)(35, NoteFormComponent_div_35_Template, 2, 0, "div", 19)(36, NoteFormComponent_ng_container_36_Template, 23, 4, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "mat-divider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "mat-dialog-actions", 20)(39, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NoteFormComponent_Template_button_click_41_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        let tmp_6_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.modePreRempli);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.modePreRempli);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.typesPeriode);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.periodes);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoadingStudents);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isLoadingStudents && !ctx.modePreRempli && ((tmp_6_0 = ctx.form.get("classeId")) == null ? null : tmp_6_0.value) && ctx.etudiantNotes.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isLoadingStudents && ctx.etudiantNotes.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.isLoading || ctx.etudiantNotes.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.isLoading ? "Enregistrement..." : "Enregistrer les notes", " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDivider, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinner],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2375:
/*!******************************************************************************!*\
  !*** ./src/app/pages/pedagogie/seances/seance-form/seance-form.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeanceFormComponent: () => (/* binding */ SeanceFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_seance_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/seance.service */ 4183);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 5309);















function SeanceFormComponent_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", m_r1.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", m_r1.nom, " ");
  }
}
class SeanceFormComponent {
  constructor(seanceService, dialogRef, data) {
    this.seanceService = seanceService;
    this.dialogRef = dialogRef;
    this.data = data;
    this.matiereCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null);
  }
  demarrer() {
    if (!this.matiereCtrl.value) return;
    this.seanceService.demarrerSeance(this.data.affectationId, this.matiereCtrl.value).subscribe(res => {
      this.dialogRef.close(res);
    });
  }
  close() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function SeanceFormComponent_Factory(t) {
    return new (t || SeanceFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_seance_service__WEBPACK_IMPORTED_MODULE_0__.SeanceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SeanceFormComponent,
    selectors: [["vex-seance-form"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 20,
    vars: 3,
    consts: [[1, "p-2"], ["mat-dialog-title", "", 1, "text-2xl", "font-bold", "flex", "items-center", "gap-2"], ["color", "primary"], [1, "py-6"], [1, "text-gray-500", "mb-4"], ["appearance", "outline", 1, "w-full"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", ""], ["align", "end", 1, "px-6", "pb-6", "gap-2"], ["mat-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], [3, "value"]],
    template: function SeanceFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1)(2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "play_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " D\u00E9marrer une s\u00E9ance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-dialog-content", 3)(6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Veuillez s\u00E9lectionner la mati\u00E8re pour d\u00E9buter cette nouvelle session de cours. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 5)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Mati\u00E8re");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SeanceFormComponent_mat_option_12_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "book");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-dialog-actions", 9)(16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SeanceFormComponent_Template_button_click_16_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Annuler ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SeanceFormComponent_Template_button_click_18_listener() {
          return ctx.demarrer();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Confirmer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.matiereCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.matieres);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.matiereCtrl.value);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_material_select__WEBPACK_IMPORTED_MODULE_4__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_4__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7410:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/scolarite/classematiere/classe-matiere-list/classe-matiere-list.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClasseMatiereListComponent: () => (/* binding */ ClasseMatiereListComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/collections */ 636);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout.component */ 306);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout-header.directive */ 2369);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout-content.directive */ 5292);
/* harmony import */ var _vex_components_vex_breadcrumbs_vex_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/components/vex-breadcrumbs/vex-breadcrumbs.component */ 9806);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 3951);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vex/animations/stagger.animation */ 6820);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ 7889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _form_classematiere_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form/classematiere.component */ 7660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_classe_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/classe.service */ 7244);
/* harmony import */ var src_app_services_ClasseMatiereService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/ClasseMatiereService */ 4556);
/* harmony import */ var src_app_services_matiere_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/matiere.service */ 3058);













// VEX Imports

























function ClasseMatiereListComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Classe ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClasseMatiereListComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r10.classe.nom, " ");
  }
}
function ClasseMatiereListComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Mati\u00E8re ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClasseMatiereListComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 34)(1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r11.matiere == null ? null : row_r11.matiere.nom, " ");
  }
}
function ClasseMatiereListComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Co\u00E9fficient ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ClasseMatiereListComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r12.coefficient, " ");
  }
}
function ClasseMatiereListComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "th", 36);
  }
}
function ClasseMatiereListComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 37)(1, "div", 38)(2, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClasseMatiereListComponent_td_37_Template_button_click_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const row_r13 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r14.modifier(row_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClasseMatiereListComponent_td_37_Template_button_click_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r15);
      const row_r13 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r16.supprimer(row_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
}
function ClasseMatiereListComponent_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 43);
  }
}
function ClasseMatiereListComponent_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClasseMatiereListComponent_tr_39_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r19);
      const row_r17 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r18.modifier(row_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@fadeInUp", undefined);
  }
}
const _c0 = () => ["/configuration/classes"];
const _c1 = a2 => ["Configuration", "Classes", a2, "Mati\u00E8res"];
const _c2 = () => [5, 10, 20];
class ClasseMatiereListComponent {
  constructor(classeService, classem, mService, dialog, router) {
    this.classeService = classeService;
    this.classem = classem;
    this.mService = mService;
    this.dialog = dialog;
    this.router = router;
    this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl('boxed');
    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormControl();
    this.displayedColumns = ['classe', 'matiere', 'coefficient', 'actions'];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource();
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__.SelectionModel(true, []);
  }
  ngOnInit() {
    this.classe = history.state?.classe;
    if (!this.classe) {
      console.error('Aucune classe reçue !');
      return;
    }
    this.chargerMatiere(this.classe.id);
    this.searchCtrl.valueChanges.subscribe(value => this.dataSource.filter = value.trim().toLowerCase());
  }
  chargerMatiere(id) {
    this.classem.getByClasse(id).subscribe(res => {
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  chargerM() {
    this.mService.getAllMatieres().subscribe(res => {
      console.log(res);
    });
  }
  ajouter() {
    this.openDialog({
      classe: this.classe
    });
  }
  openDialog(data) {
    this.dialog.open(_form_classematiere_component__WEBPACK_IMPORTED_MODULE_7__.ClassematiereComponent, {
      width: '500px',
      disableClose: true,
      data: data
    }).afterClosed().subscribe(res => {
      if (res) this.chargerMatiere(this.classe.id);
    });
  }
  modifier(classeMatiere) {
    this.openDialog({
      classe: this.classe,
      classeMatiere: classeMatiere
    });
  }
  supprimer(classe) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
      title: 'Supprimer ?',
      text: `Voulez-vous supprimer ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33'
    }).then(result => {
      if (result.isConfirmed) {
        this.classem.delete(classe.id).subscribe(() => {
          this.chargerMatiere(this.classe.id);
          this.selection.deselect(classe);
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('Supprimé', '', 'success');
        });
      }
    });
  }
  static #_ = this.ɵfac = function ClasseMatiereListComponent_Factory(t) {
    return new (t || ClasseMatiereListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_classe_service__WEBPACK_IMPORTED_MODULE_8__.ClasseService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_ClasseMatiereService__WEBPACK_IMPORTED_MODULE_9__.ClasseMatiereService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_matiere_service__WEBPACK_IMPORTED_MODULE_10__.MatiereService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: ClasseMatiereListComponent,
    selectors: [["vex-classe-matiere-list"]],
    viewQuery: function ClasseMatiereListComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵStandaloneFeature"]],
    decls: 41,
    vars: 17,
    consts: [[1, "pb-16", "flex", "flex-col", "items-start", "justify-center"], [1, "w-full", "flex", "flex-col", "sm:flex-row", "items-center", "justify-between", "px-6"], [1, "flex", "items-center"], ["mat-icon-button", "", "matTooltip", "Retour aux classes", 1, "mr-4", "bg-white/10", 3, "routerLink"], ["svgIcon", "mat:arrow_back"], [1, "title", "mt-0", "mb-1", "flex", "items-center"], ["svgIcon", "mat:menu_book", 1, "mr-3", "text-primary"], [1, "text-secondary", "ml-2", "font-light"], [3, "crumbs"], [1, "mt-4", "sm:mt-0", "flex", "gap-2"], ["color", "primary", "mat-raised-button", "", "type", "button", 3, "click"], ["svgIcon", "mat:add", 1, "ltr:mr-2", "rtl:ml-2"], [1, "-mt-6"], [1, "card", "overflow-auto", "-mt-16"], [1, "bg-app-bar", "px-6", "h-16", "border-b", "sticky", "left-0", "flex", "items-center"], ["subscriptSizing", "dynamic", 1, "ml-4"], ["matIconPrefix", "", "svgIcon", "mat:search"], ["matInput", "", "placeholder", "Rechercher une classe...", "type", "text", 3, "formControl"], [1, "flex-1"], ["mat-table", "", "matSort", "", 1, "w-full", 3, "dataSource"], ["matColumnDef", "classe"], ["mat-header-cell", "", "mat-sort-header", "", "class", "uppercase", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "font-medium", 4, "matCellDef"], ["matColumnDef", "matiere"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "coefficient"], ["matColumnDef", "actions"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "w-10 text-secondary", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "hover:bg-hover cursor-pointer", "mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "sticky", "left-0", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", "", 1, "uppercase"], ["mat-cell", "", 1, "font-medium"], ["mat-cell", ""], [1, "bg-primary-600/10", "text-primary-600", "px-2", "py-1", "rounded", "text-xs", "font-bold"], ["mat-header-cell", ""], ["mat-cell", "", 1, "w-10", "text-secondary"], [1, "flex"], ["mat-icon-button", "", "color", "primary", 3, "click"], ["svgIcon", "mat:edit"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["svgIcon", "mat:delete"], ["mat-header-row", ""], ["mat-row", "", 1, "hover:bg-hover", "cursor-pointer", 3, "click"]],
    template: function ClasseMatiereListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "vex-page-layout")(1, "vex-page-layout-header", 0)(2, "div", 1)(3, "div", 2)(4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div")(7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, " Gestion des mati\u00E8res ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "vex-breadcrumbs", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 9)(14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ClasseMatiereListComponent_Template_button_click_14_listener() {
          return ctx.ajouter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Ajouter une mati\u00E8re");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "vex-page-layout-content", 12)(19, "div", 13)(20, "div", 14)(21, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](22, "mat-icon", 16)(23, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](24, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](26, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](27, ClasseMatiereListComponent_th_27_Template, 2, 0, "th", 21)(28, ClasseMatiereListComponent_td_28_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](29, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, ClasseMatiereListComponent_th_30_Template, 2, 0, "th", 21)(31, ClasseMatiereListComponent_td_31_Template, 3, 1, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](32, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, ClasseMatiereListComponent_th_33_Template, 2, 0, "th", 21)(34, ClasseMatiereListComponent_td_34_Template, 2, 1, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](35, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](36, ClasseMatiereListComponent_th_36_Template, 1, 0, "th", 27)(37, ClasseMatiereListComponent_td_37_Template, 6, 0, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](38, ClasseMatiereListComponent_tr_38_Template, 1, 0, "tr", 29)(39, ClasseMatiereListComponent_tr_39_Template, 1, 1, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](40, "mat-paginator", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u2014 ", ctx.classe.nom, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](14, _c1, ctx.classe.nom));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.searchCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@stagger", undefined)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](16, _c2));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _vex_components_vex_page_layout_vex_page_layout_component__WEBPACK_IMPORTED_MODULE_0__.VexPageLayoutComponent, _vex_components_vex_page_layout_vex_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_1__.VexPageLayoutHeaderDirective, _vex_components_vex_page_layout_vex_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_2__.VexPageLayoutContentDirective, _vex_components_vex_breadcrumbs_vex_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__.VexBreadcrumbsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortHeader, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltip, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlDirective, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.MatCheckboxModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelectModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__.fadeInUp400ms, _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__.stagger40ms]
    }
  });
}

/***/ }),

/***/ 7660:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/scolarite/classematiere/form/classematiere.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassematiereComponent: () => (/* binding */ ClassematiereComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 7889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_matiere_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/matiere.service */ 3058);
/* harmony import */ var src_app_services_ClasseMatiereService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/ClasseMatiereService */ 4556);






















function ClassematiereComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", p_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", p_r1.nom, " ");
  }
}
class ClassematiereComponent {
  constructor(fb, matiereService, classeService, dialogRef, data) {
    this.fb = fb;
    this.matiereService = matiereService;
    this.classeService = classeService;
    this.dialogRef = dialogRef;
    this.data = data;
    this.mode = 'create';
    this.matieres = [];
    this.form = this.fb.group({
      classe: [data.classe],
      matiere: [data.classeMatiere?.matiere || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      coefficient: [data.classeMatiere?.coefficient || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
  }
  ngOnInit() {
    if (this.data.classeMatiere) {
      this.mode = 'update';
      this.form.patchValue({
        classe: this.data.classe,
        matiere: this.data.classeMatiere.matiere,
        coefficient: this.data.classeMatiere.coefficient
      });
    } else {
      this.mode = 'create';
    }
    this.matiereService.getAllMatieres().subscribe(res => this.matieres = res);
  }
  compareMatiere(p1, p2) {
    return p1 && p2 ? p1.id === p2.id : p1 === p2;
  }
  save() {
    if (this.form.invalid) return;
    const formValue = this.form.value;
    console.log('form value ', formValue);
    if (this.mode === 'update') {
      this.classeService.update(this.data.classeMatiere.id, formValue).subscribe({
        next: () => this.handleSuccess('Matière mise à jour'),
        error: () => sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Erreur', 'Échec de la modification', 'error')
      });
    } else {
      this.classeService.add(this.data.classe.id, formValue.matiere.id || formValue.matiere, formValue.coefficient).subscribe({
        next: () => this.handleSuccess('Matière ajoutée'),
        error: () => sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Erreur', "Échec de l'ajout", 'error')
      });
    }
  }
  handleSuccess(message) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      icon: 'success',
      title: message,
      timer: 1500,
      showConfirmButton: false
    });
    this.dialogRef.close(true);
  }
  static #_ = this.ɵfac = function ClassematiereComponent_Factory(t) {
    return new (t || ClassematiereComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_matiere_service__WEBPACK_IMPORTED_MODULE_1__.MatiereService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_ClasseMatiereService__WEBPACK_IMPORTED_MODULE_2__.ClasseMatiereService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ClassematiereComponent,
    selectors: [["vex-classematiere"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 18,
    vars: 5,
    consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-title", ""], [1, "flex", "flex-col", "gap-4"], [1, "w-full"], ["formControlName", "matiere", 3, "compareWith"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "number", "formControlName", "coefficient"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "type", "button"], ["mat-flat-button", "", "color", "primary", 3, "disabled"], [3, "value"]],
    template: function ClassematiereComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ClassematiereComponent_Template_form_ngSubmit_0_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-dialog-content", 2)(4, "mat-form-field", 3)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Mati\u00E8re");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ClassematiereComponent_mat_option_8_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-form-field", 3)(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Co\u00E8fficient de la mati\u00E8re");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-dialog-actions", 7)(14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Annuler");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Enregistrer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.mode === "update" ? "Modifier" : "Nouvel", " Mati\u00E8re");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("compareWith", ctx.compareMatiere);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.matieres);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.form.invalid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__.MatDividerModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOptionModule],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5278:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/scolarite/etudiants/detail-etudiant/detail-etudiant.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailEtudiantComponent: () => (/* binding */ DetailEtudiantComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout.component */ 306);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout-header.directive */ 2369);
/* harmony import */ var _vex_components_vex_page_layout_vex_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vex/components/vex-page-layout/vex-page-layout-content.directive */ 5292);
/* harmony import */ var _vex_components_vex_breadcrumbs_vex_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vex/components/vex-breadcrumbs/vex-breadcrumbs.component */ 9806);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vex/animations/fade-in-up.animation */ 3951);
/* harmony import */ var _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vex/animations/stagger.animation */ 6820);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button-toggle */ 727);
/* harmony import */ var src_app_models_Medias__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/Medias */ 8718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_paiement_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/paiement.service */ 155);
/* harmony import */ var src_app_services_inscription_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/inscription.service */ 923);
/* harmony import */ var src_app_services_note_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/note.service */ 6347);
/* harmony import */ var src_app_services_appel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/appel.service */ 3215);
/* harmony import */ var src_app_services_MediasService_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/MediasService.service */ 1308);





























const _c0 = ["paginatorPaiements"];
const _c1 = ["paginatorNotes"];
const _c2 = ["paginatorAppels"];
function DetailEtudiantComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 10)(1, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "mat-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " Informations du parent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 13)(5, "div", 14)(6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "Nom complet :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 14)(11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "T\u00E9l\u00E9phone :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 14)(16, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "Email :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 14)(21, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22, "Adresse :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", ctx_r0.etudiant.parent.prenom, " ", ctx_r0.etudiant.parent.nom, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r0.etudiant.parent.telephone);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r0.etudiant.parent.email || "Non renseign\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r0.etudiant.parent.adresse || "Non renseign\u00E9e");
  }
}
function DetailEtudiantComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "div", 58)(3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Classe :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 58)(8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "Ann\u00E9e :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 58)(13, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Date :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 58)(19, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, "Statut :");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const inscription_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](inscription_r39.classe == null ? null : inscription_r39.classe.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](inscription_r39.anneeScolaire == null ? null : inscription_r39.anneeScolaire.libelle);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](17, 4, inscription_r39.dateInscription, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](inscription_r39.statut);
  }
}
function DetailEtudiantComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Aucune inscription ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DetailEtudiantComponent_th_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DetailEtudiantComponent_td_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, row_r40.datePaiement, "dd/MM/yyyy"), " ");
  }
}
function DetailEtudiantComponent_th_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Montant");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DetailEtudiantComponent_td_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, row_r41.montant), " FCFA ");
  }
}
function DetailEtudiantComponent_th_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DetailEtudiantComponent_td_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r42.modePaiement, " ");
  }
}
function DetailEtudiantComponent_th_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "R\u00E9f\u00E9rence");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DetailEtudiantComponent_td_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r43.reference || "-", " ");
  }
}
function DetailEtudiantComponent_tr_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 62);
  }
}
function DetailEtudiantComponent_tr_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 63);
  }
}
function DetailEtudiantComponent_th_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Mati\u00E8re");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DetailEtudiantComponent_td_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r45.affectation == null ? null : row_r45.affectation.matiere == null ? null : row_r45.affectation.matiere.nom, " ");
  }
}
function DetailEtudiantComponent_th_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DetailEtudiantComponent_td_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](row_r46.type);
  }
}
function DetailEtudiantComponent_th_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DetailEtudiantComponent_td_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", row_r47.valeur, "/20");
  }
}
function DetailEtudiantComponent_th_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Semestre");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DetailEtudiantComponent_td_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](row_r48.semestre);
  }
}
function DetailEtudiantComponent_tr_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 62);
  }
}
function DetailEtudiantComponent_tr_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 63);
  }
}
function DetailEtudiantComponent_th_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DetailEtudiantComponent_td_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, row_r50.seance == null ? null : row_r50.seance.dateSeance, "dd/MM/yyyy"), " ");
  }
}
function DetailEtudiantComponent_th_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Statut");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DetailEtudiantComponent_td_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](row_r51.statut);
  }
}
function DetailEtudiantComponent_th_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Retard");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DetailEtudiantComponent_td_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", row_r52.minutesRetard, " min");
  }
}
function DetailEtudiantComponent_th_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Motif");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DetailEtudiantComponent_td_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](row_r53.motif || "-");
  }
}
function DetailEtudiantComponent_tr_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 62);
  }
}
function DetailEtudiantComponent_tr_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 63);
  }
}
function DetailEtudiantComponent_div_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Aucun document ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function DetailEtudiantComponent_div_135_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 65)(1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 69)(6, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DetailEtudiantComponent_div_135_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r57);
      const doc_r55 = restoredCtx.$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r56.voirDocument(doc_r55));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "mat-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DetailEtudiantComponent_div_135_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r57);
      const doc_r55 = restoredCtx.$implicit;
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r58.supprimerDocument(doc_r55));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "mat-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const doc_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](doc_r55.fichier);
  }
}
const _c3 = () => ["Configuration", "Dossier \u00E9tudiant"];
const _c4 = () => [5, 10, 20];
class DetailEtudiantComponent {
  constructor(paiementService, inscriptionService, noteService, appelService, mediaService) {
    this.paiementService = paiementService;
    this.inscriptionService = inscriptionService;
    this.noteService = noteService;
    this.appelService = appelService;
    this.mediaService = mediaService;
    this.inscriptions = [];
    this.paiements = [];
    this.notes = [];
    this.appels = [];
    this.documents = [];
    this.layoutCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.UntypedFormControl('boxed');
    this.dataSourcePaiements = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource();
    this.dataSourceNotes = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource();
    this.dataSourceAppels = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource();
    this.displayedPaiements = ['date', 'montant', 'mode', 'reference'];
    this.displayedNotes = ['matiere', 'type', 'valeur', 'semestre'];
    this.displayedAppels = ['date', 'statut', 'retard', 'motif'];
  }
  ngOnInit() {
    this.etudiant = history.state?.etudiant;
    if (!this.etudiant) return;
    this.loadAll();
  }
  ngAfterViewInit() {
    this.dataSourcePaiements.paginator = this.paginatorPaiements;
    this.dataSourceNotes.paginator = this.paginatorNotes;
    this.dataSourceAppels.paginator = this.paginatorAppels;
  }
  loadAll() {
    this.loadPaiements();
    this.loadNotes();
    this.loadAppels();
    this.loadDocuments();
    this.loadInscriptions();
  }
  loadPaiements() {
    this.paiementService.getPaiementsParEtudiant(this.etudiant.id).subscribe(res => {
      this.dataSourcePaiements.data = res;
    });
  }
  loadInscriptions() {
    this.inscriptionService.getInscriptionsParEtudiant(this.etudiant.id).subscribe(res => {
      this.inscriptions = res;
    });
  }
  loadNotes() {
    this.noteService.getNotesEtudiant(this.etudiant.id).subscribe(res => {
      this.dataSourceNotes.data = res;
    });
  }
  exporterDossier() {
    // Déclenche la fenêtre d'impression du navigateur
    window.print();
  }
  loadAppels() {
    this.appelService.getByEtudiant(this.etudiant.id).subscribe(res => {
      this.dataSourceAppels.data = res;
    });
  }
  loadDocuments() {
    this.mediaService.getByType(src_app_models_Medias__WEBPACK_IMPORTED_MODULE_6__.MediaType.DOSSIER_ETUDIANT, this.etudiant.id).subscribe(res => this.documents = res);
  }
  uploadDocument(event) {
    const file = event.target.files[0];
    if (!file) return;
    const media = {
      type: src_app_models_Medias__WEBPACK_IMPORTED_MODULE_6__.MediaType.DOSSIER_ETUDIANT,
      referenceId: this.etudiant.id
    };
    this.mediaService.create(media, file).subscribe(res => this.documents.push(res));
  }
  voirDocument(doc) {
    window.open(doc.fichierUrl, '_blank');
  }
  supprimerDocument(doc) {
    this.mediaService.delete(doc.idMedia).subscribe(() => {
      this.documents = this.documents.filter(d => d.idMedia !== doc.idMedia);
    });
  }
  getMontantTotalPaye() {
    return this.dataSourcePaiements.data.reduce((sum, p) => sum + p.montant, 0);
  }
  static #_ = this.ɵfac = function DetailEtudiantComponent_Factory(t) {
    return new (t || DetailEtudiantComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_paiement_service__WEBPACK_IMPORTED_MODULE_7__.PaiementService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_inscription_service__WEBPACK_IMPORTED_MODULE_8__.InscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_note_service__WEBPACK_IMPORTED_MODULE_9__.NoteService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_appel_service__WEBPACK_IMPORTED_MODULE_10__.AppelService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_MediasService_service__WEBPACK_IMPORTED_MODULE_11__.MediaService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: DetailEtudiantComponent,
    selectors: [["vex-detail-etudiant"]],
    viewQuery: function DetailEtudiantComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.paginatorPaiements = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.paginatorNotes = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.paginatorAppels = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵStandaloneFeature"]],
    decls: 136,
    vars: 40,
    consts: [[1, "pb-16", "flex", "flex-col", "items-start", "justify-center", "bg-gray-50/50"], [1, "w-full", "flex", "flex-col", "sm:flex-row", "justify-between", "items-start", "sm:items-center"], [1, "title", "mt-0", "mb-1"], [3, "crumbs"], [1, "flex", "gap-2", "mt-4", "sm:mt-0"], ["mat-stroked-button", "", 3, "click"], ["svgIcon", "mat:picture_as_pdf", 1, "icon-sm"], [1, "-mt-6", "bg-gray-50/50", "p-6"], [1, "flex", "flex-col", "gap-6"], ["class", "border rounded-xl p-5 bg-white shadow-sm", 4, "ngIf"], [1, "border", "rounded-xl", "p-5", "bg-white", "shadow-sm"], [1, "m-0", "mb-5", "text-xs", "font-bold", "uppercase", "text-secondary", "tracking-widest", "flex", "items-center"], ["svgIcon", "mat:person", 1, "icon-sm", "mr-2"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-x-8", "gap-y-5", "text-sm"], [1, "flex", "justify-between", "items-center", "py-2"], [1, "text-secondary"], [1, "font-medium"], [1, "font-bold", "text-primary"], ["svgIcon", "mat:school", 1, "icon-sm", "mr-2"], ["class", "border-b py-3 px-2 hover:bg-gray-50/50", 4, "ngFor", "ngForOf"], ["class", "text-sm text-secondary italic py-3", 4, "ngIf"], [1, "border", "rounded-xl", "bg-white", "shadow-sm", "overflow-hidden"], [1, "p-5", "border-b", "bg-gray-50/50"], [1, "m-0", "text-xs", "font-bold", "uppercase", "text-secondary", "tracking-widest", "flex", "items-center"], ["svgIcon", "mat:payments", 1, "icon-sm", "mr-2"], ["mat-table", "", 1, "w-full", 3, "dataSource"], ["matColumnDef", "date"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "montant"], ["matColumnDef", "mode"], ["matColumnDef", "reference"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["paginatorPaiements", ""], ["svgIcon", "mat:grade", 1, "icon-sm", "mr-2"], ["matColumnDef", "matiere"], ["matColumnDef", "type"], ["matColumnDef", "valeur"], ["matColumnDef", "semestre"], ["paginatorNotes", ""], ["svgIcon", "mat:event_available", 1, "icon-sm", "mr-2"], ["matColumnDef", "statut"], ["matColumnDef", "retard"], ["matColumnDef", "motif"], ["paginatorAppels", ""], [1, "flex", "justify-between", "items-center", "mb-4"], ["svgIcon", "mat:folder", 1, "icon-sm", "mr-2"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["svgIcon", "mat:upload", 1, "mr-1"], ["type", "file", "hidden", "", 3, "change"], ["fileInput", ""], ["class", "text-sm text-secondary italic", 4, "ngIf"], ["class", "flex items-center justify-between py-3 px-2 border-b hover:bg-gray-50/50", 4, "ngFor", "ngForOf"], ["svgIcon", "mat:supervisor_account", 1, "icon-sm", "mr-2"], [1, "border-b", "py-3", "px-2", "hover:bg-gray-50/50"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-x-8", "gap-y-4", "text-sm"], [1, "flex", "justify-between", "items-center"], [1, "text-sm", "text-secondary", "italic", "py-3"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "text-sm", "text-secondary", "italic"], [1, "flex", "items-center", "justify-between", "py-3", "px-2", "border-b", "hover:bg-gray-50/50"], [1, "flex", "items-center", "gap-3"], ["svgIcon", "mat:description"], [1, "text-sm", "font-medium"], [1, "flex", "gap-2"], ["mat-icon-button", "", 3, "click"], ["svgIcon", "mat:visibility"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["svgIcon", "mat:delete"]],
    template: function DetailEtudiantComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "vex-page-layout")(1, "vex-page-layout-header", 0)(2, "div", 1)(3, "div")(4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Dossier \u00E9tudiant");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "vex-breadcrumbs", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 4)(8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DetailEtudiantComponent_Template_button_click_8_listener() {
          return ctx.exporterDossier();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "Exporter");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "vex-page-layout-content", 7)(13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, DetailEtudiantComponent_div_14_Template, 25, 5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 10)(16, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, " Informations g\u00E9n\u00E9rales ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 13)(20, "div", 14)(21, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22, "Matricule :");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 14)(26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "Nom complet :");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "div", 14)(31, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, "T\u00E9l\u00E9phone :");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "div", 14)(36, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37, "Email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "div", 14)(41, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42, "Date naissance :");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](45, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "div", 14)(47, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](48, "Total pay\u00E9 :");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](51, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "div", 10)(53, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](54, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](55, " Inscriptions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](56, DetailEtudiantComponent_div_56_Template, 23, 7, "div", 19)(57, DetailEtudiantComponent_div_57_Template, 2, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](58, "div", 21)(59, "div", 22)(60, "h4", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](61, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](62, " Historique des paiements ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "table", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](64, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](65, DetailEtudiantComponent_th_65_Template, 2, 0, "th", 27)(66, DetailEtudiantComponent_td_66_Template, 3, 4, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](67, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](68, DetailEtudiantComponent_th_68_Template, 2, 0, "th", 27)(69, DetailEtudiantComponent_td_69_Template, 3, 3, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](70, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](71, DetailEtudiantComponent_th_71_Template, 2, 0, "th", 27)(72, DetailEtudiantComponent_td_72_Template, 2, 1, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](73, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](74, DetailEtudiantComponent_th_74_Template, 2, 0, "th", 27)(75, DetailEtudiantComponent_td_75_Template, 2, 1, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](76, DetailEtudiantComponent_tr_76_Template, 1, 0, "tr", 32)(77, DetailEtudiantComponent_tr_77_Template, 1, 0, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](78, "mat-paginator", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](80, "div", 21)(81, "div", 22)(82, "h4", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](83, "mat-icon", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](84, " Notes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](85, "table", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](86, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](87, DetailEtudiantComponent_th_87_Template, 2, 0, "th", 27)(88, DetailEtudiantComponent_td_88_Template, 2, 1, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](89, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](90, DetailEtudiantComponent_th_90_Template, 2, 0, "th", 27)(91, DetailEtudiantComponent_td_91_Template, 2, 1, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](92, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](93, DetailEtudiantComponent_th_93_Template, 2, 0, "th", 27)(94, DetailEtudiantComponent_td_94_Template, 2, 1, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](95, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](96, DetailEtudiantComponent_th_96_Template, 2, 0, "th", 27)(97, DetailEtudiantComponent_td_97_Template, 2, 1, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](98, DetailEtudiantComponent_tr_98_Template, 1, 0, "tr", 32)(99, DetailEtudiantComponent_tr_99_Template, 1, 0, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](100, "mat-paginator", 34, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](102, "div", 21)(103, "div", 22)(104, "h4", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](105, "mat-icon", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](106, " Pr\u00E9sences / Absences ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](107, "table", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](108, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](109, DetailEtudiantComponent_th_109_Template, 2, 0, "th", 27)(110, DetailEtudiantComponent_td_110_Template, 3, 4, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](111, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](112, DetailEtudiantComponent_th_112_Template, 2, 0, "th", 27)(113, DetailEtudiantComponent_td_113_Template, 2, 1, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](114, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](115, DetailEtudiantComponent_th_115_Template, 2, 0, "th", 27)(116, DetailEtudiantComponent_td_116_Template, 2, 1, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](117, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](118, DetailEtudiantComponent_th_118_Template, 2, 0, "th", 27)(119, DetailEtudiantComponent_td_119_Template, 2, 1, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](120, DetailEtudiantComponent_tr_120_Template, 1, 0, "tr", 32)(121, DetailEtudiantComponent_tr_121_Template, 1, 0, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](122, "mat-paginator", 34, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](124, "div", 10)(125, "div", 47)(126, "h4", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](127, "mat-icon", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](128, " Documents ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](129, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DetailEtudiantComponent_Template_button_click_129_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r59);
          const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](133);
          return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r36.click());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](130, "mat-icon", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](131, " Ajouter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](132, "input", 51, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function DetailEtudiantComponent_Template_input_change_132_listener($event) {
          return ctx.uploadDocument($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](134, DetailEtudiantComponent_div_134_Template, 2, 0, "div", 53)(135, DetailEtudiantComponent_div_135_Template, 10, 1, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed")("px-6", ctx.layoutCtrl.value === "fullwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](36, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("container", ctx.layoutCtrl.value === "boxed");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.etudiant.parent);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.etudiant.matricule);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", ctx.etudiant.prenom, " ", ctx.etudiant.nom, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.etudiant.telephone);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.etudiant.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](45, 31, ctx.etudiant.dateNaissance, "dd/MM/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](51, 34, ctx.getMontantTotalPaye()), " FCFA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.inscriptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.inscriptions.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dataSource", ctx.dataSourcePaiements);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedPaiements);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matRowDefColumns", ctx.displayedPaiements);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](37, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dataSource", ctx.dataSourceNotes);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedNotes);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matRowDefColumns", ctx.displayedNotes);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](38, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dataSource", ctx.dataSourceAppels);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedAppels);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matRowDefColumns", ctx.displayedAppels);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](39, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.documents.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.documents);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe, _vex_components_vex_page_layout_vex_page_layout_component__WEBPACK_IMPORTED_MODULE_0__.VexPageLayoutComponent, _vex_components_vex_page_layout_vex_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_1__.VexPageLayoutHeaderDirective, _vex_components_vex_page_layout_vex_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_2__.VexPageLayoutContentDirective, _vex_components_vex_breadcrumbs_vex_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__.VexBreadcrumbsComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginatorModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__.MatButtonToggleModule],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [_vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_4__.fadeInUp400ms, _vex_animations_stagger_animation__WEBPACK_IMPORTED_MODULE_5__.stagger40ms]
    }
  });
}

/***/ }),

/***/ 4556:
/*!**************************************************!*\
  !*** ./src/app/services/ClasseMatiereService.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClasseMatiereService: () => (/* binding */ ClasseMatiereService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environnement/environment */ 5981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class ClasseMatiereService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/classe-matiere`;
  }
  // ✅ Ajouter matière à une classe
  add(classeId, matiereId, coefficient) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('classeId', classeId).set('matiereId', matiereId).set('coefficient', coefficient);
    return this.http.post(this.apiUrl, null, {
      params
    });
  }
  update(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  // ✅ Lister matières d'une classe
  getByClasse(classeId) {
    return this.http.get(`${this.apiUrl}/classe/${classeId}`);
  }
  // ✅ Supprimer
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static #_ = this.ɵfac = function ClasseMatiereService_Factory(t) {
    return new (t || ClasseMatiereService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ClasseMatiereService,
    factory: ClasseMatiereService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1308:
/*!***************************************************!*\
  !*** ./src/app/services/MediasService.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaService: () => (/* binding */ MediaService)
/* harmony export */ });
/* harmony import */ var src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environnement/environment */ 5981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class MediaService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/medias`;
  }
  /**
   * Ajouter un media avec fichier
   */
  create(media, fichier) {
    const formData = new FormData();
    formData.append('medias', JSON.stringify(media));
    if (fichier) {
      formData.append('fichier', fichier);
    }
    return this.http.post(this.apiUrl, formData);
  }
  getByType(type, referenceId) {
    return this.http.get(`${this.apiUrl}`, {
      params: {
        type,
        referenceId
      }
    });
  }
  getFichier(id) {
    return this.http.get(`${this.apiUrl}/${id}/fichier`, {
      responseType: 'blob'
    });
  }
  /**
   * Supprimer un media
   */
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static #_ = this.ɵfac = function MediaService_Factory(t) {
    return new (t || MediaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MediaService,
    factory: MediaService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2019:
/*!*************************************************!*\
  !*** ./src/app/services/affectation.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectationService: () => (/* binding */ AffectationService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environnement/environment */ 5981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class AffectationService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/affectations`;
  }
  // 1️⃣ Ajouter une affectation
  ajouterAffectation(request) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('enseignantId', request.enseignantId).set('classeId', request.classeId);
    request.matiereIds.forEach(id => {
      params = params.append('matiereIds', id); // ✅ multi
    });

    return this.http.post(this.apiUrl, null, {
      params
    });
  }
  // 2️⃣ Modifier une affectation
  modifierAffectation(id, request) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    if (request.enseignantId) params = params.set('enseignantId', request.enseignantId);
    if (request.classeId) params = params.set('classeId', request.classeId);
    if (request.matiereIds) {
      request.matiereIds.forEach(mId => {
        params = params.append('matiereIds', mId); // ✅ multi
      });
    }

    return this.http.put(`${this.apiUrl}/${id}`, null, {
      params
    });
  }
  // 3️⃣ Supprimer une affectation
  supprimerAffectation(id) {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      responseType: 'text'
    });
  }
  // 4️⃣ Récupérer une affectation par ID
  getAffectationById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  // 5️⃣ Affectations d'un enseignant
  getAffectationsParEnseignant(enseignantId) {
    return this.http.get(`${this.apiUrl}/enseignant/${enseignantId}`);
  }
  getAll() {
    return this.http.get(this.apiUrl);
  }
  // 6️⃣ Affectations d'une classe
  getAffectationsParClasse(classeId) {
    return this.http.get(`${this.apiUrl}/classe/${classeId}`);
  }
  // 7️⃣ Affectations d'une matière
  getAffectationsParMatiere(matiereId) {
    return this.http.get(`${this.apiUrl}/matiere/${matiereId}`);
  }
  static #_ = this.ɵfac = function AffectationService_Factory(t) {
    return new (t || AffectationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AffectationService,
    factory: AffectationService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5817:
/*!****************************************************!*\
  !*** ./src/app/services/annee-scolaire.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnneeScolaireService: () => (/* binding */ AnneeScolaireService)
/* harmony export */ });
/* harmony import */ var src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environnement/environment */ 5981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class AnneeScolaireService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/annee-scolaire`;
  }
  getAll() {
    return this.http.get(this.apiUrl);
  }
  save(annee) {
    if (annee.id) {
      // Si l'objet a un ID, Angular appelle le PUT (Update)
      return this.http.put(`${this.apiUrl}/${annee.id}`, annee);
    } else {
      // Si l'ID est absent/null, Angular appelle le POST (Create)
      return this.http.post(this.apiUrl, annee);
    }
  }
  getAnneeActive() {
    console.log(`${this.apiUrl}/active`);
    return this.http.get(`${this.apiUrl}/active`);
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  activer(id) {
    return this.http.patch(`${this.apiUrl}/${id}/activer`, {});
  }
  static #_ = this.ɵfac = function AnneeScolaireService_Factory(t) {
    return new (t || AnneeScolaireService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AnneeScolaireService,
    factory: AnneeScolaireService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3215:
/*!*******************************************!*\
  !*** ./src/app/services/appel.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppelService: () => (/* binding */ AppelService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environnement/environment */ 5981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class AppelService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/appels`;
  }
  /**
   * Faire l'appel
   */
  faireAppel(seanceId, etudiantId, statut, retard = 0, motif) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('seanceId', seanceId.toString()).set('etudiantId', etudiantId.toString()).set('statut', statut).set('retard', retard.toString());
    if (motif) {
      params = params.set('motif', motif);
    }
    return this.http.post(this.apiUrl, null, {
      params
    });
  }
  // =========================================
  // 🚀 BATCH CALL (classe entière)
  // =========================================
  faireAppelBatch(request) {
    return this.http.post(`${this.apiUrl}/batch`, request);
  }
  /**
   * Récupérer tous les appels
   */
  getAll() {
    return this.http.get(this.apiUrl);
  }
  /**
   * Récupérer tous les appels d'une année scolaire
   */
  getByAnnee(anneeId) {
    console.log('appels service ', `${this.apiUrl}/annee/${anneeId}`);
    return this.http.get(`${this.apiUrl}/annee/${anneeId}`);
  }
  /**
   * Récupérer les appels d'une séance
   */
  getBySeance(seanceId) {
    return this.http.get(`${this.apiUrl}/seance/${seanceId}`);
  }
  /**
   * Récupérer les appels d'un étudiant
   */
  getByEtudiant(etudiantId) {
    return this.http.get(`${this.apiUrl}/etudiant/${etudiantId}`);
  }
  /**
   * Récupérer l'appel d'un étudiant dans une séance
   */
  getBySeanceAndEtudiant(seanceId, etudiantId) {
    return this.http.get(`${this.apiUrl}/seance/${seanceId}/etudiant/${etudiantId}`);
  }
  /**
   * Modifier un appel
   */
  update(appelId, statut, retard = 0, motif) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('statut', statut).set('retard', retard.toString());
    if (motif) {
      params = params.set('motif', motif);
    }
    return this.http.put(`${this.apiUrl}/${appelId}`, null, {
      params
    });
  }
  /**
   * Justifier une absence
   */
  justifier(appelId, motif) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('motif', motif);
    return this.http.put(`${this.apiUrl}/${appelId}/justifier`, null, {
      params
    });
  }
  /**
   * Supprimer un appel
   */
  delete(appelId) {
    return this.http.delete(`${this.apiUrl}/${appelId}`);
  }
  /**
   * Supprimer l'appel d'un étudiant dans une séance
   */
  deleteBySeanceAndEtudiant(seanceId, etudiantId) {
    return this.http.delete(`${this.apiUrl}/seance/${seanceId}/etudiant/${etudiantId}`);
  }
  /**
   * Supprimer tous les appels d'une séance
   */
  deleteBySeance(seanceId) {
    return this.http.delete(`${this.apiUrl}/seance/${seanceId}`);
  }
  static #_ = this.ɵfac = function AppelService_Factory(t) {
    return new (t || AppelService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AppelService,
    factory: AppelService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2333:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environnement/environment */ 5981);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);

 // Import pour l'opérateur tap



class AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.baseUrl = "api/auth";
    this.serviceUrl = src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  login(credentials) {
    return this.http.post(`${this.serviceUrl}/${this.baseUrl}/login`, credentials).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(res => {
      if (res && res.token) {
        localStorage.setItem('auth_token', res.token);
        // On stocke l'utilisateur sous forme de chaîne JSON
        localStorage.setItem('user_data', JSON.stringify({
          nom: res.nom,
          prenom: res.prenom,
          role: res.role
        }));
      }
    }));
  }
  getMe() {
    return this.http.get(`${this.serviceUrl}/me`);
  }
  isLoggedIn() {
    const token = localStorage.getItem('auth_token');
    return token !== null && token !== undefined && token !== '';
  }
  getUserData() {
    const user = localStorage.getItem('user_data');
    return user ? JSON.parse(user) : null;
  }
  // Dans ton AuthService
  getToken() {
    return localStorage.getItem('auth_token');
  }
  // auth.service.ts
  logout() {
    localStorage.clear(); // Vide TOUT le local storage d'un coup
    this.router.navigate(['/login']);
  }
  static #_ = this.ɵfac = function AuthService_Factory(t) {
    return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7244:
/*!********************************************!*\
  !*** ./src/app/services/classe.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClasseService: () => (/* binding */ ClasseService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environnement/environment */ 5981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class ClasseService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/classes`;
  }
  // 1️⃣ Créer une classe (Utilise HttpParams car le backend attend des @RequestParam)
  // 1️⃣ Créer une classe
  creerClasse(nom, filiereId) {
    // Sécurité : si les IDs sont absents, on ne tente pas le toString()
    if (!filiereId) {
      console.error('Tentative de création avec des IDs manquants', {
        filiereId
      });
    }
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('nom', nom).set('filiereId', (filiereId ?? '').toString());
    return this.http.post(this.apiUrl, null, {
      params
    });
  }
  // 2️⃣ Modifier une classe
  modifierClasse(id, nom, filiereId) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    if (nom) params = params.set('nom', nom);
    // Utilise une condition stricte pour le chiffre 0 si nécessaire,
    // mais ici on vérifie surtout que ce n'est pas null/undefined
    if (filiereId !== undefined && filiereId !== null) {
      params = params.set('filiereId', filiereId.toString());
    }
    return this.http.put(`${this.apiUrl}/${id}`, null, {
      params
    });
  }
  getEtudiantsParClasse(classeId) {
    return this.http.get(`${this.apiUrl}/${classeId}/etudiants`);
  }
  // 3️⃣ Supprimer une classe
  supprimerClasse(id) {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      responseType: 'text'
    });
  }
  // 4️⃣ Récupérer une classe par ID
  getClasseById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  // 5️⃣ Lister toutes les classes
  getAllClasses() {
    return this.http.get(this.apiUrl);
  }
  // 6️⃣ Classes par filière
  getClassesParFiliere(filiereId) {
    return this.http.get(`${this.apiUrl}/filiere/${filiereId}`);
  }
  // 7️⃣ Étudiants d'une classe pour une année scolaire
  getEtudiantsParClasseEtAnnee(classeId, anneeId) {
    return this.http.get(`${this.apiUrl}/${classeId}/annee/${anneeId}/etudiants`);
  }
  static #_ = this.ɵfac = function ClasseService_Factory(t) {
    return new (t || ClasseService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ClasseService,
    factory: ClasseService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7985:
/*!**********************************************!*\
  !*** ./src/app/services/etudiant.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EtudiantService: () => (/* binding */ EtudiantService)
/* harmony export */ });
/* harmony import */ var src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environnement/environment */ 5981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class EtudiantService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/etudiants`;
  }
  // 1️⃣ Créer un étudiant (@RequestBody)
  creerEtudiant(etudiant) {
    return this.http.post(this.apiUrl, etudiant);
  }
  // 2️⃣ Modifier un étudiant (@RequestBody)
  modifierEtudiant(id, data) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  // 3️⃣ Supprimer un étudiant
  supprimerEtudiant(id) {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      responseType: 'text'
    });
  }
  // 4️⃣ Récupérer un étudiant par ID
  getEtudiant(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  // 5️⃣ Lister tous les étudiants
  listerEtudiants() {
    return this.http.get(this.apiUrl);
  }
  // 6️⃣ Récupérer les étudiants d'une classe
  getEtudiantsParClasse(classeId) {
    return this.http.get(`${this.apiUrl}/classe/${classeId}`);
  }
  // 7️⃣ Récupérer un étudiant par matricule
  getEtudiantParMatricule(matricule) {
    return this.http.get(`${this.apiUrl}/matricule/${matricule}`);
  }
  // create et update en meme temps
  save(etudiant) {
    if (etudiant.id) return this.http.put(`${this.apiUrl}/${etudiant.id}`, etudiant);
    return this.http.post(this.apiUrl, etudiant);
  }
  static #_ = this.ɵfac = function EtudiantService_Factory(t) {
    return new (t || EtudiantService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: EtudiantService,
    factory: EtudiantService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 923:
/*!*************************************************!*\
  !*** ./src/app/services/inscription.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InscriptionService: () => (/* binding */ InscriptionService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environnement/environment */ 5981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class InscriptionService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/inscriptions`;
  }
  // 1️⃣ Inscrire un étudiant (Utilisation de HttpParams pour les @RequestParam)
  inscrire(etudiantId, classeId, anneeId, montantReduction, motifReduction) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('etudiantId', etudiantId.toString()).set('classeId', classeId.toString()).set('anneeId', anneeId.toString()).set('montantReduction', montantReduction.toString()).set('motifReduction', motifReduction);
    return this.http.post(this.apiUrl, null, {
      params
    });
  }
  getInscription(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  // 3️⃣ Modifier une inscription
  modifier(id, classeId, anneeId, montantReduction, motifReduction) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('classeId', classeId.toString()).set('anneeId', anneeId.toString()).set('montantReduction', montantReduction.toString()).set('motifReduction', motifReduction);
    return this.http.put(`${this.apiUrl}/${id}`, null, {
      params
    });
  }
  // 4️⃣ Supprimer une inscription
  supprimer(id) {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      responseType: 'text'
    });
  }
  // 5️⃣ Liste des étudiants par classe
  getEtudiantsParClasse(classeId) {
    return this.http.get(`${this.apiUrl}/classe/${classeId}`);
  }
  // 6️⃣ Liste filtrée par classe ET année
  getEtudiantsParClasseEtAnnee(classeId, anneeId) {
    return this.http.get(`${this.apiUrl}/classe/${classeId}/annee/${anneeId}`);
  }
  // 7️⃣ Liste filtrée par étudiant
  getInscriptionsParEtudiant(etudiantId) {
    return this.http.get(`${this.apiUrl}/etudiant/${etudiantId}`);
  }
  getAll() {
    return this.http.get(this.apiUrl);
  }
  static #_ = this.ɵfac = function InscriptionService_Factory(t) {
    return new (t || InscriptionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: InscriptionService,
    factory: InscriptionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3058:
/*!*********************************************!*\
  !*** ./src/app/services/matiere.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatiereService: () => (/* binding */ MatiereService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environnement/environment */ 5981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class MatiereService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/matieres`;
  }
  // 1️⃣ Ajouter une matière (Utilise HttpParams pour @RequestParam)
  ajouterMatiere(matiere) {
    return this.http.post(this.apiUrl, matiere);
  }
  // 2️⃣ Modifier une matière (Champs optionnels)
  modifierMatiere(id, matiere) {
    return this.http.put(`${this.apiUrl}/${id}`, matiere);
  }
  // 3️⃣ Supprimer une matière
  supprimerMatiere(id) {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      responseType: 'text'
    });
  }
  // 4️⃣ Récupérer une matière par ID
  getMatiereById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  // 5️⃣ Lister toutes les matières
  getAllMatieres() {
    return this.http.get(this.apiUrl);
  }
  // 6️⃣ Rechercher par nom
  rechercherParNom(nom) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('nom', nom);
    return this.http.get(`${this.apiUrl}/recherche`, {
      params
    });
  }
  static #_ = this.ɵfac = function MatiereService_Factory(t) {
    return new (t || MatiereService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: MatiereService,
    factory: MatiereService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6347:
/*!******************************************!*\
  !*** ./src/app/services/note.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoteService: () => (/* binding */ NoteService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environnement/environment */ 5981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class NoteService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/notes`;
  }
  /**
   * Ajouter une note
   */
  ajouterNote(etudiantId, affectationId, matiereId, valeur, type, periode, typePeriode) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('etudiantId', etudiantId.toString()).set('affectationId', affectationId.toString()).set('matiereId', matiereId.toString()).set('valeur', valeur.toString()).set('type', type).set('periode', periode.toString()).set('typePeriode', typePeriode);
    return this.http.post(this.apiUrl, null, {
      params
    });
  }
  /**
   * Ajouter plusieurs notes
   */
  ajouterNotesBatch(notes) {
    return this.http.post(`${this.apiUrl}/batch`, notes);
  }
  /**
   * Modifier une note
   */
  modifierNote(noteId, valeur, type) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('valeur', valeur.toString()).set('type', type);
    return this.http.put(`${this.apiUrl}/${noteId}`, null, {
      params
    });
  }
  /**
   * Supprimer une note
   */
  supprimerNote(noteId) {
    return this.http.delete(`${this.apiUrl}/${noteId}`);
  }
  /**
   * Récupérer une note
   */
  getNoteById(noteId) {
    return this.http.get(`${this.apiUrl}/${noteId}`);
  }
  /**
   * Notes par classe et période
   */
  getNotesParClasseEtPeriode(classeId, anneeScolaireId, periode, typePeriode) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('classeId', classeId.toString()).set('anneeScolaireId', anneeScolaireId.toString()).set('periode', periode.toString()).set('typePeriode', typePeriode);
    return this.http.get(`${this.apiUrl}/classe/periode`, {
      params
    });
  }
  /**
   * Notes d’un étudiant
   */
  getNotesEtudiant(etudiantId) {
    return this.http.get(`${this.apiUrl}/etudiant/${etudiantId}`);
  }
  /**
   * Notes d’un étudiant par période
   */
  getNotesEtudiantPeriode(etudiantId, periode, typePeriode) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('periode', periode.toString()).set('typePeriode', typePeriode);
    return this.http.get(`${this.apiUrl}/etudiant/${etudiantId}/periode`, {
      params
    });
  }
  /**
   * Notes par affectation
   */
  getNotesParAffectation(affectationId) {
    return this.http.get(`${this.apiUrl}/affectation/${affectationId}`);
  }
  /**
   * Notes par affectation et période
   */
  getNotesParAffectationEtPeriode(affectationId, periode, typePeriode) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('periode', periode.toString()).set('typePeriode', typePeriode);
    return this.http.get(`${this.apiUrl}/affectation/${affectationId}/periode`, {
      params
    });
  }
  /**
   * Notes par période
   */
  getNotesParPeriode(anneeScolaireId, periode, typePeriode) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('anneeScolaireId', anneeScolaireId.toString()).set('periode', periode.toString()).set('typePeriode', typePeriode);
    return this.http.get(`${this.apiUrl}/periode`, {
      params
    });
  }
  /**
   * Notes par période active
   */
  getNotesParPeriodeActive(periode, typePeriode) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('periode', periode.toString()).set('typePeriode', typePeriode);
    return this.http.get(`${this.apiUrl}/periode/active`, {
      params
    });
  }
  /**
   * Moyenne étudiant
   */
  calculerMoyenneEtudiant(etudiantId, periode, typePeriode) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('periode', periode.toString()).set('typePeriode', typePeriode);
    return this.http.get(`${this.apiUrl}/etudiant/${etudiantId}/moyenne`, {
      params
    });
  }
  static #_ = this.ɵfac = function NoteService_Factory(t) {
    return new (t || NoteService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: NoteService,
    factory: NoteService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 155:
/*!**********************************************!*\
  !*** ./src/app/services/paiement.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaiementService: () => (/* binding */ PaiementService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environnement/environment */ 5981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class PaiementService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/paiements`;
  }
  // ✅ Effectuer un paiement
  effectuerPaiement(inscriptionId, montant, mode) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('inscriptionId', inscriptionId).set('montant', montant).set('mode', mode);
    return this.http.post(this.apiUrl, null, {
      params
    });
  }
  // ✅ Modifier un paiement
  modifierPaiement(id, inscriptionId, montant, mode) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('inscriptionId', inscriptionId).set('montant', montant).set('mode', mode);
    return this.http.put(`${this.apiUrl}/${id}`, null, {
      params
    });
  }
  getResume(inscriptionId) {
    return this.http.get(`${this.apiUrl}/resume/${inscriptionId}`);
  }
  // ✅ Supprimer un paiement
  supprimerPaiement(id) {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      responseType: 'text'
    });
  }
  // ✅ Total payé pour une inscription
  calculerTotalPaye(inscriptionId) {
    return this.http.get(`${this.apiUrl}/total/${inscriptionId}`);
  }
  // ✅ Paiements par étudiant
  getPaiementsParEtudiant(etudiantId) {
    return this.http.get(`${this.apiUrl}/etudiant/${etudiantId}`);
  }
  // ✅ Historique par classe + année
  getHistoriquePaiements(classeId, anneeId) {
    return this.http.get(`${this.apiUrl}/classe/${classeId}/annee/${anneeId}`);
  }
  // ✅ Paiement par ID
  getPaiementById(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  // ✅ Historique étudiant + classe + année
  getHistoriquePaiementsEtudiant(etudiantId, classeId, anneeId) {
    return this.http.get(`${this.apiUrl}/etudiant/${etudiantId}/classe/${classeId}/annee/${anneeId}`);
  }
  static #_ = this.ɵfac = function PaiementService_Factory(t) {
    return new (t || PaiementService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: PaiementService,
    factory: PaiementService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4183:
/*!********************************************!*\
  !*** ./src/app/services/seance.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeanceService: () => (/* binding */ SeanceService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environnement/environment */ 5981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class SeanceService {
  constructor(http) {
    this.http = http;
    this.apiUrl = `${src_environnement_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/api/seances`;
  }
  demarrerSeance(affectationId, matiere) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('affectationId', affectationId).set('matiere', matiere);
    return this.http.post(`${this.apiUrl}/demarrer`, null, {
      params
    });
  }
  // ✅ Terminer une séance
  terminerSeance(seanceId) {
    return this.http.put(`${this.apiUrl}/${seanceId}/terminer`, null);
  }
  // ✅ Séances par date
  getSeancesParDate(date) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('date', date);
    return this.http.get(`${this.apiUrl}/date`, {
      params
    });
  }
  // ✅ Séances par affectation
  getSeancesParAffectation(affectationId) {
    return this.http.get(`${this.apiUrl}/affectation/${affectationId}`);
  }
  getSeancesDuJour() {
    return this.http.get(`${this.apiUrl}/jour`);
  }
  // ✅ Séances par affectation et date
  getSeancesParAffectationEtDate(affectationId, date) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('date', date);
    return this.http.get(`${this.apiUrl}/affectation/${affectationId}/date`, {
      params
    });
  }
  // ✅ Séances en cours
  getSeancesEnCours() {
    return this.http.get(`${this.apiUrl}/encours`);
  }
  getSeances() {
    return this.http.get(`${this.apiUrl}`);
  }
  static #_ = this.ɵfac = function SeanceService_Factory(t) {
    return new (t || SeanceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: SeanceService,
    factory: SeanceService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5981:
/*!******************************************!*\
  !*** ./src/environnement/environment.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  apiUrl: "http://localhost:5200"
  // apiUrl: 'https://api.lyuni-gest.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.kk

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 6401);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.config */ 7110);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map