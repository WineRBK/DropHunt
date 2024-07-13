import React from 'react';
import AppRoutes from '../../routes/AppRoutes';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import s from './App.module.scss';

const App = () => {
  return (
    <div className={s.app}>
      <Header />
      <Main>
        <AppRoutes />
      </Main>
      <Footer />
    </div>
  );
};

export default App;
