import React,{useContext} from 'react'
import classNames from 'classnames'
import {MenuContext} from './Menu'
export interface MenuItemProps{
    index?:string;
    disabled?:boolean;
    className?:string;
    style?:React.CSSProperties
    children:React.ReactNode
}

const MenuItem:React.FC<MenuItemProps>=(props)=>{
    const {index,disabled,className,style,children}=props
    
    const context = useContext(MenuContext)

    const classes = classNames('menu-item',className,{
        "is-disabled":disabled,
        'is-active':context.index===index
    })

    const handleClick=()=>{
        if(context.onSelect&&!disabled&&(typeof index === 'string')){
            context.onSelect(index)
        }
    }
    return (
        <li 
        className={classes}
        style={style}
        onClick={handleClick}
        >
            <div className="hover-1">
            {children}
            </div>
        </li>
    )
}
// MenuItem.displayName='MenuItem' //帮助我们判断类型
export default MenuItem