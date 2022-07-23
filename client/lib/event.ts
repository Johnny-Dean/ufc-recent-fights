import { gql } from "@apollo/client";
import apolloClient from "./apollo";

export const AllEventsQuery = gql`
  query FightCards {
    allFightCards {
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

const AllEventsIdQuery = gql`
  query AllFightCards {
    allFightCards {
      id
    }
  }
`;

export async function getAllEventIds() {
  // Research better way besides interfaces to define this ?? probably an inline way
  // Figure out what to do about all the anys because we are entirely cirumventing typescript
  return apolloClient.query({
    query: AllEventsIdQuery,
  });
}

const EventQuery = gql`
  query FindFightCard($findFightCardId: String!) {
    findFightCard(id: $findFightCardId) {
      title
      fights {
        red {
          name
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
