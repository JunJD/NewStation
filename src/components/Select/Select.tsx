import React, {  useState,useRef,createContext, FunctionComponentElement } from "react";
import Input,{InputProps} from "../Input/Input";
import Icon,{ThemeProps} from "../Icon/Icon";
import TagItems from "./TagItems";
import useClickOutside from "../../hooks/useClickOutside";
import './_style.scss'
import classNames from "classnames";
import 'animate.css'

/* 
Provides selection of two modes
*/
export enum Mode{
    Multiple ='multiple ',
    Tags ='tags '
}

/* 
*Subcomponents require some variables
*/
export interface selectContextProps{
    isOpen?:boolean,
    onSelect?:(e:any,disabled:boolean)=>void,
    onEnter?:(value:string,disabled:boolean)=>void
    index?:number
}
/* 
*Create and Export context, whose default value is {isopen:false}  [useContext]
 */
export const selectContext = createContext<selectContextProps>({isOpen:false})
/* 
*Selct Which props are accepted
 */
export interface selectProps extends InputProps{
    mode?:Mode,
    onVisibleChange?:(e:any)=>void,
    onColse?:(e:any)=>void,
    onSelect?:(e:any)=>void,
    children?:React.ReactNode,
}
/* 
*Define components and return to the last exit
 */
const Select:React.FC<selectProps>=(props)=>{
    /* 
    *useState Hooks
     */
    const [enterValue,setEnterValue]=useState(false)
    const [value,setValue]=useState<string>('')
    const [arrValue,setArrValue] = useState<any[]>([])
    const [isOpen,setOpen] = useState(false)

    const [hightlightValue,setHightlightValue]=useState<number>(-1)
    /* 
    *useRef Hooks
     */
    const blurRef = useRef<HTMLDivElement>(null)

    /* 
    *Props
     */
    const{
        mode,
        onVisibleChange,
        onColse,
        onSelect,
        children,
        ...reseProps
    }=props
    /* 
    *classnames plug-in unit
     */
    const classes = classNames("select-container",{
        "is-opened":isOpen,
        "mode-tag":mode===Mode.Tags
        
    })
    const classout =classNames("select-option", "animate__animated ",{
        "animate__faster animate__fadeInDown":isOpen,
    })
    /* 
    *Event handler
     */
    const handleSelect=(e:any,disabled:boolean)=>{
        if(!disabled){
            if(mode===Mode.Tags){
                setValue('')
                let ValueArr = [...arrValue,e.target.innerText]
                    let setValueArr = new Set(ValueArr)
                    setArrValue([...setValueArr])

            }else{
                setValue(e.target.innerText)
                setOpen(false)
                if(onSelect){
                    onSelect(e)
                }}
        }
       
    }
    const handleEnter=(value:string,disabled:boolean)=>{
        if(!disabled){
            if(enterValue){
                if(mode===Mode.Tags){
                    let ValueArr = [...arrValue,value]
                    let ValueArrSet = new Set(ValueArr)
    
                    setArrValue([...ValueArrSet])
                    setValue('')
                }else{
                    setValue(value)
                    setOpen(false)
                }
    
            }
            setEnterValue(false)
        }
    }
    const passedContext:selectContextProps = {
        isOpen,
        onSelect:handleSelect,
        index:hightlightValue,
        onEnter:handleEnter
    }
    const handleClick=()=>{
        setOpen(true)
    }
    useClickOutside(blurRef,(e:any)=>{
        setOpen(false)
        setArrValue([])
    })

        const childrenList = ()=>{
            return  React.Children.map(children,(child,index)=>{
                const childElement = child as FunctionComponentElement<any>
                if(childElement.type.name === "Option"){
                    return React.cloneElement(childElement,{
                        value:index
                    }) 
                }else{
                    console.error('请检查是否引入Option组件,此处只允许将Option作为其children组件');
                    return
                } 
            })
        }
        const hightlight=(value:number)=>{
            const maxLength = (children as Array<HTMLElement>).length
            if(value<0) value=maxLength-1
            if(value>=maxLength) value=0
            setHightlightValue(value)
            console.log(hightlightValue);
        }
        const handleKeyCode=(e:any)=>{
            switch(e.keyCode){
                case 13:
                    setEnterValue(true)
                    break;
                case 38:
                    hightlight(hightlightValue-1)
                    break;
                case 40:
                    hightlight(hightlightValue+1)
                    break;
                case 27:
                    
                    break;
                default:
                    break;
            }
        }

    return (
       <div ref={blurRef} className={classes}>
        <Input 
        onKeyDown={(e)=>{handleKeyCode(e)}}
        value={value}
        {...reseProps}
        readOnly 
        className="sn-select" 
        onMouseDown={handleClick} />
        <Icon
            className="arrow-icon"
            theme={ThemeProps.Secondary}
            icon="angle-down"
        />

        <ul>
            {arrValue.map((item,index)=>{
                return(
                    <TagItems Index={index} Item={item} />
                    
                )
            })}
        </ul>
        <div className={classout}>
            <selectContext.Provider value={passedContext}>
            {childrenList()}
            </selectContext.Provider>
        </div>
       </div>
    
    )
}
Select.defaultProps={  
    mode:Mode.Multiple
}
export default Select