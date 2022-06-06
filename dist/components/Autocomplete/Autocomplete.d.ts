import React from "react";
import { InputProps, InputSize } from "../Input/Input";
import './_style.scss';
interface DataSourceObject {
    value: string;
}
export declare type DataSourceType<T = DataSourceObject> = T;
export interface AutocompleteProps extends Omit<InputProps, 'onSelect'> {
    data?: DataSourceType[];
    size?: InputSize;
    onSelect?: (item: DataSourceType) => void;
    renderOption?: (item: any) => any;
    fetchSuggestions: (str: any) => DataSourceType[] | Promise<DataSourceType[]>;
}
declare const Autocomplete: React.FC<AutocompleteProps>;
export default Autocomplete;
