const { ApolloServer, gql } = require("apollo-server");
const { Fighter, Event } = require("./models/schemas");
// Thinking about this I think we should differ between when we want an event with all the
// fighter information vs when we want an event with just the fighter names as we have stored
const typeDefs = gql`
  type FightCard {
    org: String!
    title: String!
    fights: [Fight]
  }

  type Fight {
    red: String
    blue: String
  }

  type DetailedFightCard {
    title: String!
    fights: [DetailedFight]
  }

  type DetailedFight {
    red: Fighter
    blue: Fighter
  }

  type Fighter {
    name: String!
    record: [PastFight]
  }

  type PastFight {
    outcome: String!
    opponent: String!
    method: String!
    round: Int!
    time: String!
  }

  type Query {
    allFighters: [Fighter!]!
    findFighter(Name: String): Fighter
    allFightCards: [FightCard!]!
    findFightCardDetails(Title: String): DetailedFightCard
  }
`;

const resolvers = {
  Query: {
    allFighters: async () => Fighter.find({}),
    findFighter: async (args) => Fighter.findOne({ name: args.name }),
    allFightCards: async () => Event.find({}),
    findFightCardDetails: async (args) => Event.findOne({ title: args.title }),
  },

  DetailedFight: {
    red: async (root) => Fighter.findOne({ name: root.red }),
    blue: async (root) => Fighter.findOne({ name: root.blue }),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`server ready at: ${url}`);
});
