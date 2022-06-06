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
import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { MenuContext } from './Menu';
import Icon, { ThemeProps } from '../Icon/Icon';
import 'animate.css';
var SubMenu = function (props) {
    var index = props.index, title = props.title, className = props.className, children = props.children;
    var context = useContext(MenuContext);
    var OpenSubMenu = context.defaultOpenSubMenu;
    var isOpen = (index && context.mode === 'vertical') ? OpenSubMenu === null || OpenSubMenu === void 0 ? void 0 : OpenSubMenu.includes(index) : false;
    var _a = __read(useState(isOpen), 2), menuOpen = _a[0], setOpen = _a[1];
    var classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index,
    });
    var ulclasses = classNames('newStation-submenu', {
        'menu-opened': menuOpen,
        "animate__animated animate__swing": context.mode !== 'vertical',
        "animate__animated animate__zoomInDown": context.mode === 'vertical'
    });
    var iconclasses = classNames({
        "arrow-icon": context.mode !== 'vertical'
    });
    var handleClick = function (e) {
        e.preventDefault();
        setOpen(!menuOpen);
    };
    var timer;
    var handleMouse = function (e, toggle) {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(function () {
            setOpen(toggle);
        }, 300);
    };
    var clickEvents = context.mode === 'vertical' ? {
        onClick: handleClick
    } : {};
    var hoverEvents = context.mode !== 'vertical' ? {
        onMouseEnter: function (e) {
            handleMouse(e, true);
        },
        onMouseLeave: function (e) {
            handleMouse(e, false);
        }
    } : {};
    var renderChildren = function () {
        var childrenComponent = React.Children.map(children, function (child, i) {
            var childElement = child;
            var name = childElement.type.name;
            if (name === 'MenuItem') {
                // return childElement
                return React.cloneElement(childElement, {
                    index: "".concat(index, "_").concat(i)
                });
            }
            else {
                console.error('Warning:Menu has a childwhich is not MenuItem component');
            }
        });
        return (React.createElement("ul", { className: ulclasses }, childrenComponent));
    };
    return (React.createElement("li", __assign({ key: index }, hoverEvents, { className: classes }),
        React.createElement("div", __assign({ className: 'subMenu-title' }, clickEvents),
            React.createElement("div", { className: "hover-1" }, title),
            React.createElement(Icon, { className: iconclasses, theme: ThemeProps.Secondary, icon: "angle-down" })),
        renderChildren()));
};
// MenuItem.displayName='MenuItem' //帮助我们判断类型
export default SubMenu;
