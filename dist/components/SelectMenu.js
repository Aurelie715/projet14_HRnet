"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SelectMenu;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.array.sort.js");
var _react = _interopRequireWildcard(require("react"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function SelectMenu(_ref) {
  let {
    list = [],
    value,
    classNameSelect,
    classNameValue,
    classNameIcon,
    classNameListContainer,
    classNameList,
    classNameElement,
    onChange
  } = _ref;
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const [currentValue, setCurrentValue] = (0, _react.useState)(value);
  const onOptionClick = listElement => {
    setCurrentValue(listElement);
    setIsOpen(false);
    if (onChange) {
      onChange(listElement);
    }
  };
  (0, _react.useEffect)(() => {
    document.addEventListener("click", event => {
      if (!event.target.closest(".hrnet-oc-select")) {
        setIsOpen(false);
      }
    });
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "hrnet-oc-select"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classNameSelect,
    onClick: () => setIsOpen(!isOpen),
    tabIndex: "0"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: classNameValue
  }, currentValue), /*#__PURE__*/_react.default.createElement("em", {
    className: classNameIcon
  }, isOpen ? /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faChevronUp
  }) : /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faChevronDown
  }))), isOpen ? /*#__PURE__*/_react.default.createElement("div", {
    className: classNameListContainer
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: classNameList
  }, list.sort().map((listElement, index) => {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: classNameElement,
      key: index,
      onClick: () => onOptionClick(listElement)
    }, listElement);
  }))) : null);
}