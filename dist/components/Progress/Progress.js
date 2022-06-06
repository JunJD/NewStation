import React from "react";
import { ThemeProps } from "../Icon/Icon";
import './_style.scss';
var Progress = function (props) {
    var percent = props.percent, strokeHeight = props.strokeHeight, showText = props.showText, styles = props.styles, theme = props.theme;
    return (React.createElement("div", { className: "newStation-progress-bar", style: styles },
        React.createElement("div", { className: "newStation-progress-bar-outer", style: { height: "".concat(strokeHeight, "px") } },
            React.createElement("div", { className: "newStation-progress-bar-inner color-".concat(theme), style: { width: "".concat(percent, "%") } }, showText && React.createElement("span", { className: "inner-text" }, "".concat(percent || 0, "%"))))));
};
Progress.defaultProps = {
    styles: { width: "100px", height: "10px" },
    strokeHeight: 15,
    showText: true,
    theme: ThemeProps.Primary,
};
export default Progress;
