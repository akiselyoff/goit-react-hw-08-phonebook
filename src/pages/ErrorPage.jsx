import { useNavigate } from 'react-router-dom';
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <button type="primary" onClick={() => navigate('/')} className="btn">
        Back
      </button>
      <h1>Something went wrong</h1>
      <h2>You accidentally landed on a non-existent page</h2>
    </>
  );
};

export default ErrorPage;
