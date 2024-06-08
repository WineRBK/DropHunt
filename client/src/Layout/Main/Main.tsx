import React, { FC, ReactNode } from 'react';
import s from './Main.module.scss';

interface MainProps {
  children: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return <main className={s.main}>{children}</main>;
};

export default Main;
