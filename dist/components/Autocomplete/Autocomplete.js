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
import React, { useEffect, useRef, useState } from "react";
import Input from "../Input/Input";
import useDebounce from "../../hooks/useDebounce";
import classNames from "classnames";
import Icon from "../Icon/Icon";
import './_style.scss';
var Autocomplete = function (props) {
    var _a;
    var data = props.data, size = props.size, value = props.value, onSelect = props.onSelect, fetchSuggestions = props.fetchSuggestions, renderOption = props.renderOption, reseProps = __rest(props, ["data", "size", "value", "onSelect", "fetchSuggestions", "renderOption"]);
    var _b = __read(useState([]), 2), showData = _b[0], setShowData = _b[1];
    var _c = __read(useState(value), 2), inputValue = _c[0], setInputValue = _c[1];
    var _d = __read(useState(-1), 2), hightlightIndex = _d[0], setHightlightIndex = _d[1];
    var valueDebounce = useDebounce(inputValue, 500);
    var _e = __read(useState(false), 2), loading = _e[0], setLoading = _e[1];
    var isnetwork = useRef(true);
    useEffect(function () {
        setShowData([]);
        if (valueDebounce && isnetwork.current) {
            setLoading(true);
            var resultPromise = fetchSuggestions(valueDebounce);
            if (resultPromise instanceof Promise) {
                resultPromise === null || resultPromise === void 0 ? void 0 : resultPromise.then(function (data) { setLoading(false); setShowData(data); });
            }
        }
    }, [valueDebounce, fetchSuggestions]);
    var classes = classNames('auc-ul', 'animate__animated animate__jello', (_a = {},
        _a["auc-".concat(size)] = size,
        _a['is-open'] = showData === null || showData === void 0 ? void 0 : showData.length,
        _a));
    var renderTemplate = function (item) {
        return renderOption ? renderOption(item) : item.value;
    };
    var handleData = function (e) {
        isnetwork.current = true;
        var resultShow = e.target.value.trim();
        setInputValue(resultShow);
        if (!valueDebounce) {
            var setData = data === null || data === void 0 ? void 0 : data.filter(function (item) {
                return item.value.includes(resultShow);
            });
            setShowData(setData);
        }
    };
    var handleshow = (function (e) {
        setInputValue('');
        setShowData([]);
        setHightlightIndex(-1);
        isnetwork.current = false;
    });
    var handleSelect = function (item) {
        setTimeout(function () {
            setInputValue(item.value);
            setShowData([]);
            setHightlightIndex(-1);
            isnetwork.current = false;
        });
        if (onSelect) {
            onSelect(item);
        }
    };
    var hightlight = function (index) {
        if (index < 0)
            index = 0;
        if ((showData === null || showData === void 0 ? void 0 : showData.length) && index >= (showData === null || showData === void 0 ? void 0 : showData.length))
            index = showData.length - 1;
        setHightlightIndex(index);
    };
    var handleKeyDown = function (e) {
        switch (e.keyCode) {
            case 13:
                if (showData && showData[hightlightIndex]) {
                    handleSelect(showData[hightlightIndex]);
                }
                break;
            case 38:
                hightlight(hightlightIndex + 1);
                break;
            case 40:
                hightlight(hightlightIndex + 1);
                break;
            case 27:
                setInputValue('');
                setShowData([]);
                break;
            default:
                break;
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Input, __assign({ onKeyDown: function (e) { handleKeyDown(e); }, value: inputValue, onBlur: function (e) { handleshow(e); }, onChange: handleData }, reseProps)),
        loading &&
            React.createElement("div", { className: "suggstions-loading-icon" },
                React.createElement(Icon, { icon: "spinner", spin: true })),
        React.createElement("ul", { className: classes }, showData === null || showData === void 0 ? void 0 : showData.map(function (item, index) {
            var cnames = classNames('showdata-item', {
                'item-hightlighted': index === hightlightIndex
            });
            return (React.createElement("li", { key: index, className: cnames, onMouseDown: function () { handleSelect(item); } }, renderTemplate(item)));
        }))));
};
export default Autocomplete;
