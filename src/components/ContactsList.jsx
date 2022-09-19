import PropTypes from 'prop-types';
export default function ContactsList({ items, removeContacts }) {
  const elements = items.map(({ name, number, id }) => {
    return (
      <li key={id}>
        <p>
          {' '}
          {name} : {number}{' '}
        </p>
        <button type="button" onClick={() => removeContacts(id)}>
          Delete
        </button>
      </li>
    );
  });
  return <ul>{elements}</ul>;
}
ContactsList.propTypes = {
  removeContacts: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
