import React, { useEffect, useRef, useState } from 'react';

interface DropdownProps<T> {
  label: string;
  items: T[];
  handleSelection: (item: T) => void;
}

function useDropdown<T>({ label, items, handleSelection }: DropdownProps<T>) {
  const [active, setActive] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<T | null>(null);

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

  const changeSelection = (item: T) => {
    setSelectedItem(item);
    handleSelection(item);
    setActive(false);
  };

  return {
    active,
    setActive,
    selectedItem,
    dropdownRef,
    handleKeyDown,
    changeSelection,
    label,
    items,
  };
}

export default useDropdown;
