import { Component } from 'react';
import FormPhonebook from './FormPhonebook';
import ContactsList from './ContactsList';
export default class Phonebook extends Component {
  state = {
    contacts: [],
  };

  addContacts = contact => {
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, contact],
      };
    });
  };
  render() {
    const { addContacts } = this;
    const { contacts } = this.state;
    return (
      <div>
        <div className="block">
          <FormPhonebook onSubmit={addContacts} />
        </div>
        <div className="block">
          <ContactsList items={contacts} />
        </div>
      </div>
    );
  }
}
