const { ApolloServer, gql } = require("apollo-server");
const { Fighter, Event } = require("./models/schemas");

// Thinking about this I think we should differ between when we want an event with all the
// fighter information vs when we want an event with just the fighter names as we have stored
const typeDefs = gql`
  type FightEvent {
    id: ID!
    org: String!
    title: String!
    fights: [FightPreview]
  }

  type FightPreview {
    red: String!
    blue: String!
  }

  type Fighter {
    name: String!
    physical: Physical!
    record: [PastFight]
  }

  type Physical {
    height: Float
    weight: Int
    reach: Int
    age: Int
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
    findFighter(name: String): Fighter
    allEvents: [FightEvent!]!
    findEvent(id: ID): FightEvent
    findFight(first_fighter: String, second_fighter: String): [Fighter]
  }
`;

const resolvers = {
  Query: {
    allFighters: async () => Fighter.find({}),
    findFighter: async (_, args) => Fighter.findOne({ name: args.name }),
    allEvents: async () => Event.find({}),
    findEvent: async (_, args) => Event.findOne({ id: args.id }),
    findFight: async (_, args) => {
      fighter_one = Fighter.findOne({ name: args.first_fighter });
      fighter_two = Fighter.findOne({ name: args.second_fighter });
      return [fighter_one, fighter_two];
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`server ready at: ${url}`);
});
