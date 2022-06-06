import React,{createContext, useState} from 'react'
import { MenuItemProps } from './MenuItem'
import classNames from 'classnames'
import './_style.scss' 

export type MenuMode = 'horizontal' | 'vertical'

export interface MenuProps{
    defaultIndex?:string | number ,
    className?:string,
    mode?:MenuMode,
    style?:React.CSSProperties,
    onSelect?:(selecteIndex:string)=>void
    children?:React.ReactNode,
    defaultOpenSubMenu:string[] 

}

export interface IMenuContext{
    index:string,
    onSelect?:(selecteIndex:string)=>void
    mode?:MenuMode,
    defaultOpenSubMenu?:string[] 
} 

export const MenuContext = createContext<IMenuContext>({index:'0'}) //创建全局上下文 把数据传到子组件children，因为无非传递props

const  Menu:React.FC<MenuProps>=(props)=>{
    const {
        defaultIndex,
        className,
        mode,
        style,
        children,
        onSelect,
        defaultOpenSubMenu
    }=props
    const [currentIndex,setCurrentIndex]=useState(String(defaultIndex))
    const classes=classNames(
        'newStation-Menu',className,{
            [`menu-${mode}`]:mode
        }
    )
    const handleClick=(index:string)=>{
        setCurrentIndex(index)
        if(onSelect){
            onSelect(index) //程序员可以灵活使用
        }
    }
    const passedContext:IMenuContext = {
        index:currentIndex?currentIndex:'0',
        onSelect:handleClick, //MenuItem组件调用
        mode,
        defaultOpenSubMenu
    }

    //此段代码是为了判断Menu中的children是否为MenuItem组件的element，并返回MenuItem的element
    const renderChildren=()=>{  
        return React.Children.map(children,(child,index)=>{ 
            //React封装的专用处理children的map遍历，param=>(children(item,index))

            const childElement = child as React.FunctionComponentElement<MenuItemProps> 
            // child类型为FC实例，泛型与MenuItem一致 child是component的返回值

            const {name} = childElement.type
            if(name==='MenuItem' || name==='SubMenu' ){
                // return childElement
                return React.cloneElement(childElement,{
                    index:`${index}`
                   
                })
                // 判断子组件的返回值element.type是否为MenuItem
            }else{
                console.error('Warning:Menu has a childwhich is not MenuItem component');
            }
        })
    }


  return (
    <ul
    className={classes}
    style={style}
    >
        <MenuContext.Provider value={passedContext}>
        {renderChildren()}
        </MenuContext.Provider>
        
    </ul>
  )
}
Menu.defaultProps={
    mode:'horizontal'
}
export default Menu
