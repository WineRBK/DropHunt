import React, { FC, ReactNode } from 'react';
import cn from 'classnames';
import s from './Text.module.scss';

interface TextProps {
  children: ReactNode;
  className?: string;
}

const Text: FC<TextProps> = ({ children, className = '' }) => {
  return <p className={cn(s.p, className)}>{children}</p>;
};

export default Text;
