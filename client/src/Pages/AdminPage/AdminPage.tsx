import cn from 'classnames';
import React, { useState } from 'react';
import { cryptoFetch, twitterFetch } from '../../api/api';
import ContainerContent from '../../components/ContainerContent/ContainerContent';
import DropdownAction from '../../components/Dropdown/DropdownAction/DropdownAction';
import DropdownStatus from '../../components/Dropdown/DropdownStatus/DropdownStatus';
import DropdownTier from '../../components/Dropdown/DropdownTier/DropdownTier';
import DropdownWeb from '../../components/Dropdown/DropdownWeb/DropdownWeb';
import TextEditor from '../../components/Editor/Editor';
import Input from '../../components/Input/Input';
import Tag from '../../components/Tag/Tag';
import Button from '../../components/UI/Buttons/Button/Button';
import H3 from '../../components/UI/Titles/H3/H3';
import { InfoProps, TwitterScoreProps } from '../../types/Info.props';
import s from './AdminPage.module.scss';
import AdminInfo from './components/AdminInfo/AdminInfo';

const AdminPage = () => {
  const [web, setWeb] = useState<string[]>([]);
  const [action, setAction] = useState<string[]>([]);
  const [info, setInfo] = useState<InfoProps | null>(null);
  const [crypto, setCrypto] = useState('');
  const [twitterScore, setTwitterScore] = useState<TwitterScoreProps | null>(null);
  const [twitterText, setTwitterText] = useState('');
  const [estimatedCosts, setEstimatedCosts] = useState<string>('');
  const [deadlineText, setDeadlineText] = useState<string>('');
  const [statusState, setStatusState] = useState('');
  const [tierState, setTierState] = useState('');
  const [html, setHtml] = useState('');

  const handleHTMLChange = (value: string) => {
    setHtml(value);
  };

  const handleStatusChange = (value: string) => {
    setStatusState(value);
  };

  const handleTierChange = (value: string) => {
    setTierState(value);
  };

  const handleEstimatedChange = (value: string) => {
    setEstimatedCosts(value);
  };

  const handleDeadlineTextChange = (value: string) => {
    setDeadlineText(value);
  };

  const handleCryptoChange = (value: string) => {
    setCrypto(value);
  };

  const handleTwitterChange = (value: string) => {
    setTwitterText(value);
  };

  const handleCrypto = async () => {
    const data = await cryptoFetch(crypto);
    setInfo(data);
  };

  const handleTwitterScore = async () => {
    const data = await twitterFetch(twitterText);
    setTwitterScore(data);
  };

  const handleWeb = (webList: string[]) => {
    setWeb(webList);
  };

  const handleAction = (actionList: string[]) => {
    setAction(actionList);
  };

  const fullDataPost = () => {
    const dateParts = `${deadlineText}`.split(':'); // Разбиваем строку на части по разделителю ':'
    const date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

    const postData = {
      name: info?.name,
      image: info?.image,
      category: info?.category,
      links: info?.links,
      raise: info?.raise,
      valuation: info?.valuation,
      investors: info?.investors,
      twitterScore: twitterScore?.score,
      webs: web,
      tier: tierState,
      status: statusState,
      actions: action,
      estimated: estimatedCosts,
      deadline: date,
      content: html,
    };
    console.log(postData);
  };

  return (
    <div className={s.admin}>
      <ContainerContent>
        <div className={s.admin__info}>
          <H3 className={s.admin__h3}>Добавление проекта</H3>
          <div className={s.admin__wrapper}>
            <div className={s.admin__row}>
              <div className={s.admin__left}>
                <div className={cn(s.admin__container, s.border)}>
                  <div>
                    <Input handle={handleCryptoChange} name="Cryptorank" label="Cryptorank" />
                    <Button
                      onClick={handleCrypto}
                      color="primary"
                      position="admin"
                      text="Получить данные"
                    />
                  </div>
                  <div>
                    <Input handle={handleTwitterChange} name="Cryptorank" label="Twitterscore" />
                    <Button
                      onClick={handleTwitterScore}
                      color="primary"
                      position="admin"
                      text="Получить данные"
                    />
                  </div>
                </div>
              </div>
              <div className={s.admin__right}>
                <div className={cn(s.admin__container, s.border)}>
                  <AdminInfo className={s.admin__infoBlock} twitterScore={twitterScore} {...info} />
                </div>
              </div>
            </div>
            <div className={cn(s.admin__container, s.border)}>
              <div className={s.admin__settings}>
                <div className={s.admin__webTag}>
                  {web.length !== 0 && web.map((item) => <Tag key={item} text={item} />)}
                </div>
                <div className={s.admin__flex}>
                  <DropdownWeb handleWeb={handleWeb} />
                  <DropdownTier handleTier={handleTierChange} />
                  <DropdownStatus handleStatus={handleStatusChange} />
                  <DropdownAction handleAction={handleAction} />
                  <div className={s.admin__actionTag}>
                    {action.length !== 0 && action.map((item) => <Tag key={item} text={item} />)}
                  </div>
                </div>
                <div className={s.admin__flex}>
                  <Input
                    handle={handleEstimatedChange}
                    name="Затраты"
                    label="Примерные затраты"
                    value=""
                  />
                  <Input
                    handle={handleDeadlineTextChange}
                    name="DeadlineText"
                    label="DeadlineText DD:MM:YY"
                    value=""
                  />
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
