import styled from '@emotion/styled';

export const PresentatinContainer = styled.section`
  width: 100%;
  padding-top: 49px;
  padding-bottom: 20px;
`;

export const PresentatinList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: 570px;
`;

export const Text = styled.figcaption`
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: var(--secondary-font-color);
  width: 100%;
`;

export const Img = styled.img`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.figure`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0px;
`;
