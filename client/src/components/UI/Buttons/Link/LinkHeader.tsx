import React, { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import s from './LinkHeader.module.scss';

interface LinkHeaderProps {
  to: string;
  children: ReactNode;
}

const LinkHeader: FC<LinkHeaderProps> = ({ to, children }) => {
  return (
    <Link className={s.link} to={to}>
      {children}
    </Link>
  );
};

export default LinkHeader;
