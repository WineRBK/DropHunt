import cn from 'classnames';
import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/logo.png';
import LinkIcon from '../../images/svg/LinkIcon/LinkIcon';
import { InfoProps } from '../../types/Info.props';
import { dayLeft, formatDate, formatNumber } from '../../utils/formatUtils';
import { sortLinks } from '../../utils/sortLinks';
import AdminCategory from '../AdminCategory/AdminCategory';
import TwitterScore from '../TwitterScore/TwitterScore';
import s from './AdminInfo.module.scss';
import NetworkActionTerms from './NetworkActionTerms';

type StatusProps = 'Подтвержденный' | 'Потенциальный' | 'Закончился';

interface AdminInfoProps extends InfoProps {
  twitterScore: TwitterScoreProps;
  status: StatusProps | null;
  estimatedCosts: number;
  deadline: string;
  web: string[];
  tier: string;
  action: string[];
  className?: string;
  big?: boolean;
}

interface TwitterScoreProps {
  score: number;
  followers: number;
}

const tierClassMap = {
  '1+': s.red,
  '1': s.green,
  '2': s.grey,
  '3': s.grey,
};

const AdminInfo: FC<AdminInfoProps> = ({
  name,
  image,
  category,
  links = [],
  valuation,
  raise,
  status,
  twitterScore,
  estimatedCosts,
  deadline,
  web,
  action,
  tier,
  big = false,
  className = '',
}) => {
  const [sortedLinks, setSortedLinks] = useState([]);

  useEffect(() => {
    if (links.length > 0) {
      console.log(links);
      setSortedLinks(sortLinks(links));
    }
  }, [links]);

  return (
    <>
      <div
        className={cn(s.info, className, {
          [s.big]: big,
        })}>
        <div className={s.info__logo}>
          {image ? (
            <img src={image.x60} width={60} height={60} alt="logo" />
          ) : (
            <img src={img} alt="logo" />
          )}
          <div className={cn(s.info__tier, tierClassMap[tier])}>{tier}</div>
        </div>
        <div className={cn(s.col, s.col1)}>
          <div className={s.info__titles}>
            <div className={s.info__nameWrapper}>
              <span
                className={cn(s.info__status, {
                  [s.green]: status === 'Подтвержденный',
                  [s.orange]: status === 'Потенциальный',
                  [s.red]: status === 'Закончился',
                })}>
                {status || 'Неизвестно'}
              </span>
              <span className={s.info__name}>{name || 'Не найдено'}</span>
              <AdminCategory category={category || 'Не найдено'} />
            </div>
          </div>
          {!big && (
            <div className={s.info__links}>
              <ul>
                {sortedLinks && sortedLinks.length > 0 ? (
                  sortedLinks.map((link) => (
                    <li key={link.type}>
                      <a href={link.value} target="_blank" rel="noopener noreferrer">
                        <LinkIcon platform={link.type} />
                      </a>
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
          )}
          {big && <div className={s.info__costs}>Примерные затраты: {estimatedCosts} USDT</div>}
        </div>
        {big && (
          <div className={s.col}>
            <span className={s.info__total}>Total raised / Valuation</span>
            <span className={s.info__raiseValuation}>
              {formatNumber(raise || 0)} / {formatNumber(valuation || 0)}
            </span>
          </div>
        )}
        <div className={s.col}>
          <span className={s.info__twitterName}>Twitterscore</span>
          <TwitterScore value={twitterScore?.score || 0} />
        </div>

        {big && (
          <div className={s.info__links}>
            <ul>
              {sortedLinks && sortedLinks.length > 0 ? (
                sortedLinks.map((link) => (
                  <li key={link.type}>
                    <a href={link.value} target="_blank" rel="noopener noreferrer">
                      <LinkIcon platform={link.type} />
                    </a>
                  </li>
                ))
              ) : (
                <>
                  <li>
                    <Link to="#" target="_blank">
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
        )}
        <div className={s.col}>
          <div className={s.info__deadlineTitle}>Deadline</div>
          <div className={s.info__deadlineValue}>
            <span>{formatDate(deadline) || '???'}</span>
            <span>(осталось {dayLeft(deadline) || '?'} дня)</span>
          </div>
        </div>
      </div>
      {!big && <NetworkActionTerms web={web} action={action} />}
    </>
  );
};

export default AdminInfo;
