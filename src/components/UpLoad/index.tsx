import { FC } from "react";
import UpLoad,{UpLoadFile} from "./UpLoad";
import UploadList,{UploadListProps} from "./UploadList";
export type IUpLoadComponent = FC<UpLoadFile> & {
    UploadList:FC<UploadListProps>,
}
const TransUpLoad = UpLoad as IUpLoadComponent
TransUpLoad.UploadList = UploadList

export default TransUpLoad