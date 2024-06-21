import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import H3 from '../../../../components/UI/Titles/H3/H3';
import img from '../../../../images/logo.png';
import LinkIcon from '../../../../images/svg/LinkIcon/LinkIcon';
import { InfoProps } from '../../../../types/Info.props';
import AdminCategory from '../AdminCategory/AdminCategory';
import TwitterScore from '../TwitterScore/TwitterScore';
import s from './AdminInfo.module.scss';
import cn from 'classnames';

interface AdminInfoProps extends InfoProps {
  twitterScore: TwitterScoreProps;
  className?: string;
}

interface TwitterScoreProps {
  score: number;
  followers: number;
}

const AdminInfo: FC<AdminInfoProps> = ({
  name,
  image,
  category,
  links,
  valuation,
  raise,
  twitterScore,
  className = '',
}) => {
  const formatNumber = (number: number): string => {
    if (number >= 1_000_000_000) {
      const value = number / 1_000_000_000;
      return value % 1 === 0 ? `${value}B` : `${value.toFixed(1)}B`;
    }
    if (number >= 1_000_000) {
      const value = number / 1_000_000;
      return value % 1 === 0 ? `${value}M` : `${value.toFixed(1)}M`;
    }
    if (number >= 1_000) {
      const value = number / 1_000;
      return value % 1 === 0 ? `${value}K` : `${value.toFixed(1)}K`;
    }
    return number.toString();
  };
  return name !== undefined ? (
    <div className={cn(s.info, className)}>
      <div className={s.info__logo}>
        {image ? (
          <img src={image.x60} width={60} height={60} alt="logo" />
        ) : (
          <img src={img} alt="logo" />
        )}
      </div>
      <div className={s.info__col1}>
        <div className={s.info__nameWrapper}>
          <span className={s.info__name}>{name !== undefined ? name : '-'}</span>
          <AdminCategory category={category !== undefined ? category : '-'} />
        </div>
        <div className={s.info__links}>
          <ul>
            {links ? (
              links.map((link) => (
                <li key={link.type}>
                  <Link to={link.value}>
                    <LinkIcon platform={link.type} />
                  </Link>
                </li>
              ))
            ) : (
              <>
                <li>
                  <Link to="#">
                    <LinkIcon platform="web" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <LinkIcon platform="twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <LinkIcon platform="telegram" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <LinkIcon platform="discord" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <LinkIcon platform="other" />
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className={s.info__col2}>
        <span className={s.info__total}>Total raised</span>
        <span className={s.info__value}>Valuation</span>
      </div>
      <div className={s.info__col3}>
        <span className={s.info__totalPrice}>
          $ {raise !== undefined ? formatNumber(raise) : '-'}
        </span>
        <span className={s.info__valuePrice}>
          $ {valuation !== undefined ? formatNumber(valuation) : '-'}
        </span>
      </div>
      <div className={s.info__col4}>
        <span className={s.info__twitterName}>Twitterscore</span>
        <div className={s.info__twitterScore}>
          <TwitterScore value={twitterScore !== null ? twitterScore.score : 0} />
        </div>
      </div>
    </div>
  ) : (
    <div className={s.info__empty}>
      <H3>Выберите Валюту</H3>
    </div>
  );
};

export default AdminInfo;
