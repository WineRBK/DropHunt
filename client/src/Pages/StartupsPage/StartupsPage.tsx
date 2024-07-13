import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllStartups } from '../../api/startupApi';
import AdminInfo from '../../components/AdminInfo/AdminInfo';
import ContainerContent from '../../components/ContainerContent/ContainerContent';
import DropdownAction from '../../components/Dropdown/DropdownAction/DropdownAction';
import DropdownStatus from '../../components/Dropdown/DropdownStatus/DropdownStatus';
import DropdownTier from '../../components/Dropdown/DropdownTier/DropdownTier';
import DropdownWeb from '../../components/Dropdown/DropdownWeb/DropdownWeb';
import H1 from '../../components/UI/Titles/H1/H1';
import Regular from '../../components/UI/Titles/Regular/Regular';
import s from './StartupsPage.module.scss';
import { stringToDate } from '../../utils/formatUtils';

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

interface FilteredSettings {
  networks: string[];
  tier: string;
  status: string;
  action: string[];
}

const StartupsPage = () => {
  const [startups, setStartups] = useState<Startup[]>([]);
  const [filteredStartups, setFilteredStartups] = useState<Startup[]>([]);
  const [filteredSettings, setFilteredSettings] = useState<FilteredSettings>({
    networks: [],
    tier: '',
    status: '',
    action: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allStartups = await getAllStartups();
        setStartups(allStartups);
        setFilteredStartups(allStartups);
      } catch (error) {
        console.error('Error fetching startups:', error);
        // Обработка ошибки, например, вывод сообщения об ошибке пользователю или запись в лог
      }
    };

    fetchData();
  }, [getAllStartups]);

  const handleWeb = (selected: string[]) => {
    setFilteredSettings({
      ...filteredSettings,
      networks: selected,
    });
  };
  const handleTierChange = (selected: string) => {
    setFilteredSettings({
      ...filteredSettings,
      tier: selected,
    });
  };
  const handleStatusChange = (selected: string) => {
    setFilteredSettings({
      ...filteredSettings,
      status: selected,
    });
  };
  const handleAction = (selected: string[]) => {
    setFilteredSettings({
      ...filteredSettings,
      action: selected,
    });
  };

  useEffect(() => {
    console.log(startups);
  }, [startups]);

  useEffect(() => {
    const filterStartups = () => {
      let filtered = startups;

      if (filteredSettings.networks.length > 0) {
        filtered = filtered.filter((startup) =>
          filteredSettings.networks.some((network) => startup.webs.includes(network)),
        );
      }

      if (filteredSettings.tier) {
        filtered = filtered.filter((startup) => startup.tier === filteredSettings.tier);
      }

      if (filteredSettings.status) {
        filtered = filtered.filter((startup) => startup.status === filteredSettings.status);
      }

      if (filteredSettings.action.length > 0) {
        filtered = filtered.filter((startup) =>
          filteredSettings.action.some((action) => startup.actions.includes(action)),
        );
      }

      setFilteredStartups(filtered);
    };

    filterStartups();
  }, [filteredSettings, startups]);

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
            {filteredStartups.length > 0 &&
              filteredStartups.map((startup) => (
                <Link key={startup.id} to={`/startup/${startup.id}`}>
                  <li>
                    <AdminInfo
                      twitterScore={{
                        score: startup.twitterScore,
                        followers: 110,
                      }}
                      status={startup.status}
                      estimatedCosts={startup.estimated}
                      deadline={stringToDate(startup.deadline)}
                      web={startup.webs}
                      tier={startup.tier}
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
                </Link>
              ))}
          </ul>
        </div>
      </ContainerContent>
    </div>
  );
};

export default StartupsPage;
