import { FC } from "react";
import { UpLoadFile } from "./UpLoad";
import { UploadListProps } from "./UploadList";
export declare type IUpLoadComponent = FC<UpLoadFile> & {
    UploadList: FC<UploadListProps>;
};
declare const TransUpLoad: IUpLoadComponent;
export default TransUpLoad;
