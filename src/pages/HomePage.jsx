// import DoneIcon from '@mui/icons-material/Done';
import CreateIcon from '@mui/icons-material/Create';
import SearchIcon from '@mui/icons-material/Search';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import s from './HomePage.module.css';
const HomePage = () => {
  return (
    <div className={s.container}>
      <h1>Phonebook App</h1>
      <p className={s.about}>About:</p>
      <ul className={s.list}>
        <li>
          <CreateIcon />
          <span>create phone contacts</span>
        </li>
        <li>
          <SearchIcon />
          <span>find your contact by name</span>
        </li>
        <li>
          <VerifiedUserIcon />
          <span>access protected</span>
        </li>
        <li>
          <EmojiObjectsIcon />
          <span>simple to use</span>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
