"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _core = _interopRequireDefault(require("@rjsf/core"));

var _ajv = _interopRequireDefault(require("ajv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CustomText = function CustomText(props) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-1 relative rounded-md shadow-sm"
  }, "myWidget"));
};

var CustomCheckbox = function CustomCheckbox(props) {
  var value = props.value,
      label = props.label;
  var translate = value ? 'translate-x-5' : 'translate-x-0';
  var bg = value ? 'bg-indigo-600' : 'bg-gray-200';
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
    "class": "control-label"
  }, label), /*#__PURE__*/_react["default"].createElement("span", {
    role: "checkbox",
    tabindex: "0",
    "aria-checked": value,
    onClick: function onClick(event) {
      return props.onChange(!value);
    },
    className: "".concat(bg, " mt-1 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline")
  }, /*#__PURE__*/_react["default"].createElement("span", {
    "aria-hidden": "true",
    className: "".concat(translate, " inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200")
  })));
};

var CustomDescription = function CustomDescription(props) {
  var description = props.description;
  return /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-gray-500"
  }, description);
};

var CustomTitle = function CustomTitle(props) {
  var title = props.title;
  return /*#__PURE__*/_react["default"].createElement("label", {
    className: "block text-sm font-medium leading-5 text-gray-700"
  }, title);
};

var CustomFieldTemplate = function CustomFieldTemplate(props) {
  var id = props.id,
      classNames = props.classNames,
      label = props.label,
      help = props.help,
      required = props.required,
      description = props.description,
      errors = props.errors,
      children = props.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classNames
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: id
  }, label, required ? '*' : null), children, description, errors, help);
};

var customFields = {
  DescriptionField: CustomDescription,
  TitleField: CustomTitle
};
var customWidgets = {
  CheckboxWidget: CustomCheckbox
}; // const log = (type) => console.log.bind(console, type);

var HelmUI = /*#__PURE__*/function (_Component) {
  _inherits(HelmUI, _Component);

  var _super = _createSuper(HelmUI);

  function HelmUI(props) {
    var _this;

    _classCallCheck(this, HelmUI);

    _this = _super.call(this, props);
    _this.state = {
      ajv: new _ajv["default"](),
      selected: _this.props.config[0].metaData.name
    };
    return _this;
  }

  _createClass(HelmUI, [{
    key: "select",
    value: function select(name) {
      this.setState({
        selected: name
      });
    }
  }, {
    key: "setSchemaValues",
    value: function setSchemaValues(schema, schemaID, values, value) {
      var updatedValues = setSubSchemaValues(schema, schemaID, values, value);
      var valid = this.state.ajv.validate(schema, updatedValues);
      this.props.validationCallback(this.state.ajv.errors);
      this.props.setValues(updatedValues, filterDefaultValues(schema, JSON.parse(JSON.stringify(updatedValues))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          schema = _this$props.schema,
          config = _this$props.config,
          values = _this$props.values,
          validate = _this$props.validate,
          validationCallback = _this$props.validationCallback;

      if (!schema || !config) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "bg-red-100"
        }, "Please provide a schema and its config");
      }

      var schemasToRender = [];
      var uiSchemaToRender = {};
      var valuesToRender = {};
      var _ = {};
      config.forEach(function (c) {
        if (c.metaData.name === _this2.state.selected) {
          c.schemaIDs.forEach(function (schemaID) {
            schemasToRender.push(JSON.parse(JSON.stringify(subSchema(schema, schemaID))));

            if (c.uiSchema[schemaID] === undefined) {
              uiSchemaToRender[schemaID] = {};
            } else {
              uiSchemaToRender[schemaID] = c.uiSchema[schemaID];
            }
          });
        }
      });

      function addMarkdownTagToHelpFields(uiSchema) {
        for (var _i = 0, _Object$keys = Object.keys(uiSchema); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];

          if (uiSchema[key]["ui:help"]) {
            uiSchema[key]["ui:help"] = /*#__PURE__*/_react["default"].createElement(_reactMarkdown["default"], {
              children: uiSchema[key]["ui:help"]
            });
          }
        }

        return uiSchema;
      }

      schemasToRender.forEach(function (s) {
        uiSchemaToRender[s.$id] = extendUISchema(s, uiSchemaToRender[s.$id]);
        uiSchemaToRender[s.$id] = turnDescriptionToHintForLeaves(s, uiSchemaToRender[s.$id]);
        uiSchemaToRender[s.$id] = addMarkdownTagToHelpFields(uiSchemaToRender[s.$id]);
        uiSchemaToRender[s.$id] = makeArraysNonOrderable(s, uiSchemaToRender[s.$id]);
        valuesToRender[s.$id] = subSchemaValues(schema, s.$id, values);
      });
      var sidebar = config.length > 1;
      var gridClass = 'lg:grid lg:grid-cols-12 lg:gap-x-5';
      var gridSpan = 'lg:col-span-9';

      if (!sidebar) {
        gridClass = '';
        gridSpan = '';
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: gridClass
      }, sidebar && /*#__PURE__*/_react["default"].createElement("aside", {
        className: "py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3"
      }, /*#__PURE__*/_react["default"].createElement("nav", {
        className: "space-y-1"
      }, config.map(function (c) {
        var selected = _this2.state.selected === c.metaData.name;
        return /*#__PURE__*/_react["default"].createElement("a", {
          href: "#",
          className: 'group rounded-md px-3 py-2 flex items-center text-sm leading-5 font-medium focus:outline-none transition ease-in-out duration-150 ' + (selected ? 'bg-gray-50 text-indigo-700 hover:bg-white' : 'text-gray-900 hover:bg-gray-50'),
          "aria-current": "page",
          onClick: function onClick() {
            return _this2.select(c.metaData.name);
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
        className: gridSpan
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "space-y-6 sm:px-6 lg:px-0"
      }, schemasToRender.map(function (s) {
        return /*#__PURE__*/_react["default"].createElement(_core["default"], {
          key: s.$id,
          onChange: function onChange(e) {
            return _this2.setSchemaValues(schema, s.$id, values, e.formData);
          },
          schema: s // onChange={log("changed")}
          // onSubmit={log("submitted")}
          // onError={log("errors")}
          ,
          uiSchema: uiSchemaToRender[s.$id],
          formData: valuesToRender[s.$id] // fields={customFields}
          ,
          widgets: customWidgets // FieldTemplate={CustomFieldTemplate}
          // className={styles('m-8')}
          ,
          liveValidate: validate
        });
      }))));
    }
  }]);

  return HelmUI;
}(_react.Component);

exports["default"] = HelmUI;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendUISchema = extendUISchema;
exports.filterDefaultValues = filterDefaultValues;
exports.makeArraysNonOrderable = makeArraysNonOrderable;
exports.setSubSchemaValues = setSubSchemaValues;
exports.subSchema = subSchema;
exports.subSchemaValues = subSchemaValues;
exports.trimRootTitle = trimRootTitle;
exports.turnDescriptionToHintForLeaves = turnDescriptionToHintForLeaves;

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

function subSchemaValues(schema, schemaID, values) {
  if (schema.$id === schemaID) {
    return values;
  }

  if (schema.properties !== undefined) {
    for (var _i2 = 0, _Object$keys2 = Object.keys(schema.properties); _i2 < _Object$keys2.length; _i2++) {
      var property = _Object$keys2[_i2];

      if (values[property] !== undefined) {
        var found = subSchemaValues(schema.properties[property], schemaID, values[property]);

        if (found !== undefined) {
          return found;
        }
      }
    }
  }

  return undefined;
}

function setSubSchemaValues(schema, schemaID, values, value) {
  if (schema.$id === schemaID) {
    return value;
  }

  if (values === undefined) {
    return values;
  }

  if (schema.properties !== undefined) {
    for (var _i3 = 0, _Object$keys3 = Object.keys(schema.properties); _i3 < _Object$keys3.length; _i3++) {
      var property = _Object$keys3[_i3];
      var propertySchema = schema.properties[property];
      var v = setSubSchemaValues(schema.properties[property], schemaID, values[property], value);

      if (v !== undefined) {
        values[property] = v;
      }

      if (propertySchema.type === 'string' && v === undefined && values[property] && values[property].length === 1) {
        values[property] = v;
      }
    }
  }

  return values;
}

function filterDefaultValues(schema, values) {
  if (schema["default"] === values) {
    return undefined;
  }

  if (schema.properties !== undefined) {
    for (var _i4 = 0, _Object$keys4 = Object.keys(schema.properties); _i4 < _Object$keys4.length; _i4++) {
      var property = _Object$keys4[_i4];

      if (values[property] !== undefined) {
        values[property] = filterDefaultValues(schema.properties[property], values[property]);

        if (values[property] === undefined || Object.keys(values[property]).length === 0 && values[property].constructor === Object || JSON.stringify(values[property]) === '[]') {
          delete values[property];
        }
      }
    }
  }

  if (values === []) {
    return undefined;
  }

  return values;
}

function extendUISchema(schema, uiSchema) {
  if (schema.properties === undefined) {
    return uiSchema;
  }

  for (var _i5 = 0, _Object$keys5 = Object.keys(schema.properties); _i5 < _Object$keys5.length; _i5++) {
    var property = _Object$keys5[_i5];

    if (uiSchema[property] === undefined) {
      uiSchema[property] = {};
    }

    uiSchema[property] = extendUISchema(schema.properties[property], uiSchema[property]);
  }

  return uiSchema;
}

function turnDescriptionToHintForLeaves(schema, uiSchema) {
  if (schema.properties === undefined) {
    if (schema.description !== undefined) {
      uiSchema['ui:help'] = schema.description;
      delete schema.description;
    }

    return uiSchema;
  }

  for (var _i6 = 0, _Object$keys6 = Object.keys(schema.properties); _i6 < _Object$keys6.length; _i6++) {
    var property = _Object$keys6[_i6];
    uiSchema[property] = turnDescriptionToHintForLeaves(schema.properties[property], uiSchema[property]);
  }

  return uiSchema;
}

function trimRootTitle(schema) {
  if (schema.properties !== undefined) {
    delete schema.title;
    delete schema.description;
  }

  return schema;
}

function makeArraysNonOrderable(schema, uiSchema) {
  if (schema.type === 'array') {
    uiSchema['ui:options'] = {
      orderable: false
    };
  }

  if (schema.properties !== undefined) {
    for (var _i7 = 0, _Object$keys7 = Object.keys(schema.properties); _i7 < _Object$keys7.length; _i7++) {
      var property = _Object$keys7[_i7];
      uiSchema[property] = makeArraysNonOrderable(schema.properties[property], uiSchema[property]);
    }
  }

  return uiSchema;
}
