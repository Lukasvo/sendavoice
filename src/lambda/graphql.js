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

      ];
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

exports.handler = server.createHandler();
