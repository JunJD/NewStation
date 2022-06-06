import React, { useContext } from 'react';
import classNames from 'classnames';
import { TabsContext, TabsType } from './Tabs';
import 'animate.css';
import './_style.scss';
var TabItem = function (props) {
    var context = useContext(TabsContext);
    var label = props.label, children = props.children, className = props.className, index = props.index;
    var classes = classNames(className, {
        'plaintext-tab-item': context.tabsType === TabsType.Plaintext,
        'cardType-tab-item': context.tabsType === TabsType.CardType,
        'is-active': context.index === index,
    });
    var classesContent = classNames('tab-content', 'animate__animated animate__fadeIn', {
        'open-item-content': context.index === index,
    });
    var handleClick = function () {
        if (context.onSelect && index) {
            context.onSelect(index);
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("li", { onClick: handleClick, className: classes },
            React.createElement("div", { className: "hover-1" }, label)),
        React.createElement("div", { className: classesContent },
            React.createElement("hr", null),
            children)));
};
export default TabItem;
