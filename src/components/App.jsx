import React from "react";
import {useState,useEffect} from "react";
import {PhonebookApp, HeaderApp, HeaderSectionContacts} from './Apps.styled'
import { ContactForm } from "./PhoneContactForm/ContactForm";
import {Contacts} from './Contacts/Contacts';
import { Filter } from "./UserFilter/Filter";
import { nanoid } from "nanoid";

export const App=()=>{
 const filterId=nanoid();
 
 const [contacts,setContacts]=useState([]);
 const [filter,setFilter]=useState('');
 
 
  // state = {
  //   contacts: [
  //     // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  //     // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  //     // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  //     // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  //   ],
  //   filter:'',
  // }

  // componentDidMount(){
  // const contacts=JSON.parse(localStorage.getItem('contacts'));
  //   if (contacts){
  //   this.setState({contacts})}
  // }

  // componentDidUpdate(prevState){
  //   if(contacts !== prevState.contacts){
  //   localStorage.setItem("contacts",JSON.stringify(contacts))}
  // }

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
