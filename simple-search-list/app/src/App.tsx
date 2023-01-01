import { useState } from 'react';
import styled from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

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
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const App = () => {
  const [value, setValue] = useState('');

  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <SearchBox onChange={setValue} />
        <ItemList keyword={value} />
      </AppContainer>
    </QueryClientProvider>
  );
}

export default App;
