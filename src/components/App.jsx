import { Component } from 'react'
import Form from './Form/Form'
import List from './List/List'
import Filter from './Filter/Filter'

export class App extends Component {
    state = {
      contacts: [
        // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
  }

  componentDidMount() {
    const localData = localStorage.getItem('contacts');
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
		if (localData && JSON.parse(localData).length > 0) {
			this.setState({
				contacts: JSON.parse(localData),
			})
		 } 
  }
  
  componentDidUpdate(prevProps, prevState) {
		if (prevState.contacts?.length !== this.state.contacts.length){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
	}

  addContact = (contact) => {
    if (this.state.contacts.some((el) => el.name.toLowerCase() === contact.name.toLowerCase())) {
      alert(`${contact.name} is already in contacts.`);
      return
     }
    this.setState((prev) => ({ contacts: [...prev.contacts, contact] }));
  };

  deleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((item) => item.id !== id)
    }))
  }

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
        return (
          <>
            <h1>Phonebook</h1>
            <Form addContact={this.addContact} />
            <h2>Contacts</h2>            
            <Filter
              title='Filter contacts by name'
              filter={this.state.filter}
              handleFilterChange={this.handleFilterChange}
            />
            <List
              contacts={filteredContacts}
              deleteContact={this.deleteContact}
            />
          </>
        );
    };
}

