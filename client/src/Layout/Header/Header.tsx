import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import LogoIcon from '../../images/svg/LogoIcon/LogoIcon';
import ContainerContent from '../../components/ContainerContent/ContainerContent';
import Button from '../../components/UI/Buttons/Button/Button';
import LinkHeader from '../../components/UI/Buttons/Link/LinkHeader';

const Header = () => {
  return (
    <header className={s.header}>
      <ContainerContent>
        <nav className={s.header__nav}>
          <div className={s.header__block}>
            <Link to="/">
              <LogoIcon />
            </Link>
          </div>
          <div className={s.header__block}>
            <ul>
              <li>
                <LinkHeader to="/">Main</LinkHeader>
              </li>
              <li>
                <LinkHeader to="/">Проекты</LinkHeader>
              </li>
              <li>
                <LinkHeader to="/">О нас</LinkHeader>
              </li>
              <li>
                <LinkHeader to="/admin">Админ</LinkHeader>
              </li>
            </ul>
          </div>
          <div className={s.header__block}>
            <Button text="Log In" position="normal" />
          </div>
        </nav>
      </ContainerContent>
    </header>
  );
};

export default Header;
