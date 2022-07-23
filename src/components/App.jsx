import React from "react";
import {useState,useEffect} from "react";
import {PhonebookApp, HeaderApp, HeaderSectionContacts} from './Apps.styled'
import { ContactForm } from "./PhoneContactForm/ContactForm";
import {Contacts} from './Contacts/Contacts';
import { Filter } from "./UserFilter/Filter";
import { nanoid } from "nanoid";

export const App=()=>{
  const filterId=nanoid();
 
 const [contacts,setContacts]=useState(()=>{
  return JSON.parse(localStorage.getItem('contacts')) ?? []});
 
  const [filter,setFilter]=useState('');
 
 useEffect(()=>{
  localStorage.setItem("contacts",JSON.stringify(contacts))
},[contacts])

const formHandleSubmit=(data) => {
  data={
    name:data.name,
    number:data.number,
    id:nanoid()
  }
  if (contacts.find(el=>el.name===data.name)){
  window.alert(`${data.name} is already in contacts`) } 
  else{ setContacts((prevState)=>([data,...prevState]))}
}

const onUserFilter=(e)=>{
setFilter(e.currentTarget.value)
}

const getContactsFiltered=()=>{
  const normalizedFilterName=filter.toLowerCase()
  return contacts.filter(el=> el.name.toLowerCase().includes(normalizedFilterName))
}

const deleteItem=(e)=>{
  return  setContacts(contacts.filter((contact)=> contact.name !== e.currentTarget.id))}
  
  const contactsList = getContactsFiltered();

    return (<PhonebookApp>
      <HeaderApp>Phonebook</HeaderApp>
      <ContactForm 
      onSubmit={formHandleSubmit}
      />
      <HeaderSectionContacts>Contacts</HeaderSectionContacts>
      <Filter 
      title='Find contacts by name'
      filterName={filter}
      onUserFilter={onUserFilter}
      id={filterId}
      />
      <Contacts 
      contactsList={contactsList}
      deleteItem={deleteItem}/>
    </PhonebookApp>)
  
}
