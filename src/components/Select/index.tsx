import {FC} from 'react'
import Select,{selectProps} from "./Select";
import Option,{optionProps} from "./Option";
import TagItems,{TagItemsProps} from "./TagItems";
export type IselectComponent = FC<selectProps> & {
    Option:FC<optionProps>,
    TagItems:FC<TagItemsProps>
}
const TransSelect = Select as IselectComponent
TransSelect.Option = Option
TransSelect.TagItems = TagItems

export default TransSelect