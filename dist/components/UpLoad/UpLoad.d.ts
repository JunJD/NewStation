import { FC, ReactElement } from 'react';
import './_style.scss';
export declare enum UpLoadFileStatus {
    Ready = "ready",
    Uploading = "uploading",
    Success = "success",
    Error = "error"
}
export interface UpLoadFile {
    uid?: string;
    size?: number;
    name?: string;
    status?: UpLoadFileStatus;
    percent?: number;
    raw?: File;
    response?: any;
    error?: any;
}
export interface UpLoadProps {
    defaultFileList?: UpLoadFile[];
    children: ReactElement<HTMLElement> | any;
    action: string;
    onProgress?: (percentage: number, file: File) => void;
    onSuccess?: (data: any, file: File) => void;
    onError?: (err: any, file: File) => void;
    beforeUpload?: (file: File) => boolean | Promise<File>;
    onChange?: (file: File) => void;
    onRemove?: (file: UpLoadFile) => void;
    data?: {
        [key: string]: any;
    };
    headers?: {
        [key: string]: any;
    };
    name?: string;
    withCredentials?: boolean;
    style?: any;
    multiple?: boolean;
    drag?: boolean;
}
declare const UpLoad: FC<UpLoadProps>;
export default UpLoad;
