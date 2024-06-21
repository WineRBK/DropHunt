import _ from 'lodash';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { webFetch } from '../../../api/api';
import Dropdown from '../Dropdown';

interface DropdownWebProps {
  handleWeb: (item: string[]) => void;
}

interface WebData {
  id: number;
  name: string;
  image: string;
}

const DropdownWeb: FC<DropdownWebProps> = ({ handleWeb }) => {
  const [webList, setWebList] = useState<string[]>([]);
  const [content, setContent] = useState<WebData[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [filteredList, setFilteredList] = useState<WebData[]>([]);

  useEffect(() => {
    const webData = async () => {
      try {
        const fetchedWebs = await webFetch();
        console.log(fetchedWebs);
        if (fetchedWebs) {
          setContent(fetchedWebs);
          setFilteredList(fetchedWebs);
        }
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    };

    webData();
  }, []);

  const debouncedFilter = useCallback(
    _.debounce((text: string) => {
      if (text === '') {
        setFilteredList(content);
      } else {
        const filtered = content.filter((item) =>
          item.name.toLowerCase().includes(text.toLowerCase()),
        );
        setFilteredList(filtered);
      }
    }, 300),
    [content],
  );

  useEffect(() => {
    debouncedFilter(searchText);
  }, [searchText, debouncedFilter]);

  const handleSelect = (selected: string[]) => {
    setWebList(selected);
    handleWeb(selected);
  };

  return (
    <div>
      <Dropdown
        name="Сети"
        options={filteredList.map((item) => item.name)}
        selected={webList}
        onSelect={handleSelect}
        multiple
        searchable
      />
    </div>
  );
};

export default DropdownWeb;