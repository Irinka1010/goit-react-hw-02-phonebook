import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import css from 'components/Phonebook/Phonebook.module.css';
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

    const contacts = this.getFilteredContacts();
    return (
      <>
        <div className={css.formContact}>
          <h2 className={css.title}>Phonebook</h2>
          <ContactForm onSubmit={addContacts} />
        </div>
        <div className={css.contacts}>
          <h2 className={css.title}>Contacts</h2>
          <Filter onChange={hendelChenge} value={this.state.filter} />
          <ContactsList items={contacts} removeContacts={removeContacts} />
        </div>
      </>
    );
  }
}
