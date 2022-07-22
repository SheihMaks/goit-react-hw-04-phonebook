import PropTypes from 'prop-types';
import { ContactsList,ContactListItem, DeleteItemButton, Span } from './Contacts.styled';

export const Contacts=({contactsList,deleteItem})=>{
    return (<ContactsList>
        {contactsList.map((contact)=>{
            return (<ContactListItem key={contact.id}><Span>{contact.name}: {contact.number}</Span>
            <DeleteItemButton type='button' onClick={deleteItem} id={contact.name}>Delete</DeleteItemButton >
            </ContactListItem>)})}
    </ContactsList>)
}

Contacts.propTypes={
    contactsList:PropTypes.array,
deleteItem:PropTypes.func.isRequired,
}