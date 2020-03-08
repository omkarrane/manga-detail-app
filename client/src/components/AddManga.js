import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash'
import { getAuthorsQuery, addMangaMutation, getMangasQuery } from '../queries/queries';

class AddManga extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      authorId: ''
    };
  }

  displayAuthors() {
    let data = this.props.getAuthorsQuery;
    if(data.loading)
      return (<option>Loading Authors...</option>);
    
    return data.authors.map(eachAuthor => {
      return (
        <option key={eachAuthor.id} value={eachAuthor.id}>{eachAuthor.name}</option>
      );
    });
  }

  submitForm(event) {
    event.preventDefault();
    this.props.addMangaMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{ query: getMangasQuery }]
    });
  }

  render() {
    return (
      <form id="add-manga" onSubmit={this.submitForm.bind(this)}>

        <div className="field">
          <label>Manga Name</label>
          <input type="text" onChange={(e) => this.setState({name: e.target.value})} />
        </div>

        <div className="field">
          <label>Genre</label>
          <input type="text" onChange={(e) => this.setState({genre: e.target.value})} />
        </div>

        <div className="field">
          <label>Author</label>
          <select onChange={(e) => this.setState({authorId: e.target.value})}>
            <option>Select Author</option>
            {this.displayAuthors()}
          </select>
        </div>

        <button>+</button>
        
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addMangaMutation, { name: "addMangaMutation" })
)(AddManga);