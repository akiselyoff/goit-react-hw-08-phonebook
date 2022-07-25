import ContactForm from '../components/ContactForm/ContactForm.jsx';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import s from '../components/containerApp.module.css';

export default function ContactsPage() {
  return (
    <div className={s.containerApp}>
      <h1>Phone Book</h1>
      <ContactForm />
      <div className={s.containerContacts}>
        <h2>Contacts</h2>
        <Filter />

        <ContactList />
      </div>
    </div>
  );
}
