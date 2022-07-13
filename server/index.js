const { ApolloServer, gql } = require("apollo-server");
const { Fighter, Event } = require("./models/schemas");
const typeDefs = gql`
  type Fight {
    Outcome: String!
    Opponent: String!
    Method: String!
    Round: Int!
    Time: String!
  }

  type Fighter {
    Name: String!
    Record: [Fight]
  }

  type EventFight {
    Red: Fighter!
    Blue: Fighter!
  }

  type Event {
    Title: String!
    Fights: [EventFight]!
  }

  type Query {
    allFighters: [Fighter!]!
    findFighter(Name: String): Fighter
    allEvents: [Event!]!
    findEvent(Title: String): Event
  }
`;

const resolvers = {
  Query: {
    allFighters: async () => Fighter.find({}),
    findFighter: async (root, args) => Fighter.findOne({ Name: args.Name }),
    allEvents: async () => Event.find({}),
    findEvent: async (root, args) => Event.findOne({ Title: args.Title }),
  },

  EventFight: {
    Red: async (root) => Fighter.findOne({ Name: root.Red }),
    Blue: async (root) => Fighter.findOne({ Name: root.Blue }),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`server ready @ ${url}`);
});
