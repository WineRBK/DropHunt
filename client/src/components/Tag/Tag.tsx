import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import s from './Tag.module.scss';
import { IMAGE_URL } from '../../constants/api';

interface TagProps {
  text: string;
  img?: string | null;
  className?: string;
}

const Tag: FC<TagProps> = ({ text, img = null, className = '' }) => {
  return (
    <span className={cn(s.tag, className)}>
      {img && (
        <span>
          <img src={`${IMAGE_URL}/${img}.png`} width={19} height={19} alt={img} />
        </span>
      )}
      {text}
    </span>
  );
};

export default Tag;
