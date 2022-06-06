import React,{FC} from 'react'
import {UpLoadFile,UpLoadFileStatus} from './UpLoad'
import Icon,{ThemeProps} from '../Icon/Icon'
import Progress from '../Progress/Progress'
import './_style.scss'
export interface UploadListProps{
    fileList?:UpLoadFile[];
    onRemove?:(_file:UpLoadFile)=>void
}

export const UploadList:FC<UploadListProps>=(props)=>{
    const {
        fileList,
        onRemove
    }=props
    return (
        <ul className='newStation-upload-list'> 
            {fileList?.map((item:UpLoadFile)=>{
                return(
                    <li className="newStation-upload-list-item" key={item.uid}>
                        <span className={`file-name file-name-${item.status}`}>
                            <Icon icon='file-alt' theme={ThemeProps.Secondary} />
                            {item.name}
                        </span>
                        
                        <span className="file-status">
                              {(item.status === UpLoadFileStatus.Uploading || item.status ===UpLoadFileStatus.Ready) && <Icon icon="spinner" spin theme={ThemeProps.Primary} />}
                              {item.status === UpLoadFileStatus.Success && <Icon icon="check-circle" theme={ThemeProps.Success} />}
                              {item.status === UpLoadFileStatus.Error && <Icon icon="times-circle" theme={ThemeProps.Danger} />}
                        </span>
                        <span className='file-actions'>
                            <Icon icon='times' onClick={()=>{onRemove&&onRemove(item)}} ></Icon>
                        </span>
                        {item.status===UpLoadFileStatus.Ready&&<Progress percent={0} />}
                        {item.status===UpLoadFileStatus.Uploading&&<Progress percent={item.percent} strokeHeight={10} />}
                    </li>
                )
            })}
        </ul>
    )
}
export default UploadList


