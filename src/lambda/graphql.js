// src/lambda/graphql.js
const { ApolloServer, gql } = require("apollo-server-lambda");

const typeDefs = gql`
    type Charity {
        #_id: ID!
        _id: String
        title: String
        description: String
        url: String
    }
    
    type Query {
        charities: [Charity]!
    }
`;

const resolvers = {
  Query: {
    charities: (parent, args, context) => {
      return [
        {
          _id: 'abc',
          title: 'Groceries for everyone',
          description: 'Supports elderly people by sending someone to make their groceries at their place.',
          url: 'https://www.gfe.be',
        },
        {
          _id: 'def',
          title: 'Lorem ipsum',
          description: 'Supports elderly people by sending someone to make their groceries at their place.',
          url: 'https://www.gfe.be',
        }
      ];
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

exports.handler = server.createHandler();
