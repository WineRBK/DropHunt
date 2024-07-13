import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminPage from '../Pages/AdminPage/AdminPage';
import MainPage from '../Pages/MainPage/MainPage';
import StartupPage from '../Pages/StartupPage/StartupPage';
import StartupsPage from '../Pages/StartupsPage/StartupsPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/startups" element={<StartupsPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/startup/:id" element={<StartupPage />} />
    </Routes>
  );
};

export default AppRoutes;
