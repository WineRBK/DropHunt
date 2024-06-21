// Dropdown.tsx
import cn from 'classnames';
import React, { FC, useEffect, useRef, useState } from 'react';
import s from './Dropdown.module.scss';

interface DropdownProps {
  name: string;
  options: string[];
  selected: string | string[];
  onSelect: (selected: string | string[]) => void;
  multiple?: boolean;
  displaySelected?: boolean; // Новое свойство для отображения выбранного элемента
  status?: boolean;
  searchable?: boolean;
}

const Dropdown: FC<DropdownProps> = ({
  name,
  options,
  selected,
  onSelect,
  multiple = false,
  displaySelected = true,
  status = false,
  searchable = false,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
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

  const handleOptionClick = (item: string) => {
    if (multiple) {
      const selectedList = selected as string[];
      const newSelected = selectedList.includes(item)
        ? selectedList.filter((i) => i !== item)
        : [...selectedList, item];
      onSelect(newSelected);
    } else {
      onSelect(item);
      setActive(false);
    }
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div className={s.dropdown__wrapper} ref={dropdownRef}>
      <div
        className={cn(s.dropdown, { [s.active]: active })}
        onClick={() => setActive(!active)}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={active}>
        <span className={s.dropdown__name}>{name}</span>
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
        {displaySelected && (
          <span
            className={cn(s.dropdown__value, {
              [s.hidden]: !selected || (Array.isArray(selected) && selected.length === 0),
              [s.status]: status,
            })}>
            {Array.isArray(selected) ? selected.length : selected}
          </span>
        )}
      </div>
      <div className={cn(s.dropdown__content, { [s.activeContent]: active === true })}>
        {searchable && active && (
          <input
            className={s.dropdown__search}
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Поиск"
          />
        )}
        <ul>
          {filteredOptions.map((item) => (
            <li
              key={item}
              className={cn({
                [s.activeItem]: Array.isArray(selected)
                  ? selected.includes(item)
                  : selected === item,
              })}
              tabIndex={0}
              role="button"
              onClick={() => handleOptionClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
