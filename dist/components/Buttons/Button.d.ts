import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import './_style.scss';
export declare enum ButtonType {
    Primary = "primary",
    Default = "default",
    Info = "info",
    Danger = "danger",
    Link = "link"
}
export declare enum ButtonSize {
    Lg = "lg",
    Sm = "sm"
}
export declare enum animationType {
    Default = "default"
}
interface BaseButtonProps {
    btnType?: ButtonType;
    size?: ButtonSize;
    className?: string;
    disabled?: boolean;
    herf?: string;
    animation?: animationType;
    children: React.ReactNode;
}
declare type NativeBurttonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeBurttonProps & AnchorButtonProps>;
declare const Button: React.FC<ButtonProps>;
export default Button;
