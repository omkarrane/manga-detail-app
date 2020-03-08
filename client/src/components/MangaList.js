import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getMangasQuery = gql`
  {
    mangas{
      name
      id
    }
  }
`

class MangaList extends Component {
  displayMangas() {
    let data = this.props.data;
    if(data.loading) {
      return( <div>Loading Mangas...</div> );
    } else {
      return data.mangas.map(eachManga => {
        return (
          <li key={eachManga.id}>{eachManga.name}</li>
        );
      })
    }
  }

  render() {
    return (
      <div id="main">
        <ul id="manga-list">
          {this.displayMangas()}
        </ul>
      </div>
    );
  }
}

export default graphql(getMangasQuery)(MangaList);