import React from 'react';
import './_style.scss';
export declare enum TabsType {
    Plaintext = "plaintext",
    CardType = "cardType"
}
declare type onselect = (index: string) => void;
export interface BaseTabsProps {
    tabsType?: TabsType;
    defaultIndex?: string;
    onSelect?: onselect;
    children: React.ReactNode;
    className?: string;
}
export interface ITabsContext {
    index: string;
    onSelect?: onselect;
    tabsType?: TabsType;
}
export declare const TabsContext: React.Context<ITabsContext>;
declare const Tabs: React.FC<BaseTabsProps>;
export default Tabs;
