"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HelmUI = /*#__PURE__*/function (_Component) {
  _inherits(HelmUI, _Component);

  var _super = _createSuper(HelmUI);

  function HelmUI(props) {
    _classCallCheck(this, HelmUI);

    return _super.call(this, props);
  }

  _createClass(HelmUI, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          schema = _this$props.schema,
          config = _this$props.config;

      if (!schema || !config) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "bg-red-100"
        }, "Please provide a schema and its config");
      }

      config.forEach(function (c) {
        c.schema = subSchema(schema, c.schemaID);
      });
      console.log(config);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "lg:grid lg:grid-cols-12 lg:gap-x-5"
      }, /*#__PURE__*/_react["default"].createElement("aside", {
        className: "py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3"
      }, /*#__PURE__*/_react["default"].createElement("nav", {
        className: "space-y-1"
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: "#",
        className: "group bg-gray-50 rounded-md px-3 py-2 flex items-center text-sm leading-5 font-medium text-indigo-700 hover:text-indigo-700 hover:bg-white focus:outline-none focus:bg-indigo-100 transition ease-in-out duration-150",
        "aria-current": "page"
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        className: "flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-indigo-500 group-hover:text-indigo-500 group-focus:text-indigo-600 transition ease-in-out duration-150",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      })), /*#__PURE__*/_react["default"].createElement("span", {
        className: "truncate"
      }, "Account")), /*#__PURE__*/_react["default"].createElement("a", {
        href: "#",
        className: "group rounded-md px-3 py-2 flex items-center text-sm leading-5 font-medium text-gray-900 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        className: "flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
      })), /*#__PURE__*/_react["default"].createElement("span", {
        className: "truncate"
      }, "Password")), /*#__PURE__*/_react["default"].createElement("a", {
        href: "#",
        className: "group rounded-md px-3 py-2 flex items-center text-sm leading-5 font-medium text-gray-900 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        className: "flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      })), /*#__PURE__*/_react["default"].createElement("span", {
        className: "truncate"
      }, "Plan & Billing")), /*#__PURE__*/_react["default"].createElement("a", {
        href: "#",
        className: "group rounded-md px-3 py-2 flex items-center text-sm leading-5 font-medium text-gray-900 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        className: "flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      })), /*#__PURE__*/_react["default"].createElement("span", {
        className: "truncate"
      }, "Team")), /*#__PURE__*/_react["default"].createElement("a", {
        href: "#",
        className: "group rounded-md px-3 py-2 flex items-center text-sm leading-5 font-medium text-gray-900 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        className: "flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
      })), /*#__PURE__*/_react["default"].createElement("span", {
        className: "truncate"
      }, "Integrations")))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "space-y-6 sm:px-6 lg:px-0 lg:col-span-9"
      }, /*#__PURE__*/_react["default"].createElement("form", {
        action: "#",
        method: "POST"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "shadow sm:rounded-md sm:overflow-hidden"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "bg-white py-6 px-4 space-y-6 sm:p-6"
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", {
        className: "text-lg leading-6 font-medium text-gray-900"
      }, "Profile"), /*#__PURE__*/_react["default"].createElement("p", {
        className: "mt-1 text-sm leading-5 text-gray-500"
      }, "This information will be displayed publicly so be careful what you share.")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "grid grid-cols-3 gap-6"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-span-3 space-y-1 sm:col-span-2"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "company_website",
        className: "block text-sm font-medium leading-5 text-gray-700"
      }, "Username"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "rounded-md shadow-sm flex"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "bg-gray-50 border border-r-0 border-gray-300 rounded-l-md px-3 inline-flex items-center text-gray-500 sm:text-sm"
      }, "workcation.com/"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "username",
        className: "form-input flex-grow block w-full min-w-0 rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-span-3 space-y-1"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "about",
        className: "block text-sm leading-5 font-medium text-gray-700"
      }, "About"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "rounded-md shadow-sm"
      }, /*#__PURE__*/_react["default"].createElement("textarea", {
        id: "about",
        rows: "3",
        className: "form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5",
        placeholder: "you@example.com"
      })), /*#__PURE__*/_react["default"].createElement("p", {
        className: "mt-2 text-sm text-gray-500"
      }, "Brief description for your profile. URLs are hyperlinked.")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-span-3 space-y-1"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "block text-sm leading-5 font-medium text-gray-700"
      }, "Photo"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex items-center"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "inline-block bg-gray-100 rounded-full overflow-hidden h-12 w-12"
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        className: "h-full w-full text-gray-300",
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
      }))), /*#__PURE__*/_react["default"].createElement("span", {
        className: "ml-5 rounded-md shadow-sm"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "border border-gray-300 rounded-md py-2 px-3 text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
      }, "Change")))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-span-3 space-y-1"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        className: "block text-sm leading-5 font-medium text-gray-700"
      }, "Cover photo"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt-2 border-2 border-gray-300 border-dashed rounded-md px-6 pt-5 pb-6 flex justify-center"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "text-center"
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        className: "mx-auto h-12 w-12 text-gray-400",
        stroke: "currentColor",
        fill: "none",
        viewBox: "0 0 48 48"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })), /*#__PURE__*/_react["default"].createElement("p", {
        className: "mt-1 text-sm text-gray-600"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
      }, "Upload a file"), "or drag and drop"), /*#__PURE__*/_react["default"].createElement("p", {
        className: "mt-1 text-xs text-gray-500"
      }, "PNG, JPG, GIF up to 10MB")))))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "px-4 py-3 bg-gray-50 text-right sm:px-6"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "inline-flex rounded-md shadow-sm"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        type: "submit",
        className: "bg-indigo-600 border border-transparent rounded-md py-2 px-4 inline-flex justify-center text-sm leading-5 font-medium text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
      }, "Save"))))), /*#__PURE__*/_react["default"].createElement("form", {
        action: "#",
        method: "POST"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "shadow sm:rounded-md sm:overflow-hidden"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "bg-white py-6 px-4 space-y-6 sm:p-6"
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", {
        className: "text-lg leading-6 font-medium text-gray-900"
      }, "Personal Information"), /*#__PURE__*/_react["default"].createElement("p", {
        className: "mt-1 text-sm leading-5 text-gray-500"
      }, "Use a permanent address where you can receive mail.")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "grid grid-cols-6 gap-6"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-span-6 sm:col-span-3"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "first_name",
        className: "block text-sm font-medium leading-5 text-gray-700"
      }, "First name"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "first_name",
        className: "form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-span-6 sm:col-span-3"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "last_name",
        className: "block text-sm font-medium leading-5 text-gray-700"
      }, "Last name"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "last_name",
        className: "form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-span-6 sm:col-span-4"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "email_address",
        className: "block text-sm font-medium leading-5 text-gray-700"
      }, "Email address"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "email_address",
        className: "form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-span-6 sm:col-span-3"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "country",
        className: "block text-sm font-medium leading-5 text-gray-700"
      }, "Country / Region"), /*#__PURE__*/_react["default"].createElement("select", {
        id: "country",
        className: "form-select mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      }, /*#__PURE__*/_react["default"].createElement("option", null, "United States"), /*#__PURE__*/_react["default"].createElement("option", null, "Canada"), /*#__PURE__*/_react["default"].createElement("option", null, "Mexico"))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-span-6"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "street_address",
        className: "block text-sm font-medium leading-5 text-gray-700"
      }, "Street address"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "street_address",
        className: "form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-span-6 sm:col-span-6 lg:col-span-2"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "city",
        className: "block text-sm font-medium leading-5 text-gray-700"
      }, "City"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "city",
        className: "form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-span-6 sm:col-span-3 lg:col-span-2"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "state",
        className: "block text-sm font-medium leading-5 text-gray-700"
      }, "State / Province"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "state",
        className: "form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-span-6 sm:col-span-3 lg:col-span-2"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "postal_code",
        className: "block text-sm font-medium leading-5 text-gray-700"
      }, "ZIP / Postal"), /*#__PURE__*/_react["default"].createElement("input", {
        id: "postal_code",
        className: "form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
      })))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "px-4 py-3 bg-gray-50 text-right sm:px-6"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "inline-flex rounded-md shadow-sm"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        type: "submit",
        className: "bg-indigo-600 border border-transparent rounded-md py-2 px-4 inline-flex justify-center text-sm leading-5 font-medium text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
      }, "Save"))))), /*#__PURE__*/_react["default"].createElement("form", {
        action: "#",
        method: "POST"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "shadow sm:rounded-md sm:overflow-hidden"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "bg-white py-6 px-4 space-y-6 sm:p-6"
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", {
        className: "text-lg leading-6 font-medium text-gray-900"
      }, "Notifications"), /*#__PURE__*/_react["default"].createElement("p", {
        className: "mt-1 text-sm leading-5 text-gray-500"
      }, "Provide basic information about the job. Be specific with the job title.")), /*#__PURE__*/_react["default"].createElement("fieldset", null, /*#__PURE__*/_react["default"].createElement("legend", {
        className: "text-base leading-6 font-medium text-gray-900"
      }, "By Email"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt-4"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex items-start"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "h-5 flex items-center"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "comments",
        type: "checkbox",
        className: "form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "ml-3 text-sm leading-5"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "comments",
        className: "font-medium text-gray-700"
      }, "Comments"), /*#__PURE__*/_react["default"].createElement("p", {
        className: "text-gray-500"
      }, "Get notified when someones posts a comment on a posting."))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt-4"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex items-start"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "h-5 flex items-center"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "candidates",
        type: "checkbox",
        className: "form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "ml-3 text-sm leading-5"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "candidates",
        className: "font-medium text-gray-700"
      }, "Candidates"), /*#__PURE__*/_react["default"].createElement("p", {
        className: "text-gray-500"
      }, "Get notified when a candidate applies for a job.")))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt-4"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex items-start"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "h-5 flex items-center"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "offers",
        type: "checkbox",
        className: "form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "ml-3 text-sm leading-5"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "offers",
        className: "font-medium text-gray-700"
      }, "Offers"), /*#__PURE__*/_react["default"].createElement("p", {
        className: "text-gray-500"
      }, "Get notified when a candidate accepts or rejects an offer.")))))), /*#__PURE__*/_react["default"].createElement("fieldset", {
        className: "mt-6"
      }, /*#__PURE__*/_react["default"].createElement("legend", {
        className: "text-base leading-6 font-medium text-gray-900"
      }, "Push Notifications"), /*#__PURE__*/_react["default"].createElement("p", {
        className: "text-sm leading-5 text-gray-500"
      }, "These are delivered via SMS to your mobile phone."), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt-4"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex items-center"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "push_everything",
        name: "push_notifications",
        type: "radio",
        className: "form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
      }), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "push_everything",
        className: "ml-3"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "block text-sm leading-5 font-medium text-gray-700"
      }, "Everything"))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt-4 flex items-center"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "push_email",
        name: "push_notifications",
        type: "radio",
        className: "form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
      }), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "push_email",
        className: "ml-3"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "block text-sm leading-5 font-medium text-gray-700"
      }, "Same as email"))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mt-4 flex items-center"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "push_nothing",
        name: "push_notifications",
        type: "radio",
        className: "form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
      }), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "push_nothing",
        className: "ml-3"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "block text-sm leading-5 font-medium text-gray-700"
      }, "No push notifications")))))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "px-4 py-3 bg-gray-50 text-right sm:px-6"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "inline-flex rounded-md shadow-sm"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        type: "submit",
        className: "bg-indigo-600 border border-transparent rounded-md py-2 px-4 inline-flex justify-center text-sm leading-5 font-medium text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
      }, "Save")))))));
    }
  }]);

  return HelmUI;
}(_react.Component);

exports["default"] = HelmUI;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subSchema = subSchema;

function subSchema(schema, schemaID) {
  if (schema.$id === schemaID) {
    return schema;
  }

  if (schema.properties !== undefined) {
    for (var _i = 0, _Object$keys = Object.keys(schema.properties); _i < _Object$keys.length; _i++) {
      var property = _Object$keys[_i];
      var found = subSchema(schema.properties[property], schemaID);

      if (found !== undefined) {
        return found;
      }
    }
  }

  return undefined;
}
