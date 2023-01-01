import React from 'react';
import styled from 'styled-components';

import SearchBox from './components/SearchBox';
import ItemList from './components/ItemList';

const AppContainer = styled.main`
  background-color: #282c34;
  align-items: center;
  flex-direction: column;
  display: flex;
  width: 100%;
  height: 100vh;
`
const App = () => {
  return (
    <AppContainer>
      <SearchBox />
      <ItemList />
    </AppContainer>
  );
}

export default App;
