import React,{useState} from "react";
import Icon from './../Icon/Icon'
import classNames from 'classnames'
export interface TagItemsProps{
    Index?:number,
    Item?:string
}

const TagItems:React.FC<TagItemsProps>=({Index,Item})=>{
        const [isItemOpen,setItemOpen] = useState(false)
        const ulclasses = classNames({
            "isitemOpen":isItemOpen
        })
        const handleClose=(e:any)=>{
            console.log(e.target.tabIndex);
            setItemOpen(true)
        }
    return (
        // <li tabIndex={index}> {item}</li>
        <li key={Index} className={ulclasses} tabIndex={Index}>{Item} <Icon tabIndex={Index} icon="xmark" onClick={(e)=>{handleClose(e)}} /></li>
    )
}
export default TagItems