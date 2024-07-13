// DropdownStatus.tsx
import React, { FC, useState } from 'react';
import Dropdown from '../Dropdown';

type StatusProps = 'Подтвержденный' | 'Потенциальный' | 'Закончился';

interface DropdownStatusProps {
  handleStatus: (item: StatusProps) => void;
}

const DropdownStatus: FC<DropdownStatusProps> = ({ handleStatus }) => {
  const [status, setStatus] = useState<StatusProps | null>(null);

  const statusList: StatusProps[] = ['Подтвержденный', 'Потенциальный', 'Закончился'];

  return (
    <Dropdown
      name="Статус"
      options={statusList}
      selected={status || ''}
      onSelect={(selected) => {
        if (status === selected) {
          // Если текущий статус совпадает с выбранным, сбрасываем его
          setStatus(null);
          handleStatus(null);
        } else {
          // Иначе устанавливаем новый статус
          setStatus(selected as StatusProps);
          handleStatus(selected as StatusProps);
        }
      }}

      status
    />
  );
};

export default DropdownStatus;
