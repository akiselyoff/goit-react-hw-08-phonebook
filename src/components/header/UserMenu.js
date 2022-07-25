import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { getUsername } from '../../redux/auth/auth-selectors';
// import defaultAvatar from './default-avatar.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  //   const avatar = defaultAvatar;

  return (
    <div>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span>Добро пожаловать, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </div>
  );
}
