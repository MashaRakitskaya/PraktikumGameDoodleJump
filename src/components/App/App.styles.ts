import styled from '@emotion/styled';

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
  isDarkTheme: boolean;
}

export const ThemeStyles = styled.div<ThemeStylesProps>`
  --main-font-family: 'Play', sans-serif;
  --main-bg-color: ${({ isDarkTheme }) => {
    console.log('isDarkTheme', isDarkTheme);

    return isDarkTheme ? '#795548' : '#fceed1';
  }};
  --secondary-bg-color: ${({ isDarkTheme }) =>
    isDarkTheme ? '#03a9f4' : '#f2d53c'};
  --third-bg-color: #ffffff;
  --secondary-button-color: ${({ isDarkTheme }) =>
    isDarkTheme ? '#ff5722' : '#e42a9a'};
  --main-button-color: ${({ isDarkTheme }) =>
    isDarkTheme ? '#03a9f4' : '#7d3cff'};
  --primary-font-color: ${({ isDarkTheme }) =>
    isDarkTheme ? '#ffffff' : '#696969'};
  --error-color: ${({ isDarkTheme }) => (isDarkTheme ? '#ff0000' : '#ff0000')};
  --main-font-color: ${({ isDarkTheme }) =>
    isDarkTheme ? '#ffffff' : '#24006b'};
  --third-font-color: #ffffff;
  --fourth-font-color: ${({ isDarkTheme }) =>
    isDarkTheme ? '#ff0000' : ' #c80e13'};
  --placeholder-font-color: ${({ isDarkTheme }) =>
    isDarkTheme ? '#b6b6b6' : '#6d6d6d'};
  --secondary-font-color: #000000;
  --label-font-color: ${({ isDarkTheme }) =>
    isDarkTheme ? '#212121' : '#696969'};
  --input-font-color: ${({ isDarkTheme }) =>
    isDarkTheme ? '#ffffff' : '#696969'};
  --border: ${({ isDarkTheme }) =>
    isDarkTheme ? ' 1px solid #212121' : '1px solid #000'};
  --border-focus: ${({ isDarkTheme }) =>
    isDarkTheme ? '2px solid #212121' : '2px solid #000'};
  --main-opacity: 0.8;
  --bg-opacity: rgb(0 0 0 / 50%);
`;

// export const DarkStyles = styled.div`
//   --main-font-family: 'Play', sans-serif;
//   --main-bg-color: #795548;
//   --secondary-bg-color: #03a9f4;
//   --third-bg-color: #ffffff;
//   --secondary-button-color: #ff5722;
//   --main-button-color: #03a9f4;
//   --primary-font-color: #ffffff;
//   --error-color: #ff0000;
//   --main-font-color: #24006b;
//   --third-font-color: #ffffff;
//   --fourth-font-color: #ff0000;
//   --placeholder-font-color: #b6b6b6;
//   --secondary-font-color: #000000;
//   --label-font-color: #212121;
//   --input-font-color: #ffffff;
//   --border: 1px solid #212121;
//   --border-focus: 2px solid #212121;
//   --main-opacity: 0.8;
//   --bg-opacity: rgb(0 0 0 / 50%);
// `;

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
