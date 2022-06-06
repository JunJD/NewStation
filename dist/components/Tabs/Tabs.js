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
export var TabsType;
(function (TabsType) {
    TabsType["Plaintext"] = "plaintext";
    TabsType["CardType"] = "cardType";
})(TabsType || (TabsType = {}));
export var TabsContext = createContext({ index: '0' });
var Tabs = function (props) {
    var _a;
    var tabsType = props.tabsType, defaultIndex = props.defaultIndex, onSelect = props.onSelect, children = props.children, className = props.className;
    var _b = __read(useState(defaultIndex), 2), currentIndex = _b[0], setCurrentIndex = _b[1];
    var handleClick = function (index) {
        setCurrentIndex(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            return React.cloneElement(childElement, {
                index: "".concat(index)
            });
        });
    };
    var passedProps = {
        index: currentIndex ? currentIndex : '0',
        onSelect: handleClick,
        tabsType: tabsType
    };
    var classes = classNames('newStation-tab', className, (_a = {},
        _a["tab-".concat(tabsType)] = tabsType,
        _a));
    return (React.createElement(TabsContext.Provider, { value: passedProps },
        React.createElement("ul", { className: classes }, renderChildren())));
};
Tabs.defaultProps = {
    tabsType: TabsType.Plaintext
};
export default Tabs;
