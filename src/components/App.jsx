import React, { useState, useEffect } from 'react'
import Form from './Form/Form'
import List from './List/List'
import Filter from './Filter/Filter'

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localData = localStorage.getItem('contacts');
    localStorage.setItem('contacts', JSON.stringify(contacts));
    if (localData && JSON.parse(localData).length > 0) {
      setContacts(JSON.parse(localData));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])
  

  const addContact = (contact) => {
    if (contacts.some((el) => el.name.toLowerCase() === contact.name.toLowerCase())) {
      alert(`${contact.name} is already in contacts.`);
      return
     }
    setContacts(prev => [...prev, contact]);
  };

  const deleteContact = (id) => {
    setContacts(prev => prev.filter(item => item.id !== id))
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <>
      <h1>Phonebook</h1>
      <Form addContact={addContact} />
      <h2>Contacts</h2>            
      <Filter
        title='Filter contacts by name'
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      <List
        contacts={filteredContacts}
        deleteContact={deleteContact}
      />
          </>
  )
}
