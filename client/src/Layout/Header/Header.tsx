import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import LogoIcon from '../../images/svg/LogoIcon/LogoIcon';
import ContainerContent from '../../components/ContainerContent/ContainerContent';
import Button from '../../components/UI/Button/Button';

const Header = () => {
  return (
    <header className={s.header}>
      <ContainerContent>
        <nav className={s.header__nav}>
          <div className={s.header__block}>
            <LogoIcon />
          </div>
          <div className={s.header__block}>
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/">Проекты</Link>
              </li>
              <li>
                <Link to="/">О нас</Link>
              </li>
            </ul>
          </div>
          <div className={s.header__block}>
            <Button text="Log In" position="header" />
          </div>
        </nav>
      </ContainerContent>
    </header>
  );
};

export default Header;
