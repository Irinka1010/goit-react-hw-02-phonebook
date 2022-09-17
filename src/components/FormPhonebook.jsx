import { Component } from 'react';
import { nanoid } from 'nanoid';

export default class FormPhonebook extends Component {
  state = {
    name: '',
    number: '',
  };
  nameId = nanoid();
  numberId = nanoid();

  handleChange = ev => {
    const { name, value } = ev.target;
    this.setState({
      [name]: value,
    });
  };

  handelSubmit = ev => {
    ev.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name, number });
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    const { nameId, numberId, handelSubmit, handleChange } = this;
    return (
      <form onSubmit={handelSubmit}>
        <div className="inputFieId">
          <label htmlFor={nameId}>Name</label>
          <input
            id={nameId}
            name="name"
            type="text"
            value={this.state.name}
            onChange={handleChange}
          />
        </div>
        <div className="inputFieId">
          <label htmlFor={numberId}>Number</label>
          <input
            id={numberId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
