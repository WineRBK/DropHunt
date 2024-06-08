import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import s from './H2.module.scss';

interface H2Props {
  children: ReactNode;
  className?: string;
}

const H2: FC<H2Props> = ({ children, className = '' }) => {
  return <h2 className={cn(s.h2, className)}>{children}</h2>;
};

export default H2;
