import { gql } from "@apollo/client";
import apolloClient from "./apollo";

export const AllEventsQuery = gql`
  query FightCards {
    fightCards: allFightCards {
      id
      org
      title
      fights {
        blue
        red
      }
    }
  }
`;

export async function getAllEvents() {
  // Research better way besides interfaces to define this ?? probably an inline way
  // Figure out what to do about all the anys because we are entirely cirumventing typescript
  return apolloClient.query({
    query: AllEventsQuery,
  });
}

const EventQuery = gql`
  query FindFightCard($findFightCardId: String!) {
    fightcard: findFightCard(id: $findFightCardId) {
      title
      fights {
        red {
          name
          physical {
            height
            weight
            age
            reach
          }
          record {
            outcome
            opponent
            method
            round
            time
          }
        }
        blue {
          name
          physical {
            height
            weight
            age
            reach
          }
          record {
            outcome
            opponent
            method
            time
            round
          }
        }
      }
    }
  }
`;
export async function getEventDetails(id: string) {
  return apolloClient.query({
    query: EventQuery,
    variables: {
      findFightCardId: id,
    },
  });
}
