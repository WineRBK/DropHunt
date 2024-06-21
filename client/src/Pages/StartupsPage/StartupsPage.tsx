import React, { useEffect, useState } from 'react';
import ContainerContent from '../../components/ContainerContent/ContainerContent';
import { getAllStartups } from '../../api/startupApi';
import s from './StartupsPage.module.scss';
import AdminInfo from '../AdminPage/components/AdminInfo/AdminInfo';
import TwitterScore from '../AdminPage/components/TwitterScore/TwitterScore';

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

  return (
    <div className={s.startups}>
      <ContainerContent>
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
                  deadline={String(startup.deadline)}
                  web={startup.web}
                  action={startup.actions}
                  name={startup.name}
                  image={startup.image.x60}
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
      </ContainerContent>
    </div>
  );
};

export default StartupsPage;
