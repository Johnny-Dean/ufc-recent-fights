const { ApolloServer, gql } = require("apollo-server");
const { Fighter, Event } = require("./models/schemas");
const typeDefs = gql`
  type Fight {
    outcome: String!
    opponent: String!
    method: String!
    round: Int!
    time: String!
  }

  type Fighter {
    name: String!
    record: [Fight]
  }
  # Throwing a non-null error, beleive if a fighter is on the events but not in ufcstats.com it becomes an error, during our event scrapping check if fighter exists if it doesn't insert a blank template
  type EventFight {
    red: Fighter
    blue: Fighter
  }

  type Event {
    org: String
    title: String!
    fights: [EventFight]!
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
    findFighter: async (args) => Fighter.findOne({ name: args.name }),
    allEvents: async () => Event.find({}),
    findEvent: async (args) => Event.findOne({ title: args.title }),
  },

  EventFight: {
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
