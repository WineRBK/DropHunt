import cn from 'classnames';
import React, { FC, useEffect, useRef, useState } from 'react';
import s from '../Dropdown.module.scss';
import data from '../../../data/web.json';

interface DropdownWebProps {
  handleWeb: (item: string[]) => {};
}

const DropdownWeb: FC<DropdownWebProps> = ({ handleWeb }) => {
  const [active, setActive] = useState<boolean>(false);
  const [webList, setWebList] = useState<string[]>([]);
  const [content, setContent] = useState(data);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    handleWeb(webList);
  }, [webList]);

  useEffect(() => {
    // Функция для закрытия выпадающего списка при клике вне компонента
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActive(false);
      }
    };

    // Добавляем слушатель события при монтировании компонента
    document.addEventListener('mousedown', handleClickOutside);

    // Удаляем слушатель события при размонтировании компонента
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActive(!active);
    }
  };

  const changeWebList = (item: string) => {
    setWebList((prevWebList) => {
      if (prevWebList.includes(item)) {
        return prevWebList.filter((i) => i !== item);
      }
      return [...prevWebList, item];
    });
  };

  return (
    <div className={s.dropdown__wrapper} ref={dropdownRef}>
      <div
        className={cn(s.dropdown, { [s.active]: active })}
        onClick={() => setActive(!active)}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={active}>
        <span className={s.dropdown__name}>Сети</span>
        <span
          className={cn(s.dropdown__arrow, {
            [s.active]: active === true,
          })}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="5"
            viewBox="0 0 7 5"
            fill="none">
            <path
              d="M6.85556 0.676388L3.97654 4.72246C3.70342 5.09251 3.28245 5.09251 3.02062 4.72246L0.141594 0.676388C-0.131524 0.293265 0.00503541 0 0.426001 0H6.57116C7.00378 0 7.12868 0.293673 6.85556 0.676388Z"
              fill="#E5E5E5"
            />
          </svg>
        </span>
        <span
          className={cn(s.dropdown__value, {
            [s.hidden]: webList.length === 0,
          })}>
          {webList.length}
        </span>
      </div>
      <div className={cn(s.dropdown__content, { [s.activeContent]: active === true })}>
        <ul>
          {content.cryptocurrencies.map((item: string) => (
            <li
              key={item}
              className={cn({ [s.activeItem]: webList.includes(item) })}
              tabIndex={0}
              role="button"
              onClick={() => changeWebList(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownWeb;
