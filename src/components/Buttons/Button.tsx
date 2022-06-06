import React,{ButtonHTMLAttributes,AnchorHTMLAttributes} from "react";
import classNames from "classnames"

import './_style.scss'
// Enum type  不同type 无非是color bcc 不一样
export enum ButtonType {
    Primary='primary',
    Default='default',
    Info='info',
    Danger='danger',
    Link='link'
}
export enum ButtonSize {
    Lg='lg',
    Sm='sm'
}
export enum animationType{  
    Default='default'
}
// generic interface 
interface BaseButtonProps {                             
    btnType?:ButtonType,
    size?:ButtonSize,
    className?:string,
    disabled?:boolean,
    herf?:string,
    animation?:animationType,
    children:React.ReactNode,
}

/* 解决 props需要同时接受a和button的原生属性 */
//1.button的属性和自定义类型的交叉类型
//2.a的属性和自定义类型的交叉类型
//1和2的交叉类型 Partial（允许属性可传可不传）
type NativeBurttonProps =  BaseButtonProps & ButtonHTMLAttributes<HTMLElement> 
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeBurttonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps>=(props)=>{
    const {btnType,
        size,
        className,
        disabled,
        herf,
        children,
        animation,
        ...restProps
    }=props
    const classes = classNames("btn",className,{
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`]:size,
        [`btn-animation-${animation}`]:animation,
        "disabled":(btnType===ButtonType.Link)&&disabled //a链接本身没有disable
    })
    if(btnType===ButtonType.Link){
        return (
            <a 
            className={classes}
            {...restProps}
            href={herf}>
                {children?children:'Link'}
            </a>
        )
    }else{
        return (
            <button
            className={classes}
            disabled={disabled}
            {...restProps}
            >
                {children}
            </button>
        )
    }

}

//Default button status
Button.defaultProps={
    btnType:ButtonType.Default,
    disabled:false
}

export default Button
