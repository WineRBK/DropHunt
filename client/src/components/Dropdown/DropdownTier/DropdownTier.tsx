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
        setActiveTier(selected as string);
        handleTier(selected as string);
      }}
    />
  );
};

export default DropdownTier;