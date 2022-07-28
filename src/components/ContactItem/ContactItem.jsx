import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { RotatingLines } from 'react-loader-spinner';
import s from './ContactItem.module.css';
import { useDeleteContactMutation } from '../../API/contactsApi';

const ContactItem = ({ contact }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const { id, name, number } = contact;
  return (
    <li className={s.contactItem}>
      <div className={s.contactContainer}>
        <p className={s.contactName}>{name}</p>
        <p className={s.contactPhone}>{number}</p>
      </div>

      <button
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        {isLoading ? (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="20"
            visible={true}
          />
        ) : (
          <DeleteForeverIcon />
        )}
      </button>
    </li>
  );
};

export default ContactItem;
