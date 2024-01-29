import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import {FormWrapper, TitleH1} from './Form.styled'

const Form = () => {
  const [state, setState] = useState({
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  });

  const handleAddConctact = (newContact) => {
    setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      filter: prevState.filter,
    }));
  };

  const handleSearch = (filterValue) => {
    setState({ ...state, filter: filterValue });
  };
  const handleDeleteContact = (contactId) => {
    setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
      filter: '',
    }));
  };

  return (
    <FormWrapper>
      <TitleH1>Phonebook</TitleH1>
      <ContactForm contacts={state.contacts} onSubmit={handleAddConctact} />
      <Filter value={state.filter} onChange={handleSearch} />
      <ContactList contacts={state.contacts} filter={state.filter} onDelete={handleDeleteContact}/>
    </FormWrapper>
  );
};

export default Form;