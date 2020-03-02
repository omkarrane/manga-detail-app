import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getMangasQuery = gql`
  {
    books{
      name
      id
    }
  }
`

class MangaList extends Component {
  render() {
    console.log(this.props);
    return (
      <div id="main">
        <ul id="manga-list">
          <li>Manga List</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getMangasQuery)(MangaList);