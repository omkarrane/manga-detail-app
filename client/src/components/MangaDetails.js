import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getMangaQuery } from '../queries/queries';

class MangaDetails extends Component {
  displayMangaDetails() {
    const { manga } = this.props.data;
    if(manga) {
      return (
        <div>
          <h2>{manga.name}</h2>
          <p>{manga.genre}</p>
          <p>{manga.author.name}</p>
          <p>All Mangas by {manga.author.name}</p>
          <ul className="other-mangas">
            {manga.author.mangas.map(eachManga => {
              return (
                <li key={eachManga.id}>{eachManga.name}</li>
              );
            })}
          </ul>
        </div>
      );
    }

    return (
      <div>
        No Manga Selected...
      </div>
    );
  }

  render() {
    return (
      <div id="manga-details">
        {this.displayMangaDetails()}
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