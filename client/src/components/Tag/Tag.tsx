import React, { FC, ReactNode } from 'react';
import s from './Tag.module.scss';
import cn from 'classnames';

interface TagProps {
  text: string;
  img?: ReactNode | null;
  className?: string;
}

const Tag: FC<TagProps> = ({ text, img = null, className = '' }) => {
  return (
    <span className={cn(s.tag, className)}>
      {img != null && <span>{img}</span>}
      {text}
    </span>
  );
};

export default Tag;
