var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useState, useRef, createContext } from "react";
import Input from "../Input/Input";
import Icon, { ThemeProps } from "../Icon/Icon";
import TagItems from "./TagItems";
import useClickOutside from "../../hooks/useClickOutside";
import './_style.scss';
import classNames from "classnames";
import 'animate.css';
/*
Provides selection of two modes
*/
export var Mode;
(function (Mode) {
    Mode["Multiple"] = "multiple ";
    Mode["Tags"] = "tags ";
})(Mode || (Mode = {}));
/*
*Create and Export context, whose default value is {isopen:false}  [useContext]
 */
export var selectContext = createContext({ isOpen: false });
/*
*Define components and return to the last exit
 */
var Select = function (props) {
    /*
    *useState Hooks
     */
    var _a = __read(useState(false), 2), enterValue = _a[0], setEnterValue = _a[1];
    var _b = __read(useState(''), 2), value = _b[0], setValue = _b[1];
    var _c = __read(useState([]), 2), arrValue = _c[0], setArrValue = _c[1];
    var _d = __read(useState(false), 2), isOpen = _d[0], setOpen = _d[1];
    var _e = __read(useState(-1), 2), hightlightValue = _e[0], setHightlightValue = _e[1];
    /*
    *useRef Hooks
     */
    var blurRef = useRef(null);
    /*
    *Props
     */
    var mode = props.mode, onVisibleChange = props.onVisibleChange, onColse = props.onColse, onSelect = props.onSelect, children = props.children, reseProps = __rest(props
    /*
    *classnames plug-in unit
     */
    , ["mode", "onVisibleChange", "onColse", "onSelect", "children"]);
    /*
    *classnames plug-in unit
     */
    var classes = classNames("select-container", {
        "is-opened": isOpen,
        "mode-tag": mode === Mode.Tags
    });
    var classout = classNames("select-option", "animate__animated ", {
        "animate__faster animate__fadeInDown": isOpen,
    });
    /*
    *Event handler
     */
    var handleSelect = function (e, disabled) {
        if (!disabled) {
            if (mode === Mode.Tags) {
                setValue('');
                var ValueArr = __spreadArray(__spreadArray([], __read(arrValue), false), [e.target.innerText], false);
                var setValueArr = new Set(ValueArr);
                setArrValue(__spreadArray([], __read(setValueArr), false));
            }
            else {
                setValue(e.target.innerText);
                setOpen(false);
                if (onSelect) {
                    onSelect(e);
                }
            }
        }
    };
    var handleEnter = function (value, disabled) {
        if (!disabled) {
            if (enterValue) {
                if (mode === Mode.Tags) {
                    var ValueArr = __spreadArray(__spreadArray([], __read(arrValue), false), [value], false);
                    var ValueArrSet = new Set(ValueArr);
                    setArrValue(__spreadArray([], __read(ValueArrSet), false));
                    setValue('');
                }
                else {
                    setValue(value);
                    setOpen(false);
                }
            }
            setEnterValue(false);
        }
    };
    var passedContext = {
        isOpen: isOpen,
        onSelect: handleSelect,
        index: hightlightValue,
        onEnter: handleEnter
    };
    var handleClick = function () {
        setOpen(true);
    };
    useClickOutside(blurRef, function (e) {
        setOpen(false);
        setArrValue([]);
    });
    var childrenList = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            if (childElement.type.name === "Option") {
                return React.cloneElement(childElement, {
                    value: index
                });
            }
            else {
                console.error('请检查是否引入Option组件,此处只允许将Option作为其children组件');
                return;
            }
        });
    };
    var hightlight = function (value) {
        var maxLength = children.length;
        if (value < 0)
            value = maxLength - 1;
        if (value >= maxLength)
            value = 0;
        setHightlightValue(value);
        console.log(hightlightValue);
    };
    var handleKeyCode = function (e) {
        switch (e.keyCode) {
            case 13:
                setEnterValue(true);
                break;
            case 38:
                hightlight(hightlightValue - 1);
                break;
            case 40:
                hightlight(hightlightValue + 1);
                break;
            case 27:
                break;
            default:
                break;
        }
    };
    return (React.createElement("div", { ref: blurRef, className: classes },
        React.createElement(Input, __assign({ onKeyDown: function (e) { handleKeyCode(e); }, value: value }, reseProps, { readOnly: true, className: "sn-select", onMouseDown: handleClick })),
        React.createElement(Icon, { className: "arrow-icon", theme: ThemeProps.Secondary, icon: "angle-down" }),
        React.createElement("ul", null, arrValue.map(function (item, index) {
            return (React.createElement(TagItems, { Index: index, Item: item }));
        })),
        React.createElement("div", { className: classout },
            React.createElement(selectContext.Provider, { value: passedContext }, childrenList()))));
};
Select.defaultProps = {
    mode: Mode.Multiple
};
export default Select;
