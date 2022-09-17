import { nanoid } from 'nanoid';
export default function ContactsList({ items }) {
  const elements = items.map(({ name, number }) => {
    return (
      <li>
        {name} : {number}
      </li>
    );
  });
  return <ul>{elements}</ul>;
}
