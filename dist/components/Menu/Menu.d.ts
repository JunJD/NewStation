import React from 'react';
import './_style.scss';
export declare type MenuMode = 'horizontal' | 'vertical';
export interface MenuProps {
    defaultIndex?: string | number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: (selecteIndex: string) => void;
    children?: React.ReactNode;
    defaultOpenSubMenu: string[];
}
export interface IMenuContext {
    index: string;
    onSelect?: (selecteIndex: string) => void;
    mode?: MenuMode;
    defaultOpenSubMenu?: string[];
}
export declare const MenuContext: React.Context<IMenuContext>;
declare const Menu: React.FC<MenuProps>;
export default Menu;
