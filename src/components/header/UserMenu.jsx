import { useDispatch, useSelector } from 'react-redux';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Button from '@mui/material/Button';
import authOperations from '../../redux/auth/auth-operations';
import { getUserName } from '../../redux/auth/auth-selectors';
// import defaultAvatar from './default-avatar.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  //   const avatar = defaultAvatar;

  return (
    <div>
      <AccountBoxIcon color="primary" fontSize="large" />

      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span>Добро пожаловать, {userName}</span>

      <Button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        variant="contained"
        size="medium"
      >
        Выйти
      </Button>
    </div>
  );
}
