import { useDispatch, useSelector } from 'react-redux';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import authOperations from '../../../redux/auth/auth-operations';
import { getUserName } from '../../../redux/auth/auth-selectors';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  return (
    <div className={s.container}>
      <AccountBoxIcon color="primary" fontSize="large" />

      <span className={s.capture}>
        Welcome, <b>{userName}</b>{' '}
      </span>

      <Button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        variant="contained"
        size="medium"
      >
        <LogoutIcon />
      </Button>
    </div>
  );
}
