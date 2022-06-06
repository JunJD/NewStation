import React from 'react';
import 'animate.css';
import './_style.scss';
export interface BaseTabItemProps {
    label?: any;
    children: React.ReactNode;
    className?: string;
    index?: string;
}
declare const TabItem: React.FC<BaseTabItemProps>;
export default TabItem;
