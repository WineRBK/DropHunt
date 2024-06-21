import cn from 'classnames';
import React, { FC, useEffect, useState } from 'react';
import s from './TwitterScore.module.scss';

interface TwitterScoreProps {
  value: number;
  className?: string;
}

const TwitterScore: FC<TwitterScoreProps> = ({ value, className = '' }) => {
  const STEP = 3;

  const [position, setPosition] = useState<number>(-10);
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(0);
  const [redStop, setRedStop] = useState(115);
  const [greenStop, setGreenStop] = useState(0);

  useEffect(() => {
    if (value <= 100) {
      setPosition(position + (value * 1.2) / 2);

      if (value * STEP > 170) {
        setGreen(170);
        setRed(255 - value * STEP);
      } else {
        setRed(170);
        setGreen(value * STEP);
      }
      if (value * STEP + 20 > 170) {
        setRedStop(255 - value * STEP);
        setGreenStop(170);
      } else {
        setGreenStop(value * STEP + 20);
        setRedStop(170);
      }
    } else {
      setPosition(33 + value / 12);
      setRed(80);
      setGreen(170);
      setRedStop(80);
      setGreenStop(170);
    }
  }, [value]);

  return (
    <div className={cn(s.score, className)}>
      <span
        className={s.score__value}
        style={{
          left: `${position}px`,
          backgroundImage: `linear-gradient(90deg, rgb(${red}, ${green}, 0) 50%, rgb(${redStop}, ${greenStop}, 0) 125%)`,
        }}>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none">
          <path
            d="M10.5 -4.5897e-07C16.299 -7.12451e-07 21 4.70101 21 10.5C21 16.299 16.299 21 10.5 21C4.70101 21 2.53482e-07 16.299 0 10.5C-2.53482e-07 4.70101 4.70101 -2.05488e-07 10.5 -4.5897e-07Z"
            fill="#D9D9D9"
            fill-opacity="0.5"
          />
          <path
            d="M10.5 -4.5897e-07C16.299 -7.12451e-07 21 4.70101 21 10.5C21 16.299 16.299 21 10.5 21C4.70101 21 2.53482e-07 16.299 0 10.5C-2.53482e-07 4.70101 4.70101 -2.05488e-07 10.5 -4.5897e-07Z"
            fill="url(#paint0_linear_247_116)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_247_116"
              x1="10.5"
              y1="10.5"
              x2="31.5"
              y2="10.5"
              gradientUnits="userSpaceOnUse">
              <stop stop-color={`rgb(${red}, ${green}, 35)`} />
              <stop offset="1" stop-color={`rgb(${redStop}, ${greenStop}, 35)`} />
            </linearGradient>
          </defs>
        </svg> */}
        <span className={s.score__num}>{value === 1000 ? '999' : value.toFixed(0)}</span>
      </span>
      <span className={s.score__strip}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="8"
          viewBox="0 0 120 8"
          fill="none">
          <rect width="120" height="8" rx="4" fill="#F14242" fillOpacity="0.6" />
          <rect
            width="120"
            height="8"
            rx="4"
            fill="url(#paint0_linear_247_115)"
            fillOpacity="0.6"
          />
          <defs>
            <linearGradient
              id="paint0_linear_247_115"
              x1="1.77976e-08"
              y1="4"
              x2="120"
              y2="4"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF0000" />
              <stop offset="0.170148" stopColor="#FF8311" />
              <stop offset="0.343862" stopColor="#FFF509" />
              <stop offset="0.549575" stopColor="#06FF1F" />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </div>
  );
};

export default TwitterScore;
