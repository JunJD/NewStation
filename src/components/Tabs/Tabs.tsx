import React,{createContext, useState} from 'react'
import classNames from 'classnames'
import {BaseTabItemProps} from './TabItem'
import './_style.scss'
export enum TabsType{
    Plaintext='plaintext',
    CardType='cardType'
}

type onselect = (index:string)=>void
export interface BaseTabsProps{
    tabsType?:TabsType,
    defaultIndex?:string,
    onSelect?:onselect
    children:React.ReactNode,
    className?:string
}
export interface ITabsContext{
    index:string,
    onSelect?:onselect,
    tabsType?:TabsType
}

export const TabsContext = createContext<ITabsContext>({index:'0'})
const Tabs:React.FC<BaseTabsProps>=(props)=>{
    const {
        tabsType,
        defaultIndex,
        onSelect,
        children,
        className
    }=props
    const [currentIndex,setCurrentIndex] = useState(defaultIndex)
    const handleClick = (index:string) => {
        setCurrentIndex(index)
        if(onSelect){
            onSelect(index)
        }
    }
    const renderChildren=()=>{
        return React.Children.map(children,(child,index)=>{
        const childElement = child as React.FunctionComponentElement<BaseTabItemProps>
        return React.cloneElement(childElement,{
            index:`${index}`
        })
    })

    }
    const passedProps:ITabsContext = {
       index: currentIndex?currentIndex:'0',
       onSelect:handleClick,
       tabsType
    }
        const classes=classNames('newStation-tab',className,{
            [`tab-${tabsType}`]:tabsType,
        })

    return(
        <TabsContext.Provider value={passedProps} >
        <ul
        className={classes}
        >
        {renderChildren()}
        </ul>
        </TabsContext.Provider>
    )
}
    Tabs.defaultProps={
        tabsType:TabsType.Plaintext
    }



export default Tabs