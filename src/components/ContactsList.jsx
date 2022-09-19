export default function ContactsList({ items, removeContacts }) {
  const elements = items.map(({ name, number, id }) => {
    return (
      <li key={id}>
        {name} : {number}{' '}
        <button type="button" onClick={() => removeContacts(id)}>
          Delete
        </button>
      </li>
    );
  });
  return <ul>{elements}</ul>;
}
