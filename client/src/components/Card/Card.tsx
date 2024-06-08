import cn from 'classnames';
import React, { FC, ReactElement } from 'react';
import s from './Card.module.scss';

interface CardProps {
  size?: 'big' | 'small';
  className?: string;
  ico: ReactElement;
  title: string;
  description: string;
}

const Card: FC<CardProps> = ({ size = 'small', className = '', ico, title, description }) => {
  return (
    <div
      className={cn(s.card, className, {
        [s.big]: size === 'big',
        [s.small]: size === 'small',
      })}>
      <span className={s.card__logo}>{ico}</span>
      <div className={s.card__title}>{title}</div>
      <div className={s.card__description}>{description}</div>
    </div>
  );
};

export default Card;
