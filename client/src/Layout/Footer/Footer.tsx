import React from 'react';
import { Link } from 'react-router-dom';
import ContainerContent from '../../components/ContainerContent/ContainerContent';
import LogoIcon from '../../images/svg/LogoIcon/LogoIcon';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <ContainerContent>
        <nav className={s.footer__nav}>
          <div className={s.footer__block}>
            <LogoIcon />
          </div>
          <div className={s.footer__block}>
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
          <div className={s.footer__block}>
            <p>«DROPHUNT» © 2024</p>
          </div>
        </nav>
      </ContainerContent>
    </footer>
  );
};

export default Footer;
