import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getMangaQuery } from '../queries/queries';

class MangaDetails extends Component {
  render() {
    return (
      <div id="manga-details">
        <p>Output manga details here</p>
      </div>
    );
  }
}

export default graphql(getMangaQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.mangaId
      }
    };
  }
})(MangaDetails);