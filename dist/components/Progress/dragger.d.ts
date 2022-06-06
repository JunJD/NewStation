import { FC, ReactElement } from 'react';
interface DraggerProps {
    onFile: (files: FileList) => void;
    children: ReactElement<HTMLElement>;
}
export declare const Dragger: FC<DraggerProps>;
export default Dragger;
