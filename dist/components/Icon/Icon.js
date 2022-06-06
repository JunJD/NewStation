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
import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- 导入要使用的样式
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import './_style.scss';
library.add(fas);
export var ThemeProps;
(function (ThemeProps) {
    ThemeProps["Primary"] = "primary";
    ThemeProps["Secondary"] = "secondary";
    ThemeProps["Info"] = "info";
    ThemeProps["Success"] = "success";
    ThemeProps["Warning"] = "warning";
    ThemeProps["Danger"] = "danger";
    ThemeProps["Light"] = "light";
    ThemeProps["Dark"] = "dark";
})(ThemeProps || (ThemeProps = {}));
var Icon = function (props) {
    var _a;
    var className = props.className, theme = props.theme, resetProps = __rest(props, ["className", "theme"]);
    var classes = classNames('newStation-Icon', className, (_a = {},
        _a["icon-".concat(theme)] = theme,
        _a));
    return (React.createElement(FontAwesomeIcon, __assign({ className: classes }, resetProps)));
};
export default Icon;
