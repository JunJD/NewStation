import React,{useRef,useState,FC,ReactElement,ChangeEvent} from 'react'
import axios from 'axios'
import UploadList from './UploadList'
import Dragger from '../Progress/dragger'
import './_style.scss'
export enum UpLoadFileStatus{
    Ready='ready',
    Uploading='uploading',
    Success='success',
    Error='error'
}
export interface UpLoadFile{
    uid?:string,
    size?:number,
    name?:string,
    status?:UpLoadFileStatus,
    percent?:number,
    raw?:File,
    response?:any,
    error?:any

}


export interface UpLoadProps{
    defaultFileList?: UpLoadFile[];
    children:ReactElement<HTMLElement>|any,
    action:string, //接口地址
    /* 
    *进度条回调函数
     */
    onProgress?:(percentage:number,file:File)=>void,
    /* 
    *成功的回调
     */
    onSuccess?:(data:any,file:File)=>void,
    /* 
    *失败的回调
     */
    onError?:(err:any,file:File)=>void
    /* 
    *上传开始前
     */
    beforeUpload?:(file:File)=>boolean | Promise<File>
    /* 
    *当状态改变时
     */
    onChange?:(file:File)=>void,
    onRemove?:(file:UpLoadFile)=>void,

    data?:{[key:string]:any},
    headers?:{[key:string]:any},
    name?:string,
    withCredentials?:boolean,
    style?:any,
    multiple?:boolean,
    drag?:boolean
    
    
}
const UpLoad:FC<UpLoadProps>=(props)=>{
    const {
        action,
        defaultFileList,
        onProgress,
        onSuccess,
        onError,
        beforeUpload,
        onChange,
        onRemove,
        data,
        headers,
        name,
        withCredentials,
        multiple,
        style,
        children,
        drag
    }=props
    /* 
    *useState
     */
    const [fileList,setFileList] = useState<UpLoadFile[]>(defaultFileList||[])
    
    /* 
    *useRef
     */
    const InputRef = useRef<HTMLInputElement>(null)

    /* 
    *进度条UI更新数据层面--更新逻辑
     */
    const updateFileList=(_file:UpLoadFile,updateObj:Partial<UpLoadFile>)=>{
        setFileList((prevList)=>{
            return prevList.map(file=>{
                if(_file.uid===file.uid){
                    return {...file,...updateObj}
                }else{
                    return file
                }
               
            })
        })
    }

    const post=(file:File)=>{
        let _file:UpLoadFile = {
            uid:Date.now()+'uploadi-file',
            status:UpLoadFileStatus.Ready,
            name:file.name,
            size:file.size,
            percent:0,
            raw:file,
        }
        // setFileList([_file,...fileList])
        setFileList(prevList=>{
            return [_file,...prevList]
        })
        const formData = new FormData()
            formData.append(name||file.name,file)
            if(data){
              /* 
              *把data对象的属性转成数组遍历
               */
                Object.keys(data).forEach(key=>{
                    formData.append(key,data[key])
                })
            }
            // for (var value of formData.values()) {
            //     console.log(value);
            //     } //后端查看formdata数据的方式
            axios.post(action,formData,{
                headers:{
                    ...headers,
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials, //允许获取cookies
                /* 
                *上传进度api
                 */
                onUploadProgress:(e:any)=>{
                    let percentage = Math.floor(e.loaded / e.total * 100)
                    if((percentage<100)){
                        updateFileList(_file,{status:UpLoadFileStatus.Uploading,percent:percentage})
                        if(onProgress){
                            onProgress(percentage,file) //钩子=>传输中...
                        }
                       
                    }
                }
            }).then(resolve=>{
                updateFileList(_file,{status:UpLoadFileStatus.Success,response:resolve.data,percent:100})
                    if(onSuccess){
                        onSuccess(resolve,file) //钩子=>传输成功...
                    }else{
                        if(onChange){
                            onChange(file)
                        } 
                    }
                }   
            ).catch(err=>{
                updateFileList(_file,{status:UpLoadFileStatus.Error,error:err})
                    if (onError) {
                        onError(err,file) //钩子=>传输失败...
                    }else{
                        if(onChange){
                            onChange(file)
                        } 
                    }
                }
            )
    }
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if(!files) {
          return
        }
        uploadFiles(files)
        // if (fileInput.current) {
        //   fileInput.current.value = ''
        // }
      }
    const uploadFiles = (files:any) => {
        let postFiles = Array.from(files)
        console.log(postFiles);
        postFiles.forEach((file:any)=>{
            if(!beforeUpload){
                post(file)
            }else {
                const result = beforeUpload(file)
                if(result instanceof Promise){
                    result.then(    
                        res=>{
                            post(res)}
                    )
                }else if(result!==false){
                    post(file)
                }
            }
        })
    }
    const handleClick =()=>{
        InputRef.current?.click()
    }
    
    const handleRemove = (file:UpLoadFile)=>{
        setFileList((prevList)=>{
            return prevList.filter((item)=>{
                if(onRemove){
                    onRemove(item)
                }
                return file.uid!==item.uid
            })
        })
    }
    return (
        <div style={style}>
            {/* Button */}
            <div
            onClick={handleClick}
            >
                 {drag ? 
                  <Dragger onFile={(files) => {uploadFiles(files)}}>
                    {children}
                  </Dragger>:
                  children
                }
            </div>
           
            {/* input */}
            <input 
            multiple={multiple}
            onChange={handleFileChange}
            ref={InputRef} 
            style={{display:'none'}} 
            type="file"  />

            <UploadList
            fileList={fileList}
            onRemove={handleRemove}
            />
        </div>
    )
}
UpLoad.defaultProps={
    name:'file'
}
export default UpLoad

