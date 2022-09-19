import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactsList from './ContactsList';
import { nanoid } from 'nanoid';
export default class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  hendelChenge = ev => {
    const { name, value } = ev.target;
    this.setState({
      [name]: value,
    });
  };
  isDuplicate({ name }) {
    const { contacts } = this.state;
    const result = contacts.find(item => item.name === name);
    return result;
  }

  addContacts = contact => {
    if (this.isDuplicate(contact)) {
      return alert(`${contact.name} is already in contacts`);
    }
    this.setState(prev => {
      const newContact = {
        id: nanoid(),
        ...contact,
      };
      return {
        contacts: [...prev.contacts, newContact],
      };
    });
  };
  removeContacts = id => {
    this.setState(prev => {
      const newContacts = prev.contacts.filter(item => item.id !== id);
      return {
        contacts: newContacts,
      };
    });
  };

  getFilteredContacts() {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      const normalizedName = name.toLocaleLowerCase();
      const result = normalizedName.includes(normalizedFilter);

      return result;
    });
    return filteredContacts;
  }
  render() {
    const { addContacts, removeContacts, hendelChenge } = this;
    const { filter } = this.state;
    const contacts = this.getFilteredContacts();
    return (
      <div>
        <h2>Phonebook</h2>
        <div className="block">
          <ContactForm onSubmit={addContacts} />
        </div>
        <h2>Contacts</h2>
        <div className="block">
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={hendelChenge}
          />
          <ContactsList items={contacts} removeContacts={removeContacts} />
        </div>
      </div>
    );
  }
}
