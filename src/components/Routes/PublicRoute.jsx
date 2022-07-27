import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/contacts" replace={true} />;
  }

  return children;
};

export default PublicRoute;

PublicRoute.propTypes = {
  children: PropTypes.node,
};
