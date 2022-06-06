import React,{ChangeEvent,KeyboardEvent,useEffect,useRef,useState}  from "react";
import Input,{InputProps,InputSize} from "../Input/Input";
import useDebounce from "../../hooks/useDebounce";
import classNames from "classnames";
import Icon from "../Icon/Icon";
import './_style.scss'

interface DataSourceObject {
    value: string;
  }

export type DataSourceType<T = DataSourceObject> = T 

export interface AutocompleteProps extends Omit<InputProps,'onSelect'>{
    data?:DataSourceType[],
    size?:InputSize,
    onSelect?:(item:DataSourceType)=>void,
    renderOption?:(item:any)=>any,
    fetchSuggestions: (str: any) => DataSourceType[] | Promise<DataSourceType[]>;
}
const Autocomplete:React.FC<AutocompleteProps>=(props)=>{
    const {
        data,
        size,
        value,
        onSelect,
        fetchSuggestions,
        renderOption,
        ...reseProps
    }=props
    
    const [showData,setShowData]=useState<DataSourceType[] | undefined>([])
    const [inputValue,setInputValue] = useState(value)
    const [hightlightIndex,setHightlightIndex]=useState<number>(-1)
    const valueDebounce=useDebounce(inputValue,500)
    const [loading,setLoading] = useState(false)
    const isnetwork = useRef(true)

    useEffect(()=>{
        setShowData([])
        if(valueDebounce&&isnetwork.current){
            setLoading(true)
            const resultPromise=fetchSuggestions(valueDebounce)
            if(resultPromise instanceof Promise){
                resultPromise?.then(
                    data => {setLoading(false);setShowData(data)},
                    )
            }
        }    
    },[valueDebounce, fetchSuggestions])
    const classes = classNames('auc-ul','animate__animated animate__jello',{
        [`auc-${size}`]:size,
        'is-open':showData?.length
    })

    const renderTemplate = (item:DataSourceType)=>{
        return renderOption?renderOption(item):item.value
    }

    
    const handleData=(e:ChangeEvent<HTMLInputElement>)=>{
        isnetwork.current=true
        const resultShow=e.target.value.trim()
        setInputValue(resultShow)
        if(!valueDebounce){
            const setData = data?.filter((item)=>{
                return item.value.includes(resultShow)
        }) 
        setShowData(setData)
        }
    };

    const handleshow=((e:React.FocusEvent<HTMLElement, Element>)=>{
            setInputValue('')
            setShowData([])
            setHightlightIndex(-1)
            isnetwork.current=false
 
    })
    const handleSelect=(item:DataSourceType)=>{
        setTimeout(()=>{
            setInputValue(item.value)
            setShowData([])
            setHightlightIndex(-1)
            isnetwork.current=false
        })  
        if(onSelect){
            onSelect(item)
        }
    }

    const hightlight = (index:number)=>{
        if(index<0)index = 0
        if(showData?.length&&index>=showData?.length) index=showData.length-1
        setHightlightIndex(index)
    }

    const handleKeyDown=(e:KeyboardEvent<HTMLElement>)=>{
        switch(e.keyCode){
            case 13:
                if(showData&&showData[hightlightIndex]){
                    handleSelect(showData[hightlightIndex])
                }
                break;
            case 38:
                hightlight(hightlightIndex+1)
                break;
            case 40:
                hightlight(hightlightIndex+1)
                break;
            case 27:
                setInputValue('')
                setShowData([])
                break;
            default:
                break;
        }
    }
    return (
        <>
        <Input
        onKeyDown={(e)=>{handleKeyDown(e)}}
        value={inputValue}
        onBlur={(e)=>{handleshow(e)}}
        onChange={handleData}
        {...reseProps}
        />
        { loading &&
        <div className="suggstions-loading-icon">
          <Icon icon="spinner" spin/>
        </div>
          }
        <ul className={classes}>
        {
        showData?.map((item,index)=>{
            const cnames = classNames('showdata-item',{
                'item-hightlighted':index===hightlightIndex
            })
            
            return (
                <li key={index} className={cnames} onMouseDown={()=>{handleSelect(item)}}>
                    {renderTemplate(item)}
                </li>
            )
        })}
        </ul>
        </>
    )
}
export default Autocomplete