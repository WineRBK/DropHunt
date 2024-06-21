import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import s from './H4.module.scss';

interface H4Props {
  children: ReactNode;
  className?: string;
}

const H4: FC<H4Props> = ({ children, className = '' }) => {
  return <h4 className={cn(s.h4, className)}>{children}</h4>;
};

export default H4;
