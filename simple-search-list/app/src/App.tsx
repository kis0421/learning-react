import React from 'react';
import styled from 'styled-components';
import SearchBox from './components/SearchBox';

const AppContainer = styled.main`
  background-color: #282c34;
  justify-content: center;
  display: flex;
  width: 100%;
  height: 100vh;
`
const App = () => {
  return (
    <AppContainer>
      <SearchBox />
    </AppContainer>
  );
}

export default App;
