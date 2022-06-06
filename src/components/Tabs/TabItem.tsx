import React, { useContext } from 'react'
import classNames from 'classnames'
import {TabsContext,TabsType} from './Tabs'
import 'animate.css'
import './_style.scss'
export interface BaseTabItemProps{
    label?:any,
    children:React.ReactNode,
    className?:string
    index?:string
}

const TabItem:React.FC<BaseTabItemProps>=(props)=>{
    const context = useContext(TabsContext)
    const {
        label,
        children,
        className,
        index,
    }=props
        const classes=classNames(className,{ 
            'plaintext-tab-item':context.tabsType===TabsType.Plaintext,
            'cardType-tab-item':context.tabsType===TabsType.CardType,
            'is-active':context.index===index,
        })
        const classesContent = classNames('tab-content','animate__animated animate__fadeIn',{
            'open-item-content':context.index===index,
            
        })

        const handleClick=()=>{
            if(context.onSelect && index){
                context.onSelect(index)
            }
        }

    return(
        <>
         <li onClick={handleClick}
            className={classes}
        >
            <div className="hover-1">
            {label}
            </div>
        </li>
        
        <div className={classesContent}>
            <hr />
            {children}
        </div>
        </>

    )
}




export default TabItem