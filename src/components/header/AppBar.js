import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { getIsLogIn } from '../../redux/auth/auth-selectors';

export default function AppBar() {
  const isLogIn = useSelector(getIsLogIn);
  return (
    <header>
      <Navigation />
      {isLogIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
