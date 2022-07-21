const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Character {
  _id: ID!
  name: String!
  stats: Int
  personalities: String
  equipments: String
  experience: Int
  race: String!
  alignment: String!
  background: String!
  createdAt: String!
  user: User
  }
  type User {
  _id: ID!
  username: String!
  password: String!
  email: String!
  token: String!
  createdAt: String!
  characters:[Character]
}

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    user: [Character]
  }
`;
const Character = [
  {
    name: "tyler",
    stats: 45,
    personalities: "strong",
    equipments: "axe",
    experience: 300,
    race: "String!",
    alignment: "String!",
    background: "String!",
    createdAt: "String!"
  },
  {
    name: "tyler2",
    stats: 78,
    personalities: "bold",
    equipments: "sword",
    experience: 300,
    race: "String!",
    alignment: "String!",
    background: "String!",
    createdAt: "String!"
  },
];
const resolvers = {
  Query: {
    user: () => Character,
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});