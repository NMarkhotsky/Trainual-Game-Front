import { useNavigate } from 'react-router';

export const EditQuestionnaire = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('/dashboard/game')}>Back</button>

      <h1>Edit</h1>
    </>
  );
};
