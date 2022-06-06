import Menu from './Menu';
import SubMenu from './subMenu';
import MenuItem from './MenuItem';
var TransMenu = Menu;
TransMenu.Item = MenuItem;
TransMenu.subMenu = SubMenu;
export default TransMenu;
