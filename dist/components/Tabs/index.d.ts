import { FC } from 'react';
import { BaseTabsProps } from './Tabs';
import { BaseTabItemProps } from "./TabItem";
export declare type ItabsComponent = FC<BaseTabsProps> & {
    TabItem: FC<BaseTabItemProps>;
};
declare const TransTabs: ItabsComponent;
export default TransTabs;
