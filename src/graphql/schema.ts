import { makeExecutableSchema } from 'graphql-tools'

const users: any[] = [
    {
        id: 1,
        name: 'Andre',
        email: 'andre.cabral@redepontocerto.com.br'
    },
    {
        id: 2,
        name: 'Leandro',
        email: 'leandro.cabral@redepontocerto.com.br'
    }
];

const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        allUsers: [User!]
    }

`;

const resolvers = {
    Query: {
        allUsers: () => []
    }
};

export default makeExecutableSchema({typeDefs, resolvers});