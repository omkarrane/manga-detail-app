import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getMangasQuery } from '../queries/queries';
import MangaDetails from './MangaDetails';

class MangaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  displayMangas() {
    let data = this.props.data;
    if(data.loading) {
      return( <div>Loading Mangas...</div> );
    } else {
      return data.mangas.map(eachManga => {
        return (
          <li key={eachManga.id} onClick={(e) => this.setState({ selected: eachManga.id })}>{eachManga.name}</li>
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
        <MangaDetails mangaId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getMangasQuery)(MangaList);