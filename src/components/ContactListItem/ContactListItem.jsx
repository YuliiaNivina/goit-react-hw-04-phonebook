import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

const ContactListItem = ({ name, number, onDeleteContact }) => (
  <li className={css.contactItem}>
    <p className={css.contactName}>
      {name}: {number}
    </p>
    <button className={css.deleteBtn} onClick={onDeleteContact}>
      Delete
    </button>
  </li>
);

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
