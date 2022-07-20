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
