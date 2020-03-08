import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`

const getMangasQuery = gql`
  {
    mangas {
      name
      id
    }
  }
`

const addMangaMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addManga(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`

const addAuthorMutation = gql`
  mutation($name: String!, $age: Int!) {
    addAuthor(name: $name, age: $age) {
      name
      id
    }
  }
`

const getMangaQuery = gql`
  query($id: ID!) {
    manga(id: $id) {
      id
      name
      genre
      author {
        id
        name
        mangas {
          id
          name
        }
      }
    }
  }
`

export { getAuthorsQuery, getMangasQuery, addMangaMutation, addAuthorMutation, getMangaQuery };