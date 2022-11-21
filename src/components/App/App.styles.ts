import styled from '@emotion/styled';

export const ThemeWrapper = styled.div`
  position: 'relative';
`;

export const SwitchThemeButton = styled.button`
  padding: 0;
  position: absolute;
  top: 4;
  left: 32;
  cursor: pointer;
  background: transparent;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  border: 0;
  &:hover {
    opacity: 0.8;
  }
`;

interface ThemeStylesProps {
  SeverOrClientTheme: boolean;
}

export const ThemeStyles = styled.div<ThemeStylesProps>`
  --main-font-family: 'Play', sans-serif;
  --main-bg-color: ${({ SeverOrClientTheme }) => {
    return SeverOrClientTheme ? '#795548' : '#fceed1';
  }};
  --secondary-bg-color: ${({ SeverOrClientTheme }) =>
    SeverOrClientTheme ? '#03a9f4' : '#f2d53c'};
  --third-bg-color: #ffffff;
  --secondary-button-color: ${({ SeverOrClientTheme }) =>
    SeverOrClientTheme ? '#ff5722' : '#e42a9a'};
  --main-button-color: ${({ SeverOrClientTheme }) =>
    SeverOrClientTheme ? '#03a9f4' : '#7d3cff'};
  --primary-font-color: ${({ SeverOrClientTheme }) =>
    SeverOrClientTheme ? '#ffffff' : '#696969'};
  --error-color: ${({ SeverOrClientTheme }) =>
    SeverOrClientTheme ? '#ff0000' : '#ff0000'};
  --main-font-color: ${({ SeverOrClientTheme }) =>
    SeverOrClientTheme ? '#ffffff' : '#24006b'};
  --third-font-color: #ffffff;
  --fourth-font-color: ${({ SeverOrClientTheme }) =>
    SeverOrClientTheme ? '#ff0000' : ' #c80e13'};
  --placeholder-font-color: ${({ SeverOrClientTheme }) =>
    SeverOrClientTheme ? '#b6b6b6' : '#6d6d6d'};
  --secondary-font-color: #000000;
  --label-font-color: ${({ SeverOrClientTheme }) =>
    SeverOrClientTheme ? '#212121' : '#696969'};
  --input-font-color: ${({ SeverOrClientTheme }) =>
    SeverOrClientTheme ? '#ffffff' : '#696969'};
  --border: ${({ SeverOrClientTheme }) =>
    SeverOrClientTheme ? ' 1px solid #212121' : '1px solid #000'};
  --border-focus: ${({ SeverOrClientTheme }) =>
    SeverOrClientTheme ? '2px solid #212121' : '2px solid #000'};
  --main-opacity: 0.8;
  --bg-opacity: rgb(0 0 0 / 50%);
`;

export const AppWrapper = styled.div`
  height: 100vh;
  overflow: auto;
  background-color: var(--main-bg-color);
  font-family: var(--main-font-family);
`;
export const AppWrapperContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 320px;
  min-height: 100vh;
  margin: 0 auto;
`;
