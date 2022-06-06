import React from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import './_style.scss';
export declare enum ThemeProps {
    Primary = "primary",
    Secondary = "secondary",
    Info = "info",
    Success = "success",
    Warning = "warning",
    Danger = "danger",
    Light = "light",
    Dark = "dark"
}
export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps;
}
declare const Icon: React.FC<IconProps>;
export default Icon;
