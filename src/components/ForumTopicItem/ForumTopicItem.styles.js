import styled from '@emotion/styled';

export const TopicItem = styled.article`
  padding: 20px 20px 20px 30px;
  display: flex;
  flex-direction: row;
  background: transparent;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  &:hover {
    background: var(--secondary-bg-color);
    cursor: pointer;
  }
`;

export const Message = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: var(--secondary-font-color);
  margin: 0px;
  margin-right: 5px;
`;
export const DateAndСreatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-left: auto;
`;
export const DateStyle = styled.time`
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: var(--secondary-font-color);
  margin: 0px;
`;

export const Сreator = styled.p`
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  color: var(--secondary-font-color);
  margin: 0px;
`;
