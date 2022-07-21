import { gql } from "@apollo/client";

export const ALL_CARTS = gql`
  query {
    stores {
      id
      name
      price
      imgUrl {
        url
      }
    }
  }
`;

export const CREATE_AUTHOR = gql`
mutation($email: String!, $password: String!) {
  createAuthor(data: {email: $email, password: $password}) {
    email,
    password,
    id
  }
}
` 
export const PUBLISH_AUTHOR = gql`
mutation($id: ID!) {
  publishAuthor(where: {id: $id}) {
    id
  }
}
` 

export const LOGIN_AUTHOR = gql`
query($email: String!, $password: String!) {
  authors(where: {email: $email, password: $password}) {
    email,
    password
  }
}
`
