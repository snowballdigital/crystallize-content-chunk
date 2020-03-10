"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

/* eslint no-use-before-define: 0, react/prop-types: 0, react/no-array-index-key: 0 */
var Transformer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Transformer, _React$Component);

  function Transformer() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Transformer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Transformer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "defaultComponents", {
      div: function div(p) {
        return _react.default.createElement("div", null, _this.renderNode(p));
      },
      span: function span(p) {
        return _react.default.createElement("span", null, _this.renderNode(p));
      },
      emphasized: function emphasized(p) {
        return _react.default.createElement("em", null, _this.renderNode(p));
      },
      strong: function strong(p) {
        return _react.default.createElement("strong", null, _this.renderNode(p));
      },
      code: function code(p) {
        return _react.default.createElement("code", null, _this.renderNode(p));
      },
      underline: function underline(p) {
        return _react.default.createElement("u", null, _this.renderNode(p));
      },
      paragraph: function paragraph(p) {
        return _react.default.createElement("p", null, _this.renderNode(p));
      },
      preformatted: function preformatted(p) {
        return _react.default.createElement("pre", null, _this.renderNode(p));
      },
      'unordered-list': function unorderedList(_ref) {
        var children = _ref.children,
            chldrn = _ref.chldrn;
        return _react.default.createElement("ul", null, _this.renderNode({
          children: children,
          chldrn: chldrn
        }));
      },
      'ordered-list': function orderedList(_ref2) {
        var children = _ref2.children,
            chldrn = _ref2.chldrn;
        return _react.default.createElement("ol", null, _this.renderNode({
          children: children,
          chldrn: chldrn
        }));
      },
      list: function list(_ref3) {
        var children = _ref3.children,
            chldrn = _ref3.chldrn;
        return _react.default.createElement("ul", null, _this.renderNode({
          children: children,
          chldrn: chldrn
        }));
      },
      'list-item': function listItem(p) {
        return _react.default.createElement("li", null, _this.renderNode(p));
      },
      link: function link(_ref4) {
        var metadata = _ref4.metadata,
            rest = (0, _objectWithoutProperties2.default)(_ref4, ["metadata"]);
        return _react.default.createElement("a", {
          href: metadata.href
        }, _this.renderNode(rest));
      },
      'line-break': function lineBreak() {
        return _react.default.createElement("br", null);
      },
      quote: function quote(p) {
        if (p.kind === 'block') {
          return _react.default.createElement("blockquote", null, _this.renderNode(p));
        }

        return _react.default.createElement("q", null, _this.renderNode(p));
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderNode", function (_ref5) {
      var chldrn = _ref5.chldrn,
          _ref5$children = _ref5.children,
          children = _ref5$children === void 0 ? [] : _ref5$children,
          textContent = _ref5.textContent;
      return _this.renderTextContent(textContent) || (chldrn || children).map(_this.renderNodeChild);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderTextContent", function (text) {
      if (!text) {
        return text;
      } // Handle line breaks (\n) in text content


      var partsBetweenLineBreaks = text.split(/\n/g);

      if (partsBetweenLineBreaks.length === 1) {
        return text;
      }

      return partsBetweenLineBreaks.map(function (part, index) {
        if (index === partsBetweenLineBreaks.length - 1) {
          return part;
        }

        return _react.default.createElement(_react.default.Fragment, null, part, _react.default.createElement("br", null));
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderNodeChild", function (c, i) {
      return _react.default.createElement(Transformer, (0, _extends2.default)({
        key: i
      }, c, {
        overrides: _this.overrides,
        renderNode: _this.renderNode
      }));
    });
    return _this;
  }

  (0, _createClass2.default)(Transformer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          overrides = _this$props.overrides,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["overrides"]);
      var currentCmps = Object.assign({}, this.defaultComponents);

      if (overrides) {
        this.overrides = overrides;
        Object.assign(currentCmps, overrides);
      } // An array has been passed to props


      var spreadedArray = '0' in props;

      if (spreadedArray) {
        var children = Object.keys(props).reduce(function (arr, key) {
          var index = parseInt(key, 10);

          if (!Number.isNaN(index)) {
            arr.push(props[key]);
          }

          return arr;
        }, []);
        return children.map(this.renderNodeChild);
      } // A node has been passed to props


      var Component;

      if ('type' in props) {
        var type = props.type,
            kind = props.kind;
        var Cmp = currentCmps[type];

        if (!Cmp) {
          if (type === 'container') {
            if (kind === 'inline') {
              Cmp = currentCmps.span;
            }

            Cmp = currentCmps.div;
          } else if (type === null && props.textContent) {
            return this.renderTextContent(props.textContent);
          }
        }

        Component = Cmp;
      } else if (props.textContent) {
        return this.renderTextContent(props.textContent);
      } else {
        var chldrn = props.chldrn || props.children;

        if (chldrn && chldrn.length > 0) {
          return chldrn.map(this.renderNodeChild);
        }
      }

      if (Component) {
        return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
          renderTextContent: this.renderTextContent
        }));
      }

      return null;
    }
  }]);
  return Transformer;
}(_react.default.Component);

var _default = Transformer;
exports.default = _default;
