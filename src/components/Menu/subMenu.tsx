import React,{FunctionComponentElement, useContext, useState} from 'react'
import classNames from 'classnames'
import {MenuContext} from './Menu'
import {MenuItemProps}  from './MenuItem'
import Icon,{ThemeProps} from '../Icon/Icon'
import 'animate.css'
export interface SubMenuProps{
    index?:string;
    title:string;
    className?:string;
    children?:React.ReactNode,
}
const SubMenu:React.FC<SubMenuProps>=(props)=>{

    const {index,title,className,children}=props
    const context = useContext(MenuContext)
    const OpenSubMenu=context.defaultOpenSubMenu as Array<string>
    const isOpen = (index&&context.mode==='vertical')?OpenSubMenu?.includes(index):false
    const [menuOpen,setOpen]=useState(isOpen)
    const classes = classNames('menu-item submenu-item',className,{
        'is-active':context.index===index,
    })
    const ulclasses =classNames('newStation-submenu',{
        'menu-opened':menuOpen,
        "animate__animated animate__swing":context.mode!=='vertical',
        "animate__animated animate__zoomInDown":context.mode==='vertical'
        
    })
    const iconclasses= classNames({
        "arrow-icon":context.mode!=='vertical'
    })
    const handleClick=(e:React.MouseEvent)=>{
        e.preventDefault()
        setOpen(!menuOpen)
    }
    let timer:any;
    const handleMouse=(e:React.MouseEvent,toggle:boolean)=>{
        clearTimeout(timer)
        e.preventDefault()
        timer=setTimeout(()=>{
            setOpen(toggle)
        },300)
    }
    const clickEvents=context.mode==='vertical'?{
        onClick:handleClick
    }:{}
    const hoverEvents=context.mode!=='vertical'?{
        onMouseEnter:(e:React.MouseEvent)=>{
            handleMouse(e,true)
        },
        onMouseLeave:(e:React.MouseEvent)=>{
            handleMouse(e,false)
        }
    }:{}
    const renderChildren=()=>{
        const childrenComponent = React.Children.map(children,(child,i)=>{
            const childElement=child as FunctionComponentElement<MenuItemProps>
            const {name} = childElement.type
            if(name==='MenuItem'){
                // return childElement
                return React.cloneElement(childElement,{
                    index:`${index}_${i}`
                })
            }else{
                console.error('Warning:Menu has a childwhich is not MenuItem component');
            }
        })
        return (
            <ul className={ulclasses}>
                {childrenComponent}
            </ul>
        )
    }
    return (
        <li 

        key={index}
        {...hoverEvents}
        className={classes}
        >
            <div className='subMenu-title'
            {...clickEvents}
            >
            <div className="hover-1">
            {title}
            </div>
            <Icon
            className={iconclasses}
            theme={ThemeProps.Secondary}
            icon="angle-down"
            />
            </div>
            {renderChildren()}
        </li>
    )
}
// MenuItem.displayName='MenuItem' //帮助我们判断类型
export default SubMenu