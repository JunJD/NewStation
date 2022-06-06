import React, { ChangeEvent,InputHTMLAttributes,ReactElement} from "react";
import classNames from "classnames";
import './_style.scss'
import Icon from "../Icon/Icon";
export const enum InputSize{
    Lg='lg',
    Sm='sm'
}
export const enum IconCustom{
    Calendar="calendar-plus",
    Login="right-to-bracket"
}

export  interface  InputProps extends Omit<InputHTMLAttributes<HTMLElement>,'size'|'onChange'> {
    size?:InputSize,
    disabled?:boolean,
    icon?:IconCustom,
    prepand?:string | ReactElement ,
    append?:string | ReactElement,
    className?:string,
    value?:string,
    onChange?:(e:ChangeEvent<HTMLInputElement>)=>void
}
const Input:React.FC<InputProps>=(props)=>{
    const {
        size,
        disabled,
        icon,
        prepand,
        append,
        onChange,
        className,
        ...restProps
    }=props
    const inputRestprops=()=>{
        if(disabled){
            return {...restProps,disabled}
         }else{
            return restProps
         }
    }
    const classes = classNames('newStation-input',className,{
        [`input-${size}`]:size,
        'isdisabled':disabled,
        'svg':icon,
        'prepand':prepand,
    })            
    const oninput=(e:ChangeEvent<HTMLInputElement>)=>{
        if(onChange){onChange(e)}
    }
    return (
        <div    className={classes}>
        {prepand?<div>{prepand}</div>:<></>}
        <input {...restProps} type="text" onInput={oninput} {...(inputRestprops())} />
        {icon===IconCustom.Calendar?<Icon icon={IconCustom.Calendar} />:<></>}
        {icon===IconCustom.Login?<Icon icon={IconCustom.Login} />:<></>}
        {append?<div>{append}</div>:<></>}
        </div>
    )
}
export default Input