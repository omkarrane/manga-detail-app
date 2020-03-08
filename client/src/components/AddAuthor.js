import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash'
import { getAuthorsQuery, addAuthorMutation } from '../queries/queries';

class AddAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: ''
    };
  }

  submitForm(event) {
    event.preventDefault();
    console.log(this.props);
    // this.props.addAuthorMutation({
    //   variables: {
    //     name: this.state.name,
    //     age: this.state.age
    //   },
    //   refetchQueries: [{ query: getAuthorsQuery }]
    // });
  }

  render() {
    return (
      <form id="add-author" onSubmit={this.submitForm.bind(this)}>

        <div className="field">
          <label>Author Name</label>
          <input type="text" onChange={(e) => this.setState({name: e.target.value})} />
        </div>

        <div className="field">
          <label>Age</label>
          <input type="text" onChange={(e) => this.setState({age: e.target.value})} />
        </div>

        <button>+</button>
        
      </form>
    );
  }
}

export default graphql(addAuthorMutation)(AddAuthor);