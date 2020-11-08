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
    var _this;

    _classCallCheck(this, HelmUI);

    _this = _super.call(this, props);
    _this.state = {
      selectedID: _this.props.config[0].schemaID
    };
    return _this;
  }

  _createClass(HelmUI, [{
    key: "select",
    value: function select(schemaID) {
      this.setState({
        selectedID: schemaID
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

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
      }, config.map(function (c) {
        var selected = _this2.state.selectedID === c.schemaID;
        console.log();
        return /*#__PURE__*/_react["default"].createElement("a", {
          href: "#",
          className: 'group rounded-md px-3 py-2 flex items-center text-sm leading-5 font-medium focus:outline-none transition ease-in-out duration-150 ' + (selected ? 'bg-gray-50 text-indigo-700 hover:bg-white' : 'text-gray-900 hover:bg-gray-50'),
          "aria-current": "page",
          onClick: function onClick() {
            return _this2.select(c.schemaID);
          }
        }, /*#__PURE__*/_react["default"].createElement("svg", {
          className: 'flex-shrink-0 -ml-1 mr-3 h-6 w-6 transition ease-in-out duration-150 ' + (selected ? 'text-indigo-500 group-focus:text-indigo-600' : 'text-gray-400 group-focus:text-gray-500'),
          "aria-hidden": "true",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor"
        }, /*#__PURE__*/_react["default"].createElement("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: c.metaData.icon
        })), /*#__PURE__*/_react["default"].createElement("span", {
          className: "truncate"
        }, c.metaData.name));
      }))), /*#__PURE__*/_react["default"].createElement("div", {
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
