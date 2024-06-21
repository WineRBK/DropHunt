import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import s from './ContainerContent.module.scss';

interface ContainerContentProps {
  children: ReactNode;
  isAdmin?: boolean;
}

const ContainerContent: FC<ContainerContentProps> = ({ children, isAdmin = false }) => {
  return (
    <div
      className={cn(s.container, {
        [s.admin]: isAdmin,
      })}>
      {children}
    </div>
  );
};

export default ContainerContent;
