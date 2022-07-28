import { useNavigate } from 'react-router-dom';
import WestIcon from '@mui/icons-material/West';
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <button type="button" onClick={() => navigate('/')}>
        <WestIcon color="info" />
      </button>
      <h1>Something went wrong</h1>
      <h2>You accidentally landed on a non-existent page</h2>
    </>
  );
};

export default ErrorPage;
