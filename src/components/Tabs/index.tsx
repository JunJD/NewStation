import {FC} from 'react'
import Tabs,{BaseTabsProps} from './Tabs';
import TabItem,{BaseTabItemProps} from "./TabItem";

export type ItabsComponent = FC<BaseTabsProps> & {
    TabItem:FC<BaseTabItemProps>,
}
const TransTabs = Tabs as ItabsComponent
TransTabs.TabItem = TabItem

export default TransTabs