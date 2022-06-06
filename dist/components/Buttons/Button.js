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
// Enum type  不同type 无非是color bcc 不一样
export var ButtonType;
(function (ButtonType) {
    ButtonType["Primary"] = "primary";
    ButtonType["Default"] = "default";
    ButtonType["Info"] = "info";
    ButtonType["Danger"] = "danger";
    ButtonType["Link"] = "link";
})(ButtonType || (ButtonType = {}));
export var ButtonSize;
(function (ButtonSize) {
    ButtonSize["Lg"] = "lg";
    ButtonSize["Sm"] = "sm";
})(ButtonSize || (ButtonSize = {}));
export var animationType;
(function (animationType) {
    animationType["Default"] = "default";
})(animationType || (animationType = {}));
var Button = function (props) {
    var _a;
    var btnType = props.btnType, size = props.size, className = props.className, disabled = props.disabled, herf = props.herf, children = props.children, animation = props.animation, restProps = __rest(props, ["btnType", "size", "className", "disabled", "herf", "children", "animation"]);
    var classes = classNames("btn", className, (_a = {},
        _a["btn-".concat(btnType)] = btnType,
        _a["btn-".concat(size)] = size,
        _a["btn-animation-".concat(animation)] = animation,
        _a["disabled"] = (btnType === ButtonType.Link) && disabled //a链接本身没有disable
    ,
        _a));
    if (btnType === ButtonType.Link) {
        return (React.createElement("a", __assign({ className: classes }, restProps, { href: herf }), children ? children : 'Link'));
    }
    else {
        return (React.createElement("button", __assign({ className: classes, disabled: disabled }, restProps), children));
    }
};
//Default button status
Button.defaultProps = {
    btnType: ButtonType.Default,
    disabled: false
};
export default Button;
