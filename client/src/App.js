import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import MangaList from './components/MangaList';
import AddManga from './components/AddManga';

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
        <AddManga />
      </div>
    </ApolloProvider>
  );
}

export default App;
