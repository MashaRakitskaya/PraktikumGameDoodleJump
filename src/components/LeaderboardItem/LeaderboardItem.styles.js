import styled from '@emotion/styled';

export const ListItem = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  background: var(--secondary-bg-color);
  border: var(--border);
  border-radius: 2px;
`;

export const Place = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 10px;
  color: var(--secondary-font-color);
  min-width: 55px;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 48px;
  border: 0;
  border-radius: 2px;
  border-color: transparent;
  object-fit: cover;
`;

export const Name = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: var(--secondary-font-color);
  margin-left: 60px;
`;

export const Points = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 10px;
  color: var(--secondary-font-color);
  min-width: 60px;
  margin-left: auto;
  margin-right: 26px;
`;
