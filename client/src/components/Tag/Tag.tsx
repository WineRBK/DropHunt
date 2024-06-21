import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import s from './Tag.module.scss';

interface TagProps {
  text: string;
  img?: ReactNode | null;
  className?: string;
}

const Tag: FC<TagProps> = ({ text, img = null, className = '' }) => {
  return (
    <span className={cn(s.tag, className)}>
      {img && (
        <span>
          <img src={`http://localhost:3000/assets/${img}.png`} width={19} height={19} alt={img} />
        </span>
      )}
      {text}
    </span>
  );
};

export default Tag;
