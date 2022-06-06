import React, { ChangeEvent, InputHTMLAttributes, ReactElement } from "react";
import './_style.scss';
export declare const enum InputSize {
    Lg = "lg",
    Sm = "sm"
}
export declare const enum IconCustom {
    Calendar = "calendar-plus",
    Login = "right-to-bracket"
}
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size' | 'onChange'> {
    size?: InputSize;
    disabled?: boolean;
    icon?: IconCustom;
    prepand?: string | ReactElement;
    append?: string | ReactElement;
    className?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
declare const Input: React.FC<InputProps>;
export default Input;
