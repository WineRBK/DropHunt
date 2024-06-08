import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import s from './Regular.module.scss';

interface RegularProps {
  children: ReactNode;
  className?: string;
}

const Regular: FC<RegularProps> = ({ children, className = '' }) => {
  return <p className={cn(s.regular, className)}>{children}</p>;
};

export default Regular;
