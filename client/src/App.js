import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import MangaList from './components/MangaList';

// ApolloClient setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Omkar's Manga List</h1>
        <MangaList />
      </div>
    </ApolloProvider>
  );
}

export default App;
