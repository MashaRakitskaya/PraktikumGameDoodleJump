import styled from '@emotion/styled';
import like from '../../images/like.svg';
import dislike from '../../images/dislike.svg';
import dislikePressed from '../../images/dislikePressed.svg';
import likePressed from '../../images/likePressed.svg';

interface LiProps {
  isThemeСreator: boolean;
}

interface LikeProps {
  isLiked?: boolean;
}

interface DislikeProps {
  isDisliked?: boolean;
}
export const MessageContainer = styled.div<LiProps>`
  width: 100%;
  background-color: ${(props) =>
    props.isThemeСreator ? 'var(--main-bg-color)' : 'var(--third-bg-color)'};
  text-align: ${(props) => (props.isThemeСreator ? 'right' : 'left')};
  border-radius: 5px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 20%);
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: var(--secondary-font-color);
  margin-bottom: 20px;
  align-self: ${(props) => (props.isThemeСreator ? 'flex-end' : 'flex-start')};
`;

export const TextDateСreatorContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: var(--secondary-font-color);
  margin: 0px;
  margin: 10px;
`;

export const DateСreatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  align-self: flex-start;
  margin: 10px;
  margin-left: auto;
`;

export const Date = styled.time`
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
  margin-top: 5px;
`;

export const EmotionsOfComment = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Like = styled.button<LikeProps>`
  background: ${({ isLiked }) =>
    isLiked ? `url(${likePressed}) no-repeat` : `url(${like}) no-repeat`};
  cursor: pointer;
  border: none;
  width: 25px;
  height: 25px;
  margin: 0;
  padding: 0;
  margin: 5px;

  &:hover {
    opacity: var(--main-opacity);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Count = styled.p`
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: var(--secondary-font-color);
  margin: 0px;
  text-align: start;
`;

export const Dislike = styled.button<DislikeProps>`
  background: ${({ isDisliked }) =>
    isDisliked
      ? `url(${dislikePressed}) no-repeat`
      : `url(${dislike}) no-repeat`};
  cursor: pointer;
  border: none;
  width: 25px;
  height: 25px;
  margin: 0;
  padding: 0;
  margin: 5px;

  &:hover {
    opacity: var(--main-opacity);
  }
`;
