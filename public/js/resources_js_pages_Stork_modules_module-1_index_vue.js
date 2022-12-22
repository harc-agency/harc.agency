"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Stork_modules_module-1_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Stork/Layout.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Stork/Layout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_nav_ProfileMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/nav/ProfileMenu */ "./resources/js/layouts/nav/ProfileMenu.vue");
/* harmony import */ var _layouts_Stork_nav_StorkNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layouts/Stork/nav/StorkNav */ "./resources/js/layouts/Stork/nav/StorkNav.vue");
/* harmony import */ var _layouts_Stork_nav_SidebarNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/layouts/Stork/nav/SidebarNav */ "./resources/js/layouts/Stork/nav/SidebarNav.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  },
  components: {
    SidebarNav: _layouts_Stork_nav_SidebarNav__WEBPACK_IMPORTED_MODULE_2__["default"],
    StorkNav: _layouts_Stork_nav_StorkNav__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProfileMenu: _layouts_nav_ProfileMenu__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Stork/nav/SidebarNav.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Stork/nav/SidebarNav.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    var _this$$page$props$aut, _this$$page$props$aut2;
    return {
      sidebarDrawer: true,
      isSidebarClosed: (_this$$page$props$aut = this.$page.props.auth.user.data.settings) === null || _this$$page$props$aut === void 0 ? void 0 : (_this$$page$props$aut2 = _this$$page$props$aut.adminNav) === null || _this$$page$props$aut2 === void 0 ? void 0 : _this$$page$props$aut2.isSidebarClosed,
      items: [{
        title: 'Start Here',
        link: '/stork',
        icon: 'mdi-account'
      },
      // Resources
      {
        title: 'Resources',
        icon: 'mdi-folder',
        items: [{
          title: 'Resource 1',
          link: '/stork/resource1',
          icon: 'mdi-book'
        }, {
          title: 'Resource 2',
          link: '/stork/resource2'
        }, {
          title: 'Resource 3',
          link: '/stork/resource3'
        }, {
          title: 'Resource 4',
          link: '/stork/resource4'
        }, {
          title: 'Resource 5',
          link: '/stork/resource5'
        }, {
          title: 'Resource 6',
          link: '/stork/resource6'
        }, {
          title: 'Resource 7',
          link: '/stork/resource7'
        }, {
          title: 'Resource 8',
          link: '/stork/resource8'
        }]
      },
      // nest modules
      {
        title: 'Modules',
        icon: 'mdi-folder',
        items: [{
          title: 'Module 1',
          link: '/stork#module1'
        }, {
          title: 'Module 2',
          link: '/stork#module2'
        }, {
          title: 'Module 3',
          link: '/stork#module3'
        }, {
          title: 'Module 4',
          link: '/stork#module4'
        }, {
          title: 'Module 5',
          link: '/stork#module5'
        }, {
          title: 'Module 6',
          link: '/stork#module6'
        }, {
          title: 'Module 7',
          link: '/stork#module7'
        }, {
          title: 'Module 8',
          link: '/stork#module8'
        }]
      }]
    };
  },
  computed: {
    mini: {
      get: function get() {
        return (this.isSidebarClosed || this.$vuetify.breakpoint.smAndDown) && this.isSidebarClosed;
      },
      set: function set(value) {
        return value;
      }
    }
  },
  watch: {
    isSidebarClosed: function isSidebarClosed(value) {
      axios__WEBPACK_IMPORTED_MODULE_0___default().post('/user-settings', {
        'adminNav.isSidebarClosed': value
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Stork/nav/StorkNav.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Stork/nav/StorkNav.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'StorkNav',
  computed: {
    hasAuthUser: function hasAuthUser() {
      var _this$$page$props;
      return (_this$$page$props = this.$page.props) === null || _this$$page$props === void 0 ? void 0 : _this$$page$props.auth.user;
    },
    isAdmin: function isAdmin() {
      var _this$$page$props2, _this$$page$props2$au, _this$$page$props2$au2;
      return (_this$$page$props2 = this.$page.props) === null || _this$$page$props2 === void 0 ? void 0 : (_this$$page$props2$au = _this$$page$props2.auth.user) === null || _this$$page$props2$au === void 0 ? void 0 : (_this$$page$props2$au2 = _this$$page$props2$au.data) === null || _this$$page$props2$au2 === void 0 ? void 0 : _this$$page$props2$au2.isAdmin;
    }
  },
  methods: {
    itemLink: function itemLink(item) {
      return item.link ? item.link : '';
    },
    itemTarget: function itemTarget(item) {
      return item.target ? item.target : '';
    },
    showLink: function showLink(item) {
      return !item.hide_link || !item.admin;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Stork/modules/module-1/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Stork/modules/module-1/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layouts_Stork_Layout_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts/Stork/Layout.vue */ "./resources/js/layouts/Stork/Layout.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  layout: _layouts_Stork_Layout_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Stork/Layout.vue?vue&type=template&id=3f5a34d6&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Stork/Layout.vue?vue&type=template&id=3f5a34d6& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("v-app", [_c("v-app-bar", {
    attrs: {
      "clipped-left": "",
      app: ""
    }
  }, [_c("StorkNav"), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("ProfileMenu")], 1), _vm._v(" "), _c("SidebarNav"), _vm._v(" "), _c("v-main", {
    staticClass: "warm"
  }, [_vm._t("default")], 2)], 1), _vm._v(" "), _c("portal-target", {
    attrs: {
      name: "modals",
      multiple: ""
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Stork/nav/SidebarNav.vue?vue&type=template&id=342055bf&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Stork/nav/SidebarNav.vue?vue&type=template&id=342055bf& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-navigation-drawer", {
    attrs: {
      "mini-variant": _vm.mini,
      app: "",
      dark: "",
      permanent: "",
      stateless: "",
      clipped: ""
    },
    on: {
      "update:miniVariant": function updateMiniVariant($event) {
        _vm.mini = $event;
      },
      "update:mini-variant": function updateMiniVariant($event) {
        _vm.mini = $event;
      }
    },
    model: {
      value: _vm.sidebarDrawer,
      callback: function callback($$v) {
        _vm.sidebarDrawer = $$v;
      },
      expression: "sidebarDrawer"
    }
  }, [_c("v-list", {
    attrs: {
      dense: "",
      flat: "",
      outlined: ""
    }
  }, [_c("v-list-item", {
    staticClass: "pointer",
    on: {
      click: function click($event) {
        _vm.isSidebarClosed = !_vm.isSidebarClosed;
      }
    }
  }, [!_vm.mini ? _c("v-icon", [_vm._v("mdi-menu-open")]) : _c("v-icon", [_vm._v("mdi-menu-open mdi-rotate-180")])], 1), _vm._v(" "), _vm._l(_vm.items, function (item) {
    return _c("div", {
      key: item.title,
      staticClass: "pointer"
    }, [item.items ? _c("v-list-group", {
      attrs: {
        "prepend-icon": item.icon
      },
      scopedSlots: _vm._u([{
        key: "activator",
        fn: function fn() {
          return [_c("v-list-item-content", [_c("v-list-item-title", [_c("inertia-link", {
            attrs: {
              href: item.link || "",
              as: "span"
            }
          }, [_vm._v(_vm._s(item.title))])], 1)], 1)];
        },
        proxy: true
      }, {
        key: "default",
        fn: function fn() {
          return _vm._l(item.items, function (child) {
            return _c("v-list-item", {
              key: child.title,
              staticClass: "grey darken-1"
            }, [child.link ? _c("inertia-link", {
              attrs: {
                as: "div",
                href: child.link
              }
            }, [_c("span", [_vm._v(_vm._s(child.title))])]) : _c("v-list-item-content", [_c("v-list-item-title", {
              domProps: {
                textContent: _vm._s(child.title)
              }
            })], 1)], 1);
          });
        },
        proxy: true
      }], null, true),
      model: {
        value: item.active,
        callback: function callback($$v) {
          _vm.$set(item, "active", $$v);
        },
        expression: "item.active"
      }
    }) : _c("inertia-link", {
      staticClass: "pointer",
      attrs: {
        href: item.link || "",
        as: "span"
      }
    }, [_c("v-list-item", [_c("v-list-item-icon", [_c("v-icon", {
      domProps: {
        textContent: _vm._s(item.icon)
      }
    })], 1), _vm._v(" "), _c("v-list-item-content", [_c("v-list-item-title", [_vm._v("\n              " + _vm._s(item.title) + "\n            ")])], 1)], 1)], 1)], 1);
  })], 2)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Stork/nav/StorkNav.vue?vue&type=template&id=0bf9c5d4&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Stork/nav/StorkNav.vue?vue&type=template&id=0bf9c5d4& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "d-flex row"
  }, [_c("v-tabs", {
    attrs: {
      "background-color": "transparent"
    }
  }, [_vm.isAdmin ? _c("inertia-link", {
    attrs: {
      href: _vm.route("admin.index"),
      as: "v-tab"
    }
  }, [_c("v-icon", {
    staticClass: "mr-2"
  }, [_vm._v("mdi-account-cog")]), _vm._v(" Admin\n    ")], 1) : _vm._e(), _vm._v(" "), _c("inertia-link", {
    attrs: {
      href: "/stork",
      as: "v-tab"
    }
  }, [_c("v-icon", {
    staticClass: "mr-2"
  }, [_vm._v("mdi-account-cog")]), _vm._v(" Stork\n    ")], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Stork/modules/module-1/index.vue?vue&type=template&id=30fec34c&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Stork/modules/module-1/index.vue?vue&type=template&id=30fec34c&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("v-card", [_c("v-card-title", [_c("h2", [_vm._v("Module 1")])]), _vm._v(" "), _c("v-card-text", [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("iframe", {
    attrs: {
      width: "100%",
      height: "315",
      src: "https://www.youtube.com/embed/9bZkp7q19f0",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: ""
    }
  })])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("v-card", [_c("v-card-title", [_c("h2", [_vm._v("Projects")])]), _vm._v(" "), _c("v-card-text", [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "6",
      md: "4",
      lg: "3"
    }
  }, [_c("v-card", [_c("v-card-title", [_c("h3", [_vm._v("Project 1")])]), _vm._v(" "), _c("v-card-text", [_c("p", [_vm._v("Project 1 description")])]), _vm._v(" "), _c("v-card-actions", [_c("v-btn", {
    attrs: {
      color: "primary",
      href: "/stork/module-1/project-1",
      text: ""
    }
  }, [_vm._v("\n                    Go to Project 1\n                  ")])], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "6",
      md: "4",
      lg: "3"
    }
  }, [_c("v-card", [_c("v-card-title", [_c("h3", [_vm._v("Project 2")])]), _vm._v(" "), _c("v-card-text", [_c("p", [_vm._v("Project 2 description")])]), _vm._v(" "), _c("v-card-actions", [_c("v-btn", {
    attrs: {
      color: "primary",
      href: "/stork/module-1/project-2",
      text: ""
    }
  }, [_vm._v("\n                    Go to Project 2\n                  ")])], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/layouts/Stork/Layout.vue":
/*!***********************************************!*\
  !*** ./resources/js/layouts/Stork/Layout.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue_vue_type_template_id_3f5a34d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=3f5a34d6& */ "./resources/js/layouts/Stork/Layout.vue?vue&type=template&id=3f5a34d6&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/layouts/Stork/Layout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_3f5a34d6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Layout_vue_vue_type_template_id_3f5a34d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/Stork/Layout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/Stork/nav/SidebarNav.vue":
/*!*******************************************************!*\
  !*** ./resources/js/layouts/Stork/nav/SidebarNav.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SidebarNav_vue_vue_type_template_id_342055bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarNav.vue?vue&type=template&id=342055bf& */ "./resources/js/layouts/Stork/nav/SidebarNav.vue?vue&type=template&id=342055bf&");
/* harmony import */ var _SidebarNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarNav.vue?vue&type=script&lang=js& */ "./resources/js/layouts/Stork/nav/SidebarNav.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SidebarNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SidebarNav_vue_vue_type_template_id_342055bf___WEBPACK_IMPORTED_MODULE_0__.render,
  _SidebarNav_vue_vue_type_template_id_342055bf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/Stork/nav/SidebarNav.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/Stork/nav/StorkNav.vue":
/*!*****************************************************!*\
  !*** ./resources/js/layouts/Stork/nav/StorkNav.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StorkNav_vue_vue_type_template_id_0bf9c5d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StorkNav.vue?vue&type=template&id=0bf9c5d4& */ "./resources/js/layouts/Stork/nav/StorkNav.vue?vue&type=template&id=0bf9c5d4&");
/* harmony import */ var _StorkNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StorkNav.vue?vue&type=script&lang=js& */ "./resources/js/layouts/Stork/nav/StorkNav.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StorkNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StorkNav_vue_vue_type_template_id_0bf9c5d4___WEBPACK_IMPORTED_MODULE_0__.render,
  _StorkNav_vue_vue_type_template_id_0bf9c5d4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/Stork/nav/StorkNav.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Stork/modules/module-1/index.vue":
/*!*************************************************************!*\
  !*** ./resources/js/pages/Stork/modules/module-1/index.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_30fec34c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=30fec34c&scoped=true& */ "./resources/js/pages/Stork/modules/module-1/index.vue?vue&type=template&id=30fec34c&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Stork/modules/module-1/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_30fec34c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_30fec34c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "30fec34c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Stork/modules/module-1/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/Stork/Layout.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/layouts/Stork/Layout.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Stork/Layout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/Stork/nav/SidebarNav.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/layouts/Stork/nav/SidebarNav.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SidebarNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Stork/nav/SidebarNav.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/Stork/nav/StorkNav.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/layouts/Stork/nav/StorkNav.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StorkNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StorkNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Stork/nav/StorkNav.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StorkNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Stork/modules/module-1/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/Stork/modules/module-1/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Stork/modules/module-1/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/Stork/Layout.vue?vue&type=template&id=3f5a34d6&":
/*!******************************************************************************!*\
  !*** ./resources/js/layouts/Stork/Layout.vue?vue&type=template&id=3f5a34d6& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_3f5a34d6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_3f5a34d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_3f5a34d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=template&id=3f5a34d6& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Stork/Layout.vue?vue&type=template&id=3f5a34d6&");


/***/ }),

/***/ "./resources/js/layouts/Stork/nav/SidebarNav.vue?vue&type=template&id=342055bf&":
/*!**************************************************************************************!*\
  !*** ./resources/js/layouts/Stork/nav/SidebarNav.vue?vue&type=template&id=342055bf& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarNav_vue_vue_type_template_id_342055bf___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarNav_vue_vue_type_template_id_342055bf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarNav_vue_vue_type_template_id_342055bf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SidebarNav.vue?vue&type=template&id=342055bf& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Stork/nav/SidebarNav.vue?vue&type=template&id=342055bf&");


/***/ }),

/***/ "./resources/js/layouts/Stork/nav/StorkNav.vue?vue&type=template&id=0bf9c5d4&":
/*!************************************************************************************!*\
  !*** ./resources/js/layouts/Stork/nav/StorkNav.vue?vue&type=template&id=0bf9c5d4& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StorkNav_vue_vue_type_template_id_0bf9c5d4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StorkNav_vue_vue_type_template_id_0bf9c5d4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_StorkNav_vue_vue_type_template_id_0bf9c5d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StorkNav.vue?vue&type=template&id=0bf9c5d4& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/Stork/nav/StorkNav.vue?vue&type=template&id=0bf9c5d4&");


/***/ }),

/***/ "./resources/js/pages/Stork/modules/module-1/index.vue?vue&type=template&id=30fec34c&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/Stork/modules/module-1/index.vue?vue&type=template&id=30fec34c&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_30fec34c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_30fec34c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_30fec34c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=30fec34c&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Stork/modules/module-1/index.vue?vue&type=template&id=30fec34c&scoped=true&");


/***/ })

}]);