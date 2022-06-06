import React from "react";
import { InputProps } from "../Input/Input";
import './_style.scss';
import 'animate.css';
export declare enum Mode {
    Multiple = "multiple ",
    Tags = "tags "
}
export interface selectContextProps {
    isOpen?: boolean;
    onSelect?: (e: any, disabled: boolean) => void;
    onEnter?: (value: string, disabled: boolean) => void;
    index?: number;
}
export declare const selectContext: React.Context<selectContextProps>;
export interface selectProps extends InputProps {
    mode?: Mode;
    onVisibleChange?: (e: any) => void;
    onColse?: (e: any) => void;
    onSelect?: (e: any) => void;
    children?: React.ReactNode;
}
declare const Select: React.FC<selectProps>;
export default Select;
