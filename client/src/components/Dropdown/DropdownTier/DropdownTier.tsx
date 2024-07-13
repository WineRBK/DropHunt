// DropdownTier.tsx
import React, { FC, useState } from 'react';
import Dropdown from '../Dropdown';

interface DropdownTierProps {
  handleTier: (item: string) => void;
}

const DropdownTier: FC<DropdownTierProps> = ({ handleTier }) => {
  const [activeTier, setActiveTier] = useState('');

  const tier = ['1+', '1', '2', '3'];

  return (
    <Dropdown
      name="Tier"
      options={tier}
      selected={activeTier}
      onSelect={(selected) => {
        if (activeTier === selected) {
          // Если текущий tier совпадает с выбранным, сбрасываем его
          setActiveTier(null);
          handleTier(null);
        } else {
          // Иначе устанавливаем новый tier
          setActiveTier(selected as string);
          handleTier(selected as string);
        }
      }}
    />
  );
};

export default DropdownTier;
