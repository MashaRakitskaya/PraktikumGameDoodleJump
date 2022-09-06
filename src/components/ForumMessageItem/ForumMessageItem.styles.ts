import styled from '@emotion/styled';

interface LiProps {
  isOtherPeopleMessages?: boolean;
}

export const Message = styled.li<LiProps>`
  width: fit-content;
  background-color: ${(props: any) =>
    props.isOtherPeopleMessages
      ? 'var(--third-bg-color)'
      : 'var(--main-bg-color)'};
  text-align: ${(props: any) =>
    props.isOtherPeopleMessages ? 'left' : 'right'};
  border-radius: 5px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 20%);
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: var(--secondary-font-color);
  padding: ${(props: any) =>
    props.isOtherPeopleMessages
      ? '10px 25px 10px 10px'
      : '10px 10px 10px 25px'};
  margin-bottom: 20px;
  align-self: ${(props: any) =>
    props.isOtherPeopleMessages ? 'flex-start' : 'flex-end'}; ;
`;
