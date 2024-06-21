import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminPage from '../../Pages/AdminPage/AdminPage';
import MainPage from '../../Pages/MainPage/MainPage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import s from './App.module.scss';
import StartupsPage from '../../Pages/StartupsPage/StartupsPage';

const App = () => {
  return (
    <div className={s.app}>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/startups" element={<StartupsPage />} />
          <Route path="/" />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Main>
      <Footer />
    </div>
  );
};

export default App;
