import cn from 'classnames';
import React from 'react';
import ContainerContent from '../../components/ContainerContent/ContainerContent';
import DropdownAction from '../../components/Dropdown/DropdownAction/DropdownAction';
import DropdownStatus from '../../components/Dropdown/DropdownStatus/DropdownStatus';
import DropdownTier from '../../components/Dropdown/DropdownTier/DropdownTier';
import DropdownWeb from '../../components/Dropdown/DropdownWeb/DropdownWeb';
import TextEditor from '../../components/Editor/Editor';
import Input from '../../components/Input/Input';
import Button from '../../components/UI/Buttons/Button/Button';
import H3 from '../../components/UI/Titles/H3/H3';
import useFullDataPost from '../../hooks/useFullDataPost';
import useStartupState from '../../hooks/useStartupState';
import s from './AdminPage.module.scss';
import AdminInfo from './components/AdminInfo/AdminInfo';

const AdminPage = () => {
  const {
    startupState,
    handleFieldChange,
    handleCrypto,
    handleTwitterScore,
    handleWeb,
    handleAction,
  } = useStartupState();

  const fullDataPost = useFullDataPost(startupState);

  const handleHTMLChange = handleFieldChange('html');
  const handleStatusChange = handleFieldChange('statusState');
  const handleTierChange = handleFieldChange('tierState');
  const handleEstimatedChange = handleFieldChange('estimatedCosts');
  const handleDeadlineTextChange = handleFieldChange('deadlineText');
  const handleCryptoChange = handleFieldChange('crypto');
  const handleTwitterChange = handleFieldChange('twitterText');

  return (
    <div className={s.admin}>
      <ContainerContent>
        <div className={s.admin__info}>
          <H3 className={s.admin__h3}>Добавление проекта</H3>
          <div className={s.admin__wrapper}>
            <div className={s.admin__row}>
              <div className={cn(s.admin__container)}>
                <AdminInfo
                  className={s.admin__infoBlock}
                  status={startupState.statusState}
                  twitterScore={startupState.twitterScore}
                  deadline={startupState.deadlineText}
                  web={startupState.web}
                  tier={startupState.tierState}
                  action={startupState.action}
                  estimatedCosts={startupState.estimatedCosts}
                  {...startupState.info}
                />
              </div>
            </div>
            <div className={cn(s.admin__container)}>
              <div className={s.admin__settings}>
                <div className={s.admin__inputsWrapper}>
                  <span>
                    <Input
                      handle={(value) => handleCryptoChange(value)}
                      name="Cryptorank"
                      placeholder="Cryptorank"
                      value={startupState.crypto}
                    />
                    <Button
                      onClick={handleCrypto}
                      color="primary"
                      position="admin"
                      text="Получить данные"
                    />
                  </span>
                  <span>
                    <Input
                      handle={(value) => handleTwitterChange(value)}
                      name="Twitterscore"
                      placeholder="Twitterscore"
                      value={startupState.twitterText}
                    />
                    <Button
                      onClick={handleTwitterScore}
                      color="primary"
                      position="admin"
                      text="Получить данные"
                    />
                  </span>
                  <Input
                    handle={(value) => handleEstimatedChange(Number(value))}
                    name="estimatedCosts"
                    placeholder="Примерные затраты"
                    value={startupState.estimatedCosts.toString()}
                  />
                  <Input
                    handle={(value) => handleDeadlineTextChange(value)}
                    name="deadlineText"
                    placeholder="DeadlineText DD.MM.YYYY"
                    value={startupState.deadlineText}
                  />
                </div>
                <div className={s.admin__dropdownWrapper}>
                  <DropdownWeb handleWeb={handleWeb} />
                  <DropdownTier handleTier={handleTierChange} />
                  <DropdownStatus handleStatus={handleStatusChange} />
                  <DropdownAction handleAction={handleAction} />
                </div>
              </div>
            </div>
            <div className={s.admin__textEditor}>
              <div className={s.admin__titleRow}>
                <H3>Как участвовать </H3>
                <Button onClick={fullDataPost} color="primary" text="Опубликовать" />
              </div>
              <div className={cn(s.admin__container, s.border)}>
                <TextEditor handle={handleHTMLChange} />
              </div>
            </div>
          </div>
        </div>
      </ContainerContent>
    </div>
  );
};

export default AdminPage;
