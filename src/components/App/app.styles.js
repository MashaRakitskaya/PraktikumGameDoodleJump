import styled from '@emotion/styled';

export const CommonStyles = styled.div`
  --main-font-family: 'Play', sans-serif;
  --main-bg-color: #fceed1;
  --secondary-bg-color: #f2d53c;
  --third-bg-color: #ffffff;
  --secondary-button-color: #e42a9a;
  --main-button-color: #7d3cff;
  --primary-font-color: #696969;
  --error-color: #ff0000;
  --main-font-color: #24006b;
  --third-font-color: #ffffff;
  --fourth-font-color: #c80e13;
  --placeholder-font-color: #6d6d6d;
  --secondary-font-color: #000000;
  --label-font-color: #696969;
  --input-font-color: #696969;
  --border: 1px solid #000;
  --border-focus: 2px solid #000;
  --main-opacity: 0.8;
  --bg-opacity: rgb(0 0 0 / 50%);
  --border: 1px solid #000;
  --border-focus: 2px solid #000;
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
