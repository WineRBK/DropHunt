import React from 'react';
import Card from '../../components/Card/Card';
import ContainerContent from '../../components/ContainerContent/ContainerContent';
import FocusOnSelect from '../../components/Slider/Slider';
import Button from '../../components/UI/Buttons/Button/Button';
import H1 from '../../components/UI/Titles/H1/H1';
import H2 from '../../components/UI/Titles/H2/H2';
import Regular from '../../components/UI/Titles/Regular/Regular';
import Text from '../../components/UI/Titles/Text/Text';
import CheckIcon from '../../images/svg/CheckIcon/CheckIcon';
import DropIcon from '../../images/svg/DropIcon/DropIcon';
import LikeIcon from '../../images/svg/LikeIcon/LikeIcon';
import ResearchIcon from '../../images/svg/ResearchIcon/ResearchIcon';
import SettingsIcon from '../../images/svg/SettingsIcon/SettingsIcon';
import TeamIcon from '../../images/svg/TeamIcon/TeamIcon';
import TokenIcon from '../../images/svg/TokenIcon/TokenIcon';
import s from './MainPage.module.scss';

const MainPage = () => {
  return (
    <ContainerContent>
      <div className={s.main}>
        <section className={s.main__feature}>
          <div className={s.main__left}>
            <H1 className={s.main__h1}>
              Обзор проектов и активностей для получения <span>Аирдропов и Ретродропов</span>
            </H1>
            <Text className={s.main__text}>
              Здесь вы найдете всю необходимую информацию о самых актуальных и выгодных дропов
              проектов.
            </Text>
            <div className={s.main__buttonWrapper}>
              <Button text="Перейти к проектам" color="primary" />
              <Button text="Больше о нас" />
            </div>
          </div>
          <div>
            <DropIcon />
          </div>
        </section>
        <section>
          <H2 className={s.main__h2}>Как мы работаем?</H2>
          <div className={s.main__workWrapper}>
            <Card
              size="small"
              ico={<ResearchIcon />}
              title="Исследование проекта"
              description="Подробно изучаем цели, технологии и экономику проекта. Проверяем планы развития на ближайшие и долгосрочные периоды."
            />
            <Card
              size="small"
              ico={<TeamIcon />}
              title="Команда проекта"
              description="Изучаем ключевых членов команды, оцениваем их опыт и надежность. Проверяем квалификацию и достижения консультантов проекта.."
            />
            <Card
              size="small"
              ico={<LikeIcon />}
              title="Активность сообщества"
              description="Следим за Twitter, Telegram и Discord на предмет активности и вовлеченности пользователей."
            />
            <Card
              size="small"
              ico={<TokenIcon />}
              title="Токеномика"
              description="Изучаем, как распределяются токены между командой, инвесторами и сообществом."
            />
            <Card
              size="small"
              ico={<CheckIcon />}
              title="Условия аирдропа"
              description="Определяем, кто может претендовать на аирдроп и какие действия для этого требуются."
            />
            <Card
              size="small"
              ico={<SettingsIcon />}
              title="Технологическая база"
              description="Оцениваем важность и востребованность технологии, используемой в проекте."
            />
          </div>
        </section>
        <section className={s.main__airdrop}>
          <div className={s.main__airdropLeft}>
            <H2 className={s.main__h2Drop}>
              Что такое <span>Airdrop?</span>
            </H2>
            <Regular>
              Это возможность для всех желающих получить токены абсолютно бесплатно. Нет
              необходимости в крупных инвестициях или сложных процедурах. Просто участвуйте в
              активностях, выполняйте задания и получайте свои монеты!
            </Regular>
          </div>
          <div>
            <DropIcon deg scale />
          </div>
        </section>
        <section className={s.main__drops}>
          <H2 className={s.main__h2}>
            Несколько <span>примеров</span> хороших дропов
          </H2>
          <div className={s.main__dropWrapper}>
            <FocusOnSelect />
          </div>
          <span className={s.main__button}>
            <Button text="Перейти к текущим проектам" color="primary" />
          </span>
        </section>
      </div>
    </ContainerContent>
  );
};

export default MainPage;
