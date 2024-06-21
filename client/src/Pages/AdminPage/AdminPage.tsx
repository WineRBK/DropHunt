import cn from 'classnames';
import React, { useState } from 'react';
import ContainerContent from '../../components/ContainerContent/ContainerContent';
import DropdownAction from '../../components/Dropdown/DropdownAction/DropdownAction';
import DropdownStatus from '../../components/Dropdown/DropdownStatus/DropdownStatus';
import DropdownTier from '../../components/Dropdown/DropdownTier/DropdownTier';
import DropdownWeb from '../../components/Dropdown/DropdownWeb/DropdownWeb';
import TextEditor from '../../components/Editor/Editor';
import Input from '../../components/Input/Input';
import Button from '../../components/UI/Buttons/Button/Button';
import H3 from '../../components/UI/Titles/H3/H3';
import { InfoProps, TwitterScoreProps } from '../../types/Info.props';
import s from './AdminPage.module.scss';
import AdminInfo from './components/AdminInfo/AdminInfo';
import { createStartup } from '../../api/startupApi';
import { cryptoFetch, twitterFetch } from '../../api/api';

const AdminPage = () => {
  const [state, setState] = useState({
    web: [] as string[],
    action: [] as string[],
    info: null as InfoProps | null,
    crypto: '',
    twitterScore: null as TwitterScoreProps | null,
    twitterText: '',
    estimatedCosts: 0,
    deadlineText: '',
    statusState: '',
    tierState: '',
    html: '',
  });

  const handleChange = (name: string, value: any) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleHTMLChange = (value: string) => {
    handleChange('html', value);
  };

  const handleStatusChange = (value: string) => {
    handleChange('statusState', value);
  };

  const handleTierChange = (value: string) => {
    handleChange('tierState', value);
  };

  const handleEstimatedChange = (value: number) => {
    handleChange('estimatedCosts', value);
  };

  const handleDeadlineTextChange = (value: string) => {
    handleChange('deadlineText', value);
  };

  const handleCryptoChange = (value: string) => {
    handleChange('crypto', value);
  };

  const handleTwitterChange = (value: string) => {
    handleChange('twitterText', value);
  };

  const handleCrypto = async () => {
    const data = await cryptoFetch(state.crypto);
    handleChange('info', data);
  };

  const handleTwitterScore = async () => {
    const data = await twitterFetch(state.twitterText);
    handleChange('twitterScore', data);
  };

  const handleWeb = (webList: string[]) => {
    handleChange('web', webList);
  };

  const handleAction = (actionList: string[]) => {
    handleChange('action', actionList);
  };

  const fullDataPost = async () => {
    const dateParts = state.deadlineText.split('.'); // Разбиваем строку на части по разделителю '.'
    const date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

    const postData = {
      name: state.info?.name,
      image: state.info?.image,
      category: state.info?.category,
      links: state.info?.links,
      raise: state.info?.raise,
      valuation: state.info?.valuation,
      investors: state.info?.investors,
      twitterScore: state.twitterScore?.score,
      webs: state.web,
      tier: state.tierState,
      status: state.statusState,
      actions: state.action,
      estimated: state.estimatedCosts,
      deadline: date,
      content: state.html,
    };

    try {
      const createdStartup = await createStartup(postData);
      console.log('Created startup:', createdStartup);
    } catch (error) {
      console.error('Error creating startup:', error);
      // Обработка ошибки, например, вывод сообщения об ошибке пользователю или запись в лог
    }
  };

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
                  status={state.statusState}
                  twitterScore={state.twitterScore}
                  deadline={state.deadlineText}
                  web={state.web}
                  action={state.action}
                  estimatedCosts={state.estimatedCosts}
                  {...state.info}
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
                      value={state.crypto}
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
                      value={state.twitterText}
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
                    value={state.estimatedCosts.toString()}
                  />
                  <Input
                    handle={(value) => handleDeadlineTextChange(value)}
                    name="deadlineText"
                    placeholder="DeadlineText DD.MM.YYYY"
                    value={state.deadlineText}
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
