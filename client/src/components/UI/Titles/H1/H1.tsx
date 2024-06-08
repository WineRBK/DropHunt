import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import s from './H1.module.scss';

interface H1Props {
  children: ReactNode;
  className?: string;
}

const H1: FC<H1Props> = ({ children, className = '' }) => {
  return <h1 className={cn(s.h1, className)}>{children}</h1>;
};

export default H1;
