import PropTypes from 'prop-types';
import { LabelFilter } from "./Filter.styled"
import { Input } from "../PhoneContactForm/ContactForm.styled"

export const Filter=({title,onUserFilter,filterName,id})=>{
    return (<><LabelFilter htmlFor={id}>{title}</LabelFilter>
    <Input
    type='text' 
    name='filter' 
    onChange={onUserFilter} 
    value={filterName}
    id={id}
    /></>)}

    Filter.propTypes={
        title:PropTypes.string.isRequired,
        onUserFilter:PropTypes.func.isRequired,
        filterName:PropTypes.string.isRequired,
        id:PropTypes.string.isRequired
    }