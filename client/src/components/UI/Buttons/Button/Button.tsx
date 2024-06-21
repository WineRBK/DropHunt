import React, { FC } from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

interface ButtonProps {
  text?: string;
  className?: string;
  position?: string;
  color?: 'primary' | 'normal';
  onClick: () => {};
}

const Button: FC<ButtonProps> = ({
  text = 'О нас',
  className = '',
  position = 'normal' || 'header' || 'admin',
  color = 'normal',
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(s.button, className, {
        // [s.header]: position === 'header',
        [s.admin]: position === 'admin',
        [s.normal]: position === 'normal',
        [s.primary]: color === 'primary',
      })}>
      {text}
    </button>
  );
};

export default Button;
