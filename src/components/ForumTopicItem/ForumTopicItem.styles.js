import styled from '@emotion/styled';

export const TopicItem = styled.article`
  height: 50px;
  display: flex;
  flex-direction: row;
  background: transparent;
  align-items: center;
  &:hover {
    background: var(--secondary-bg-color);
    cursor: pointer;
  }
`;

export const TopicImg = styled.img`
  width: 48px;
  height: 50px;
  border: 0;
  border-radius: 2px;
  border-color: transparent;
  object-fit: cover;
`;

export const TitleMessageContainer = styled.div`
  margin-left: 14px;
  margin-right: 15px;
  width: 226px;
  height: 34px;
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  color: var(--secondary-font-color);
  margin: 0px;
  margin-bottom: 3px;
`;

export const Message = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: var(--secondary-font-color);
  margin: 0px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const TimeNumberMessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: 20px;
`;

export const Time = styled.time`
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: var(--secondary-font-color);
  margin: 0px;
`;

export const NumberMessages = styled.p`
  font-weight: 400;
  font-size: 8px;
  line-height: 8px;
  color: var(--secondary-font-color);
  margin: 0px;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: var(--main-bg-color);
`;
