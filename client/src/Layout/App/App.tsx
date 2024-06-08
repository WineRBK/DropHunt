import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import s from './App.module.scss';
import MainPage from '../../Pages/MainPage/MainPage';

const App = () => {
  return (
    <div className={s.app}>
      <Header />
      <Main>
        <MainPage />
      </Main>
      <Footer />
    </div>
  );
};

export default App;
