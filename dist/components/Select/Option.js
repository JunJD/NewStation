import React, { useContext, useEffect, useRef } from "react";
import classNames from 'classnames';
import { selectContext } from './Select';
var Option = function (props) {
    var LiRef = useRef(null);
    var className = props.className, disabled = props.disabled, title = props.title, value = props.value;
    var context = useContext(selectContext);
    var classes = classNames(" animate__animated animate__slower", className, {
        "animate__fadeIn": context.isOpen,
        'isDisabled': disabled,
        "item-hightlighted": value === context.index,
        "item-hightlighted-disabled": value === context.index && disabled
    });
    var handleClick = function (e) {
        if (context.onSelect) {
            context.onSelect(e, Boolean(disabled));
        }
    };
    useEffect(function () {
        var _a;
        if (value === context.index && context.onEnter) {
            context.onEnter(((_a = LiRef.current) === null || _a === void 0 ? void 0 : _a.innerText), Boolean(disabled));
        }
    });
    return (React.createElement("li", { ref: LiRef, onClick: function (e) { handleClick(e); }, className: classes }, title));
};
export default Option;
