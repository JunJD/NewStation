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
import React, { createContext, useState } from 'react';
import classNames from 'classnames';
import './_style.scss';
export var MenuContext = createContext({ index: '0' }); //创建全局上下文 把数据传到子组件children，因为无非传递props
var Menu = function (props) {
    var _a;
    var defaultIndex = props.defaultIndex, className = props.className, mode = props.mode, style = props.style, children = props.children, onSelect = props.onSelect, defaultOpenSubMenu = props.defaultOpenSubMenu;
    var _b = __read(useState(String(defaultIndex)), 2), currentIndex = _b[0], setCurrentIndex = _b[1];
    var classes = classNames('newStation-Menu', className, (_a = {},
        _a["menu-".concat(mode)] = mode,
        _a));
    var handleClick = function (index) {
        setCurrentIndex(index);
        if (onSelect) {
            onSelect(index); //程序员可以灵活使用
        }
    };
    var passedContext = {
        index: currentIndex ? currentIndex : '0',
        onSelect: handleClick,
        mode: mode,
        defaultOpenSubMenu: defaultOpenSubMenu
    };
    //此段代码是为了判断Menu中的children是否为MenuItem组件的element，并返回MenuItem的element
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            //React封装的专用处理children的map遍历，param=>(children(item,index))
            var childElement = child;
            // child类型为FC实例，泛型与MenuItem一致 child是component的返回值
            var name = childElement.type.name;
            if (name === 'MenuItem' || name === 'SubMenu') {
                // return childElement
                return React.cloneElement(childElement, {
                    index: "".concat(index)
                });
                // 判断子组件的返回值element.type是否为MenuItem
            }
            else {
                console.error('Warning:Menu has a childwhich is not MenuItem component');
            }
        });
    };
    return (React.createElement("ul", { className: classes, style: style },
        React.createElement(MenuContext.Provider, { value: passedContext }, renderChildren())));
};
Menu.defaultProps = {
    mode: 'horizontal'
};
export default Menu;
