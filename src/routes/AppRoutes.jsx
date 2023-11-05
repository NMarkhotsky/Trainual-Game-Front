import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { DashboardPage } from '../pages/DashboardPage/DashboardPage';
import { QuizGame } from '../components/QuizGame/ContentblockGame';
import { EditQuestionnaire } from '../components/EditQuestionnaire/EditQuestionnaire';

export const AppRoutes = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />}>
            <Route path="edit" element={<EditQuestionnaire />} />
            <Route path="game" element={<QuizGame />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
