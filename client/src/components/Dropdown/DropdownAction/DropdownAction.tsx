// DropdownAction.tsx
import React, { FC, useState } from 'react';
import Dropdown from '../Dropdown';

interface DropdownActionProps {
  handleAction: (item: string[]) => void;
}

const DropdownAction: FC<DropdownActionProps> = ({ handleAction }) => {
  const [actionList, setActionList] = useState<string[]>([]);

  const actions = ['On-chain', 'Social', 'Testnet'];

  return (
    <Dropdown
      name="Действия"
      options={actions}
      selected={actionList}
      onSelect={(selected) => {
        setActionList(selected as string[]);
        handleAction(selected as string[]);
      }}
      multiple
    />
  );
};

export default DropdownAction;