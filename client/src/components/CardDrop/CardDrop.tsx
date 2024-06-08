import React, { FC } from 'react';
import cn from 'classnames';
import s from './CardDrop.module.scss';

interface CardDropProps {
  img: string;
  title: string;
  description: string;
  className?: string;
}

const CardDrop: FC<CardDropProps> = ({ img, title, description, className = '' }) => {
  return (
    <div className={cn(s.card, className)}>
      <span className={s.card__img}>
        <img src={img} alt={title} />
      </span>
      <div className={s.card__title}>{title}</div>
      <div className={s.card__description}>{description}</div>
    </div>
  );
};

export default CardDrop;
