import React, { FC } from 'react';
import s from './AdminInfo.module.scss';
import H4 from '../../../../components/UI/Titles/H4/H4';
import Tag from '../../../../components/Tag/Tag';

interface NetworkActionTermsProps {
  web: string[];
  action: string[];
}

const NetworkActionTerms: FC<NetworkActionTermsProps> = ({ web, action }) => {
  return (
    <div className={s.info__networkAction}>
      <div className={s.info__termWrapper}>
        <H4>Сети</H4>
        <div className={s.info__webWrapper}>
          {web && web.map((item) => <Tag key={item} text={item} img={item} />)}
        </div>
      </div>
      <div className={s.info__termWrapper}>
        <H4>Действия</H4>
        <div className={s.info__webWrapper}>
          {action && action.map((item) => <Tag key={item} text={item} />)}
        </div>
      </div>
    </div>
  );
};

export default NetworkActionTerms;
