import React, { OptionHTMLAttributes } from "react";
export interface optionProps extends OptionHTMLAttributes<HTMLElement> {
    className?: string;
    disabled?: boolean;
    title?: string;
    value?: string | number;
}
declare const Option: React.FC<optionProps>;
export default Option;
