import React from 'react';
import { PresentationListData } from './Presentation.constants';
import {
  PresentationContainer,
  PresentationList,
  Img,
  Text,
  Item
} from './Presentation.styles.js';

const Presentation = () => {
  return (
    <PresentationContainer>
      <PresentationList>
        {PresentationListData.map((item) => (
          <Item key={item.id}>
            <Text>{item.text}</Text>
            <Img alt={item.altText} src={item.urlImg} />
          </Item>
        ))}
      </PresentationList>
    </PresentationContainer>
  );
};

export default Presentation;
