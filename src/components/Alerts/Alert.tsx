import React,{MouseEventHandler} from "react";
import classNames from "classnames";
import 'animate.css';
import './_style.scss'
export enum  AlertType{
    Primary='primary',
    Secondary='secondary',
    Info='info',
    Success='success',
    Warning='warning',
    Danger='danger'
     
}

interface BaseAlertProps{
    className?:string,
    description?:string,
    alertType?:AlertType,
    /* 
    onClose?:MouseEventHandler<HTMLDivElement>,
    
    */
    onClose?:MouseEventHandler<HTMLDivElement>,
    visible?:boolean
}
const Alert:React.FC<BaseAlertProps>=(props)=>{
    const {
        className,
        alertType,
        description,
        onClose,
        visible
    }=props
    const classes = classNames("alert","animate__animated animate__shakeX",className,{
        [`alt-${alertType}`]:alertType,
    })
    if(visible){
        return (

           <div className="alt-main">
            <div  className={classes}>
                <div className="esc" onClick={(e)=>{
                    if(onClose){
                        onClose(e)
                    }
                }}>
                    <svg viewBox="64 64 896 896" height="1em" fill="currentColor"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                </div>
                <div className="content">
                    {description}
                </div>
            </div>
           </div>
        )
    }else{
        return <div></div>
    }
    
}
Alert.defaultProps={
    alertType:AlertType.Primary,
    description:'请在合适的时机变动visible状态',
    visible:true
}
export default Alert