import React, { FC } from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

interface ButtonProps {
  text?: string;
  className?: string;
  position?: string;
  color?: 'primary' | 'normal';
}

const Button: FC<ButtonProps> = ({
  text = 'О нас',
  className = '',
  position = 'normal',
  color = 'normal',
}) => {
  return (
    <button
      type="button"
      className={cn(s.button, className, {
        [s.header]: position === 'header',
        [s.normal]: position === 'normal',
        [s.primary]: color === 'primary',
      })}>
      {text}
    </button>
  );
};

export default Button;
