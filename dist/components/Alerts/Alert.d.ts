import React, { MouseEventHandler } from "react";
import 'animate.css';
import './_style.scss';
export declare enum AlertType {
    Primary = "primary",
    Secondary = "secondary",
    Info = "info",
    Success = "success",
    Warning = "warning",
    Danger = "danger"
}
interface BaseAlertProps {
    className?: string;
    description?: string;
    alertType?: AlertType;
    onClose?: MouseEventHandler<HTMLDivElement>;
    visible?: boolean;
}
declare const Alert: React.FC<BaseAlertProps>;
export default Alert;
