import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import s from './H3.module.scss';

interface H3Props {
  children: ReactNode;
  className?: string;
}

const H3: FC<H3Props> = ({ children, className = '' }) => {
  return <h3 className={cn(s.h3, className)}>{children}</h3>;
};

export default H3;
