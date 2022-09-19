import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
export default function File({ onChange, value }) {
  const filterid = nanoid();
  return (
    <div>
      <label htmlFor={filterid}>Find contacts by name</label>
      <input
        id={filterid}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
File.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
