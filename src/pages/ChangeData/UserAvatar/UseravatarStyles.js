import styled from '@emotion/styled';

export const UserAvatarWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 2px;
  object-fit: cover;
`;

export const UserAvatarImg = styled.img`
  position: relative;
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    position: absolute;
    content: '';
    background: url('../../images/avatarpen.svg') no-repeat 50%;
    background-color: var(--bg-opacity);
    background-size: 26px 26px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    transition: opacity 0.2s ease;
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }

  &:hover::after {
    opacity: var(--main-opacity);
  }
`;
