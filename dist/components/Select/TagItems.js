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
import React, { useState } from "react";
import Icon from './../Icon/Icon';
import classNames from 'classnames';
var TagItems = function (_a) {
    var Index = _a.Index, Item = _a.Item;
    var _b = __read(useState(false), 2), isItemOpen = _b[0], setItemOpen = _b[1];
    var ulclasses = classNames({
        "isitemOpen": isItemOpen
    });
    var handleClose = function (e) {
        console.log(e.target.tabIndex);
        setItemOpen(true);
    };
    return (
    // <li tabIndex={index}> {item}</li>
    React.createElement("li", { key: Index, className: ulclasses, tabIndex: Index },
        Item,
        " ",
        React.createElement(Icon, { tabIndex: Index, icon: "xmark", onClick: function (e) { handleClose(e); } })));
};
export default TagItems;
