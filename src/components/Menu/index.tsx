import {FC} from 'react'
import Menu, { MenuProps } from './Menu'
import SubMenu, { SubMenuProps } from './subMenu'
import MenuItem, { MenuItemProps } from './MenuItem'

export type ImenuComponent = FC<MenuProps> & {
    Item:FC<MenuItemProps>,
    subMenu:FC<SubMenuProps>
}
const TransMenu = Menu as ImenuComponent
TransMenu.Item = MenuItem
TransMenu.subMenu = SubMenu

export default TransMenu