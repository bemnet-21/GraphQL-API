import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
    query getProject {
        projects {
            name
            status
            description
            id
            client {
                name
                id
                phone
                email
            }

        }
    }
`
export const GET_PROJECT_BY_ID = gql`
    query GetProjectById($id: ID!) {
        project(id: $id) {
            name
            status
            description
            id
            client {
                name
                id
                phone
                email
            }
        }
    }
`

export const GET_CLIENTS = gql`
    query getClient {
        clients {
            id
            name
            phone
            email
        }
    }
`