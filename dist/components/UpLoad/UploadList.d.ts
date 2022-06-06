import { FC } from 'react';
import { UpLoadFile } from './UpLoad';
import './_style.scss';
export interface UploadListProps {
    fileList?: UpLoadFile[];
    onRemove?: (_file: UpLoadFile) => void;
}
export declare const UploadList: FC<UploadListProps>;
export default UploadList;
