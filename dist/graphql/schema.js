"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const users = [
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
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers });
