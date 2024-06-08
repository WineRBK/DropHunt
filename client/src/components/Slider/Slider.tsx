import React from 'react';
import Slider from 'react-slick';
import licnh from '../../images/1icnh.png';
import arb from '../../images/arbitrum.png';
import dY from '../../images/dY.png';
import ethereum from '../../images/ethereum.png';
import op from '../../images/optimism.png';
import uni from '../../images/uni.png';
import CardDrop from '../CardDrop/CardDrop';

const FocusOnSelect = () => {
  const settings = {
    arrows: false,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: '30px',
    className: 'center',
    speed: 500,
  };
  return (
    <Slider {...settings}>
      <CardDrop
        img={arb}
        title="Arbitrum (ARB)"
        description="В марте 2023 года активным пользователям сети раздали 1,275,000,000 токенов ARB, стоимостью около $1.40 за токен. Пользователи получили от $200 до $10,000."
      />
      <CardDrop
        img={op}
        title="Optimism (OP)"
        description="Раздали 214,748,364 токенов OP активным пользователям сети, стоимостью около $1.5 за токен. Пользователи получили от $300 до $3000."
      />
      <CardDrop
        img={licnh}
        title="1inch"
        description="Раздали около 90,000,000 токенов 1INCH пользователям платформы, стоимостью около $2.5 за токен. Пользователи получили от $500 до $2500."
      />
      <CardDrop
        img={uni}
        title="Uniswap (UNI)"
        description="Каждому пользователю, который использовал платформу до определённой даты, раздали 400 UNI (примерно $1200 на момент раздачи)."
      />
      <CardDrop
        img={dY}
        title="dYdX (DYDX)"
        description="Активным пользователям платформы раздали около 75,000,000 токенов DYDX, стоимостью примерно $10 за токен. Пользователи получили от $1000 до $10,000."
      />
      <CardDrop
        img={ethereum}
        title="Ethereum Name Service"
        description="Пользователям, зарегистрировавшим домены, раздали около 25,000,000 токенов ENS, стоимостью около $40 за токен. Пользователи получили от $2000 до $4000."
      />
    </Slider>
  );
};

export default FocusOnSelect;
