import React from 'react';
import {
  PresentatinContainer,
  PresentatinList,
  Img,
  Text,
  Item
} from './Presentatin.styles';
import characterAndPlate from '../../images/characterAndPlate.svg';
import monster from '../../images/monster.svg';
import power from '../../images/power.svg';
import keyboard from '../../images/keyboard.svg';

const PresentatListData = [
  {
    id: '1',
    text: 'Главный персонаж это ученик Яндекс Практикума – Дудлик, плиты по которым мы прыгаем это учеба в практикуме.',
    urlImg: `${characterAndPlate}`,
    altText: 'Главный персонаж'
  },
  {
    id: '2',
    text: 'Во время учебы мы сталкиваемся с работой и проигрываем.',
    urlImg: `${monster}`,
    altText: 'Монстр'
  },
  {
    id: '11',
    text: 'Главный персонаж получает суперсилу если столкнётся с stack overflow.',
    urlImg: `${power}`,
    altText: 'Суперсила у главного персонажа'
  },
  {
    id: '21',
    text: 'Управление левой и правой кнопкой на клавиатуре.',
    urlImg: `${keyboard}`,
    altText: 'Клавиатура'
  }
];

const Presentatin = () => {
  return (
    <PresentatinContainer>
      <PresentatinList>
        {PresentatListData.map((item) => (
          <Item key={item.id}>
            <Text>{item.text}</Text>
            <Img alt={item.altText} src={item.urlImg} />
          </Item>
        ))}
      </PresentatinList>
    </PresentatinContainer>
  );
};

export default Presentatin;
