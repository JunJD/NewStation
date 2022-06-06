import React, { OptionHTMLAttributes, useContext, useEffect, useRef } from "react";
import classNames from 'classnames'
import {selectContext} from './Select'
export interface optionProps extends OptionHTMLAttributes<HTMLElement>{
    className?:string,
    disabled?:boolean,
    title?:string,
    value?:string|number,
}

const Option:React.FC<optionProps>=(props)=>{
    const LiRef = useRef<HTMLLIElement>(null)
    const {
        className,
        disabled,
        title,
        value,
    }=props
    const context = useContext(selectContext)
    const classes = classNames(" animate__animated animate__slower", className,{
    "animate__fadeIn":context.isOpen,
    'isDisabled':disabled,
    "item-hightlighted":value===context.index,
    "item-hightlighted-disabled":value===context.index&&disabled
    })
    const handleClick = (e:any)=>{
        if(context.onSelect){
            context.onSelect(e,Boolean(disabled))
        }
    }
    useEffect(()=>{
        if(value===context.index && context.onEnter){
            context.onEnter((LiRef.current?.innerText) as string , Boolean(disabled))
        }
    })
    return (
        <li
        ref={LiRef}
        onClick={(e)=>{handleClick(e)}}
        className={classes}
        >
            {title}
        </li>
    )
}
export default Option