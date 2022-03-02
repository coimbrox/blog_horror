import { request, gql } from "graphql-request";


const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHICMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
  query MyQuery {   
  postagemsConnection {
    edges {
      node {
        autor {
          bio
          id
          nome
          foto {
            url
          }
        }
        createdAt
        links
        titulo
        excerpt
        imagem {
          url
        }
        categorias {
          nome
          links
        }
       }
      }
    }

  }

  `
  const result = await request(graphqlAPI, query);

  return result.postagemsConnection.edges;

}