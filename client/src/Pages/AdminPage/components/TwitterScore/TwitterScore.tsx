import cn from 'classnames';
import React, { FC, useEffect, useState } from 'react';
import s from './TwitterScore.module.scss';

interface TwitterScoreProps {
  value: number;
  className?: string;
}

const TwitterScore: FC<TwitterScoreProps> = ({ value, className = '' }) => {
  const [position, setPosition] = useState<number>(-10);
  const [gradientColor1, setGradientColor1] = useState<string>('rgb(255, 0, 0)');
  const [gradientColor2, setGradientColor2] = useState<string>('rgb(115, 0, 0)');
  const STEP = 3;

  useEffect(() => {
    const calculatePosition = () => {
      if (value <= 100) {
        return -10 + (value * 1.2) / 2;
      }
      return 33 + value / 12;
    };

    const calculateGradientColors = () => {
      let red;
      let green;
      let redStop;
      let greenStop;

      if (value * STEP > 170) {
        red = 255 - value * STEP;
        green = 170;
      } else {
        red = 170;
        green = value * STEP;
      }

      if (value * STEP + 20 > 170) {
        redStop = 255 - value * STEP;
        greenStop = 170;
      } else {
        greenStop = value * STEP + 20;
        redStop = 170;
      }

      return { red, green, redStop, greenStop };
    };

    setPosition(calculatePosition());
    const { red, green, redStop, greenStop } = calculateGradientColors();

    setGradientColor1(`rgb(${red}, ${green}, 0)`);
    setGradientColor2(`rgb(${redStop}, ${greenStop}, 0)`);
  }, [value]);

  return (
    <div className={cn(s.score, className)}>
      <span
        className={s.score__value}
        style={{
          left: `${position}px`,
          backgroundImage: `linear-gradient(90deg, ${gradientColor1} 50%, ${gradientColor2} 125%)`,
        }}>
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
          <rect width="120" height="8" rx="4" fill={`url(#gradient-${value})`} fillOpacity="0.6" />
          <defs>
            <linearGradient id={`gradient-${value}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF0000" />
              <stop offset="17%" stopColor="#FF8311" />
              <stop offset="34%" stopColor="#FFF509" />
              <stop offset="55%" stopColor="#06FF1F" />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </div>
  );
};

export default TwitterScore;
