import { useNavigate } from 'react-router';

export const EditQuestionnaire = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('/dashboard/game')}>Back to room</button>
      <div>
        <h2>Edit Questionnaire</h2>
        <p>Here you can edit and delete the created questionnaires</p>
      </div>
    </>
  );
};
