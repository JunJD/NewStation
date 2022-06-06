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
import React from "react";
import classNames from "classnames";
import './_style.scss';
import Icon from "../Icon/Icon";
var Input = function (props) {
    var _a;
    var size = props.size, disabled = props.disabled, icon = props.icon, prepand = props.prepand, append = props.append, onChange = props.onChange, className = props.className, restProps = __rest(props, ["size", "disabled", "icon", "prepand", "append", "onChange", "className"]);
    var inputRestprops = function () {
        if (disabled) {
            return __assign(__assign({}, restProps), { disabled: disabled });
        }
        else {
            return restProps;
        }
    };
    var classes = classNames('newStation-input', className, (_a = {},
        _a["input-".concat(size)] = size,
        _a['isdisabled'] = disabled,
        _a['svg'] = icon,
        _a['prepand'] = prepand,
        _a));
    var oninput = function (e) {
        if (onChange) {
            onChange(e);
        }
    };
    return (React.createElement("div", { className: classes },
        prepand ? React.createElement("div", null, prepand) : React.createElement(React.Fragment, null),
        React.createElement("input", __assign({}, restProps, { type: "text", onInput: oninput }, (inputRestprops()))),
        icon === "calendar-plus" /* IconCustom.Calendar */ ? React.createElement(Icon, { icon: "calendar-plus" /* IconCustom.Calendar */ }) : React.createElement(React.Fragment, null),
        icon === "right-to-bracket" /* IconCustom.Login */ ? React.createElement(Icon, { icon: "right-to-bracket" /* IconCustom.Login */ }) : React.createElement(React.Fragment, null),
        append ? React.createElement("div", null, append) : React.createElement(React.Fragment, null)));
};
export default Input;
