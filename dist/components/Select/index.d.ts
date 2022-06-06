import { FC } from 'react';
import { selectProps } from "./Select";
import { optionProps } from "./Option";
import { TagItemsProps } from "./TagItems";
export declare type IselectComponent = FC<selectProps> & {
    Option: FC<optionProps>;
    TagItems: FC<TagItemsProps>;
};
declare const TransSelect: IselectComponent;
export default TransSelect;
