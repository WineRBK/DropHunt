import React, { useEffect, useState } from 'react';
import { getAllStartups } from '../../api/startupApi';
import ContainerContent from '../../components/ContainerContent/ContainerContent';
import H1 from '../../components/UI/Titles/H1/H1';
import Regular from '../../components/UI/Titles/Regular/Regular';
import AdminInfo from '../AdminPage/components/AdminInfo/AdminInfo';
import s from './StartupsPage.module.scss';
import DropdownWeb from '../../components/Dropdown/DropdownWeb/DropdownWeb';
import DropdownTier from '../../components/Dropdown/DropdownTier/DropdownTier';
import DropdownStatus from '../../components/Dropdown/DropdownStatus/DropdownStatus';
import DropdownAction from '../../components/Dropdown/DropdownAction/DropdownAction';

type StatusProps = 'Подтвержденный' | 'Потенциальный' | 'Закончился';

interface TwitterScoreProps {
  value: number;
  className?: string;
}

interface Startup {
  id: number;
  name: string;
  category: string;
  image: any; // Здесь можно также определить более конкретный тип для JSON-объекта изображений
  links: any[]; // Массив JSON-объектов, здесь также можно определить более конкретный тип
  raise: number;
  valuation: number;
  investors: any; // JSON-объект, определение более конкретного типа зависит от структуры данных
  twitterScore: TwitterScoreProps;
  webs: string[]; // Массив строк для полей webs
  tier: string;
  status: StatusProps;
  actions: string[];
  estimated: number;
  deadline: Date;
  content: string;
}

const StartupsPage = () => {
  const [startups, setStartups] = useState<Startup[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allStartups = await getAllStartups();
        setStartups(allStartups);
      } catch (error) {
        console.error('Error fetching startups:', error);
        // Обработка ошибки, например, вывод сообщения об ошибке пользователю или запись в лог
      }
    };

    fetchData();
  }, [getAllStartups]);

  const handleWeb = () => {};
  const handleTierChange = () => {};
  const handleStatusChange = () => {};
  const handleAction = () => {};

  return (
    <div className={s.startups}>
      <ContainerContent>
        <div className={s.startups__wrapper}>
          <H1 className={s.startups__title}>ПРОЕКТЫ</H1>
          <Regular className={s.startups__subtitle}>
            На странице вы найдете список проектов, проводящих аирдропы и ретродропы, с краткими
            описаниями каждого. Это поможет вам быстро оценить проекты и принять решение о участии. 
            <br />
            <br />
            Более подробную информацию о том, как получить дроп вы найдете на странице проекта.
          </Regular>
          <div className={s.startups__dropdownsWrapper}>
            <DropdownWeb handleWeb={handleWeb} />
            <DropdownTier handleTier={handleTierChange} />
            <DropdownStatus handleStatus={handleStatusChange} />
            <DropdownAction handleAction={handleAction} />
          </div>
          <ul className={s.startups__list}>
            {startups.length > 0 &&
              startups.map((startup) => (
                <li key={startup.id}>
                  <AdminInfo
                    twitterScore={{
                      score: startup.twitterScore,
                      followers: 110,
                    }}
                    status={startup.status}
                    estimatedCosts={startup.estimated}
                    deadline={startup.deadline}
                    web={startup.web}
                    action={startup.actions}
                    name={startup.name}
                    image={startup.image}
                    category={startup.category}
                    links={startup.links}
                    valuation={startup.valuation}
                    raise={startup.raise}
                    investors={startup.investors}
                    big
                  />
                </li>
              ))}
          </ul>
        </div>
      </ContainerContent>
    </div>
  );
};

export default StartupsPage;
